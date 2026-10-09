import Link from "next/link";
import { Fragment } from "react";

const LINK_RE = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/** Renderöi tekstin, jossa linkit muodossa [teksti](/polku). */
export function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  LINK_RE.lastIndex = 0;
  while ((match = LINK_RE.exec(text)) !== null) {
    if (match.index > last) parts.push(<Fragment key={i++}>{text.slice(last, match.index)}</Fragment>);
    const [, label, href] = match;
    if (href.startsWith("/")) {
      parts.push(
        <Link key={i++} href={href} className="link">
          {label}
        </Link>,
      );
    } else {
      parts.push(
        <a key={i++} href={href} className="link" target="_blank" rel="noopener noreferrer">
          {label}
          <span className="sr-only"> (avautuu uuteen välilehteen)</span>
        </a>,
      );
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(<Fragment key={i++}>{text.slice(last)}</Fragment>);
  return <>{parts}</>;
}
