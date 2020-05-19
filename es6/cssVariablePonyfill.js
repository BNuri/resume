const checkForIE = () => {
  const userAgent = window.navigator.userAgent;
  const msie = userAgent.indexOf("MSIE ");
  if (msie > 0) {
    //IE 10 or older
    return parseInt(
      userAgent.substring(msie + 5, userAgent.indexOf(".", misie)),
      10
    );
  }
  const trident = userAgent.indexOf("Trident/");
  if (trident > 0) {
    //IE 11 => return version number
    const rv = userAgent.indexOf("rv:");
    return parseInt(
      userAgent.substring(rv + 3, userAgent.indexOf(".", rv)),
      10
    );
  }
  return false;
};

const MSLegacy = checkForIE();
if (MSLegacy !== false) {
  const insert = document.getElementsByTagName("head")[0];
  const script = document.createElement("script");
  script.setAttribute(
    "src",
    "https://cdn.jsdelivr.net/npm/css-vars-ponyfill@2"
  );
  insert.appendChild(script);
}

window.addEventListener("DOMContentLoaded", () => {
  if (MSLegacy !== false) {
    cssVars();
  }
});

// https://ttntm.me/blog/using-css-variables-internet-explorer/
