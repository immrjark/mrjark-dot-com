// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

import vercel from '@astrojs/vercel/serverless';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig( {
  site: 'https://mrjark.com',
  integrations: [ tailwind(), mdx(), sitemap() ],
  /*
  Tiene sentido que sea hybrid porque las páginas que yo tengo son estáticas
  y solo cuando sea necesario tendrá que hacer la carga de las mismas. 
  En casos de APIs y demás, cosa que por ahora no
  */
  output: 'hybrid',
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