/**
 * Ο κατάλογος επιστημονικών δημοσιεύσεων, όπως τον έδωσε ο πελάτης.
 *
 * Fallback του collection `publications` του dashboard — ο πελάτης μπορεί να
 * προσθέτει νέες εγγραφές από εκεί χωρίς παρέμβαση στον κώδικα.
 *
 * Η σειρά είναι αυτή του καταλόγου του πελάτη (χονδρικά αντίστροφη χρονολογική)
 * και διατηρείται ως έχει· το `year` μπαίνει μόνο όπου προκύπτει με βεβαιότητα
 * από την παραπομπή και χρησιμοποιείται μόνο για εμφάνιση.
 */

export const publicationCategories = [
  "Βιβλία",
  "Συμβολές σε συλλογικά έργα",
  "Άρθρα & Μελέτες",
  "Σχολιασμοί δικαστικών αποφάσεων",
] as const;

export type PublicationCategory = (typeof publicationCategories)[number];

export type Publication = {
  id: string;
  /** Το slug του μέλους της ομάδας στο οποίο ανήκει η δημοσίευση. */
  member: string;
  category: PublicationCategory;
  title: string;
  /** Εκδότης, περιοδικό, τόμος και σελίδα. */
  details: string;
  year?: number;
  url?: string;
};

