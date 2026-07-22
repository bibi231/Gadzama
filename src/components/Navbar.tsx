"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/content/site";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 200);
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-nav-bg/95 backdrop-blur-md shadow-lg"
          : "bg-nav-bg"
      }`}
      style={{ height: scrolled ? 72 : 80 }}
    >
      <div className="section-container h-full flex items-center justify-between">
        {/* Logo / Wordmark: ruled serif mark (matches the firm identity) */}
        <Link href="/" className="flex items-center gap-3 group" id="logo-link">
          <span className="block w-[3px] h-9 bg-accent transition-all duration-300 group-hover:h-10" />
          <span
            className="leading-none text-nav-text"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-[24px] font-bold tracking-tight">J-K</span>
            <span className="text-[24px] font-normal tracking-[0.16em] ml-2 transition-colors duration-300 group-hover:text-accent">
              GADZAMA
            </span>
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={item.href}
                  id={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`nav-link px-4 py-2 text-[15px] transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-accent active"
                      : "text-nav-text hover:text-accent"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.label}
                  <svg className="inline-block ml-1 w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {/* Dropdown */}
                <div
                  className={`absolute top-full left-0 mt-1 bg-surface2 border border-hairline rounded shadow-xl min-w-[220px] transition-all duration-200 ${
                    openDropdown === item.label
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      id={`nav-${child.label.toLowerCase().replace(/[\s&]+/g, '-')}`}
                      className={`block px-5 py-3 text-sm transition-colors duration-150 ${
                        isActive(child.href)
                          ? "text-accent bg-accent-glow"
                          : "text-text hover:text-accent hover:bg-accent-glow"
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : item.isButton ? (
              <Link
                key={item.label}
                href={item.href}
                id={`nav-${item.label.toLowerCase()}`}
                className="ml-5 px-6 py-2 border border-accent text-accent text-[15px] hover:bg-accent hover:text-navy transition-all duration-300"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                id={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`nav-link px-4 py-2 text-[15px] transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-accent active"
                    : "text-nav-text hover:text-accent"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          className="lg:hidden text-nav-text p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-nav-bg border-t border-hairline ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="section-container py-4 flex flex-col gap-1">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  className={`w-full text-left px-4 py-3 text-sm font-medium tracking-wider uppercase transition-colors ${
                    isActive(item.href) ? "text-accent" : "text-nav-text"
                  }`}
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                >
                  {item.label}
                  <svg
                    className={`inline-block ml-2 w-3 h-3 transition-transform ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === item.label && (
                  <div className="pl-8 pb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block py-2 text-sm ${
                          isActive(child.href) ? "text-accent" : "text-text-muted hover:text-accent"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`block px-4 py-3 text-sm font-medium tracking-wider uppercase transition-colors ${
                  item.isButton
                    ? "text-accent border border-accent mt-2 text-center"
                    : isActive(item.href)
                    ? "text-accent"
                    : "text-nav-text hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
