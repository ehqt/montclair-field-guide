// Site-wide settings.

/**
 * The Google Form that takes error reports, owned by the project's Google
 * account, with no sign-in and no email collection. Null until the Montclair
 * form exists; the report page then offers email only.
 * `pageField` is the form's "Which page or body is this about?" question,
 * which the report page pre-fills.
 */
export const REPORT_FORM: { url: string; pageField: string } | null = null

/** A fallback for anyone who would rather write. This address is public. */
export const REPORT_EMAIL = 'ehqt.github@gmail.com'
