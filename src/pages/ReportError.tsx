import { useLocation } from "react-router-dom";
import { useTitle } from "../data";
import { REPORT_EMAIL, REPORT_FORM } from "../site";

export default function ReportError() {
  useTitle("Report an error");
  const about: string = useLocation().state?.about ?? "";
  const formUrl =
    REPORT_FORM && about
      ? `${REPORT_FORM.url}?usp=pp_url&${REPORT_FORM.pageField}=${encodeURIComponent(about)}`
      : REPORT_FORM?.url;

  return (
    <>
      <div className="container page-head stack stack--sm">
        <h1>Report an error</h1>
        <p className="lede">
          Something out of date or wrong? Tell us, and include a link to the
          official source if you have one.
        </p>
      </div>
      <div className="container section stack">
        {about && (
          <p className="muted">
            Your report will be marked as being about: {about}.
          </p>
        )}
        {formUrl && (
        <p>
          <a
            className="button button--link"
            href={formUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open the report form →
          </a>
        </p>
        )}
        {formUrl && (
        <p className="fine measure">
          The form opens in a new tab on Google Forms. You do not need a Google
          account, and it does not collect your email address unless you choose
          to leave one for a reply.
        </p>
        )}
        <p className={formUrl ? "fine" : undefined}>
          {formUrl ? "Prefer email? Write to" : "Write to"}{" "}
          <a className="text-link" href={`mailto:${REPORT_EMAIL}`}>
            {REPORT_EMAIL}
          </a>
          .
        </p>
      </div>
    </>
  );
}
