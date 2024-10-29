import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BImslfQN.mjs';
import 'es-module-lexer';
import { i as decodeKey } from './chunks/astro/server_B8CfcxbO.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/mrjark/Desktop/projects/mrjark.com/mrjark/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.16.6_rollup@4.24.0_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DL8d5jet.css"},{"type":"inline","content":"@font-face{font-family:MuseoModerno;src:url(/fonts/MuseoModerno-Medium.woff2) format(\"woff2\"),url(/fonts/MuseoModerno-Medium.woff) format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:Rubik-Light;src:url(/fonts/rubik-light-webfont.woff2) format(\"woff2\"),url(/fonts/rubik-light-webfont.woff) format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:Rubik-Medium;src:url(/fonts/rubik-medium-webfont.woff2) format(\"woff2\"),url(/fonts/rubik-medium-webfont.woff) format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:Caveat;src:url(/fonts/caveat-regular-webfont.woff2) format(\"woff2\"),url(/fonts/caveat-regular-webfont.woff) format(\"woff\");font-weight:400;font-style:normal}body{background-color:#0b0b0e;color:#e5e7eb}h1,h2,h3,h4,h5,h6{font-family:MuseoModerno,system-ui,sans-serif;font-size:1.25rem;line-height:1.75rem;font-weight:500;letter-spacing:.05em;--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity))}a{font-family:MuseoModerno,sans-serif;letter-spacing:.05em}p{font-family:Rubik-Light,system-ui,sans-serif;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}.tags{letter-spacing:.05em}.custom-footer{font-size:12px;letter-spacing:.1em;--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.2daoxv0f.js"}],"styles":[{"type":"external","src":"/_astro/index.DL8d5jet.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}body{background-color:#0b0b0e;color:#f5faff}\n@font-face{font-family:MuseoModerno;src:url(/fonts/MuseoModerno-Medium.woff2) format(\"woff2\"),url(/fonts/MuseoModerno-Medium.woff) format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:Rubik-Light;src:url(/fonts/rubik-light-webfont.woff2) format(\"woff2\"),url(/fonts/rubik-light-webfont.woff) format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:Rubik-Medium;src:url(/fonts/rubik-medium-webfont.woff2) format(\"woff2\"),url(/fonts/rubik-medium-webfont.woff) format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:Caveat;src:url(/fonts/caveat-regular-webfont.woff2) format(\"woff2\"),url(/fonts/caveat-regular-webfont.woff) format(\"woff\");font-weight:400;font-style:normal}body{background-color:#0b0b0e;color:#e5e7eb}h1,h2,h3,h4,h5,h6{font-family:MuseoModerno,system-ui,sans-serif;font-size:1.25rem;line-height:1.75rem;font-weight:500;letter-spacing:.05em;--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity))}a{font-family:MuseoModerno,sans-serif;letter-spacing:.05em}p{font-family:Rubik-Light,system-ui,sans-serif;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}.tags{letter-spacing:.05em}.custom-footer{font-size:12px;letter-spacing:.1em;--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}\n"}],"routeData":{"route":"/about","isIndex":true,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about/index.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DL8d5jet.css"}],"routeData":{"route":"/blog/[slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.2daoxv0f.js"}],"styles":[{"type":"external","src":"/_astro/index.DL8d5jet.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}body{background-color:#0b0b0e;color:#f5faff}\n@font-face{font-family:MuseoModerno;src:url(/fonts/MuseoModerno-Medium.woff2) format(\"woff2\"),url(/fonts/MuseoModerno-Medium.woff) format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:Rubik-Light;src:url(/fonts/rubik-light-webfont.woff2) format(\"woff2\"),url(/fonts/rubik-light-webfont.woff) format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:Rubik-Medium;src:url(/fonts/rubik-medium-webfont.woff2) format(\"woff2\"),url(/fonts/rubik-medium-webfont.woff) format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:Caveat;src:url(/fonts/caveat-regular-webfont.woff2) format(\"woff2\"),url(/fonts/caveat-regular-webfont.woff) format(\"woff\");font-weight:400;font-style:normal}body{background-color:#0b0b0e;color:#e5e7eb}h1,h2,h3,h4,h5,h6{font-family:MuseoModerno,system-ui,sans-serif;font-size:1.25rem;line-height:1.75rem;font-weight:500;letter-spacing:.05em;--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity))}a{font-family:MuseoModerno,sans-serif;letter-spacing:.05em}p{font-family:Rubik-Light,system-ui,sans-serif;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}.tags{letter-spacing:.05em}.custom-footer{font-size:12px;letter-spacing:.1em;--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}\n"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DL8d5jet.css"}],"routeData":{"route":"/book-notes/[slug]","isIndex":false,"type":"page","pattern":"^\\/book-notes\\/([^/]+?)\\/?$","segments":[[{"content":"book-notes","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/book-notes/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.2daoxv0f.js"}],"styles":[{"type":"external","src":"/_astro/index.DL8d5jet.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}body{background-color:#0b0b0e;color:#f5faff}\n@font-face{font-family:MuseoModerno;src:url(/fonts/MuseoModerno-Medium.woff2) format(\"woff2\"),url(/fonts/MuseoModerno-Medium.woff) format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:Rubik-Light;src:url(/fonts/rubik-light-webfont.woff2) format(\"woff2\"),url(/fonts/rubik-light-webfont.woff) format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:Rubik-Medium;src:url(/fonts/rubik-medium-webfont.woff2) format(\"woff2\"),url(/fonts/rubik-medium-webfont.woff) format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:Caveat;src:url(/fonts/caveat-regular-webfont.woff2) format(\"woff2\"),url(/fonts/caveat-regular-webfont.woff) format(\"woff\");font-weight:400;font-style:normal}body{background-color:#0b0b0e;color:#e5e7eb}h1,h2,h3,h4,h5,h6{font-family:MuseoModerno,system-ui,sans-serif;font-size:1.25rem;line-height:1.75rem;font-weight:500;letter-spacing:.05em;--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity))}a{font-family:MuseoModerno,sans-serif;letter-spacing:.05em}p{font-family:Rubik-Light,system-ui,sans-serif;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}.tags{letter-spacing:.05em}.custom-footer{font-size:12px;letter-spacing:.1em;--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}\n"}],"routeData":{"route":"/book-notes","isIndex":true,"type":"page","pattern":"^\\/book-notes\\/?$","segments":[[{"content":"book-notes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/book-notes/index.astro","pathname":"/book-notes","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.2daoxv0f.js"}],"styles":[{"type":"external","src":"/_astro/index.DL8d5jet.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}body{background-color:#0b0b0e;color:#f5faff}\n@font-face{font-family:MuseoModerno;src:url(/fonts/MuseoModerno-Medium.woff2) format(\"woff2\"),url(/fonts/MuseoModerno-Medium.woff) format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:Rubik-Light;src:url(/fonts/rubik-light-webfont.woff2) format(\"woff2\"),url(/fonts/rubik-light-webfont.woff) format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:Rubik-Medium;src:url(/fonts/rubik-medium-webfont.woff2) format(\"woff2\"),url(/fonts/rubik-medium-webfont.woff) format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:Caveat;src:url(/fonts/caveat-regular-webfont.woff2) format(\"woff2\"),url(/fonts/caveat-regular-webfont.woff) format(\"woff\");font-weight:400;font-style:normal}body{background-color:#0b0b0e;color:#e5e7eb}h1,h2,h3,h4,h5,h6{font-family:MuseoModerno,system-ui,sans-serif;font-size:1.25rem;line-height:1.75rem;font-weight:500;letter-spacing:.05em;--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity))}a{font-family:MuseoModerno,sans-serif;letter-spacing:.05em}p{font-family:Rubik-Light,system-ui,sans-serif;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}.tags{letter-spacing:.05em}.custom-footer{font-size:12px;letter-spacing:.1em;--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}\n"}],"routeData":{"route":"/leaning","isIndex":true,"type":"page","pattern":"^\\/leaning\\/?$","segments":[[{"content":"leaning","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/leaning/index.astro","pathname":"/leaning","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.2daoxv0f.js"}],"styles":[{"type":"external","src":"/_astro/index.DL8d5jet.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}body{background-color:#0b0b0e;color:#f5faff}\n@font-face{font-family:MuseoModerno;src:url(/fonts/MuseoModerno-Medium.woff2) format(\"woff2\"),url(/fonts/MuseoModerno-Medium.woff) format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:Rubik-Light;src:url(/fonts/rubik-light-webfont.woff2) format(\"woff2\"),url(/fonts/rubik-light-webfont.woff) format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:Rubik-Medium;src:url(/fonts/rubik-medium-webfont.woff2) format(\"woff2\"),url(/fonts/rubik-medium-webfont.woff) format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:Caveat;src:url(/fonts/caveat-regular-webfont.woff2) format(\"woff2\"),url(/fonts/caveat-regular-webfont.woff) format(\"woff\");font-weight:400;font-style:normal}body{background-color:#0b0b0e;color:#e5e7eb}h1,h2,h3,h4,h5,h6{font-family:MuseoModerno,system-ui,sans-serif;font-size:1.25rem;line-height:1.75rem;font-weight:500;letter-spacing:.05em;--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity))}a{font-family:MuseoModerno,sans-serif;letter-spacing:.05em}p{font-family:Rubik-Light,system-ui,sans-serif;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}.tags{letter-spacing:.05em}.custom-footer{font-size:12px;letter-spacing:.1em;--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}\n"}],"routeData":{"route":"/why","isIndex":true,"type":"page","pattern":"^\\/why\\/?$","segments":[[{"content":"why","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/why/index.astro","pathname":"/why","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.2daoxv0f.js"}],"styles":[{"type":"external","src":"/_astro/index.DL8d5jet.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}body{background-color:#0b0b0e;color:#f5faff}\n@font-face{font-family:MuseoModerno;src:url(/fonts/MuseoModerno-Medium.woff2) format(\"woff2\"),url(/fonts/MuseoModerno-Medium.woff) format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:Rubik-Light;src:url(/fonts/rubik-light-webfont.woff2) format(\"woff2\"),url(/fonts/rubik-light-webfont.woff) format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:Rubik-Medium;src:url(/fonts/rubik-medium-webfont.woff2) format(\"woff2\"),url(/fonts/rubik-medium-webfont.woff) format(\"woff\");font-weight:400;font-style:normal}@font-face{font-family:Caveat;src:url(/fonts/caveat-regular-webfont.woff2) format(\"woff2\"),url(/fonts/caveat-regular-webfont.woff) format(\"woff\");font-weight:400;font-style:normal}body{background-color:#0b0b0e;color:#e5e7eb}h1,h2,h3,h4,h5,h6{font-family:MuseoModerno,system-ui,sans-serif;font-size:1.25rem;line-height:1.75rem;font-weight:500;letter-spacing:.05em;--tw-text-opacity: 1;color:rgb(243 244 246 / var(--tw-text-opacity))}a{font-family:MuseoModerno,sans-serif;letter-spacing:.05em}p{font-family:Rubik-Light,system-ui,sans-serif;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}.tags{letter-spacing:.05em}.custom-footer{font-size:12px;letter-spacing:.1em;--tw-text-opacity: 1;color:rgb(229 231 235 / var(--tw-text-opacity))}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/mrjark/Desktop/projects/mrjark.com/mrjark/src/pages/about/index.astro",{"propagation":"none","containsHead":true}],["/Users/mrjark/Desktop/projects/mrjark.com/mrjark/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["/Users/mrjark/Desktop/projects/mrjark.com/mrjark/src/pages/book-notes/index.astro",{"propagation":"none","containsHead":true}],["/Users/mrjark/Desktop/projects/mrjark.com/mrjark/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/mrjark/Desktop/projects/mrjark.com/mrjark/src/pages/leaning/index.astro",{"propagation":"none","containsHead":true}],["/Users/mrjark/Desktop/projects/mrjark.com/mrjark/src/pages/why/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/book-notes/[slug]@_@astro":"pages/book-notes/_slug_.astro.mjs","\u0000@astro-page:src/pages/book-notes/index@_@astro":"pages/book-notes.astro.mjs","\u0000@astro-page:src/pages/leaning/index@_@astro":"pages/leaning.astro.mjs","\u0000@astro-page:src/pages/why/index@_@astro":"pages/why.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.16.6_rollup@4.24.0_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about/index@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/Users/mrjark/Desktop/projects/mrjark.com/mrjark/node_modules/.pnpm/astro@4.16.6_rollup@4.24.0_typescript@5.6.3/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/Users/mrjark/Desktop/projects/mrjark.com/mrjark/src/components/static/about/markdown/about.md":"chunks/about_BvA_kZ61.mjs","/Users/mrjark/Desktop/projects/mrjark.com/mrjark/src/components/static/home/markdown/home.md":"chunks/home_B92fW6vs.mjs","\u0000@astrojs-manifest":"manifest_C39Iv9Nu.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.2daoxv0f.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.DL8d5jet.css","/favicon.svg","/_astro/hoisted.2daoxv0f.js","/fonts/MuseoModerno-Bold.woff","/fonts/MuseoModerno-Bold.woff2","/fonts/MuseoModerno-BoldItalic.woff","/fonts/MuseoModerno-BoldItalic.woff2","/fonts/MuseoModerno-Italic.woff","/fonts/MuseoModerno-Italic.woff2","/fonts/MuseoModerno-Medium.woff","/fonts/MuseoModerno-Medium.woff2","/fonts/MuseoModerno-MediumItalic.woff","/fonts/MuseoModerno-MediumItalic.woff2","/fonts/MuseoModerno-Regular.woff","/fonts/MuseoModerno-Regular.woff2","/fonts/caveat-bold-webfont.woff","/fonts/caveat-bold-webfont.woff2","/fonts/caveat-regular-webfont.woff","/fonts/caveat-regular-webfont.woff2","/fonts/rubik-italic-webfont.woff","/fonts/rubik-italic-webfont.woff2","/fonts/rubik-light-webfont.woff","/fonts/rubik-light-webfont.woff2","/fonts/rubik-lightitalic-webfont.woff","/fonts/rubik-lightitalic-webfont.woff2","/fonts/rubik-medium-webfont.woff","/fonts/rubik-medium-webfont.woff2","/fonts/rubik-mediumitalic-webfont.woff","/fonts/rubik-mediumitalic-webfont.woff2","/fonts/rubik-regular-webfont.woff","/fonts/rubik-regular-webfont.woff2","/images/courage-404-error.gif"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"gnp+NQufhnVXl6r6M7qYEtUhNN9RL/b+4fs8l++vXc0=","experimentalEnvGetSecretEnabled":false});

export { manifest };
