"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function IOSNavbar() {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <nav className="ios-navbar">
      <div className="ios-navbar-inner">
        <div className="ios-navbar-left">
          <span className="ios-logo-dot" />
          <span className="ios-logo-text">Web System</span>
        </div>
        <div className="ios-navbar-links">
          <Link
            href="/"
            className={`ios-nav-link ${isActive("/") ? "active" : ""}`}
          >
            Inicio
          </Link>
          <Link
            href="/projects"
            className={`ios-nav-link ${isActive("/projects") ? "active" : ""}`}
          >
            Proyectos
          </Link>
        </div>
      </div>
    </nav>
  );
}
