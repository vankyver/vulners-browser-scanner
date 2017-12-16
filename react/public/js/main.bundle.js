webpackJsonp([0],{

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isChrome = /google/i.test(navigator.vendor);
var browser = isChrome ? chrome : browser;

exports.browser = browser;

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "footer",
                { className: "page-footer grey darken-4" },
                _react2.default.createElement(
                    "div",
                    { className: "footer-copyright" },
                    _react2.default.createElement(
                        "div",
                        { className: "container" },
                        "2017 Vulners.com",
                        _react2.default.createElement(
                            "a",
                            { className: "grey-text text-lighten-4 right", href: "https://vulners.com?utm_source=scanner&utm_medium=chromePlugin&utm_campaign=scan" },
                            "vulners.com"
                        )
                    )
                )
            );
        }
    }]);

    return Footer;
}(_react2.default.Component);

exports.default = Footer;

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var loadData = exports.loadData = function loadData(vulners) {
    return {
        type: 'LOAD_DATA',
        vulners: vulners
    };
};

var changeSettings = exports.changeSettings = function changeSettings(settings) {
    return {
        type: 'CHANGE_SETTINGS',
        settings: settings
    };
};

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(76);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(220);

var _App = __webpack_require__(221);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
    _reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('body'));
});

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "css/index.css";

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(222);

var _Route = __webpack_require__(63);

var _Route2 = _interopRequireDefault(_Route);

var _Layout = __webpack_require__(249);

var _Layout2 = _interopRequireDefault(_Layout);

var _Main = __webpack_require__(282);

var _Main2 = _interopRequireDefault(_Main);

var _Search = __webpack_require__(283);

var _Search2 = _interopRequireDefault(_Search);

var _Credits = __webpack_require__(288);

var _Credits2 = _interopRequireDefault(_Credits);

var _Switch = __webpack_require__(107);

var _Switch2 = _interopRequireDefault(_Switch);

var _reactRedux = __webpack_require__(39);

