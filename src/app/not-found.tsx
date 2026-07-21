import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-bg">
      <div className="text-center px-6">
        <p className="eyebrow mb-4">Page Not Found</p>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-accent mb-4">
          404
        </h1>
        <p className="text-text-muted text-lg mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn-filled">
          Return Home
        </Link>
      </div>
    </section>
  );
}
