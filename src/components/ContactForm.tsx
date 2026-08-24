"use client";

import { useState } from "react";
import { practiceAreas } from "@/lib/content";

const inputClasses =
  "w-full border border-hairline bg-white px-4 py-3 text-sm text-ink placeholder:text-charcoal/50 focus:border-bronze focus:outline-none transition-colors";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border-hairline flex h-full min-h-80 flex-col items-center justify-center border bg-white p-10 text-center">
        <div className="bg-bronze h-10 w-px" aria-hidden />
        <h3 className="font-display text-ink mt-5 text-3xl font-medium">
          Message sent
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed">
          Thank you for reaching out. We will get back to you within one
          business day.
        </p>
        <p className="font-utility text-bronze mt-6 text-[10px] tracking-[0.24em] uppercase">
          Demo only — no message was delivered
        </p>
      </div>
    );
  }

  return (
    <form
      className="border-hairline border bg-white p-8 sm:p-10"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="font-utility text-ink mb-2 block text-[11px] font-bold tracking-[0.2em] uppercase"
          >
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Lorem Ipsum"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="font-utility text-ink mb-2 block text-[11px] font-bold tracking-[0.2em] uppercase"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+30 210 000 0000"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="email"
          className="font-utility text-ink mb-2 block text-[11px] font-bold tracking-[0.2em] uppercase"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={inputClasses}
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="matter"
          className="font-utility text-ink mb-2 block text-[11px] font-bold tracking-[0.2em] uppercase"
        >
          Matter type
        </label>
        <select id="matter" name="matter" className={inputClasses} defaultValue="">
          <option value="" disabled>
            Select a practice area
          </option>
          {practiceAreas.map((area) => (
            <option key={area.slug} value={area.slug}>
              {area.name}
            </option>
          ))}
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="font-utility text-ink mb-2 block text-[11px] font-bold tracking-[0.2em] uppercase"
        >
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Briefly describe your matter…"
          className={inputClasses}
        />
      </div>

      <p className="mt-4 text-xs leading-relaxed text-charcoal/70">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Submitting
        this form does not create an attorney–client relationship.
      </p>

      <button
        type="submit"
        className="font-utility bg-bronze hover:bg-bronze-light mt-6 inline-flex h-12 w-full items-center justify-center px-8 text-[12px] font-semibold tracking-[0.2em] text-white uppercase transition-colors sm:w-auto"
      >
        Send message
      </button>
    </form>
  );
}