var _store = __webpack_require__(289);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, App);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.openLink = function (url) {
            return url && browser.runtime.sendMessage({ action: 'open_link', url: url });
        }, _this.render = function () {
            return _react2.default.createElement(
                _reactRedux.Provider,
                { store: _store.store },
                _react2.default.createElement(
                    _reactRouterDom.MemoryRouter,
                    null,
                    _react2.default.createElement(
                        _Switch2.default,
                        null,
                        _react2.default.createElement(_Route2.default, { path: '/main', component: _Main2.default }),
                        _react2.default.createElement(
                            _Layout2.default,
                            null,
                            _react2.default.createElement(_Route2.default, { exact: true, path: '/', component: _Search2.default }),
                            _react2.default.createElement(_Route2.default, { path: '/credits', component: _Credits2.default })
                        )
                    )
                )
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var _this2 = this;

            document.querySelectorAll('a').forEach(function (a) {
                return a.addEventListener('click', function (e) {
                    return _this2.openLink(e.target.href || e.target.parentElement.href);
                });
            });
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(250);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(117);

var _Footer2 = _interopRequireDefault(_Footer);

var _Navbar = __webpack_require__(280);

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
    _inherits(Layout, _Component);

    function Layout() {
        _classCallCheck(this, Layout);

        return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
    }

    _createClass(Layout, [{
        key: "componentDidMount",


        /**
         * Animation components
         */
        value: function componentDidMount() {
            $('.button-collapse').sideNav({
                menuWidth: 300, // Default is 300
                edge: 'right', // Choose the horizontal origin
                closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                draggable: true // Choose whether you can drag to open on touch screens,
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "body" },
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(_Navbar2.default, null),
                this.props.children,
                _react2.default.createElement(_Footer2.default, null)
            );
        }
    }]);

    return Layout;
}(_react.Component);

exports.default = Layout;

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(39);

var _utils = __webpack_require__(68);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = (_dec = (0, _reactRedux.connect)((0, _utils.mstp)('stat')), _dec(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Header);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var stat = _this.props.stat;

            return _react2.default.createElement(
                'div',
                { id: 'header' },
                _react2.default.createElement(
                    'nav',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'nav-wrapper grey darken-3' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'left stat' },
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    ' vulnerable ',
                                    _react2.default.createElement(
                                        'span',
                                        { id: 'stat-vulnerable' },
                                        stat.vulnerable
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    ' found ',
                                    _react2.default.createElement(
                                        'span',
                                        { id: 'stat-vulnerable' },
                                        stat.found
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    ' scanned ',
                                    _react2.default.createElement(
                                        'span',
                                        { id: 'stat-scanned' },
                                        stat.scanned
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'ul',
                            { className: 'right ' },
                            _react2.default.createElement(
                                'a',
                                { href: '#', 'data-activates': 'slide-out', className: 'button-collapse' },
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'i',
                                        { className: 'material-icons' },
                                        'settings'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Header;
}(_react.Component), _class2.defaultProps = { stat: {} }, _temp2)) || _class);
exports.default = Header;

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(39);

var _utils = __webpack_require__(68);

var _shallowEqual = __webpack_require__(281);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _actions = __webpack_require__(118);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = (_dec = (0, _reactRedux.connect)((0, _utils.mstp)('settings'), { changeSettings: _actions.changeSettings }), _dec(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(Navbar, _Component);

    function Navbar() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Navbar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            showAllDomains: false,
            showOnlyVulnerable: false
        }, _this.componentWillReceiveProps = function (newProps) {
            return _this.setState(_extends({}, newProps['settings']));
        }, _this.onSettingChange = function (cmp) {
            return _this.setState(Object.assign(_this.state, _defineProperty({}, cmp, !_this.state[cmp])), function () {
                _this.props.changeSettings(_this.state);
            });
        }, _this.render = function () {
            return _react2.default.createElement(
                'ul',
                { id: 'slide-out', className: 'side-nav' },
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'user-view' },
                        _react2.default.createElement(
                            'a',
                            { href: '#' },
                            _react2.default.createElement(
                                'div',
                                { className: 'background' },
                                _react2.default.createElement('img', { src: '/img/background_new.jpg' })
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'white-text name' },
                                'Settings'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'switch' },
                        _react2.default.createElement(
                            'label',
                            null,
                            _react2.default.createElement('input', { id: 'show_all_domains', type: 'checkbox', checked: _this.state.showAllDomains, onChange: function onChange() {
                                    return _this.onSettingChange('showAllDomains');
                                } }),
                            _react2.default.createElement('span', { className: 'lever' }),
                            'Show all domains'
                        )
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'switch' },
                        _react2.default.createElement(
                            'label',
                            null,
                            _react2.default.createElement('input', { id: 'show_only_vulnerable', type: 'checkbox', checked: _this.state.showOnlyVulnerable, onChange: function onChange() {
                                    return _this.onSettingChange('showOnlyVulnerable');
                                } }),
                            _react2.default.createElement('span', { className: 'lever' }),
                            'Show only vulnerable'
                        )
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement('div', { className: 'divider' })
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: '#' },
                        _react2.default.createElement(
                            'i',
                            { className: 'material-icons delete' },
                            'delete'
                        ),
                        'Clear all Data'
                    )
                )
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Navbar;
}(_react.Component), _class2.defaultProps = { settings: {} }, _temp2)) || _class);
exports.default = Navbar;

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _Footer = __webpack_require__(117);

var _Footer2 = _interopRequireDefault(_Footer);

