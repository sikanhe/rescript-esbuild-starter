// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as ReactDom from "react-dom";

import './App.css'
;

function App$App(Props) {
  return React.createElement("div", undefined, React.createElement("img", {
                  src: "https://rescript-lang.org/static/rescript_logo_black.svg"
                }), React.createElement("div", {
                  className: "esbuild"
                }, React.createElement("img", {
                      src: "https://esbuild.github.io/favicon.svg"
                    }), React.createElement("div", {
                      style: {
                        fontFamily: "sans-serif"
                      }
                    }, "esbuild")));
}

var App = {
  make: App$App
};

var root = document.querySelector("#root");

if (!(root == null)) {
  ReactDom.render(React.createElement(App$App, {}), root);
}

export {
  App ,
  
}
/*  Not a pure module */
