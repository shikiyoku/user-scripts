/** @typedef {import('../url-extractor').Extractor} Extractor */

/*
  Obsolete. Replaced by stuffed.ru
*/

/** @type {Extractor} */
export const picage = {
  name: 'picage.ru',
  linkRegEx: /^http:\/\/picage\.ru/,

  async getUrl(link) {
    return link.thumbnailUrl.replace('picage', 'pic4you').replace('-thumb', '')
  },
}