var _Link = __webpack_require__(62);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        "div",
        { className: "body background-image" },
        _react2.default.createElement(
            "div",
            { id: "index-content", className: "center-align" },
            _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement("img", { id: "logo", src: "/img/logo_small.png" })
            ),
            _react2.default.createElement(
                "h3",
                null,
                "Welcome to Vulners web scanner!"
            ),
            _react2.default.createElement(
                "p",
                null,
                "Extension provides ability to passively scan web-sites while you surf internet"
            ),
            _react2.default.createElement("br", null),
            _react2.default.createElement(
                _Link2.default,
                { to: "/search", className: "waves-effect waves-light btn-large amber darken-4" },
                _react2.default.createElement(
                    "i",
                    { className: "material-icons right" },
                    "arrow_forward"
                ),
                "Start scan"
            )
        ),
        _react2.default.createElement(_Footer2.default, null)
    );
};

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _Domain = __webpack_require__(284);

var _Domain2 = _interopRequireDefault(_Domain);

var _actions = __webpack_require__(118);

var _reactRedux = __webpack_require__(39);

var _utils = __webpack_require__(68);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mapStateToProps = function mapStateToProps(state) {
    console.log('[SEARCH PROPS]', state);
    var v = state.vulners;
    var settings = v.settings;

    if (settings) {
        if (!settings.showAllDomains && v.url) {
            v.data = _defineProperty({}, v.url, v.data[v.url]);
        }
    }

    return {
        data: v.data
    };
};

var Search = (_dec = (0, _reactRedux.connect)(mapStateToProps, { loadData: _actions.loadData }), _dec(_class = function (_React$Component) {
    _inherits(Search, _React$Component);

    function Search() {
        _classCallCheck(this, Search);

        return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
    }

    _createClass(Search, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.props.loadData();
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            $('.tooltipped').tooltip({ delay: 50 });
            $('.collapsible').collapsible();
        }
    }, {
        key: "render",
        value: function render() {
            var data = this.props.data || {};

            console.log('{DATA}', data);
            return _react2.default.createElement(
                "div",
                { id: "index-content", className: "center-align" },
                Object.keys(data).map(function (name) {
                    return _react2.default.createElement(_Domain2.default, { key: name, name: name, software: data[name] });
                })
            );
        }
    }]);

    return Search;
}(_react2.default.Component)) || _class);
exports.default = Search;

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _Software = __webpack_require__(285);

var _Software2 = _interopRequireDefault(_Software);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Domain = (_temp = _class = function (_React$Component) {
    _inherits(Domain, _React$Component);

    function Domain() {
        _classCallCheck(this, Domain);

        return _possibleConstructorReturn(this, (Domain.__proto__ || Object.getPrototypeOf(Domain)).apply(this, arguments));
    }

    _createClass(Domain, [{
        key: 'render',
        value: function render() {
            var software = this.props.software;
            var name = this.props.name;

            return _react2.default.createElement(
                'div',
                { key: name, className: 'center-align' },
                _react2.default.createElement(
                    'span',
                    { className: 'domain-name amber-text text-darken-4' },
                    name
                ),
                _react2.default.createElement(
                    'ul',
                    { className: 'collapsible', 'data-collapsible': 'expandable' },
                    Object.keys(software).map(function (softName) {
                        return _react2.default.createElement(_Software2.default, _extends({ key: softName }, software[softName]));
                    })
                )
            );
        }
    }]);

    return Domain;
}(_react2.default.Component), _class.propTypes = {
    name: _react2.default.PropTypes.string,
    software: _react2.default.PropTypes.object
}, _class.defaultProps = {
    name: '',
    software: {}
}, _temp);
exports.default = Domain;

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _Score = __webpack_require__(286);

var _Score2 = _interopRequireDefault(_Score);

var _Vulnerability = __webpack_require__(287);

