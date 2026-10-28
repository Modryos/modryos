# Closed beta site notes

Branch beta-closed, not published, not pushed.

- Legal pages (terms, beta-agreement, cookies, email-consent, data-deletion) are empty shells: paste text where the HTML comment says. privacy.html only got small wording fixes; its text still needs the real version.
- No CSP meta exists on any page, so connect-src was not added. If a CSP is added later, allow https://api.modryos.com.
- The API contract is assumed: 200 ok, 429 rate limited, 400 or 422 bad email, anything else a server error.
- email-consent.html is not in the footer (only the five asked for); link it where the news form is if wanted.
- README.md and llms.txt still say "coming soon"; they were not changed.
- Forms were not run against the live API; open the pages in a browser once.
