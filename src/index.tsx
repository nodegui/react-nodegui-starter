// global.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {};
import { Renderer } from "@nodegui/react-nodegui";
import React from "react";
import App from "./app";
// import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';

global.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {};
global.__REACT_DEVTOOLS_GLOBAL_HOOK__.nativeObjectCreate = Object.create;
global.__REACT_DEVTOOLS_GLOBAL_HOOK__.nativeMap = Map;

process.title = "My NodeGui App";
Renderer.render(<App />);

// This is for hot reloading (this will be stripped off in production by webpack)
if (module.hot) {
  module.hot.accept(["./app"], function() {
    Renderer.forceUpdate();
  });
}
