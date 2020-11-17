webpackJsonpprogram1([1],{NTw7:function(module,exports,__webpack_require__){eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else if (typeof exports !== \"undefined\") {\n    factory(exports);\n  } else {\n    var mod = {\n      exports: {}\n    };\n    factory(mod.exports);\n    global.singleSpaVue = mod.exports;\n  }\n})(this, function (_exports) {\n  \"use strict\";\n\n  Object.defineProperty(_exports, \"__esModule\", {\n    value: true\n  });\n  _exports[\"default\"] = singleSpaVue;\n\n  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\n  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n  function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n  var defaultOpts = {\n    // required opts\n    Vue: null,\n    appOptions: null,\n    template: null\n  };\n\n  function singleSpaVue(userOpts) {\n    if (_typeof(userOpts) !== 'object') {\n      throw new Error(\"single-spa-vue requires a configuration object\");\n    }\n\n    var opts = _objectSpread({}, defaultOpts, {}, userOpts);\n\n    if (!opts.Vue) {\n      throw new Error('single-spa-vuejs must be passed opts.Vue');\n    }\n\n    if (!opts.appOptions) {\n      throw new Error('single-spa-vuejs must be passed opts.appOptions');\n    } // Just a shared object to store the mounted object state\n\n\n    var mountedInstances = {};\n    return {\n      bootstrap: bootstrap.bind(null, opts, mountedInstances),\n      mount: mount.bind(null, opts, mountedInstances),\n      unmount: unmount.bind(null, opts, mountedInstances),\n      update: update.bind(null, opts, mountedInstances)\n    };\n  }\n\n  function bootstrap(opts) {\n    if (opts.loadRootComponent) {\n      return opts.loadRootComponent().then(function (root) {\n        return opts.rootComponent = root;\n      });\n    } else {\n      return Promise.resolve();\n    }\n  }\n\n  function mount(opts, mountedInstances, props) {\n    return Promise.resolve().then(function () {\n      var appOptions = _objectSpread({}, opts.appOptions);\n\n      if (props.domElement && !appOptions.el) {\n        appOptions.el = props.domElement;\n      }\n\n      if (!appOptions.el) {\n        var htmlId = \"single-spa-application:\".concat(props.name);\n        appOptions.el = \"#\".concat(htmlId.replace(':', '\\\\:'), \" .single-spa-container\");\n        var domEl = document.getElementById(htmlId);\n\n        if (!domEl) {\n          domEl = document.createElement('div');\n          domEl.id = htmlId;\n          document.body.appendChild(domEl);\n        } // single-spa-vue@>=2 always REPLACES the `el` instead of appending to it.\n        // We want domEl to stick around and not be replaced. So we tell Vue to mount\n        // into a container div inside of the main domEl\n\n\n        if (!domEl.querySelector('.single-spa-container')) {\n          var singleSpaContainer = document.createElement('div');\n          singleSpaContainer.className = 'single-spa-container';\n          domEl.appendChild(singleSpaContainer);\n        }\n\n        mountedInstances.domEl = domEl;\n      }\n\n      if (!appOptions.render && !appOptions.template && opts.rootComponent) {\n        appOptions.render = function (h) {\n          return h(opts.rootComponent);\n        };\n      }\n\n      if (!appOptions.data) {\n        appOptions.data = {};\n      }\n\n      appOptions.data = _objectSpread({}, appOptions.data, {}, props);\n      mountedInstances.instance = new opts.Vue(appOptions);\n\n      if (mountedInstances.instance.bind) {\n        mountedInstances.instance = mountedInstances.instance.bind(mountedInstances.instance);\n      }\n    });\n  }\n\n  function update(opts, mountedInstances, props) {\n    return Promise.resolve().then(function () {\n      var data = _objectSpread({}, opts.appOptions.data || {}, {}, props);\n\n      for (var prop in data) {\n        mountedInstances.instance[prop] = data[prop];\n      }\n    });\n  }\n\n  function unmount(opts, mountedInstances) {\n    return Promise.resolve().then(function () {\n      mountedInstances.instance.$destroy();\n      mountedInstances.instance.$el.innerHTML = '';\n      delete mountedInstances.instance;\n\n      if (mountedInstances.domEl) {\n        mountedInstances.domEl.innerHTML = '';\n        delete mountedInstances.domEl;\n      }\n    });\n  }\n});\n//# sourceMappingURL=single-spa-vue.js.map\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTlR3Ny5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW5nbGUtc3BhLXZ1ZS9saWIvc2luZ2xlLXNwYS12dWUuanM/MzUzYyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW1wiZXhwb3J0c1wiXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QuZXhwb3J0cyk7XG4gICAgZ2xvYmFsLnNpbmdsZVNwYVZ1ZSA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0aGlzLCBmdW5jdGlvbiAoX2V4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9leHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBfZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBzaW5nbGVTcGFWdWU7XG5cbiAgZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuICBmdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbiAgZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuICB2YXIgZGVmYXVsdE9wdHMgPSB7XG4gICAgLy8gcmVxdWlyZWQgb3B0c1xuICAgIFZ1ZTogbnVsbCxcbiAgICBhcHBPcHRpb25zOiBudWxsLFxuICAgIHRlbXBsYXRlOiBudWxsXG4gIH07XG5cbiAgZnVuY3Rpb24gc2luZ2xlU3BhVnVlKHVzZXJPcHRzKSB7XG4gICAgaWYgKF90eXBlb2YodXNlck9wdHMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2luZ2xlLXNwYS12dWUgcmVxdWlyZXMgYSBjb25maWd1cmF0aW9uIG9iamVjdFwiKTtcbiAgICB9XG5cbiAgICB2YXIgb3B0cyA9IF9vYmplY3RTcHJlYWQoe30sIGRlZmF1bHRPcHRzLCB7fSwgdXNlck9wdHMpO1xuXG4gICAgaWYgKCFvcHRzLlZ1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdzaW5nbGUtc3BhLXZ1ZWpzIG11c3QgYmUgcGFzc2VkIG9wdHMuVnVlJyk7XG4gICAgfVxuXG4gICAgaWYgKCFvcHRzLmFwcE9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignc2luZ2xlLXNwYS12dWVqcyBtdXN0IGJlIHBhc3NlZCBvcHRzLmFwcE9wdGlvbnMnKTtcbiAgICB9IC8vIEp1c3QgYSBzaGFyZWQgb2JqZWN0IHRvIHN0b3JlIHRoZSBtb3VudGVkIG9iamVjdCBzdGF0ZVxuXG5cbiAgICB2YXIgbW91bnRlZEluc3RhbmNlcyA9IHt9O1xuICAgIHJldHVybiB7XG4gICAgICBib290c3RyYXA6IGJvb3RzdHJhcC5iaW5kKG51bGwsIG9wdHMsIG1vdW50ZWRJbnN0YW5jZXMpLFxuICAgICAgbW91bnQ6IG1vdW50LmJpbmQobnVsbCwgb3B0cywgbW91bnRlZEluc3RhbmNlcyksXG4gICAgICB1bm1vdW50OiB1bm1vdW50LmJpbmQobnVsbCwgb3B0cywgbW91bnRlZEluc3RhbmNlcyksXG4gICAgICB1cGRhdGU6IHVwZGF0ZS5iaW5kKG51bGwsIG9wdHMsIG1vdW50ZWRJbnN0YW5jZXMpXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJvb3RzdHJhcChvcHRzKSB7XG4gICAgaWYgKG9wdHMubG9hZFJvb3RDb21wb25lbnQpIHtcbiAgICAgIHJldHVybiBvcHRzLmxvYWRSb290Q29tcG9uZW50KCkudGhlbihmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICByZXR1cm4gb3B0cy5yb290Q29tcG9uZW50ID0gcm9vdDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbW91bnQob3B0cywgbW91bnRlZEluc3RhbmNlcywgcHJvcHMpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgYXBwT3B0aW9ucyA9IF9vYmplY3RTcHJlYWQoe30sIG9wdHMuYXBwT3B0aW9ucyk7XG5cbiAgICAgIGlmIChwcm9wcy5kb21FbGVtZW50ICYmICFhcHBPcHRpb25zLmVsKSB7XG4gICAgICAgIGFwcE9wdGlvbnMuZWwgPSBwcm9wcy5kb21FbGVtZW50O1xuICAgICAgfVxuXG4gICAgICBpZiAoIWFwcE9wdGlvbnMuZWwpIHtcbiAgICAgICAgdmFyIGh0bWxJZCA9IFwic2luZ2xlLXNwYS1hcHBsaWNhdGlvbjpcIi5jb25jYXQocHJvcHMubmFtZSk7XG4gICAgICAgIGFwcE9wdGlvbnMuZWwgPSBcIiNcIi5jb25jYXQoaHRtbElkLnJlcGxhY2UoJzonLCAnXFxcXDonKSwgXCIgLnNpbmdsZS1zcGEtY29udGFpbmVyXCIpO1xuICAgICAgICB2YXIgZG9tRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChodG1sSWQpO1xuXG4gICAgICAgIGlmICghZG9tRWwpIHtcbiAgICAgICAgICBkb21FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGRvbUVsLmlkID0gaHRtbElkO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tRWwpO1xuICAgICAgICB9IC8vIHNpbmdsZS1zcGEtdnVlQD49MiBhbHdheXMgUkVQTEFDRVMgdGhlIGBlbGAgaW5zdGVhZCBvZiBhcHBlbmRpbmcgdG8gaXQuXG4gICAgICAgIC8vIFdlIHdhbnQgZG9tRWwgdG8gc3RpY2sgYXJvdW5kIGFuZCBub3QgYmUgcmVwbGFjZWQuIFNvIHdlIHRlbGwgVnVlIHRvIG1vdW50XG4gICAgICAgIC8vIGludG8gYSBjb250YWluZXIgZGl2IGluc2lkZSBvZiB0aGUgbWFpbiBkb21FbFxuXG5cbiAgICAgICAgaWYgKCFkb21FbC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLXNwYS1jb250YWluZXInKSkge1xuICAgICAgICAgIHZhciBzaW5nbGVTcGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBzaW5nbGVTcGFDb250YWluZXIuY2xhc3NOYW1lID0gJ3NpbmdsZS1zcGEtY29udGFpbmVyJztcbiAgICAgICAgICBkb21FbC5hcHBlbmRDaGlsZChzaW5nbGVTcGFDb250YWluZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbW91bnRlZEluc3RhbmNlcy5kb21FbCA9IGRvbUVsO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWFwcE9wdGlvbnMucmVuZGVyICYmICFhcHBPcHRpb25zLnRlbXBsYXRlICYmIG9wdHMucm9vdENvbXBvbmVudCkge1xuICAgICAgICBhcHBPcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIChoKSB7XG4gICAgICAgICAgcmV0dXJuIGgob3B0cy5yb290Q29tcG9uZW50KTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFhcHBPcHRpb25zLmRhdGEpIHtcbiAgICAgICAgYXBwT3B0aW9ucy5kYXRhID0ge307XG4gICAgICB9XG5cbiAgICAgIGFwcE9wdGlvbnMuZGF0YSA9IF9vYmplY3RTcHJlYWQoe30sIGFwcE9wdGlvbnMuZGF0YSwge30sIHByb3BzKTtcbiAgICAgIG1vdW50ZWRJbnN0YW5jZXMuaW5zdGFuY2UgPSBuZXcgb3B0cy5WdWUoYXBwT3B0aW9ucyk7XG5cbiAgICAgIGlmIChtb3VudGVkSW5zdGFuY2VzLmluc3RhbmNlLmJpbmQpIHtcbiAgICAgICAgbW91bnRlZEluc3RhbmNlcy5pbnN0YW5jZSA9IG1vdW50ZWRJbnN0YW5jZXMuaW5zdGFuY2UuYmluZChtb3VudGVkSW5zdGFuY2VzLmluc3RhbmNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZShvcHRzLCBtb3VudGVkSW5zdGFuY2VzLCBwcm9wcykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBkYXRhID0gX29iamVjdFNwcmVhZCh7fSwgb3B0cy5hcHBPcHRpb25zLmRhdGEgfHwge30sIHt9LCBwcm9wcyk7XG5cbiAgICAgIGZvciAodmFyIHByb3AgaW4gZGF0YSkge1xuICAgICAgICBtb3VudGVkSW5zdGFuY2VzLmluc3RhbmNlW3Byb3BdID0gZGF0YVtwcm9wXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVubW91bnQob3B0cywgbW91bnRlZEluc3RhbmNlcykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vdW50ZWRJbnN0YW5jZXMuaW5zdGFuY2UuJGRlc3Ryb3koKTtcbiAgICAgIG1vdW50ZWRJbnN0YW5jZXMuaW5zdGFuY2UuJGVsLmlubmVySFRNTCA9ICcnO1xuICAgICAgZGVsZXRlIG1vdW50ZWRJbnN0YW5jZXMuaW5zdGFuY2U7XG5cbiAgICAgIGlmIChtb3VudGVkSW5zdGFuY2VzLmRvbUVsKSB7XG4gICAgICAgIG1vdW50ZWRJbnN0YW5jZXMuZG9tRWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGRlbGV0ZSBtb3VudGVkSW5zdGFuY2VzLmRvbUVsO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpbmdsZS1zcGEtdnVlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbmdsZS1zcGEtdnVlL2xpYi9zaW5nbGUtc3BhLXZ1ZS5qc1xuLy8gbW9kdWxlIGlkID0gTlR3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///NTw7\n")},"VU/8":function(module,exports){eval("/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file.\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nmodule.exports = function normalizeComponent (\n  rawScriptExports,\n  compiledTemplate,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier /* server only */\n) {\n  var esModule\n  var scriptExports = rawScriptExports = rawScriptExports || {}\n\n  // ES6 modules interop\n  var type = typeof rawScriptExports.default\n  if (type === 'object' || type === 'function') {\n    esModule = rawScriptExports\n    scriptExports = rawScriptExports.default\n  }\n\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (compiledTemplate) {\n    options.render = compiledTemplate.render\n    options.staticRenderFns = compiledTemplate.staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = injectStyles\n  }\n\n  if (hook) {\n    var functional = options.functional\n    var existing = functional\n      ? options.render\n      : options.beforeCreate\n\n    if (!functional) {\n      // inject component registration as beforeCreate hook\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    } else {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return existing(h, context)\n      }\n    }\n  }\n\n  return {\n    esModule: esModule,\n    exports: scriptExports,\n    options: options\n  }\n}\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVlUvOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcz81NTRmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqL1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgdmFyIGZ1bmN0aW9uYWwgPSBvcHRpb25zLmZ1bmN0aW9uYWxcbiAgICB2YXIgZXhpc3RpbmcgPSBmdW5jdGlvbmFsXG4gICAgICA/IG9wdGlvbnMucmVuZGVyXG4gICAgICA6IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG5cbiAgICBpZiAoIWZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gZXhpc3RpbmcoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IFZVLzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///VU/8\n")},g35W:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('\n// CONCATENATED MODULE: ./node_modules/systemjs-webpack-interop/src/public-path-system-resolve.js\nfunction setPublicPath(systemjsModuleName, rootDirectoryLevel = 1) {\n  if (\n    typeof systemjsModuleName !== "string" ||\n    systemjsModuleName.trim().length === 0\n  ) {\n    throw Error(\n      "systemjs-webpack-interop: setPublicPath(systemjsModuleName) must be called with a non-empty string \'systemjsModuleName\'"\n    );\n  }\n\n  if (\n    typeof rootDirectoryLevel !== "number" ||\n    rootDirectoryLevel <= 0 ||\n    !Number.isInteger(rootDirectoryLevel)\n  ) {\n    throw Error(\n      "systemjs-webpack-interop: setPublicPath(systemjsModuleName, rootDirectoryLevel) must be called with a positive integer \'rootDirectoryLevel\'"\n    );\n  }\n\n  let moduleUrl;\n  try {\n    moduleUrl = window.System.resolve(systemjsModuleName);\n    if (!moduleUrl) {\n      throw Error();\n    }\n  } catch (err) {\n    throw Error(\n      "systemjs-webpack-interop: There is no such module \'" +\n        systemjsModuleName +\n        "\' in the SystemJS registry. Did you misspell the name of your module?"\n    );\n  }\n\n  __webpack_require__.p = resolveDirectory(moduleUrl, rootDirectoryLevel);\n}\n\nfunction resolveDirectory(urlString, rootDirectoryLevel) {\n  const url = new URL(urlString);\n  const pathname = new URL(urlString).pathname;\n  let numDirsProcessed = 0,\n    index = pathname.length;\n  while (numDirsProcessed !== rootDirectoryLevel && index >= 0) {\n    const char = pathname[--index];\n    if (char === "/") {\n      numDirsProcessed++;\n    }\n  }\n\n  if (numDirsProcessed !== rootDirectoryLevel) {\n    throw Error(\n      "systemjs-webpack-interop: rootDirectoryLevel (" +\n        rootDirectoryLevel +\n        ") is greater than the number of directories (" +\n        numDirsProcessed +\n        ") in the URL path " +\n        fullUrl\n    );\n  }\n\n  url.pathname = url.pathname.slice(0, index + 1);\n\n  return url.href;\n}\n\n// CONCATENATED MODULE: ./node_modules/systemjs-webpack-interop/src/systemjs-webpack-interop.js\n/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return setPublicPath; });\n\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZzM1Vy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zeXN0ZW1qcy13ZWJwYWNrLWludGVyb3Avc3JjL3B1YmxpYy1wYXRoLXN5c3RlbS1yZXNvbHZlLmpzPzMxYWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N5c3RlbWpzLXdlYnBhY2staW50ZXJvcC9zcmMvc3lzdGVtanMtd2VicGFjay1pbnRlcm9wLmpzPzgzN2UiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNldFB1YmxpY1BhdGgoc3lzdGVtanNNb2R1bGVOYW1lLCByb290RGlyZWN0b3J5TGV2ZWwgPSAxKSB7XG4gIGlmIChcbiAgICB0eXBlb2Ygc3lzdGVtanNNb2R1bGVOYW1lICE9PSBcInN0cmluZ1wiIHx8XG4gICAgc3lzdGVtanNNb2R1bGVOYW1lLnRyaW0oKS5sZW5ndGggPT09IDBcbiAgKSB7XG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICBcInN5c3RlbWpzLXdlYnBhY2staW50ZXJvcDogc2V0UHVibGljUGF0aChzeXN0ZW1qc01vZHVsZU5hbWUpIG11c3QgYmUgY2FsbGVkIHdpdGggYSBub24tZW1wdHkgc3RyaW5nICdzeXN0ZW1qc01vZHVsZU5hbWUnXCJcbiAgICApO1xuICB9XG5cbiAgaWYgKFxuICAgIHR5cGVvZiByb290RGlyZWN0b3J5TGV2ZWwgIT09IFwibnVtYmVyXCIgfHxcbiAgICByb290RGlyZWN0b3J5TGV2ZWwgPD0gMCB8fFxuICAgICFOdW1iZXIuaXNJbnRlZ2VyKHJvb3REaXJlY3RvcnlMZXZlbClcbiAgKSB7XG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICBcInN5c3RlbWpzLXdlYnBhY2staW50ZXJvcDogc2V0UHVibGljUGF0aChzeXN0ZW1qc01vZHVsZU5hbWUsIHJvb3REaXJlY3RvcnlMZXZlbCkgbXVzdCBiZSBjYWxsZWQgd2l0aCBhIHBvc2l0aXZlIGludGVnZXIgJ3Jvb3REaXJlY3RvcnlMZXZlbCdcIlxuICAgICk7XG4gIH1cblxuICBsZXQgbW9kdWxlVXJsO1xuICB0cnkge1xuICAgIG1vZHVsZVVybCA9IHdpbmRvdy5TeXN0ZW0ucmVzb2x2ZShzeXN0ZW1qc01vZHVsZU5hbWUpO1xuICAgIGlmICghbW9kdWxlVXJsKSB7XG4gICAgICB0aHJvdyBFcnJvcigpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICBcInN5c3RlbWpzLXdlYnBhY2staW50ZXJvcDogVGhlcmUgaXMgbm8gc3VjaCBtb2R1bGUgJ1wiICtcbiAgICAgICAgc3lzdGVtanNNb2R1bGVOYW1lICtcbiAgICAgICAgXCInIGluIHRoZSBTeXN0ZW1KUyByZWdpc3RyeS4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgbmFtZSBvZiB5b3VyIG1vZHVsZT9cIlxuICAgICk7XG4gIH1cblxuICBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHJlc29sdmVEaXJlY3RvcnkobW9kdWxlVXJsLCByb290RGlyZWN0b3J5TGV2ZWwpO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRGlyZWN0b3J5KHVybFN0cmluZywgcm9vdERpcmVjdG9yeUxldmVsKSB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwodXJsU3RyaW5nKTtcbiAgY29uc3QgcGF0aG5hbWUgPSBuZXcgVVJMKHVybFN0cmluZykucGF0aG5hbWU7XG4gIGxldCBudW1EaXJzUHJvY2Vzc2VkID0gMCxcbiAgICBpbmRleCA9IHBhdGhuYW1lLmxlbmd0aDtcbiAgd2hpbGUgKG51bURpcnNQcm9jZXNzZWQgIT09IHJvb3REaXJlY3RvcnlMZXZlbCAmJiBpbmRleCA+PSAwKSB7XG4gICAgY29uc3QgY2hhciA9IHBhdGhuYW1lWy0taW5kZXhdO1xuICAgIGlmIChjaGFyID09PSBcIi9cIikge1xuICAgICAgbnVtRGlyc1Byb2Nlc3NlZCsrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChudW1EaXJzUHJvY2Vzc2VkICE9PSByb290RGlyZWN0b3J5TGV2ZWwpIHtcbiAgICB0aHJvdyBFcnJvcihcbiAgICAgIFwic3lzdGVtanMtd2VicGFjay1pbnRlcm9wOiByb290RGlyZWN0b3J5TGV2ZWwgKFwiICtcbiAgICAgICAgcm9vdERpcmVjdG9yeUxldmVsICtcbiAgICAgICAgXCIpIGlzIGdyZWF0ZXIgdGhhbiB0aGUgbnVtYmVyIG9mIGRpcmVjdG9yaWVzIChcIiArXG4gICAgICAgIG51bURpcnNQcm9jZXNzZWQgK1xuICAgICAgICBcIikgaW4gdGhlIFVSTCBwYXRoIFwiICtcbiAgICAgICAgZnVsbFVybFxuICAgICk7XG4gIH1cblxuICB1cmwucGF0aG5hbWUgPSB1cmwucGF0aG5hbWUuc2xpY2UoMCwgaW5kZXggKyAxKTtcblxuICByZXR1cm4gdXJsLmhyZWY7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zeXN0ZW1qcy13ZWJwYWNrLWludGVyb3Avc3JjL3B1YmxpYy1wYXRoLXN5c3RlbS1yZXNvbHZlLmpzXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiZXhwb3J0IHsgc2V0UHVibGljUGF0aCB9IGZyb20gXCIuL3B1YmxpYy1wYXRoLXN5c3RlbS1yZXNvbHZlXCI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zeXN0ZW1qcy13ZWJwYWNrLWludGVyb3Avc3JjL3N5c3RlbWpzLXdlYnBhY2staW50ZXJvcC5qc1xuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDL0RBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///g35W\n')}});