export const publications: Publication[] = [
  /* ── Βιβλία ─────────────────────────────────────────────────────────── */
  {
    id: "book-covenants",
    member: "kimon-saitakis",
    category: "Βιβλία",
    title:
      "Σύμβαση ομολογιακού δανείου και ρήτρες ανάληψης παρεπόμενων υποχρεώσεων (covenants)",
    details: "Εκδόσεις Νομική Βιβλιοθήκη",
    year: 2021,
  },
  {
    id: "book-chronos-zimias",
    member: "kimon-saitakis",
    category: "Βιβλία",
    title: "Χρόνος υπολογισμού της ζημίας στις αδικοπραξίες",
    details: "Εκδόσεις Αντ. Ν. Σάκκουλα",
    year: 2016,
  },
  {
    id: "book-symfono-symviosis",
    member: "kimon-saitakis",
    category: "Βιβλία",
    title: "Το νέο σύμφωνο συμβίωσης (Μετά τον Ν. 4356/2015)",
    details: "Εκδόσεις Νομική Βιβλιοθήκη",
    year: 2016,
  },

  /* ── Συμβολές σε συλλογικά έργα ─────────────────────────────────────── */
  {
    id: "coll-ermineia-ak",
    member: "kimon-saitakis",
    category: "Συμβολές σε συλλογικά έργα",
    title: "Δίτομη Ερμηνεία Αστικού Κώδικα",
    details: "Επιμέλεια Ν. Λεοντής · Εκδόσεις Νομική Βιβλιοθήκη",
    year: 2020,
  },
  {
    id: "coll-agoges-klironomikou",
    member: "kimon-saitakis",
    category: "Συμβολές σε συλλογικά έργα",
    title: "Αγωγές κληρονομικού δικαίου",
    details: "Επιμέλεια Στ. Κουμάνης · Εκδόσεις Νομική Βιβλιοθήκη, 2η έκδοση",
    year: 2024,
  },
  {
    id: "coll-ypodeigmata-klironomikou",
    member: "kimon-saitakis",
    category: "Συμβολές σε συλλογικά έργα",
    title: "Υποδείγματα Κληρονομικού Δικαίου",
    details: "Επιμέλεια Ι. Καράκωστας · Εκδόσεις Νομική Βιβλιοθήκη",
    year: 2018,
  },
  {
    id: "coll-ak-kat-arthro",
    member: "kimon-saitakis",
    category: "Συμβολές σε συλλογικά έργα",
    title: "Αστικός Κώδικας, Ερμηνεία κατ’ άρθρο",
    details:
      "Επιμέλεια Γ. Μεντής / Β. Παναγιωτόπουλος / Λ. Κιτσαράς / Β. Περάκη / Κ. Παναγόπουλος / Γ. Λέκκας κ.ά. · Εκδόσεις Νομική Βιβλιοθήκη (υπό έκδοση)",
  },

  /* ── Άρθρα & Μελέτες ────────────────────────────────────────────────── */
  {
    id: "art-tokenized-succession",
    member: "kimon-saitakis",
    category: "Άρθρα & Μελέτες",
    title:
      "Tokenized Succession: Inheritance of DLT-Based Digital Assets in the European Legal Order",
    details: "European Review of Private Law (ERPL), Vol. 34, Issue 2/3, σ. 365",
  },
  {
    id: "art-eleftheria-diathesis",
    member: "kimon-saitakis",
    category: "Άρθρα & Μελέτες",
    title:
      "Ελευθερία διάθεσης του αντικειμένου της διαφοράς επί υποθέσεων προσβολής προσωπικότητας",
    details: "ΕφΑΔΠολΔ 2025, 770",
    year: 2025,
  },
  {
    id: "art-metaverse-real-estate",
    member: "kimon-saitakis",
    category: "Άρθρα & Μελέτες",
    title: "Legal challenges stemming from investing in Metaverse real estate",
    details:
      "Banque & Droit, 10/2024, σ. 84 · και στον τόμο «Investing in Digital Assets – The EU Law Approach», σειρά STUDIA JURIS CIVILIS του Ερευνητικού Κέντρου Αστικού Δικαίου, σ. 47 (εισηγήσεις του Ετήσιου Συνεδρίου της European Society for Banking and Financial Law, Αθήνα, Οκτώβριος 2023)",
    year: 2024,
  },
  {
    id: "art-bond-loans",
    member: "kimon-saitakis",
    category: "Άρθρα & Μελέτες",
    title: "The new regime of bond loans in Greece",
    details: "Financial Law Review 2024, 16",
    year: 2024,
  },
  {
    id: "art-prosafxisi-merida",
    member: "kimon-saitakis",
    category: "Άρθρα & Μελέτες",
    title: "Η κατά προσαύξηση κληρονομική μερίδα",
    details: "ΕφΑΔΠολΔ 2023, 870",
    year: 2023,
  },
  {
    id: "art-negative-pledge",
    member: "kimon-saitakis",
    category: "Άρθρα & Μελέτες",
    title: "Ρήτρα μη επιβάρυνσης («negative pledge») σε πιστωτικές συμβάσεις",
    details: "ΔΕΕ 2023, 1279",
    year: 2023,
  },
  {
    id: "art-symviosi-nomimi-moira",
    member: "kimon-saitakis",
    category: "Άρθρα & Μελέτες",
    title: "Σύμφωνο συμβίωσης και νόμιμη μοίρα",
    details: "ΧρΙΔ 2023, 14",
    year: 2023,
  },
  {
    id: "art-financial-covenants",
    member: "kimon-saitakis",
    category: "Άρθρα & Μελέτες",
    title: "Financial Covenants σε πιστωτικές συμβάσεις",
    details: "Συνήγορος 149/2022, 48",
    year: 2022,
  },
  {
    id: "art-ennoia-zimias",
    member: "kimon-saitakis",
    category: "Άρθρα & Μελέτες",
    title:
      "Σκέψεις πάνω στην έννοια της ζημίας – Είναι αναγκαία μια κανονιστική σύλληψη της ζημίας;",
    details: "ΧρΙΔ 2018, 633",
    year: 2018,
  },
  {
    id: "art-ekpoiisi-metoxon",
    member: "kimon-saitakis",
    category: "Άρθρα & Μελέτες",
    title:
      "Αδικοπρακτική ευθύνη επί εκποιήσεως μετοχών άνευ εντολής του επενδυτή",
    details: "ΕφΑΔΠολΔ 2017, 618",
    year: 2017,
  },
  {
    id: "art-tokoforia",
    member: "kimon-saitakis",
    category: "Άρθρα & Μελέτες",
    title: "Η τοκοφορία της αξίωσης αποζημίωσης από αδικοπραξία",
    details: "ΧρΙΔ 2016, 182",
    year: 2016,
  },
  {
    id: "art-klironomikou-synepeies",
    member: "kimon-saitakis",
    category: "Άρθρα & Μελέτες",
    title:
      "Κληρονομικού δικαίου συνέπειες από το νέο σύμφωνο συμβίωσης (ν. 4356/2015)",
    details: "ΕφΑΔΠολΔ 2015, 947",
    year: 2015,
  },
  {
    id: "art-peristoli-apozimiosis",
    member: "kimon-saitakis",
    category: "Άρθρα & Μελέτες",
    title:
      "Περιστολή της αποζημίωσης κατ’ απόκλιση από την αρχή «όλα ή τίποτε» με βάση τη γενική ρήτρα της καλής πίστης",
    details: "ΕφΑΔΠολΔ 2015, 702",
    year: 2015,
  },
  {
    id: "art-ola-i-tipote",
    member: "kimon-saitakis",
    category: "Άρθρα & Μελέτες",
    title:
      "Η αρχή «όλα ή τίποτε» στο δίκαιο της αποζημίωσης. Σκέψεις για τη δυνατότητα περιστολής της αποζημίωσης με βάση τη γενική ρήτρα της καλής πίστης",
    details: "Τιμητικός τόμος για τον Καθηγητή Φίλιππο Δωρή ΙΙ, 2015, σ. 1389",
    year: 2015,
  },
  {
    id: "art-lysi-symfonou",
    member: "kimon-saitakis",
    category: "Άρθρα & Μελέτες",
    title: "Η λύση του συμφώνου συμβίωσης",
    details: "Συνήγορος 113/2015, 38",
    year: 2015,
  },
  {
    id: "art-chronos-ypologismou",
    member: "kimon-saitakis",
    category: "Άρθρα & Μελέτες",
    title: "Χρόνος υπολογισμού της ζημίας στην αδικοπρακτική ευθύνη",
    details: "ΝοΒ 2012, 1691",
    year: 2012,
  },
  {
    id: "art-katastrofi-pragmatos",
    member: "kimon-saitakis",
    category: "Άρθρα & Μελέτες",
    title:
      "Η νομολογιακή αντιμετώπιση της καταστροφής πράγματος, ιδίως αυτοκινήτου",
    details:
      "Επιθεώρηση Συγκοινωνιακού Δικαίου 2012, 354 (Α΄ μέρος) και 418 (Β΄ μέρος)",
    year: 2012,
  },
  {
    id: "art-mi-zitithisa-epikoinonia",
    member: "kimon-saitakis",
    category: "Άρθρα & Μελέτες",
    title:
      "Η νομική αντιμετώπιση της μη-ζητηθείσας επικοινωνίας στα ηλεκτρονικά δίκτυα",
    details: "De Jure 2010, 35",
    year: 2010,
  },
  {
    id: "art-atimos-vios",
    member: "kimon-saitakis",
    category: "Άρθρα & Μελέτες",
    title: "Ο άτιμος ή ανήθικος βίος ως λόγος αποκλήρωσης του κατιόντος",
    details: "ΧρΙΔ 2010, 424",
    year: 2010,
  },

  /* ── Σχολιασμοί δικαστικών αποφάσεων ────────────────────────────────── */
  {
    id: "note-efath-1132-2024",
    member: "kimon-saitakis",
    category: "Σχολιασμοί δικαστικών αποφάσεων",
    title: "Σχόλιο στην ΕφΑθ 1132/2024",
    details: "Αθλητισμός & Δίκαιο, 3/2024 (ψηφιακή έκδοση)",
    year: 2024,
  },
  {
    id: "note-eirrod-72-2022",
    member: "kimon-saitakis",
    category: "Σχολιασμοί δικαστικών αποφάσεων",
    title: "Σχόλιο στην ΕιρΡόδ 72/2022",
    details: "ΕφΑΔ 2023, 1314",
    year: 2023,
  },
  {
    id: "note-mprath-152-2021",
    member: "kimon-saitakis",
    category: "Σχολιασμοί δικαστικών αποφάσεων",
    title: "Σχόλιο στην ΜΠρΑθ 152/2021",
    details: "ΧρΙΔ 2022, 200",
    year: 2022,
  },
  {
    id: "note-pprath-1959-2020",
    member: "kimon-saitakis",
    category: "Σχολιασμοί δικαστικών αποφάσεων",
    title: "Σχόλιο στην ΠΠρΑθ 1959/2020",
    details: "ΧρΙΔ 2020, 675",
    year: 2020,
  },
  {
    id: "note-ap-1432-2019",
    member: "kimon-saitakis",
    category: "Σχολιασμοί δικαστικών αποφάσεων",
    title: "Σχόλιο στην ΑΠ 1432/2019",
    details: "ΧρΙΔ 2020, 343",
    year: 2020,
  },
  {
    id: "note-ap-638-2019",
    member: "kimon-saitakis",
    category: "Σχολιασμοί δικαστικών αποφάσεων",
    title: "Σχόλιο στην ΑΠ 638/2019",
    details: "ΧρΙΔ 2020, 193",
    year: 2020,
  },
  {
    id: "note-efath-5945-2018",
    member: "kimon-saitakis",
    category: "Σχολιασμοί δικαστικών αποφάσεων",
    title: "Σχόλιο στην ΕφΑθ 5945/2018",
    details: "ΧρΙΔ 2019, 107",
    year: 2019,
  },
  {
    id: "note-ap-1207-2017",
    member: "kimon-saitakis",
    category: "Σχολιασμοί δικαστικών αποφάσεων",
    title: "Σχόλιο στην ΑΠ 1207/2017",
    details: "ΧρΙΔ 2018, 353",
    year: 2018,
  },
  {
    id: "note-ap-1430-2017",
    member: "kimon-saitakis",
    category: "Σχολιασμοί δικαστικών αποφάσεων",
    title: "Σχόλιο στην ΑΠ 1430/2017",
    details: "ΧρΙΔ 2018, 268",
    year: 2018,
  },
  {
    id: "note-eirath-5286-2017",
    member: "kimon-saitakis",
    category: "Σχολιασμοί δικαστικών αποφάσεων",
    title: "Σχόλιο στην ΕιρΑθ 5286/2017",
    details: "ΧρΙΔ 2017, 673",
    year: 2017,
  },
  {
    id: "note-ap-149-2017",
    member: "kimon-saitakis",
    category: "Σχολιασμοί δικαστικών αποφάσεων",
    title: "Σχόλιο στην ΑΠ 149/2017",
    details: "ΕφΑΔ 2017, 557",
    year: 2017,
  },
  {
    id: "note-ap-209-2016",
    member: "kimon-saitakis",
    category: "Σχολιασμοί δικαστικών αποφάσεων",
    title: "Σχόλιο στην ΑΠ 209/2016",
    details: "ΧρΙΔ 2016, 345",
    year: 2016,
  },
  {
    id: "note-efath-7-2016",
    member: "kimon-saitakis",
    category: "Σχολιασμοί δικαστικών αποφάσεων",
    title: "Σχόλιο στην ΕφΑθ 7/2016",
    details: "ΧρΙΔ 2016, 750",
    year: 2016,
  },
  {
    id: "note-ap-2047-2014",
    member: "kimon-saitakis",
    category: "Σχολιασμοί δικαστικών αποφάσεων",
    title: "Σχόλιο στην ΑΠ 2047/2014",
    details: "ΧρΙΔ 2015, 351",
    year: 2015,
  },
  {
    id: "note-pprath-1364-2013",
    member: "kimon-saitakis",
    category: "Σχολιασμοί δικαστικών αποφάσεων",
    title: "Σχόλιο στην ΠΠρΑθ 1364/2013",
    details: "ΧρΙΔ 2014, 120",
    year: 2014,
  },
  {
    id: "note-pprkerk-1376-2013",
    member: "kimon-saitakis",
    category: "Σχολιασμοί δικαστικών αποφάσεων",
    title: "Σχόλιο στην ΠΠρΚέρκ 1376/2013",
    details: "ΧρΙΔ 2014, 28",
    year: 2014,
  },
  {
    id: "note-ap-1576-2013",
    member: "kimon-saitakis",
    category: "Σχολιασμοί δικαστικών αποφάσεων",
    title: "Σχόλιο στην ΑΠ 1576/2013",
    details: "ΕφΑΔ 2014, 388",
    year: 2014,
  },
  {
    id: "note-ap-802-2013",
    member: "kimon-saitakis",
    category: "Σχολιασμοί δικαστικών αποφάσεων",
    title: "Σχόλιο στην ΑΠ 802/2013",
    details: "ΝοΒ 2014, 1617",
    year: 2014,
  },
];

/** Οι δημοσιεύσεις ενός μέλους, ομαδοποιημένες κατά κατηγορία, με τη σειρά του καταλόγου. */
export function groupByCategory(
  items: Publication[],
): { category: PublicationCategory; items: Publication[] }[] {
  return publicationCategories
    .map((category) => ({
      category,
      items: items.filter((p) => p.category === category),
    }))
    .filter((group) => group.items.length > 0);
}

export function publicationsFor(
  items: Publication[],
  memberSlug: string,
): Publication[] {
  return items.filter((p) => p.member === memberSlug);
}
