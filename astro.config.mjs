// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

import partytown from '@astrojs/partytown';

// Este es provisional hasta que Vercel arregle el problema con sitemap
import { sitemapCopier } from './sitemap-copier';


// https://astro.build/config
export default defineConfig( {
  site: 'https://mrjark.com',
  integrations: [ tailwind(), mdx(), sitemap(), react(), sitemapCopier(), partytown( {
    config: {
      forward: [ 'dataLayer.push' ]
    }
  } ) ],
  output: 'static',
  env: {
    schema: {
      GA4_MEASUREMENT_ID: envField.string( { context: 'client', access: 'public', optional: false } ),
      GTM_MEASUREMENT_ID: envField.string( { context: 'client', access: 'public', optional: false } )
    }
  },
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