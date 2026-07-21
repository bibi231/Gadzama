// ─── Publications data ───────────────────────────────────────────────────────
// Populate once Mr. Ebiloma supplies the full list and PDFs.

export interface Publication {
  title: string;
  publisher: string;
  year: string;
  type: "book" | "paper";
  format?: string; // e.g. "Hardcover", "Journal Article"
  isbn?: string;
  downloadUrl?: string; // Path to PDF in /public/downloads/
  externalUrl?: string;
}

export const publications: Publication[] = [
  // ── Placeholder entries, replace with real data ──
  // Books
  // {
  //   title: "Title of Book",
  //   publisher: "Publisher Name",
  //   year: "2020",
  //   type: "book",
  //   format: "Hardcover",
  //   downloadUrl: "/downloads/publications/book-title.pdf",
  // },
];

export const booksEmpty =
  "Chief Gadzama's published books are being prepared for the archive and will be available here very soon.";
export const papersEmpty =
  "Chief Gadzama's scholarly papers and articles are being prepared for the archive and will be available here very soon.";
