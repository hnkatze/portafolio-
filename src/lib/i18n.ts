import type { BilingualText, Lang } from './types';

export function t(text: BilingualText, lang: Lang): string {
  return text[lang];
}

export function getLangFromUrl(url: URL): Lang {
  const param = url.searchParams.get('lang');
  return param === 'en' ? 'en' : 'es';
}