var _Vulnerability2 = _interopRequireDefault(_Vulnerability);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    return _react2.default.createElement(
        "li",
        { className: ["soft"].concat(props.score && "hoverable").join(' ') },
        _react2.default.createElement(
            "div",
            { className: "collapsible-header" },
            _react2.default.createElement(
                "span",
                null,
                props.software,
                " ",
                props.version ? "-" + props.version : ""
            ),
            _react2.default.createElement(_Score2.default, { score: props.score, scoreColor: props.scoreColor })
        ),
        _react2.default.createElement(
            "div",
            { className: "collapsible-body" },
            _react2.default.createElement(
                "ul",
                { className: "collection" },
                props.vulnerabilities.map(function (v) {
                    return _react2.default.createElement(_Vulnerability2.default, _extends({ key: v.id }, v));
                })
            )
        )
    );
};

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    return props.score ? _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'span',
            { style: { fontSize: '16px', color: props.scoreColor } },
            props.score
        )
    ) : _react2.default.createElement(
        'div',
        { className: 'light-green-text' },
        'Not vulnerable'
    );
};

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (v) {
    return _react2.default.createElement(
        "li",
        { key: v.id, className: "collection-item data-item" },
        _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
                "a",
                { className: "", href: "https://vulners.com/" + v.type + "/" + v.id + "?utm_source=scanner&utm_medium=chromePlugin&utm_campaign=scan" },
                _react2.default.createElement(
                    "span",
                    { className: "title" },
                    v.id
                )
            ),
            _react2.default.createElement(
                "span",
                { className: "truncate data-title " },
                v.title
            )
        ),
        _react2.default.createElement(
            "a",
            { className: "secondary-content" },
            _react2.default.createElement(
                "span",
                { style: { fontSize: '16px', color: v.scoreColor } },
                v.score
            )
        )
    );
};

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Credits = function (_React$Component) {
    _inherits(Credits, _React$Component);

    function Credits() {
        _classCallCheck(this, Credits);

        return _possibleConstructorReturn(this, (Credits.__proto__ || Object.getPrototypeOf(Credits)).apply(this, arguments));
    }

    _createClass(Credits, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', null);
        }
    }]);

    return Credits;
}(_react2.default.Component);

exports.default = Credits;

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.store = undefined;
exports.configureStore = configureStore;

var _redux = __webpack_require__(66);

var _reducers = __webpack_require__(290);

var _dataService = __webpack_require__(291);

var _dataService2 = _interopRequireDefault(_dataService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore() {
    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return (0, _redux.createStore)(_reducers.reducers, initialState, (0, _redux.applyMiddleware)(_dataService2.default));
}

var store = exports.store = configureStore();

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reducers = exports.vulners = undefined;

var _redux = __webpack_require__(66);

var vulners = exports.vulners = function vulners() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {

        case 'LOAD_DATA_RECEIVED':
            return Object.assign({}, state, action);

        default:
            return state;
    }
};

var reducers = exports.reducers = (0, _redux.combineReducers)({
    vulners: vulners
});

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Browser = __webpack_require__(116);

var sendMessage = function sendMessage(message, callback) {
    _Browser.browser.tabs.getSelected(function (tab) {
        _Browser.browser.runtime.sendMessage(Object.assign(message, { tab_id: tab.id }), callback);
    });
};

exports.default = function (store) {
    return function (next) {
        return function (action) {

            next(action);

            switch (action.type) {

                case 'LOAD_DATA':
                    return sendMessage({ action: 'show_vulnerabilities' }, function (vulners) {
                        next(_extends({
                            type: 'LOAD_DATA_RECEIVED'
                        }, vulners));
                    });

                case 'CHANGE_SETTINGS':
                    return sendMessage({ action: 'change_settings', settings: action.settings });

            }
        };
    };
};

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mstp = undefined;

var _Browser = __webpack_require__(116);

/**
 * mapStateToProps
 * @return {function(*, *)}
 */
var mstp = function mstp() {
    for (var _len = arguments.length, propNames = Array(_len), _key = 0; _key < _len; _key++) {
        propNames[_key] = arguments[_key];
    }

    return function (state, ownProps) {
        var newProps = {};
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = propNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var pn = _step.value;

                if (typeof pn === 'function') {
                    pn(state, ownProps);
                } else {
                    newProps[pn] = state.vulners[pn];
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return newProps;
    };
};

exports.mstp = mstp;

/***/ })

},[219]);
//# sourceMappingURL=main.bundle.js.map