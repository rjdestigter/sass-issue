import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./i18n";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// if (process.env.REACT_APP_E2E === "on") {
//   require(
//     /* webpackChunkName: "e2e-test" */
//     "./e2e.scss"
//   );

//   const node = document.createElement('div')
//   node.classList.add('___key');
//   document.body.prepend(node);
//   document.addEventListener('keydown', event => {
//     const keyNode = document.createElement('div');
//     keyNode.innerHTML = event.code;
//     node.append(keyNode)
//   }, {capture: true});
// }

if (process.env.REACT_APP_ENV_TARGET !== "prod") {
  (async function() {
    const [reactPckg, reactDomPckg, xstatePckg] = await Promise.all([
      import(
        /* webpackChunkName: "package-versions" */
        "react/package.json"
      ),
      import(
        /* webpackChunkName: "package-versions" */
        "react-dom/package.json"
      ),
      import(
        /* webpackChunkName: "package-versions" */
        "xstate/package.json"
      )
    ]);

    console.group("Package Versions");
    console.info("react: %s", reactPckg.version);
    console.info("react-dom: %s", reactDomPckg.version);
    console.info("xstate: %s", xstatePckg.version);
    console.groupEnd();
  })();
}
