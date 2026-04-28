interface EyebrowTagProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * EyebrowTag — the pill badge sitting above every section title.
 * Dark #121214 backdrop, white Regular text, white leading dot,
 * subtle blue back-glow lifting the pill off the page.
 *
 * Visual rules live in globals.css under `.eyebrow-tag`.
 */
export default function EyebrowTag({ children, className = "" }: EyebrowTagProps) {
  return (
    <span className={`eyebrow-tag ${className}`.trim()}>
      <span className="eyebrow-tag__dot" />
      {children}
    </span>
  );
}
