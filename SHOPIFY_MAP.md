# Shopify implementation map

The prototype is deliberately structured so each section can become an editable Shopify Online Store 2.0 section.

| Prototype section | Shopify section type | Editable blocks |
|---|---|---|
| Announcement | Announcement bar | Text, link |
| Header | Header | Menu, logo, utility links |
| Hero | Image banner | Image, kicker, headline, copy, CTA |
| Intro | Rich text | Kicker, heading, paragraph |
| Shop by Moment | Custom section | Repeatable Moment blocks: image, title, subtitle, collection/page link |
| Featured Moment | Custom section | Main image, narrative copy, product list, bundle CTA, pieces CTA |
| Manifesto | Rich text/banner | Headline, background color |
| Journal | Featured blog | 3 article blocks, article image/title/excerpt |
| New Finds | Featured collection/custom products | Product blocks + custom “Why it's here” text |
| Just Because | Image banner | Image, copy, CTA |
| Philosophy | Rich text | Heading, body copy, link |
| Social | Gallery | Image blocks / Instagram integration |
| Newsletter | Email signup | Heading, copy, Shopify Email/Klaviyo form |
| Footer | Footer | Menus, social links, tagline |

## Recommended Shopify data model

### Metaobject: Moment
Create a `Moment` metaobject with:
- Name
- Short line
- Hero image
- Editorial description
- Products
- Bundle product (optional)
- Journal article link
- Accent color

This lets you create Moment pages such as The Long Lunch, Sunday Morning, Golden Hour and Just Because without duplicating templates.

### Product metafields
Add:
- `uvuyo.why_its_here` — short editorial reason for selection
- `uvuyo.moments` — Moment references
- `uvuyo.editor_note` — optional longer note

### Blog
Use Shopify's native blog for `The UVUYO Journal`. Each article can link back to one or more Moment metaobjects.

## Suggested initial Shopify navigation

- Moments
- Journal
- Gifts
- Shop

Keep `Shop all` available, but visually secondary.
