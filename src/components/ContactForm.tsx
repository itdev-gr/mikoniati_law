"use client";

import { useState } from "react";
import { backend } from "@/data/backend";
import type { PracticeArea } from "@/lib/content";

const inputClasses =
  "w-full border border-hairline bg-white px-4 py-3 text-sm text-ink placeholder:text-charcoal/50 focus:border-bronze focus:outline-none transition-colors";

const labelClasses =
  "font-display text-ink mb-2 block text-[11px] font-bold tracking-[0.16em] uppercase";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Στέλνει στο `contact-notify` edge function του ITDEV Dashboard: το μήνυμα
 * αποθηκεύεται στο collection «Μηνύματα» του πελάτη ΚΑΙ προωθείται με email.
 * Το rate limiting (20/ώρα ανά project) γίνεται server-side.
 */
export default function ContactForm({ areas }: { areas: PracticeArea[] }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot: τα bots συμπληρώνουν το κρυφό πεδίο, οι άνθρωποι όχι.
    if (String(fd.get("website") || "").trim()) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    setError("");

    const matterSlug = String(fd.get("matter") || "");
    const matter = areas.find((a) => a.slug === matterSlug);

    try {
      const res = await fetch(`${backend.url}/functions/v1/contact-notify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: backend.anonKey,
          Authorization: `Bearer ${backend.anonKey}`,
        },
        body: JSON.stringify({
          projectId: backend.projectId,
          name: String(fd.get("name") || ""),
          email: String(fd.get("email") || ""),
          phone: String(fd.get("phone") || ""),
          subject: matter?.name || "Γενική επικοινωνία",
          message: String(fd.get("message") || ""),
          source: "website",
        }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        return;
      }

      const body = await res.json().catch(() => ({}));
      setError(
        body?.error === "rate_limited"
          ? "Έχουν σταλεί πολλά μηνύματα αυτή την ώρα. Δοκιμάστε ξανά αργότερα ή καλέστε μας."
          : "Το μήνυμα δεν στάλθηκε. Δοκιμάστε ξανά ή επικοινωνήστε μαζί μας τηλεφωνικά.",
      );
      setStatus("error");
    } catch {
      setError(
        "Δεν ήταν δυνατή η σύνδεση. Ελέγξτε τη σύνδεσή σας και δοκιμάστε ξανά.",
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex h-full min-h-80 flex-col items-center justify-center bg-white p-10 text-center shadow-[0_24px_70px_-24px_rgba(27,28,30,0.3)]">
        <div className="bg-bronze h-10 w-px" aria-hidden />
        <h3 className="text-ink mt-5 text-2xl font-bold">
          Το μήνυμα στάλθηκε
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed">
          Σας ευχαριστούμε για την επικοινωνία. Θα σας απαντήσουμε το συντομότερο
          δυνατό, εντός μίας εργάσιμης ημέρας.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="font-display text-bronze hover:text-bronze-light mt-6 text-[12px] font-semibold tracking-[0.16em] uppercase transition-colors"
        >
          Νέο μήνυμα
        </button>
      </div>
    );
  }

  return (
    <form
      className="bg-white p-8 shadow-[0_24px_70px_-24px_rgba(27,28,30,0.3)] sm:p-10"
      onSubmit={onSubmit}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Ονοματεπώνυμο
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Τηλέφωνο
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="email" className={labelClasses}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClasses}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="matter" className={labelClasses}>
          Αντικείμενο
        </label>
        <select id="matter" name="matter" className={inputClasses} defaultValue="">
          <option value="" disabled>
            Επιλέξτε τομέα
          </option>
          {areas.map((area) => (
            <option key={area.slug} value={area.slug}>
              {area.shortName}
            </option>
          ))}
          <option value="other">Άλλο</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClasses}>
          Το μήνυμά σας
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Περιγράψτε συνοπτικά την υπόθεσή σας…"
          className={inputClasses}
        />
      </div>

      {/* Honeypot — κρυφό από χρήστες και αναγνώστες οθόνης */}
      <div aria-hidden className="hidden">
        <label htmlFor="website">Ιστοσελίδα</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <p className="text-charcoal/70 mt-4 text-xs leading-relaxed">
        Η αποστολή του μηνύματος δεν συνιστά σύναψη σχέσης εντολής και δεν
        δημιουργεί δικηγορική υποχρέωση. Παρακαλούμε μην αποστέλλετε εμπιστευτικά
        στοιχεία πριν από τη σχετική συνεννόηση.
      </p>

      {status === "error" && (
        <p
          role="alert"
          className="border-bronze bg-bronze/5 text-ink mt-4 border-l-2 px-4 py-3 text-sm"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="font-display bg-bronze hover:bg-bronze-light mt-6 inline-flex h-12 w-full items-center justify-center px-8 text-[12px] font-semibold tracking-[0.16em] text-white uppercase transition-colors disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Αποστολή…" : "Αποστολή μηνύματος"}
      </button>
    </form>
  );
}
