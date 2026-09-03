import Image from "next/image";
import Link from "next/link";
import { firm } from "@/lib/content";

/**
 * Το λογότυπο του γραφείου.
 *
 * Σε ανοιχτό φόντο χρησιμοποιείται το πραγματικό αρχείο. Σε σκούρο φόντο
 * (`light`) αποδίδεται ως τυπογραφικό lockup: το αρχείο που έχουμε είναι JPEG
 * με λευκό φόντο και δεν μπορεί να μπει πάνω σε σκούρο.
 *
 * TODO(πελάτης): μόλις σταλεί vector ή PNG με διαφάνεια, χρησιμοποιείται το
 * ίδιο αρχείο και στις δύο περιπτώσεις.
 */
export default function Logo({
  light = false,
  className = "",
}: {
  light?: boolean;
  className?: string;
}) {
  if (light) {
    return (
      <Link
        href="/"
        aria-label={`${firm.name} — αρχική`}
        className={`font-display inline-flex items-center gap-3 ${className}`}
      >
        <span className="text-[17px] font-bold tracking-[0.08em] whitespace-nowrap">
          <span className="text-white">SAITAKIS</span>{" "}
          <span className="text-bronze-light">MYKONIATI</span>
        </span>
        <span aria-hidden className="h-8 w-px bg-white/40" />
        <span className="flex flex-col justify-center gap-[3px] text-[9px] leading-none font-semibold tracking-[0.18em] whitespace-nowrap">
          <span className="text-white/80">&amp; PARTNERS</span>
          <span className="text-bronze-light">LAW FIRM</span>
        </span>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      aria-label={`${firm.name} — αρχική`}
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/logo.png"
        alt={firm.nameLatin}
        width={520}
        height={88}
        priority
        // Στα 1024–1279px το μενού έχει 6 στοιχεία συν κουμπί και δεν χωράει
        // μεγαλύτερο σήμα· σε κινητό και σε ευρείες οθόνες μεγαλώνει.
        className="h-10 w-auto lg:h-9 xl:h-11"
      />
    </Link>
  );
}
