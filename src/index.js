import React from "react";
import _ from "lodash";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import {
  match,
  createHistory,
  createMemoryHistory
} from "react-router";

import AppRouter from "components/routes/AppRouter.jsx";
import document from "utils/dom/document.js";
import App from "components/App.jsx";
import StaticApp from "components/StaticApp.jsx";

// Client render
if (typeof document !== "undefined") {
  ReactDOM.render(
    React.createElement(App, { routes: AppRouter }),
    document.getElementById("app")
  );
}

// Exported static site renderer:
export default (locals, callback) => {
  const history = createMemoryHistory();
  const location = history.createLocation(locals.path);
  const matchOpts = { routes: AppRouter, location: location };

  match(matchOpts, (error, redirectLocation, renderProps) => {
    const props = _.merge({}, renderProps, { locals: locals });
    const content = ReactDOMServer.renderToStaticMarkup(
      React.createElement(StaticApp, props)
    );

    callback(null, content);
  });
};
