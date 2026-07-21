import { redirect } from "next/navigation";

// Redirect /cv to the default Arbitration & ADR CV
export default function CVIndexPage() {
  redirect("/cv/arbitration-adr");
}
