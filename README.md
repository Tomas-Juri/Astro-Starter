# Astro starter template

**Strongy opiniated Astro starter template**.

I use this template as a starting point for each project, when a project gets finished i try to update this tempalte to reflect new findings and also upgrade packages.

Feel fre to reuse and give a star if you like it.

This template uses [TailwindCSS](https://tailwindcss.com/) for styling.

Eslint and prettier have been integrated to improve dev. experience, with folloging integrations

- [prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro)
- [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

## Custom functionality

Most of the websites thave some common functionality, this template tries to solve that in advance. There are several things implemented/integrated.

**Sitemap -** `@astrojs/sitemap` plugin integrated

**Robots.tsx -** `astro-robots-txt` plugin integrated

**Website manifest -** Manifest is generated via Astro endpoint functionality in `src/pages/manifest.json.ts`

**Favicon -** You can find two favicon files in `src/images` folder, these are used in `src/pages/manifest.json.ts` and `src/components/organisms/Head.astro`, these files use Astro's `getImage` API to generate needed favicon images

**SEO -** A common `Head` component in `src/components/organisms/Head.astro` contains all the necessary meta tags to fullfill SEO needs. This includes generating a meta image that you can either pass via Layout, or generated by default from `src/images/meta-image.jpg`.

**Layout -** Very simple layout component in `src/components/Layout.astro` that renders the basic html template, with the `Head` component.

**404 page -** Yet again very simple 404 page that is meant to be rewritten as each project requires.

## References

https://kremalicious.com/favicon-generation-with-astro/  
https://docs.astro.build/en/guides/images/#generating-images-with-getimage  
https://tailwindcss.com/blog/automatic-class-sorting-with-prettier
