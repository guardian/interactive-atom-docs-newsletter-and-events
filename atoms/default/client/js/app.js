// if you want to import a module from shared/js then you can
// just do e.g. import Scatter from "shared/js/scatter.js"

if (isWeb() && isFramed() && isDesktop()) {
  const atomEl = parent.document.querySelector("[data-atom-id=' interactives/2020/08/docs-events-and-newsletter'], [data-atom-id=' interactives/2019/10/test/default']");

  atomEl.style.transform = 'translateX(-20px)';
  atomEl.style.marginRight = '-20px';
  atomEl.style.paddingRight = '20px';
  atomEl.style.zIndex = '1';

} else {
  console.log(isWeb());
  console.log(isFramed());
  console.log(isDesktop());
}

function isFramed() {
  return (parent.document && parent.document != document);
}

function isWeb() {
  return (parent.document.body.id == 'top');
}

function isDesktop() {
  return (parent.window.innerWidth > 740);
}
