'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _reactRouterRedux = require('react-router-redux');

var _reactRouter = require('react-router');

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppConfigSettings = {
  name: 'Admin Panel',
  basename: 'http://localhost:8786',
  adminPath: '/r-admin',
  routerHistory: 'browserHistory',
  hot_reload: false,
  disableLogger: false,
  includeCoreData: {
    manifest: true,
    navigation: true
  },
  allHistoryOptions: 'browserHistory|hashHistory|createMemoryHistory',
  application: {
    environment: 'development',
    use_offline_cache: false
  },
  ui: {
    initialization: {
      show_header: false,
      show_footer: false,
      show_sidebar_overlay: true,
      refresh_manifests: true,
      refresh_navigation: true,
      refresh_components: true
    },
    notifications: {
      error_timeout: 10000,
      timed_timeout: 10000,
      hide_login_notification: false,
      supressResourceErrors: false
    },
    fixedSidebar: true,
    sidebarBG: '#ffffff',
    header: {
      isBold: true,
      color: 'isBlack',
      buttonColor: 'isWhite',
      useGlobalSearch: false,
      useHeaderLogout: false,
      productHeader: {
        layout: false,
        productLinks: []
      },
      customButton: {},
      profileImageStyle: {},
      navLabelStyle: {},
      containerStyle: {},
      userNameStyle: {}
    },
    footer: {
      navStyle: {}
    },
    sidebar: {
      containerStyle: {},
      use_floating_nav: false
    }
  },
  auth: {
    logged_in_homepage: '/r-admin/dashboard',
    logged_out_path: '/'
  },
  login: {
    url: '/api/jwt/token',
    devurl: '/api/jwt/token',
    options: {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        clientid: 'e2852fd35ef3c16ef206d4e34252e0e5',
        entitytype: 'account'
      }
    }
  },
  userprofile: {
    url: '/api/jwt/profile',
    devurl: '/api/jwt/profile',
    options: {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        clientid: 'e2852fd35ef3c16ef206d4e34252e0e5',
        clientid_default: 'clientIDNEEDED',
        entitytype: 'account'
      }
    }
  }
}; // import promise from 'redux-promise';

var windowState = typeof window !== 'undefined' && window.__padmin ? window.__padmin : {};
var disableLogger = function disableLogger(store) {
  return function (next) {
    return function (action) {
      // console .log('dispatching: ', action,{store});
      return next(action);
    };
  };
};
var logger = windowState.disableLogger ? disableLogger : (0, _reduxLogger2.default)();
// const logger = (store) => (next) => (action) => {
//   console.log('dispatching: ', action,{store});
//   return next(action);
// };

var getRouterHistoryType = function getRouterHistoryType(routerHistoryType) {
  return routerHistoryType === 'browserHistory' ? _reactRouter.browserHistory : _reactRouter.hashHistory;
};

var AppReduxStore = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reactRouterRedux.routerMiddleware)(getRouterHistoryType(AppConfigSettings.routerHistory))
// promise,
, logger));

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept(_reducers2.default, function () {
    var nextRootReducer = _reducers2.default;
    AppReduxStore.replaceReducer(nextRootReducer);
  });
}

exports.default = AppReduxStore;