export default (rawStr) => {
  /**
   * SOURCE: http://stackoverflow.com/questions/18749591/encode-html-entities-in-javascript
   */
  return rawStr.replace(/[\u00A0-\u9999<>\&]/gim, (i) => {
    return `&#${i.charCodeAt(0)};`;
  });
};
