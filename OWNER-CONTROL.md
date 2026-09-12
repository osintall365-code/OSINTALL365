# OSINTALL365 Owner Control & Agent Email Architecture

## Owner control is mandatory

Every customer work-order request must reach the owner before any engagement is accepted.

The required sequence is:

1. **Request received** — intake is recorded and routed to the owner.
2. **Owner customer review** — the owner reviews the customer and request.
3. **Owner customer conversation** — the owner personally speaks with the customer.
4. **Authorization review** — scope, authority, lawful purpose, and limitations are confirmed.
5. **Owner engagement decision** — the owner explicitly approves or declines the engagement.
6. **Commercial approval** — the owner approves the applicable scope, price, and terms.
7. **Payment** — payment may be requested only for an approved engagement.
8. **Case activation** — substantive work may begin only after the required gates are complete.

Payment, an intake submission, an agent recommendation, or silence does **not** constitute owner approval.

## Agent boundaries

Agents may:

- Receive and organize intake information.
- Triage requests.
- Prepare customer briefings and questions for the owner.
- Identify missing authorization or scope information.
- Flag potentially restricted or unsafe requests.
- Prepare administrative case records.
- Prepare research plans for owner review.

Agents may not:

- Accept a customer on OSINTALL365's behalf.
- Promise that work will be performed.
- Start substantive customer work before owner approval.
- Expand an approved scope without owner approval.
- Change material pricing or commercial terms without owner approval.
- Spend company funds without a transaction-specific owner approval.

## Outgoing-money control

No general standing permission exists for outgoing funds.

Each outgoing transaction requires a separate owner decision identifying:

- Exact amount.
- Recipient or vendor.
- Specific purpose.
- One-time or recurring nature.

This applies to purchases, subscriptions, advertising, software, domains, hosting upgrades, reimbursements, refunds, transfers, hiring expenses, and other disbursements.

## Incoming payments

The designated incoming payment destination is the OSINTALL365 PayPal.Me address. Receiving money does not bypass the owner-first customer gate.

## Temporary email routing

Until a business domain and suitable mail provider are actually established, the following Gmail plus-addresses are temporary routing identities into `osintall365@gmail.com`:

- `osintall365+eleanor@gmail.com` — Operations / Lead Triage
- `osintall365+research@gmail.com` — Research / Analysis
- `osintall365+support@gmail.com` — Customer Support
- `osintall365+marketing@gmail.com` — Marketing / Outreach
- `osintall365+finance@gmail.com` — Financial Approval Requests
- `osintall365+security@gmail.com` — Security / Compliance

These are aliases, not separate Gmail accounts or independent mailboxes.

## Future business-domain architecture

When a business domain is actually owned and a suitable email provider is selected and authorized, the intended addresses are:

- `eleanor@osintall365.com`
- `research@osintall365.com`
- `support@osintall365.com`
- `marketing@osintall365.com`
- `finance@osintall365.com`
- `security@osintall365.com`

Every customer work-order mailbox must forward owner-required notifications to `osintall365@gmail.com`.

No domain purchase or paid email service is authorized under the current $0 budget.

## Current hosting position

The GitHub repository remains the source-of-truth for website code and interim staging. GitHub's current Pages terms do not permit using Pages as free web hosting for an online business primarily facilitating commercial transactions. A production migration should therefore occur before relying on the GitHub Pages URL for commercial operations.

A free Cloudflare Pages deployment is the current migration target because Cloudflare documents free static-asset requests and support for static HTML sites. Account creation, domain configuration, and any provider authorization remain owner-controlled steps.

## Stop conditions

The workflow must stop and return to owner review if:

- Customer identity or business purpose is unclear.
- Authorization is unclear or insufficient.
- Requested activity would involve unauthorized access, credential theft, stalking, harassment, doxxing, illegal surveillance, or restricted systems.
- Scope changes materially.
- Pricing or commercial terms change materially.
- An outgoing expenditure is proposed.
- A customer has not been personally reviewed and personally spoken with by the owner.

## Core rule

**No customer work begins unless the owner has reviewed the customer, personally spoken with the customer, confirmed authorization and scope, and explicitly approved the engagement.**
