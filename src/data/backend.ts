/**
 * Δημόσια στοιχεία του ITDEV Dashboard backend από το οποίο διαβάζει το site.
 * Το anon key είναι δημόσιο credential περιορισμένο από RLS — ασφαλές στο repo.
 * Διαχείριση περιεχομένου: https://generaldashboard-six.vercel.app
 */
export const backend = {
  url: "https://xnfvktpvainjchwynhph.supabase.co",
  anonKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhuZnZrdHB2YWluamNod3luaHBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0ODIzNTksImV4cCI6MjA5NzA1ODM1OX0.d2f54TFfJ1UKpSUbTO8ExuBp1X8WoruHx2CDZJF7F_E",
  projectId: "fdfdb7b6-85f8-4262-b796-a26ac1611ab4",
} as const;
