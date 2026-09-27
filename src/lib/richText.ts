/**
 * Helpers for the light HTML markup allowed inside portfolio copy
 * (`<br />`, `<strong>`, `<em>`, `<a>`, ...).
 *
 * The data in `src/data/portfolio.ts` is authored locally, so the strings are
 * trusted and are rendered with `dangerouslySetInnerHTML`. This module only
 * deals with splitting a rich string into separate paragraphs so each one can
 * be wrapped in its own <p>.
 */

/** Block-level tags act as paragraph boundaries. */
const BLOCK_TAGS =
  /<\/?(?:p|div|ul|ol|li|h[1-6]|blockquote|section|article|figure|table|tr|td|th)\b[^>]*>/gi;

/** Two or more consecutive <br> tags also act as a paragraph boundary. */
const BR_PARAGRAPH_BREAK = /(?:<br\s*\/?>\s*){2,}/gi;

/** A single <br> is kept as a line break inside the paragraph. */
const SINGLE_BR = /<br\s*\/?>/gi;

/** Two or more newlines in the source act as a paragraph boundary too. */
const BLANK_LINE = /\n[ \t]*\n/g;

/**
 * Splits a rich text string into an array of HTML paragraph strings.
 * Each returned string is safe to pass to `dangerouslySetInnerHTML`.
 *
 * Handles `<br /><br />`, `<br><br>`, `<br />`, blank lines and
 * `<p>...</p><p>...</p>` blocks.
 */
export function splitRichText(html: string | null | undefined): string[] {
  if (!html) return [];

  return html
    .replace(BLOCK_TAGS, "\n\n")
    .replace(BR_PARAGRAPH_BREAK, "\n\n")
    .replace(SINGLE_BR, "\n")
    .replace(BLANK_LINE, "\n\n")
    .split(/\n[ \t]*\n/)
    .map((paragraph) => paragraph.replace(/\n+/g, "<br />").trim())
    .filter(Boolean);
}
