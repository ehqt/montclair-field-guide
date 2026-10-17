// Site-wide settings.

/**
 * The Google Form that takes error reports, owned by the project's Google
 * account, with no sign-in and no email collection. When null, the report
 * page offers email only.
 * `pageField` is the form's "Which page or body is this about?" question,
 * which the report page pre-fills.
 */
export const REPORT_FORM: { url: string; pageField: string } | null = {
  url: 'https://docs.google.com/forms/d/e/1FAIpQLSfsEuEUaw-5tN2bItUAzHsRQI0-jklQ0SytwgqmopyUi3fDjQ/viewform',
  pageField: 'entry.294585413',
}

/** A fallback for anyone who would rather write. This address is public. */
export const REPORT_EMAIL = 'ehqt.github@gmail.com'
