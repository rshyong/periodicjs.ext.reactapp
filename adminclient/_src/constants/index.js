'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
};
exports.default = {
  pages: {
    LOAD_PAGE_ACTION: 'load page component',
    INITIAL_APP_LOADED: 'loaded initial app state',
    RESET_APP_LOADED: 'resetting initial app state',
    ASYNCSTORAGE_KEY: 'current_view',
    UPDATE_APP_DIMENSIONS: 'update dimensions state'
  },
  tabBarExtensions: {
    SET_EXTENSIONS_ACTION: 'set tabBarExtensions'
  },
  fetchData: {
    FETCH_DATA_REQUEST: 'fetching data request',
    FETCH_DATA_FAILURE: 'fetching data failed',
    FETCH_DATA_SUCCESS: 'fetching data succeeded'
  },
  user: {
    LOGIN_DATA_REQUEST: 'user logining data request',
    USER_DATA_FAILURE: 'user fetching data failed',
    LOGIN_DATA_SUCCESS: 'user login fetching data succeeded',
    SAVE_DATA_SUCCESS: 'user profile saving data succeeded',
    UPDATE_PROFILE_SUCCESS: 'user profile data updated',
    LOGOUT_REQUEST: 'user logout request',
    LOGOUT_SUCCESS: 'user logout succeeded',
    LOGOUT_FAILURE: 'user logout failed',
    PREFERENCE_LOAD_SUCCESS: 'preferences loaded',
    PREFERENCE_LOAD_ERROR: 'preferences failed',
    PREFERENCE_REQUEST: 'perferences request',
    NAVIGATION_LOAD_SUCCESS: 'navigation loaded',
    NAVIGATION_LOAD_ERROR: 'navigation failed',
    NAVIGATION_REQUEST: 'navigation request',
    MFA_AUTHENTICATED: 'mfa authenticated'
    // CURRENT_USER_STATUS:'get current login status',    
  },
  clientCacheData: {
    CLIENT_CACHE_DATA_REQUEST: 'client cache data save request',
    CLIENT_CACHE_DATA_FAILURE: 'client cache data failed',
    CLIENT_CACHE_DATA_SUCCESS: 'client cache data succeeded'
  },
  dynamic: {
    SET_DYNAMIC_DATA: 'set dynamic data'
    // SHOW_ERROR:'show error notification',
  },
  output: {
    OUTPUT_FILE_DATA_SUCCESS: 'output data to file',
    OUTPUT_FILE_DATA_ERROR: 'error outputing data to file'
    // SHOW_ERROR:'show error notification',
  },
  jwt_token: {
    TOKEN_NAME: AppConfigSettings.name + '_jwt_token',
    TOKEN_DATA: AppConfigSettings.name + '_jwt_token_data',
    PROFILE_JSON: AppConfigSettings.name + '_jwt_profile'
  },
  cache: {
    CONFIGURATION_CACHE: AppConfigSettings.name + '_configuration'
  },
  manifest: {
    MANIFEST_DATA_REQUEST: 'manifest data request',
    MANIFEST_DATA_FAILURE: 'manifest data failed',
    MANIFEST_DATA_SUCCESS: 'manifest data succeeded',
    UNAUTHENTICATED_MANIFEST_DATA_REQUEST: 'unauthenticated manifest data request',
    UNAUTHENTICATED_MANIFEST_DATA_FAILURE: 'unauthenticated manifest data failed',
    UNAUTHENTICATED_MANIFEST_DATA_SUCCESS: 'unauthenticated manifest data succeeded'
  },
  notification: {
    SHOW_TIMED_NOTIFICATION: 'show timed notification',
    SHOW_STATIC_NOTIFICATION: 'show static notification',
    HIDE_NOTIFICATION: 'hide notification',
    FAILED_NOTIFICATION_CREATION: 'failed to create notification',
    SHOW_MODAL: 'show modal',
    HIDE_MODAL: 'hide modal'
  },
  ui: {
    TOGGLE_SIDEBAR: 'toggle side menu',
    OPEN_SIDEBAR: 'open side menu',
    CLOSE_SIDEBAR: 'close side menu',
    SET_UI_LOADED: 'set ui loaded state',
    SET_NAV_LABEL: 'set navigation label',
    LOAD_NAV_DATA_SUCCESS: 'set nav ui loaded state',
    LOGIN_COMPONENT: 'fetchLoginComponent',
    MAIN_COMPONENT: 'fetchMainComponent',
    ERROR_COMPONENTS: 'fetchErrorComponents',
    SET_SELECTED_NAV_STATE: 'making nav item active'
    // GET_APP_STATE:'get current app state',
  },
  settings: {
    UPDATE_APP_SETTINGS: 'update application settings'
  }
};