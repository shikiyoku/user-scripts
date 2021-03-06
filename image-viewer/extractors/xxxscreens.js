/** @typedef {import('../url-extractor').Extractor} Extractor */

/*
  upload doesn't work at the moment
*/

/** @type {Extractor} */
export const xxxscreens = {
  name: 'XXXScreens.com',
  linkRegEx: /^http:\/\/xxxscreens\.com/,

  async getUrl(link) {
    return link.thumbnailUrl.replace('small/', 'big/')
  },
}
