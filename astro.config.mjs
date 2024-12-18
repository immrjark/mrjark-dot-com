// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig( {
  site: 'https://mrjark.com',
  integrations: [ tailwind(), mdx(), sitemap(), react() ],
  output: 'static',
  adapter: vercel( {
    webAnalytics: {
      enabled: true,
    },
    // isr: {
    // TODO: para un futuro tenerlo en caché
    //   expiration: 60 * 60 * 24, // ESTO ES UN DÍA
    // }
  } )
} );