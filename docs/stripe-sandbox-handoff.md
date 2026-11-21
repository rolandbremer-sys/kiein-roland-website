# Stripe sandbox integration — NOT a production checkout

Verified on 2026-11-21 for Avatec Aufzüge s.r.o. Stripe sandbox. **No live payments, no live entitlements, no customer access.** Keep the existing public website's "not bookable" message until all release gates pass.

## Verified recurring EUR catalog (net, tax exclusive)

| Plan | EUR | Interval | Stripe sandbox price ID | Test-only checkout |
|---|---:|---|---|---|
| Test | 2 | week | `price_1UeFAaPaZJ4NAMZuvE1kIFpB` | https://buy.stripe.com/test_28E14p1ln4BxcLi7vbe7m00 |
| Solo (1 named technician) | 20 | month | `price_1UeFAcPaZJ4NAMZudRmnLNmu` | https://buy.stripe.com/test_28E4gBfcd8RN6mU02Je7m01 |
| Team 5 | 89 | month | `price_1UeFAePaZJ4NAMZucoglFs4D` | https://buy.stripe.com/test_fZu14pe894Bx5iQ2aRe7m02 |
| Team 10 | 159 | month | `price_1UeFAhPaZJ4NAMZudVUJr65D` | https://buy.stripe.com/test_cNi6oJ8NPaZV7qYbLre7m03 |
| Team 20 | 289 | month | `price_1UeFAjPaZJ4NAMZu524BBg5t` | https://buy.stripe.com/test_00wcN79RTec79z69Dje7m04 |
| Business 50 | 649 | month | `price_1UeFAlPaZJ4NAMZuyjAag9px` | https://buy.stripe.com/test_5kQ3cxfcd6JF26E02Je7m05 |
| Owner Start (5 lifts) | 29 | month | `price_1UeFApPaZJ4NAMZuMdliet5k` | https://buy.stripe.com/test_28E9AV7JLaZVfXu3eVe7m06 |
| Owner 25 | 99 | month | `price_1UeFArPaZJ4NAMZujWFk0Iyc` | https://buy.stripe.com/test_eVqdRb0hj8RN8v2cPve7m07 |
| Owner 100 | 299 | month | `price_1UeFAtPaZJ4NAMZuKkOoxU1u` | https://buy.stripe.com/test_dRmaEZ4xz8RN4eMeXDe7m08 |
| Owner 250 | 599 | month | `price_1UeFAwPaZJ4NAMZumeykNLB4` | https://buy.stripe.com/test_6oUdRb3tv1pl9z66r7e7m09 |

All 10 sandbox products, prices and payment links were re-read and confirmed active; automatic_tax.enabled=true for all 10 payment links. Product tax code: `txcd_10103001` (SaaS business use). Tax Settings status active, head office country CZ, **zero Stripe Tax registrations**. A Czech DIČ / DPH registration was stated by the owner but has not been independently verified against the tax authority; do not invent or submit a registration or DIČ.

## Production integration acceptance criteria

1. **Tax and legal**: verify Czech DPH registration and DIČ, add only verified tax jurisdictions in Stripe, test tax calculation with relevant B2B locations and VAT IDs, review reverse-charge and cross-border treatment with accountant. Confirm business identity, invoices, privacy and cancellation terms.
2. **Backend-only Checkout**: authenticated server maps a fixed plan key to a server-side **live** price ID, validates tenant and authorization, creates a Stripe Checkout Session; never trust client-provided amount/price or expose secret keys. Static GitHub Pages cannot securely host this backend.
3. **Webhooks**: verify Stripe signature from raw body, store event IDs for idempotency, handle out-of-order events; process `checkout.session.completed`, `invoice.paid`, `invoice.payment_failed`, `customer.subscription.updated`, `customer.subscription.deleted`. Grant access only after verified successful paid entitlement; revoke/suspend according to policy.
4. **Roles and entitlements**: map customer/subscription to tenant, named technician seat limits or elevator portfolio limits, enforce server-side for each request; test unauthorized access and downgrade/renewal/cancellation/refunds.
5. **Sandbox E2E**: simulate purchase, paid invoice, invoice failure, cancellation, renewal, duplicate webhooks, owner/technician access and offline-to-online synchronization; record device, build, event ID, expected/actual and evidence link.
6. **Release gate**: Identity, Evidence/Provenance, Safety Kernel, Offline Core, Roles, Audit Trail and real Samsung/laptop acceptance must pass independently. Do not set `operationalRelease=true` or publish live checkout until signed off.

**The €2 weekly Test is a recurring subscription**, not a one-off €2 charge. Explain renewal and cancellation clearly before checkout. Enterprise and Portfolio >250 remain custom quotes, not Stripe fixed-price products.

This document is an implementation handoff and sandbox evidence only. It does not establish that a checkout was completed or that app access was granted.
