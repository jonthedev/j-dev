import { _ as __nuxt_component_0 } from './nuxt-link-DYBHx2A-.mjs';
import { defineComponent, mergeProps, ref, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from 'file:///Users/jdk-cis/Desktop/PROJECTS/jdev/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate } from 'file:///Users/jdk-cis/Desktop/PROJECTS/jdev/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/jdk-cis/Desktop/PROJECTS/jdev/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file:///Users/jdk-cis/Desktop/PROJECTS/jdev/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/jdk-cis/Desktop/PROJECTS/jdev/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/jdk-cis/Desktop/PROJECTS/jdev/node_modules/h3/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/jdk-cis/Desktop/PROJECTS/jdev/node_modules/destr/dist/index.mjs';
import 'file:///Users/jdk-cis/Desktop/PROJECTS/jdev/node_modules/hookable/dist/index.mjs';
import 'file:///Users/jdk-cis/Desktop/PROJECTS/jdev/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/jdk-cis/Desktop/PROJECTS/jdev/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/jdk-cis/Desktop/PROJECTS/jdev/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/jdk-cis/Desktop/PROJECTS/jdev/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/jdk-cis/Desktop/PROJECTS/jdev/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/jdk-cis/Desktop/PROJECTS/jdev/node_modules/ohash/dist/index.mjs';
import 'file:///Users/jdk-cis/Desktop/PROJECTS/jdev/node_modules/klona/dist/index.mjs';
import 'file:///Users/jdk-cis/Desktop/PROJECTS/jdev/node_modules/defu/dist/defu.mjs';
import 'file:///Users/jdk-cis/Desktop/PROJECTS/jdev/node_modules/scule/dist/index.mjs';
import 'file:///Users/jdk-cis/Desktop/PROJECTS/jdev/node_modules/unctx/dist/index.mjs';
import 'file:///Users/jdk-cis/Desktop/PROJECTS/jdev/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/jdk-cis/Desktop/PROJECTS/jdev/node_modules/pathe/dist/index.mjs';
import 'file:///Users/jdk-cis/Desktop/PROJECTS/jdev/node_modules/unhead/dist/server.mjs';
import 'file:///Users/jdk-cis/Desktop/PROJECTS/jdev/node_modules/devalue/index.js';
import 'file:///Users/jdk-cis/Desktop/PROJECTS/jdev/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/jdk-cis/Desktop/PROJECTS/jdev/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/jdk-cis/Desktop/PROJECTS/jdev/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const isMobileMenuOpen = ref(false);
    const navigationLinks = [
      { name: "About", href: "#about" },
      { name: "Tech Stack", href: "#tech-stack" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700" }, _attrs))}><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between items-center h-16"><div class="flex-shrink-0">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-xl font-bold text-gray-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` J-Dev.Online `);
          } else {
            return [
              createTextVNode(" J-Dev.Online ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden md:block"><div class="ml-10 flex items-baseline space-x-4"><!--[-->`);
      ssrRenderList(navigationLinks, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.name,
          to: link.href,
          class: "text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><button disabled class="p-2 rounded-lg text-gray-400 cursor-not-allowed" title="Theme toggle coming soon"> \u{1F319} </button></div></div><div class="md:hidden flex items-center space-x-2"><button disabled class="p-2 rounded-lg text-gray-400 cursor-not-allowed" title="Theme toggle coming soon"> \u{1F319} </button><button class="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"><span>${ssrInterpolate(unref(isMobileMenuOpen) ? "\u2715" : "\u2630")}</span></button></div></div></div>`);
      if (unref(isMobileMenuOpen)) {
        _push(`<div class="md:hidden"><div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"><!--[-->`);
        ssrRenderList(navigationLinks, (link) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: link.name,
            to: link.href,
            class: "text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 block px-3 py-2 rounded-md text-base font-medium transition-colors",
            onClick: ($event) => isMobileMenuOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const quickLinks = [
      { name: "About", href: "#about" },
      { name: "Tech Stack", href: "#tech-stack" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({
        id: "contact",
        class: "bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
      }, _attrs))}><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4"> Let&#39;s Work Together </h3><p class="text-gray-600 dark:text-gray-300 mb-4"> Available for Vue/Nuxt freelance projects, contract work, and consulting. </p><div class="space-y-2"><a href="mailto:contact@j-dev.online" class="flex items-center text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"><span class="mr-2">\u{1F4E7}</span> contact@j-dev.online </a><div class="flex items-center text-gray-600 dark:text-gray-300"><span class="mr-2">\u{1F3E2}</span> KVK: 82369423 </div></div></div><div><h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4"> Quick Links </h3><div class="grid grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(quickLinks, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.name,
          to: link.href,
          class: "text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div><div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600"><div class="flex flex-col md:flex-row justify-between items-center"><p class="text-gray-500 dark:text-gray-400 text-sm"> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} J-Dev.Online. All rights reserved. </p><div class="flex space-x-6 mt-4 md:mt-0"><a href="https://github.com/jonathankaonga" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-colors"><span>\u{1F4BB}</span></a><a href="https://linkedin.com/in/jonathankaonga" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-colors"><span>\u{1F4BC}</span></a></div></div></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = _sfc_main$2;
      const _component_Footer = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white dark:bg-gray-900 transition-colors" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-WYcu_QhR.mjs.map
