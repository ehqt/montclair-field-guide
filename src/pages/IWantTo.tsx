import { useState } from 'react'
import { Link } from 'react-router-dom'
import { findInstitution, formatDate, guide, useTitle } from '../data'
import SourceLinks from '../components/SourceLinks'

export default function IWantTo() {
  useTitle('I want to…')
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()
  const tasks = guide.tasks.filter((t) => !q || [t.want, t.who, t.body].some((s) => s.toLowerCase().includes(q)))

  return (
    <>
      <div className="container page-head stack">
        <nav aria-label="Breadcrumb" className="fine">
          <Link className="text-link" to="/">
            Home
          </Link>{' '}
          › Everyday questions › I want to…
        </nav>
        <div className="stack stack--sm">
          <h1>I want to…</h1>
          <p className="lede">Which township office handles it, and how to reach it.</p>
          <p className="fine">
            Last verified {formatDate(guide.last_verified)}. Fees, deadlines and extensions are the township's and can
            change.
          </p>
        </div>
      </div>

      <div className="container columns">
        <div className="columns__main stack">
          <div className="search">
            <label htmlFor="task-q">Search</label>
            <input
              id="task-q"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try “record”, “dog” or “police”"
            />
          </div>
          <p className="fine" aria-live="polite">
            {tasks.length} of {guide.tasks.length} listed
          </p>
          {tasks.length ? (
            <ul className="rows">
              {tasks.map((t) => {
                const inst = findInstitution(t.institution ?? undefined)
                return (
                  <li key={t.want} className="row">
                    <div className="row__when">{t.want}</div>
                    <div className="row__what stack stack--sm">
                      <div>
                        <div className="eyebrow">Ask</div>
                        <div className="row__title">{t.who}</div>
                        <div className="muted">{t.body}</div>
                      </div>
                      {t.contact && <div>{t.contact}</div>}
                      {t.to && (
                        <Link className="text-link" to={t.to}>
                          {t.to_label} →
                        </Link>
                      )}
                      {inst && (
                        <Link className="text-link" to={`/institutions/${inst.id}`}>
                          About the {inst.name} →
                        </Link>
                      )}
                      <SourceLinks sources={t.sources} />
                    </div>
                  </li>
                )
              })}
            </ul>
          ) : (
            <p className="muted">Nothing matches that search.</p>
          )}
        </div>

        <aside className="columns__side stack">
          <section className="card stack stack--sm" aria-labelledby="township-heading">
            <h2 id="township-heading" className="card__title">
              Not listed?
            </h2>
            <p className="muted">
              The township's main line is 973-744-1400, at the Municipal Building, 205 Claremont Avenue. Its own
              pages have the forms and the staff directory.
            </p>
            <ul className="link-list">
              <li>
                <a className="text-link" href="https://www.montclairnjusa.org/Residents/Certificates-Licenses-Permits-Forms">
                  Certificates, Licenses, Permits &amp; Forms →
                </a>
              </li>
              <li>
                <a className="text-link" href="https://www.montclairnjusa.org/Online-Services/Contact-us/Staff-Directory">
                  Staff Directory →
                </a>
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </>
  )
}
