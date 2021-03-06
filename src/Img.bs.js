// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Belt_MutableMapString from "bs-platform/lib/es6/belt_MutableMapString.mjs";

var cache = Belt_MutableMapString.make(undefined);

var throwPromise = (function(promise) {
    throw promise
  });

function read(src) {
  var match = Belt_MutableMapString.get(cache, src);
  if (match !== undefined) {
    if (match) {
      return throwPromise(match._0);
    } else {
      return ;
    }
  }
  var p = new Promise((function (resolve, reject) {
          var image = new window.Image();
          image.src = src;
          image.onload = (function () {
              Belt_MutableMapString.set(cache, src, /* Success */0);
              return resolve(src);
            });
          image.onerror = reject;
          
        }));
  Belt_MutableMapString.set(cache, src, /* Loading */{
        _0: p
      });
  return throwPromise(p);
}

function Img(Props) {
  var src = Props.src;
  read(src);
  return React.createElement("img", {
              src: src
            });
}

var $$Map;

var make = Img;

export {
  $$Map ,
  cache ,
  throwPromise ,
  read ,
  make ,
  
}
/* cache Not a pure module */
