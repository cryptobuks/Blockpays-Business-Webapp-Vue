import Vue from 'vue'
import { RawLocation } from 'vue-router'
import VueI18n, { IVueI18n } from 'vue-i18n'
import { NuxtI18nComponentOptions, NuxtVueI18n, NuxtI18nSeo } from './nuxt-i18n'
import { Context } from 'vm';

/**
 * Extends types in vue-i18n
 */
declare module 'vue-i18n' {
  // the VueI18n class expands here: https://goo.gl/Xtp9EG
  // it is necessary for the $i18n property in Vue interface: "readonly $i18n: VueI18n & IVueI18n"
  interface IVueI18n extends NuxtVueI18n.Options.NuxtI18nInterface {
    getLocaleCookie: () => string | undefined
    setLocaleCookie: (locale: string) => undefined
    setLocale: (locale: string) => Promise<undefined>
  }
}

/**
 * Extends types in vue
 */
declare module 'vue/types/vue' {
  interface Vue {
    localePath(route: RawLocation, locale?: string): string
    switchLocalePath(locale: string): string
    getRouteBaseName(route?: RawLocation): string
    $nuxtI18nSeo(): NuxtI18nSeo
    // PHPStorm without this indicates that "$i18n" was not found.
    readonly $i18n: VueI18n & IVueI18n & Context;
    $t: typeof VueI18n.prototype.t;
    $tc: typeof VueI18n.prototype.tc;
    $te: typeof VueI18n.prototype.te;
    $d: typeof VueI18n.prototype.d;
    $n: typeof VueI18n.prototype.n;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    nuxtI18n?: NuxtI18nComponentOptions | false
    auth?: boolean | string
  }
}

/**
 * Extends types in Nuxt
 */
declare module '@nuxt/types' {
  interface NuxtAppOptions extends NuxtVueI18n.Options.NuxtI18nInterface {
    readonly i18n: VueI18n & IVueI18n
    readonly path: VueI18n & IVueI18n
  }
}

