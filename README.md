# UVUYO homepage prototype

A lightweight, editable prototype for the UVUYO Shopify homepage concept.

## Easiest way to edit

Open `content.js`. Almost all homepage copy, imagery, prices, Moment cards, Journal cards, New Finds, and social images live there.

You generally do **not** need to edit `index.html`.

## Preview locally

Double-click `index.html` to open it in a browser. The prototype uses remote Google Fonts and Unsplash images, so internet access is needed for the full visual preview.

## Key files

- `index.html` — page structure
- `styles.css` — colors, spacing, type, mobile layout
- `content.js` — **main editing file** for copy/images/products/articles
- `script.js` — renders the editable content into the page
- `SHOPIFY_MAP.md` — how this prototype maps into a future Shopify theme

## Change the color palette

At the very top of `styles.css`, edit the variables inside `:root`:

```css
--cream: #f4efe5;
--ink: #151515;
--tomato: #dc4a35;
--butter: #f0c85b;
--blue: #5c80ad;
--green: #6f7f58;
--pink: #d77a8f;
```

## Add a new Moment

In `content.js`, duplicate one object inside `moments`:

```js
{
  title: "HAVING PEOPLE OVER",
  subtitle: "Make effortless look effortless.",
  image: "YOUR IMAGE URL",
  link: "#shop"
}
```

## Add a Journal article

Duplicate one object inside `journal` and change the title, excerpt, image and link.

This means your Journal can grow independently while continuing to feed the curated Moments.

## When moving to Shopify

Use this prototype as the visual/content blueprint. Build the editable parts as Shopify sections + blocks so you can manage everything through the Shopify theme editor without code.
