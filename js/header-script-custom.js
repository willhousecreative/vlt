// https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists

/********
 * To use it:
 *
 * waitForElm('.some-class').then((elm) => {
 *   console.log('Element is ready');
 *   console.log(elm.textContent);
 * });
 * Or with async/await:
 *
 * const elm = await waitForElm('.some-class');
 *
 */
function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        resolve(document.querySelector(selector));
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}
