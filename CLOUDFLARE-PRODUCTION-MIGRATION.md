# Cloudflare Pages Production Migration

## Why this exists
GitHub Pages is useful for repository staging, but GitHub's current Pages documentation does not permit using Pages as free hosting for an online business primarily facilitating commercial transactions. OSINTALL365 therefore treats GitHub Pages as staging only.

## Zero-cost target
Cloudflare Pages Free is the intended production target for the static website. Cloudflare documents free static-asset requests and automatic Git-based deployments.

## Owner action required
The owner must authorize a Cloudflare account and connect the OSINTALL365 GitHub repository. This cannot be completed by repository code alone because the account connection requires the owner's authorization.

## Deployment configuration

- Repository: `osintall365-code/OSINTALL365`
- Production branch: `main`
- Framework: none / static HTML
- Build command: `exit 0`
- Build output directory: `/`
- Required root file: `index.html`

## Security rules

- Never place API keys, OAuth secrets, passwords, PayPal credentials, or private tokens in the repository.
- Keep customer-sensitive information out of static website files.
- Keep the public site limited to the minimum information necessary to explain the business and collect consultation requests.
- Use a server-side or trusted form endpoint for future automated intake; do not embed secrets in browser JavaScript.

## After deployment

1. Verify the `pages.dev` site loads the home page.
2. Test every navigation link.
3. Test the consultation form and owner-notification path.
4. Confirm privacy and terms pages are reachable.
5. Confirm no personal owner information appears publicly.
6. Confirm the production URL is the one used in future marketing.
7. Keep the GitHub Pages URL as development/staging only.
