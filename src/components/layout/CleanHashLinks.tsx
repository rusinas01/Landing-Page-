"use client";

import { useEffect } from "react";

export default function CleanHashLinks() {
  useEffect(() => {
    function scrollToId(id: string) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function handleClick(e: MouseEvent) {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      const link = target?.closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      const match = href.match(/^\/?#(.+)$/);
      if (!match) return;

      const sameOriginCrossPage =
        href.startsWith("/#") && window.location.pathname !== "/";
      if (sameOriginCrossPage) return;

      e.preventDefault();
      scrollToId(match[1]);
      window.history.replaceState(null, "", window.location.pathname);
    }

    document.addEventListener("click", handleClick);

    if (window.location.hash && window.location.pathname === "/") {
      const id = window.location.hash.slice(1);
      const cleanup = () => {
        scrollToId(id);
        window.history.replaceState(null, "", "/");
      };
      if (document.readyState === "complete") {
        cleanup();
      } else {
        window.addEventListener("load", cleanup, { once: true });
      }
    }

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
