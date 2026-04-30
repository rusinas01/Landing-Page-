"use client";

import { useEffect } from "react";

const PATH_TO_SECTION: Record<string, string> = {
  "/darbai": "works",
  "/paslaugos": "services",
  "/procesas": "process",
  "/kainos": "pricing",
  "/kontaktai": "contact",
};

function getSectionId(pathname: string): string | undefined {
  return PATH_TO_SECTION[pathname];
}

export default function CleanHashLinks() {
  useEffect(() => {
    function scrollToId(id: string) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function isHomePath(pathname: string) {
      return pathname === "/" || getSectionId(pathname) !== undefined;
    }

    function handleClick(e: MouseEvent) {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      const link = target?.closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      const sectionId = getSectionId(href);
      if (sectionId) {
        if (!isHomePath(window.location.pathname)) return; // let browser navigate
        e.preventDefault();
        scrollToId(sectionId);
        window.history.pushState(null, "", href);
        return;
      }

      // Legacy hash links (#contact or /#contact)
      const match = href.match(/^\/?#(.+)$/);
      if (!match) return;
      const sameOriginCrossPage =
        href.startsWith("/#") && !isHomePath(window.location.pathname);
      if (sameOriginCrossPage) return;
      e.preventDefault();
      scrollToId(match[1]);
      window.history.replaceState(null, "", "/");
    }

    document.addEventListener("click", handleClick);

    // Initial load: scroll to section if URL is /kainos etc, or if there's a #hash
    const path = window.location.pathname;
    const initialSection = getSectionId(path);
    if (initialSection) {
      const cleanup = () => scrollToId(initialSection);
      if (document.readyState === "complete") cleanup();
      else window.addEventListener("load", cleanup, { once: true });
    } else if (window.location.hash && path === "/") {
      const id = window.location.hash.slice(1);
      const cleanup = () => {
        scrollToId(id);
        window.history.replaceState(null, "", "/");
      };
      if (document.readyState === "complete") cleanup();
      else window.addEventListener("load", cleanup, { once: true });
    }

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
