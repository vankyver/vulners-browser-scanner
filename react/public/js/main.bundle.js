webpackJsonp([0],{

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

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
                            { className: "grey-text text-lighten-4 right", target: "_blank", href: "https://vulners.com?utm_source=scanner&utm_medium=chromePlugin&utm_campaign=scan" },
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
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(17);

var _utils = __webpack_require__(24);

var _actions = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HiddenSoft = (_dec = (0, _reactRedux.connect)((0, _utils.mstp)('settings'), { changeSettings: _actions.changeSettings }), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
    _inherits(HiddenSoft, _React$Component);

    function HiddenSoft() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, HiddenSoft);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HiddenSoft.__proto__ || Object.getPrototypeOf(HiddenSoft)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            showOnlyVulnerable: false
        }, _this.componentWillReceiveProps = function (newProps) {
            return _this.setState(_extends({}, newProps['settings']));
        }, _this.onSettingChange = function () {
            return _this.setState(Object.assign(_this.state, { showOnlyVulnerable: !_this.state.showOnlyVulnerable }), function () {
                _this.props.changeSettings(_this.state);
            });
        }, _this.render = function () {
            var _this$props = _this.props,
                hiddenSoft = _this$props.hiddenSoft,
                settings = _this$props.settings;


            if (!settings.showOnlyVulnerable || !hiddenSoft) {
                return _react2.default.createElement('span', null);
            }

            var softLength = Object.values(hiddenSoft.software).filter(function (s) {
                return !s.vulnerabilities.length;
            }).length;

            if (!softLength) {
                return _react2.default.createElement('span', null);
            }

            return _react2.default.createElement(
                'span',
                { className: 'color-black' },
                _react2.default.createElement('br', null),
                softLength,
                ' fingerprint',
                softLength > 1 && 's',
                ' ',
                _react2.default.createElement(
                    'a',
                    { href: '#', onClick: function onClick() {
                            return _this.onSettingChange();
                        } },
                    'hidden'
                )
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return HiddenSoft;
}(_react2.default.Component), _class2.propTypes = {
    hiddenSoft: _propTypes2.default.any
}, _temp2)) || _class);
exports.default = HiddenSoft;

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(77);

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

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(222);

var _Route = __webpack_require__(65);

var _Route2 = _interopRequireDefault(_Route);

var _Layout = __webpack_require__(249);

var _Layout2 = _interopRequireDefault(_Layout);

var _Main = __webpack_require__(282);

var _Main2 = _interopRequireDefault(_Main);

var _Search = __webpack_require__(283);

var _Search2 = _interopRequireDefault(_Search);

var _Credits = __webpack_require__(290);

var _Credits2 = _interopRequireDefault(_Credits);

var _Switch = __webpack_require__(108);

var _Switch2 = _interopRequireDefault(_Switch);

var _reactRedux = __webpack_require__(17);

var _store = __webpack_require__(291);

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
            return url && v_browser.runtime.sendMessage({ action: 'open_link', url: url });
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
                        _react2.default.createElement(_Route2.default, { exact: true, path: '/main', component: _Main2.default }),
                        _react2.default.createElement(
                            _Layout2.default,
                            null,
                            _react2.default.createElement(_Route2.default, { exact: true, path: '/', component: _Search2.default }),
                            _react2.default.createElement(_Route2.default, { exact: true, path: '/credits', component: _Credits2.default })
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

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

                newProps[pn] = state[pn];
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

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

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
                _react2.default.createElement(
                    "div",
                    { className: "scroll-layout" },
                    this.props.children,
                    _react2.default.createElement(_Footer2.default, null)
                )
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

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(17);

var _utils = __webpack_require__(24);

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

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(17);

var _utils = __webpack_require__(24);

var _shallowEqual = __webpack_require__(281);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _actions = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = (_dec = (0, _reactRedux.connect)((0, _utils.mstp)('settings'), { changeSettings: _actions.changeSettings, clearData: _actions.clearData }), _dec(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(Navbar, _Component);

    function Navbar() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Navbar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            doExtraScan: false,
            showAllDomains: false,
            showOnlyVulnerable: false
        }, _this.componentWillReceiveProps = function (newProps) {
            return _this.setState(_extends({}, newProps['settings']));
        }, _this.componentDidMount = function () {
            return $(_this.refs.helpExtraScan).tooltip({ delay: 50 });
        }, _this.onSettingChange = function (cmp) {
            return _this.setState(Object.assign(_this.state, _defineProperty({}, cmp, !_this.state[cmp])), function () {
                _this.props.changeSettings(_this.state);
            });
        }, _this.render = function () {
            return _react2.default.createElement(
                'ul',
                { id: 'slide-out', className: 'side-nav settings' },
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
                            _react2.default.createElement('input', { type: 'checkbox', checked: _this.state.showAllDomains, onChange: function onChange() {
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
                            _react2.default.createElement('input', { type: 'checkbox', checked: _this.state.showOnlyVulnerable, onChange: function onChange() {
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
                        'div',
                        { className: 'switch' },
                        _react2.default.createElement(
                            'label',
                            { className: 'settings-lever-label' },
                            _react2.default.createElement('input', { type: 'checkbox', checked: _this.state.doExtraScan, onChange: function onChange() {
                                    return _this.onSettingChange('doExtraScan');
                                } }),
                            _react2.default.createElement('span', { className: 'lever' }),
                            'Do extra scan of resources',
                            _react2.default.createElement(
                                'i',
                                { ref: 'helpExtraScan',
                                    className: 'material-icons',
                                    'data-tooltip': 'extension will do second request to receive and parse content of static files' },
                                'help'
                            )
                        )
                    )
                ),
                _react2.default.createElement('li', { className: 'settings-hero' }),
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
                        { href: '#', onClick: function onClick() {
                                return _this.props.clearData();
                            } },
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
exports.default = undefined;

var _dec, _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Footer = __webpack_require__(117);

var _Footer2 = _interopRequireDefault(_Footer);

var _Link = __webpack_require__(64);

var _Link2 = _interopRequireDefault(_Link);

var _utils = __webpack_require__(24);

var _reactRedux = __webpack_require__(17);

var _actions = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = (_dec = (0, _reactRedux.connect)((0, _utils.mstp)('landingSeen'), { changeLandingSeen: _actions.changeLandingSeen }), _dec(_class = function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Main);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Main.__proto__ || Object.getPrototypeOf(Main)).call.apply(_ref, [this].concat(args))), _this), _this.onNextClick = function () {
            localStorage.setItem('landingSeen', true);
            _this.props.history.push('/');
        }, _this.render = function () {

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
                        { to: "#", onClick: function onClick() {
                                return _this.onNextClick();
                            }, className: "vulners-start-btn waves-effect waves-light btn-large amber darken-4" },
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
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Main;
}(_react2.default.Component)) || _class);
exports.default = Main;

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Domain = __webpack_require__(284);

var _Domain2 = _interopRequireDefault(_Domain);

var _NotVulnerable = __webpack_require__(288);

var _NotVulnerable2 = _interopRequireDefault(_NotVulnerable);

var _actions = __webpack_require__(41);

var _reactRedux = __webpack_require__(17);

var _SearchField = __webpack_require__(289);

var _SearchField2 = _interopRequireDefault(_SearchField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state, filter) {
    var data = state.data,
        settings = state.settings,
        url = state.url,
        landingSeen = state.landingSeen;

    var domainSoft = url && data.find(function (domain) {
        return domain.name === url;
    });

    data = [].concat(data);

    if (!settings.showAllDomains && url) {
        data = domainSoft ? [domainSoft] : [];
    }

    if (settings.showOnlyVulnerable) {
        data = data.filter(function (domain) {
            return domain.vulnerable;
        });
    }

    console.log('[SEARCH]', data);
    return { data: data, settings: settings, url: url, domainSoft: domainSoft, landingSeen: landingSeen };
};

var Search = (_dec = (0, _reactRedux.connect)(mapStateToProps, { loadData: _actions.loadData }), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
    _inherits(Search, _React$Component);

    function Search() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Search);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            searchValue: ''
        }, _this.componentDidMount = function () {
            _this.props.loadData();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Search, [{
        key: "onSearchChange",
        value: function onSearchChange(searchValue) {
            this.setState({ searchValue: searchValue });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                data = _props.data,
                settings = _props.settings,
                url = _props.url,
                domainSoft = _props.domainSoft,
                landingSeen = _props.landingSeen;
            var searchValue = this.state.searchValue;


            if (!localStorage.getItem('landingSeen')) {
                this.props.history.push('/main');
            }

            if (!data.length) {
                return _react2.default.createElement(_NotVulnerable2.default, { url: url, data: data, hiddenSoft: domainSoft });
            }

            if (searchValue) {
                var re = new RegExp(searchValue, 'ig');
                data = data.filter(function (d) {
                    return re.test(Object.keys(d.software).join() + d.name + d.score);
                });
            }

            return _react2.default.createElement(
                "div",
                { id: "index-content", className: "center-align" },
                settings.showAllDomains && _react2.default.createElement(_SearchField2.default, { onChange: function onChange(e) {
                        return _this2.onSearchChange(e.target.value);
                    } }),
                data.map(function (domain) {
                    return _react2.default.createElement(_Domain2.default, { key: domain.name, name: domain.name, vulnerable: domain.vulnerable, software: domain['software'], hiddenSoft: domainSoft });
                })
            );
        }
    }]);

    return Search;
}(_react2.default.Component), _class2.propTypes = {}, _class2.defaultPropTypes = {
    data: [],
    settings: {}
}, _temp2)) || _class);
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

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(17);

var _Software = __webpack_require__(285);

var _Software2 = _interopRequireDefault(_Software);

var _utils = __webpack_require__(24);

var _HiddenSoft = __webpack_require__(118);

var _HiddenSoft2 = _interopRequireDefault(_HiddenSoft);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Domain = (_dec = (0, _reactRedux.connect)((0, _utils.mstp)('settings')), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(Domain, _React$Component);

    function Domain() {
        _classCallCheck(this, Domain);

        return _possibleConstructorReturn(this, (Domain.__proto__ || Object.getPrototypeOf(Domain)).apply(this, arguments));
    }

    _createClass(Domain, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.vulnerable && $(this.refs.collapsibleElement).collapsible();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                software = _props.software,
                name = _props.name,
                settings = _props.settings,
                hiddenSoft = _props.hiddenSoft;


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
                    { className: 'collapsible', 'data-collapsible': 'accordion', ref: 'collapsibleElement' },
                    Object.keys(software).filter(function (softName) {
                        return !(settings.showOnlyVulnerable && !software[softName].vulnerabilities.length);
                    }).map(function (softName) {
                        return _react2.default.createElement(_Software2.default, _extends({ key: softName, software: softName }, software[softName]));
                    })
                ),
                console.log('[HIDDEN FS]', hiddenSoft),
                _react2.default.createElement(_HiddenSoft2.default, { hiddenSoft: hiddenSoft })
            );
        }
    }]);

    return Domain;
}(_react2.default.Component), _class2.propTypes = {
    name: _propTypes2.default.string,
    software: _propTypes2.default.object,
    settings: _propTypes2.default.object,
    vulnerable: _propTypes2.default.bool,
    hiddenSoft: _propTypes2.default.object
}, _class2.defaultProps = {
    name: '',
    software: {},
    settings: {},
    hiddenSoft: {},
    vulnerable: false
}, _temp)) || _class);
exports.default = Domain;

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Score = __webpack_require__(286);

var _Score2 = _interopRequireDefault(_Score);

var _Vulnerability = __webpack_require__(287);

var _Vulnerability2 = _interopRequireDefault(_Vulnerability);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

    return _react2.default.createElement(
        "li",
        { key: console.log(props), className: ["soft"].concat(props.score && "hoverable").join(' ') },
        _react2.default.createElement(
            "div",
            { className: "collapsible-header" },
            _react2.default.createElement(
                "span",
                null,
                props.software,
                " ",
                props.version ? " - " + props.version : ""
            ),
            props.exploit && _react2.default.createElement(
                "span",
                null,
                " HAS EXPLOIT! "
            ),
            _react2.default.createElement(_Score2.default, { score: props.score, scoreColor: props.scoreColor })
        ),
        _react2.default.createElement(
            "div",
            { className: "collapsible-body" },
            _react2.default.createElement(
                "div",
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

var _react = __webpack_require__(2);

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

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (v) {
    return _react2.default.createElement(
        "a",
        { key: v.id, className: "collection-item data-item vulnerability", target: "_blank",
            href: "https://vulners.com/" + v.type + "/" + v.id + "?utm_source=scanner&utm_medium=chromePlugin&utm_campaign=scan" },
        _react2.default.createElement(
            "span",
            null,
            _react2.default.createElement(
                "a",
                { className: "" },
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

var _dec, _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(17);

var _utils = __webpack_require__(24);

var _HiddenSoft = __webpack_require__(118);

var _HiddenSoft2 = _interopRequireDefault(_HiddenSoft);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotVulnerable = (_dec = (0, _reactRedux.connect)((0, _utils.mstp)('settings')), _dec(_class = function (_React$Component) {
    _inherits(NotVulnerable, _React$Component);

    function NotVulnerable() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, NotVulnerable);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NotVulnerable.__proto__ || Object.getPrototypeOf(NotVulnerable)).call.apply(_ref, [this].concat(args))), _this), _this.DOMAIN_REGEX = /(?:[\w-]+\.)*([\w-]{1,63})(?:\.(?:\w{3}|\w{2}))(?:$|\/)/i, _this.getBody = function () {
            var _this$props = _this.props,
                url = _this$props.url,
                data = _this$props.data,
                hiddenSoft = _this$props.hiddenSoft;


            switch (url) {
                case !url.match(_this.DOMAIN_REGEX):
                    return {
                        icon: 'broken_image',
                        text: _react2.default.createElement(
                            'p',
                            null,
                            'Invalid host'
                        )
                    };
                default:
                    return {
                        icon: 'cloud_done',
                        text: _react2.default.createElement(
                            'span',
                            null,
                            _react2.default.createElement(
                                'p',
                                null,
                                'Seems current host is not Vulnerable'
                            ),
                            console.log('[HIDDEN FS]', hiddenSoft),
                            _react2.default.createElement(_HiddenSoft2.default, { hiddenSoft: hiddenSoft })
                        ),
                        notVulnerableSoft: _this.props.data[url]
                    };
            }
        }, _this.render = function () {
            var body = _this.getBody();

            return _react2.default.createElement(
                'div',
                { className: 'page-info center-align' },
                _react2.default.createElement(
                    'i',
                    { className: 'large material-icons' },
                    body.icon
                ),
                _react2.default.createElement(
                    'h5',
                    { className: '' },
                    _this.props.url,
                    _react2.default.createElement('br', null)
                ),
                body.text
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return NotVulnerable;
}(_react2.default.Component)) || _class);
exports.default = NotVulnerable;

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    return _react2.default.createElement(
        "div",
        { className: "search-field input-field" },
        _react2.default.createElement(
            "i",
            { className: "material-icons prefix black-text text-darken-2" },
            "search"
        ),
        _react2.default.createElement("input", { placeholder: "Filter...", type: "text", className: "validate", onChange: props.onChange })
    );
};

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

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

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.store = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.configureStore = configureStore;

var _redux = __webpack_require__(68);

var _reducers = __webpack_require__(292);

var _dataService = __webpack_require__(293);

var _dataService2 = _interopRequireDefault(_dataService);

var _testDataService = __webpack_require__(295);

var _testDataService2 = _interopRequireDefault(_testDataService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composeEnhancers = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : _redux.compose;

function configureStore() {
    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return (0, _redux.createStore)(_reducers.reducers, initialState, composeEnhancers((0, _redux.applyMiddleware)(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? _testDataService2.default : _dataService2.default)));
}

var store = exports.store = configureStore();

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reducers = exports.landingSeen = exports.url = exports.settings = exports.stat = exports.data = undefined;

var _redux = __webpack_require__(68);

var data = exports.data = function data() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];


    switch (action.type) {

        case 'LOAD_DATA_RECEIVED':
            return state.concat(action.data);

        case 'CLEAR_DATA':
            return [];

        default:
            return state;
    }
};

var stat = exports.stat = function stat() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];


    switch (action.type) {

        case 'LOAD_DATA_RECEIVED':
            return Object.assign({}, state, action.stat);

        case 'CLEAR_DATA':
            return {};

        default:
            return state;
    }
};

var settings = exports.settings = function settings() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];


    switch (action.type) {

        case 'LOAD_DATA_RECEIVED':
            return Object.assign({}, state, action.settings);

        case 'CHANGE_SETTINGS':
            return Object.assign({}, state, action.settings);

        default:
            return state;
    }
};

var url = exports.url = function url() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var action = arguments[1];


    switch (action.type) {
        case 'LOAD_DATA_RECEIVED':
            return action.url;

        default:
            return state;
    }
};

var landingSeen = exports.landingSeen = function landingSeen() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var action = arguments[1];


    switch (action.type) {
        case 'LOAD_DATA_RECEIVED':
            return action.landingSeen;

        default:
            return state;
    }
};

var reducers = exports.reducers = (0, _redux.combineReducers)({
    data: data,
    settings: settings,
    stat: stat,
    url: url,
    landingSeen: landingSeen
});

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Browser = __webpack_require__(294);

var sendMessage = function sendMessage(message, callback) {
    _Browser.v_browser.tabs.getSelected(function (tab) {
        _Browser.v_browser.runtime.sendMessage(Object.assign(message, { tab_id: tab.id }), callback);
    });
};

exports.default = function (store) {
    return function (next) {
        return function (action) {

            next(action);

            switch (action.type) {

                case 'LOAD_DATA':
                    return sendMessage({ action: 'show_vulnerabilities' }, function (vulners) {
                        console.log('[VULNERS]', _extends({
                            type: 'LOAD_DATA_RECEIVED'
                        }, vulners));
                        next(_extends({
                            type: 'LOAD_DATA_RECEIVED'
                        }, vulners));
                    });

                case 'CHANGE_SETTINGS':
                    return sendMessage({ action: 'change_settings', settings: action.settings });

                case 'CLEAR_DATA':
                    return sendMessage({ action: 'clear_data', settings: action.settings });

                case 'LANDING_SEEN':
                    return sendMessage({ action: 'landing_seen', landingSeen: action.landingSeen });

            }
        };
    };
};

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isChrome = /google/i.test(navigator.vendor);
var v_browser = isChrome ? chrome : browser;

exports.v_browser = v_browser;

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (store) {
    return function (next) {
        return function (action) {

            next(action);

            switch (action.type) {

                case 'LOAD_DATA':
                    return next({
                        type: 'LOAD_DATA_RECEIVED',

                        data: [{ "name": "mc.yandex.ru", "software": { "Nginx, headers": { "software": "Nginx, headers", "version": "1.8.1", "vulnerabilities": [], "score": 0 }, "Igor Sysoev nginx": { "software": "Igor Sysoev nginx", "version": "1.8.1", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "vulners.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "vulnerabilities": [], "score": 0 }, "Django, html": { "software": "Django, html", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "morepara.ru", "software": { "Nginx, headers": { "software": "Nginx, headers", "vulnerabilities": [], "score": 0 }, "PHP": { "software": "PHP", "version": "5.5.38", "vulnerabilities": [{ "id": "PHP_5_5_38.NASL", "type": "nessus", "title": "PHP 5.5.x < 5.5.38 Multiple Vulnerabilities (httpoxy)", "score": 7.5, "scoreColor": "#f57c00", "description": "According to its banner, the version of PHP running on the remote web server is 5.5.x prior to 5.5.38. It is, therefore, affected by multiple vulnerabilities :\n\n  - A man-in-the-middle vulnerability exists, known as     'httpoxy', due to a failure to properly resolve     namespace conflicts in accordance with RFC 3875 section     4.1.18. The HTTP_PROXY environment variable is set based     on untrusted user data in the 'Proxy' header of HTTP     requests. The HTTP_PROXY environment variable is used by     some web client libraries to specify a remote proxy     server. An unauthenticated, remote attacker can exploit     this, via a crafted 'Proxy' header in an HTTP request,     to redirect an application's internal HTTP traffic to an     arbitrary proxy server where it may be observed or     manipulated. (CVE-2016-5385)\n\n  - An overflow condition exists in the php_bz2iop_read()     function within file ext/bz2/bz2.c due to improper     handling of error conditions. An unauthenticated, remote     attacker can exploit this, via a crafted request, to     execute arbitrary code. (CVE-2016-5399)\n\n  - A flaw exists in the GD Graphics Library (libgd),     specifically in the gdImageScaleTwoPass() function     within file gd_interpolation.c, due to improper     validation of user-supplied input. An unauthenticated,     remote attacker can exploit this to cause a denial of     service condition. (CVE-2016-6207)\n\n  - An integer overflow condition exists in the     virtual_file_ex() function within file     Zend/zend_virtual_cwd.c due to improper validation of     user-supplied input. An unauthenticated, remote attacker     can exploit this to cause a denial of service condition     or the execution of arbitrary code. (CVE-2016-6289)\n\n  - A use-after-free error exists within the file     ext/session/session.c when handling 'var_hash'     destruction. An unauthenticated, remote attacker can     exploit this to deference already freed memory,     resulting in the execution of arbitrary code.\n    (CVE-2016-6290)\n\n  - An out-of-bounds read error exists in the     exif_process_IFD_in_MAKERNOTE() function within file     ext/exif/exif.c. An unauthenticated, remote attacker can     exploit this to cause a denial of service condition or     disclose memory contents. (CVE-2016-6291)\n\n  - A NULL pointer dereference flaw exists in the     exif_process_user_comment() function within file     ext/exif/exif.c. An unauthenticated, remote attacker can     exploit this to cause a denial of service condition.\n    (CVE-2016-6292)\n\n  - Multiple out-of-bounds read errors exist in the     locale_accept_from_http() function within file     ext/intl/locale/locale_methods.c. An unauthenticated,     remote attacker can exploit these to cause a denial of     service condition or disclose memory contents.\n    (CVE-2016-6293, CVE-2016-6294)\n\n  - A use-after-free error exists within file     ext/snmp/snmp.c when handling garbage collection during     deserialization of user-supplied input. An     unauthenticated, remote attacker can exploit this to     deference already freed memory, resulting in the     execution of arbitrary code. (CVE-2016-6295)\n\n  - A heap-based buffer overflow condition exists in the     simplestring_addn() function within file simplestring.c     due to improper validation of user-supplied input. An     unauthenticated, remote attacker can exploit this to     cause a denial of service condition or the execution of     arbitrary code. (CVE-2016-6296)\n\n  - An integer overflow condition exists in the     php_stream_zip_opener() function within file     ext/zip/zip_stream.c due to improper validation of     user-supplied input when handling zip streams. An     unauthenticated, remote attacker can exploit this to     cause a denial of service condition or the execution of     arbitrary code. (CVE-2016-6297)\n\n  - An out-of-bounds read error exists in the GD Graphics     Library (libgd), specifically in the     gdImageScaleBilinearPalette() function within file     gd_interpolation.c, when handling transparent color. An     unauthenticated, remote attacker can exploit this to     cause a denial of service condition or disclose     memory contents. (VulnDB 141674)\n\n  - A heap-based buffer overflow condition exists in the     mdecrypt_generic() function within file     ext/mcrypt/mcrypt.c due to improper validation of     user-supplied input. An unauthenticated, remote attacker     can exploit this to cause a denial of service condition     or the execution of arbitrary code. (VulnDB 141953)\n\n  - A NULL write flaw exists in the GD Graphics Library     (libgd) in the gdImageColorTransparent() function due to     improper handling of negative transparent colors. A     remote attacker can exploit this to disclose memory     contents. (VulnDB 142104)\n\n  - An overflow condition exists in the php_url_prase_ex()     function due to improper validation of user-supplied     input. A remote attacker can exploit this to cause a     buffer overflow, resulting in a denial of service     condition. (VulnDB 142133)" }], "score": 7.5, "scoreColor": "#f57c00" } }, "vulnerable": true }, { "name": "vk.com", "software": { "Apache, headers": { "software": "Apache, headers", "vulnerabilities": [], "score": 0 }, "PHP": { "software": "PHP", "version": "3.14463", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "webpixelperfect.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "www.cdc.gov", "software": { "Microsoft IIS": { "software": "Microsoft IIS", "version": "7.5", "vulnerabilities": [{ "id": "CVE-2010-3972", "type": "cve", "title": "Heap-based buffer overflow in the TELNET_STREAM_CONTEXT::OnSendData function in ftpsvc.dll in Microsoft FTP Service 7.0 and 7.5 for Internet Information Services (IIS) 7.0, and IIS 7.5, allows remote attackers to execute arbitrary code or cause a denial of service (daemon crash) via a crafted FTP command, aka \"IIS FTP Service Heap Buffer Overrun Vulnerability.\" NOTE: some of these details are obtained from third party information.", "score": 10, "scoreColor": "#e65100", "description": "Heap-based buffer overflow in the TELNET_STREAM_CONTEXT::OnSendData function in ftpsvc.dll in Microsoft FTP Service 7.0 and 7.5 for Internet Information Services (IIS) 7.0, and IIS 7.5, allows remote attackers to execute arbitrary code or cause a denial of service (daemon crash) via a crafted FTP command, aka \"IIS FTP Service Heap Buffer Overrun Vulnerability.\" NOTE: some of these details are obtained from third party information." }, { "id": "CVE-2010-2730", "type": "cve", "title": "Buffer overflow in Microsoft Internet Information Services (IIS) 7.5, when FastCGI is enabled, allows remote attackers to execute arbitrary code via crafted headers in a request, aka \"Request Header Buffer Overflow Vulnerability.\"", "score": 9.3, "scoreColor": "#ef6c00", "description": "Buffer overflow in Microsoft Internet Information Services (IIS) 7.5, when FastCGI is enabled, allows remote attackers to execute arbitrary code via crafted headers in a request, aka \"Request Header Buffer Overflow Vulnerability.\"" }, { "id": "CVE-2010-1256", "type": "cve", "title": "Unspecified vulnerability in Microsoft IIS 6.0, 7.0, and 7.5, when Extended Protection for Authentication is enabled, allows remote authenticated users to execute arbitrary code via unknown vectors related to \"token checking\" that trigger memory corruption, aka \"IIS Authentication Memory Corruption Vulnerability.\"", "score": 8.5, "scoreColor": "#ef6c00", "description": "Unspecified vulnerability in Microsoft IIS 6.0, 7.0, and 7.5, when Extended Protection for Authentication is enabled, allows remote authenticated users to execute arbitrary code via unknown vectors related to \"token checking\" that trigger memory corruption, aka \"IIS Authentication Memory Corruption Vulnerability.\"" }, { "id": "IIS_FTP7_MS12-073.NASL", "type": "nessus", "title": "MS12-073: Vulnerabilities in Microsoft IIS Could Allow Information Disclosure (2733829) (uncredentialed check)", "score": 5, "scoreColor": "#ffee58", "description": "The FTP service in the version of Microsoft IIS 7.0 or 7.5 on the remote Windows host is affected by a command injection vulnerability that could result in unauthorized information disclosure." }, { "id": "SMB_NT_MS12-073.NASL", "type": "nessus", "title": "MS12-073: Vulnerabilities in Microsoft Internet Information Services (IIS) Could Allow Information Disclosure (2733829)", "score": 5, "scoreColor": "#ffee58", "description": "The FTP service in the version of IIS 7.0 or 7.5 on the remote Windows host is affected by multiple vulnerabilities that could result in unauthorized information disclosure." }, { "id": "CVE-2010-1899", "type": "cve", "title": "Stack consumption vulnerability in the ASP implementation in Microsoft Internet Information Services (IIS) 5.1, 6.0, 7.0, and 7.5 allows remote attackers to cause a denial of service (daemon outage) via a crafted request, related to asp.dll, aka \"IIS Repeated Parameter Request Denial of Service Vulnerability.\"", "score": 4.3, "scoreColor": "#c6ff00", "description": "Stack consumption vulnerability in the ASP implementation in Microsoft Internet Information Services (IIS) 5.1, 6.0, 7.0, and 7.5 allows remote attackers to cause a denial of service (daemon outage) via a crafted request, related to asp.dll, aka \"IIS Repeated Parameter Request Denial of Service Vulnerability.\"" }, { "id": "CVE-2012-2531", "type": "cve", "title": "Microsoft Internet Information Services (IIS) 7.5 uses weak permissions for the Operational log, which allows local users to discover credentials by reading this file, aka \"Password Disclosure Vulnerability.\"", "score": 2.1, "scoreColor": "#76ff03", "description": "Microsoft Internet Information Services (IIS) 7.5 uses weak permissions for the Operational log, which allows local users to discover credentials by reading this file, aka \"Password Disclosure Vulnerability.\"" }], "score": 10, "scoreColor": "#e65100" } }, "vulnerable": true }, { "name": "www.fatboyvapors.com", "software": { "Apache, headers": { "software": "Apache, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "api.altmetric.com", "software": { "Igor Sysoev nginx": { "software": "Igor Sysoev nginx", "version": "1.8.0", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "www.infinitevapor.com", "software": { "Microsoft IIS": { "software": "Microsoft IIS", "version": "8.5", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "image2.pubmatic.com", "software": { "Apache, headers": { "software": "Apache, headers", "version": "2.2.24", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "ib.adnxs.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "version": "1.13.4", "vulnerabilities": [], "score": 0 }, "Igor Sysoev nginx": { "software": "Igor Sysoev nginx", "version": "1.13.4", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "www.volcanoecigs.com", "software": { "Apache, headers": { "software": "Apache, headers", "vulnerabilities": [], "score": 0 }, "jQuery, script": { "software": "jQuery, script", "version": "1.11.2", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "dsum.casalemedia.com", "software": { "Apache, headers": { "software": "Apache, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "ecigone.com", "software": { "PHP": { "software": "PHP", "version": "7.0.27", "vulnerabilities": [], "score": 0 }, "Wordpress": { "software": "Wordpress", "version": "4.9.1", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "sync.search.spotxchange.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "version": "1.12.0", "vulnerabilities": [], "score": 0 }, "Igor Sysoev nginx": { "software": "Igor Sysoev nginx", "version": "1.12.0", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "tapestry.tapad.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "version": "1.11.3", "vulnerabilities": [{ "id": "CVE-2017-7529", "type": "cve", "title": "Nginx versions since 0.5.6 up to and including 1.13.2 are vulnerable to integer overflow vulnerability in nginx range filter module resulting into leak of potentially sensitive information triggered by specially crafted request.", "score": 5, "scoreColor": "#ffee58", "description": "Nginx versions since 0.5.6 up to and including 1.13.2 are vulnerable to integer overflow vulnerability in nginx range filter module resulting into leak of potentially sensitive information triggered by specially crafted request." }], "score": 5, "scoreColor": "#ffee58" }, "Igor Sysoev nginx": { "software": "Igor Sysoev nginx", "version": "1.11.3", "vulnerabilities": [], "score": 0 } }, "vulnerable": true }, { "name": "d.agkn.com", "software": { "Apache Coyote (Tomcat)": { "software": "Apache Coyote (Tomcat)", "version": "1.1", "vulnerabilities": [{ "id": "CVE-2005-4836", "type": "cve", "title": "The HTTP/1.1 connector in Apache Tomcat 4.1.15 through 4.1.40 does not reject NULL bytes in a URL when allowLinking is configured, which allows remote attackers to read JSP source files and obtain sensitive information.", "score": 7.8, "scoreColor": "#f57c00", "description": "The HTTP/1.1 connector in Apache Tomcat 4.1.15 through 4.1.40 does not reject NULL bytes in a URL when allowLinking is configured, which allows remote attackers to read JSP source files and obtain sensitive information." }, { "id": "CVE-2014-0050", "type": "cve", "title": "MultipartStream.java in Apache Commons FileUpload before 1.3.1, as used in Apache Tomcat, JBoss Web, and other products, allows remote attackers to cause a denial of service (infinite loop and CPU consumption) via a crafted Content-Type header that bypasses a loop's intended exit conditions.", "score": 7.5, "scoreColor": "#f57c00", "description": "MultipartStream.java in Apache Commons FileUpload before 1.3.1, as used in Apache Tomcat, JBoss Web, and other products, allows remote attackers to cause a denial of service (infinite loop and CPU consumption) via a crafted Content-Type header that bypasses a loop's intended exit conditions." }, { "id": "CVE-2013-6357", "type": "cve", "title": "** DISPUTED ** Cross-site request forgery (CSRF) vulnerability in the Manager application in Apache Tomcat 5.5.25 and earlier allows remote attackers to hijack the authentication of administrators for requests that manipulate application deployment via the POST method, as demonstrated by a /manager/html/undeploy?path= URI.  NOTE: the vendor disputes the significance of this report, stating that \"the Apache Tomcat Security team has not accepted any reports of CSRF attacks against the Manager application ... as they require a reckless system administrator.\"", "score": 6.8, "scoreColor": "#ff9800", "description": "** DISPUTED ** Cross-site request forgery (CSRF) vulnerability in the Manager application in Apache Tomcat 5.5.25 and earlier allows remote attackers to hijack the authentication of administrators for requests that manipulate application deployment via the POST method, as demonstrated by a /manager/html/undeploy?path= URI.  NOTE: the vendor disputes the significance of this report, stating that \"the Apache Tomcat Security team has not accepted any reports of CSRF attacks against the Manager application ... as they require a reckless system administrator.\"" }, { "id": "CVE-2013-4286", "type": "cve", "title": "Apache Tomcat before 6.0.39, 7.x before 7.0.47, and 8.x before 8.0.0-RC3, when an HTTP connector or AJP connector is used, does not properly handle certain inconsistent HTTP request headers, which allows remote attackers to trigger incorrect identification of a request's length and conduct request-smuggling attacks via (1) multiple Content-Length headers or (2) a Content-Length header and a \"Transfer-Encoding: chunked\" header.  NOTE: this vulnerability exists because of an incomplete fix for CVE-2005-2090.", "score": 5.8, "scoreColor": "#ffc107", "description": "Apache Tomcat before 6.0.39, 7.x before 7.0.47, and 8.x before 8.0.0-RC3, when an HTTP connector or AJP connector is used, does not properly handle certain inconsistent HTTP request headers, which allows remote attackers to trigger incorrect identification of a request's length and conduct request-smuggling attacks via (1) multiple Content-Length headers or (2) a Content-Length header and a \"Transfer-Encoding: chunked\" header.  NOTE: this vulnerability exists because of an incomplete fix for CVE-2005-2090." }, { "id": "CVE-2012-5568", "type": "cve", "title": "Apache Tomcat through 7.0.x allows remote attackers to cause a denial of service (daemon outage) via partial HTTP requests, as demonstrated by Slowloris.", "score": 5, "scoreColor": "#ffee58", "description": "Apache Tomcat through 7.0.x allows remote attackers to cause a denial of service (daemon outage) via partial HTTP requests, as demonstrated by Slowloris." }, { "id": "CVE-2013-4322", "type": "cve", "title": "Apache Tomcat before 6.0.39, 7.x before 7.0.50, and 8.x before 8.0.0-RC10 processes chunked transfer coding without properly handling (1) a large total amount of chunked data or (2) whitespace characters in an HTTP header value within a trailer field, which allows remote attackers to cause a denial of service by streaming data.  NOTE: this vulnerability exists because of an incomplete fix for CVE-2012-3544.", "score": 4.3, "scoreColor": "#c6ff00", "description": "Apache Tomcat before 6.0.39, 7.x before 7.0.50, and 8.x before 8.0.0-RC10 processes chunked transfer coding without properly handling (1) a large total amount of chunked data or (2) whitespace characters in an HTTP header value within a trailer field, which allows remote attackers to cause a denial of service by streaming data.  NOTE: this vulnerability exists because of an incomplete fix for CVE-2012-3544." }, { "id": "CVE-2013-4590", "type": "cve", "title": "Apache Tomcat before 6.0.39, 7.x before 7.0.50, and 8.x before 8.0.0-RC10 allows attackers to obtain \"Tomcat internals\" information by leveraging the presence of an untrusted web application with a context.xml, web.xml, *.jspx, *.tagx, or *.tld XML document containing an external entity declaration in conjunction with an entity reference, related to an XML External Entity (XXE) issue.", "score": 4.3, "scoreColor": "#c6ff00", "description": "Apache Tomcat before 6.0.39, 7.x before 7.0.50, and 8.x before 8.0.0-RC10 allows attackers to obtain \"Tomcat internals\" information by leveraging the presence of an untrusted web application with a context.xml, web.xml, *.jspx, *.tagx, or *.tld XML document containing an external entity declaration in conjunction with an entity reference, related to an XML External Entity (XXE) issue." }, { "id": "CVE-2005-2090", "type": "cve", "title": "Jakarta Tomcat 5.0.19 (Coyote/1.1) and Tomcat 4.1.24 (Coyote/1.0) allows remote attackers to poison the web cache, bypass web application firewall protection, and conduct XSS attacks via an HTTP request with both a \"Transfer-Encoding: chunked\" header and a Content-Length header, which causes Tomcat to incorrectly handle and forward the body of the request in a way that causes the receiving server to process it as a separate HTTP request, aka \"HTTP Request Smuggling.\"", "score": 4.3, "scoreColor": "#c6ff00", "description": "Jakarta Tomcat 5.0.19 (Coyote/1.1) and Tomcat 4.1.24 (Coyote/1.0) allows remote attackers to poison the web cache, bypass web application firewall protection, and conduct XSS attacks via an HTTP request with both a \"Transfer-Encoding: chunked\" header and a Content-Length header, which causes Tomcat to incorrectly handle and forward the body of the request in a way that causes the receiving server to process it as a separate HTTP request, aka \"HTTP Request Smuggling.\"" }], "score": 7.8, "scoreColor": "#f57c00" } }, "vulnerable": true }, { "name": "x.dlx.addthis.com", "software": { "lighttpd, headers": { "software": "lighttpd, headers", "version": "1.4.33", "vulnerabilities": [{ "id": "LIGHTTPD_1_4_34.NASL", "type": "nessus", "title": "lighttpd < 1.4.34 Multiple Vulnerabilities", "score": 7.6, "scoreColor": "#f57c00", "description": "According to its banner, the version of lighttpd running on the remote host is prior to 1.4.34. It is, therefore, affected by the following vulnerabilities :\n\n  - When Server Name Indication (SNI) is enabled, a flaw     exists that could cause the application to use all     available SSL ciphers, including weak ciphers. Remote     attackers could potentially hijack sessions or obtain     sensitive information by sniffing the network.\n    Note only versions 1.4.24 to 1.4.33 are affected.\n    (CVE-2013-4508)\n\n  - A flaw exists in the clang static analyzer because it     fails to perform checks around setuid (1), setgid (2),     and setgroups (3) calls. This could allow a remote     attacker to gain elevated privileges. (CVE-2013-4559)\n\n  - A use-after-free error exists in the clang static     analyzer, when the FAM stat cache engine is enabled.\n    This could allow remote attackers to dereference     already freed memory and crash the program.\n    (CVE-2013-4560)\n\nNote that Nessus has not tested for these issues but has instead relied only on the application's self-reported version number." }, { "id": "CVE-2014-2323", "type": "cve", "title": "SQL injection vulnerability in mod_mysql_vhost.c in lighttpd before 1.4.35 allows remote attackers to execute arbitrary SQL commands via the host name, related to request_check_hostname.", "score": 7.5, "scoreColor": "#f57c00", "description": "SQL injection vulnerability in mod_mysql_vhost.c in lighttpd before 1.4.35 allows remote attackers to execute arbitrary SQL commands via the host name, related to request_check_hostname." }, { "id": "CVE-2013-4508", "type": "cve", "title": "lighttpd before 1.4.34, when SNI is enabled, configures weak SSL ciphers, which makes it easier for remote attackers to hijack sessions by inserting packets into the client-server data stream or obtain sensitive information by sniffing the network.", "score": 5.8, "scoreColor": "#ffc107", "description": "lighttpd before 1.4.34, when SNI is enabled, configures weak SSL ciphers, which makes it easier for remote attackers to hijack sessions by inserting packets into the client-server data stream or obtain sensitive information by sniffing the network." }, { "id": "CVE-2014-2324", "type": "cve", "title": "Multiple directory traversal vulnerabilities in (1) mod_evhost and (2) mod_simple_vhost in lighttpd before 1.4.35 allow remote attackers to read arbitrary files via a .. (dot dot) in the host name, related to request_check_hostname.", "score": 5, "scoreColor": "#ffee58", "description": "Multiple directory traversal vulnerabilities in (1) mod_evhost and (2) mod_simple_vhost in lighttpd before 1.4.35 allow remote attackers to read arbitrary files via a .. (dot dot) in the host name, related to request_check_hostname." }], "score": 7.6, "scoreColor": "#f57c00" } }, "vulnerable": true }, { "name": "trc.taboola.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "c1.adform.net", "software": { "Nginx, headers": { "software": "Nginx, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "2.gravatar.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "1.gravatar.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "0.gravatar.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "mid.rkdms.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "version": "1.10.1", "vulnerabilities": [{ "id": "CVE-2016-1247", "type": "cve", "title": "The nginx package before 1.6.2-5+deb8u3 on Debian jessie, the nginx packages before 1.4.6-1ubuntu3.6 on Ubuntu 14.04 LTS, before 1.10.0-0ubuntu0.16.04.3 on Ubuntu 16.04 LTS, and before 1.10.1-0ubuntu1.1 on Ubuntu 16.10, and the nginx ebuild before 1.10.2-r3 on Gentoo allow local users with access to the web server user account to gain root privileges via a symlink attack on the error log.", "score": 7.2, "scoreColor": "#ff9800", "description": "The nginx package before 1.6.2-5+deb8u3 on Debian jessie, the nginx packages before 1.4.6-1ubuntu3.6 on Ubuntu 14.04 LTS, before 1.10.0-0ubuntu0.16.04.3 on Ubuntu 16.04 LTS, and before 1.10.1-0ubuntu1.1 on Ubuntu 16.10, and the nginx ebuild before 1.10.2-r3 on Gentoo allow local users with access to the web server user account to gain root privileges via a symlink attack on the error log." }], "score": 7.2, "scoreColor": "#ff9800" }, "Igor Sysoev nginx": { "software": "Igor Sysoev nginx", "version": "1.10.1", "vulnerabilities": [], "score": 0 } }, "vulnerable": true }, { "name": "s.acxiomapac.com", "software": { "Apache Coyote (Tomcat)": { "software": "Apache Coyote (Tomcat)", "version": "1.1", "vulnerabilities": [{ "id": "CVE-2005-4836", "type": "cve", "title": "The HTTP/1.1 connector in Apache Tomcat 4.1.15 through 4.1.40 does not reject NULL bytes in a URL when allowLinking is configured, which allows remote attackers to read JSP source files and obtain sensitive information.", "score": 7.8, "scoreColor": "#f57c00", "description": "The HTTP/1.1 connector in Apache Tomcat 4.1.15 through 4.1.40 does not reject NULL bytes in a URL when allowLinking is configured, which allows remote attackers to read JSP source files and obtain sensitive information." }, { "id": "CVE-2014-0050", "type": "cve", "title": "MultipartStream.java in Apache Commons FileUpload before 1.3.1, as used in Apache Tomcat, JBoss Web, and other products, allows remote attackers to cause a denial of service (infinite loop and CPU consumption) via a crafted Content-Type header that bypasses a loop's intended exit conditions.", "score": 7.5, "scoreColor": "#f57c00", "description": "MultipartStream.java in Apache Commons FileUpload before 1.3.1, as used in Apache Tomcat, JBoss Web, and other products, allows remote attackers to cause a denial of service (infinite loop and CPU consumption) via a crafted Content-Type header that bypasses a loop's intended exit conditions." }, { "id": "CVE-2013-6357", "type": "cve", "title": "** DISPUTED ** Cross-site request forgery (CSRF) vulnerability in the Manager application in Apache Tomcat 5.5.25 and earlier allows remote attackers to hijack the authentication of administrators for requests that manipulate application deployment via the POST method, as demonstrated by a /manager/html/undeploy?path= URI.  NOTE: the vendor disputes the significance of this report, stating that \"the Apache Tomcat Security team has not accepted any reports of CSRF attacks against the Manager application ... as they require a reckless system administrator.\"", "score": 6.8, "scoreColor": "#ff9800", "description": "** DISPUTED ** Cross-site request forgery (CSRF) vulnerability in the Manager application in Apache Tomcat 5.5.25 and earlier allows remote attackers to hijack the authentication of administrators for requests that manipulate application deployment via the POST method, as demonstrated by a /manager/html/undeploy?path= URI.  NOTE: the vendor disputes the significance of this report, stating that \"the Apache Tomcat Security team has not accepted any reports of CSRF attacks against the Manager application ... as they require a reckless system administrator.\"" }, { "id": "CVE-2013-4286", "type": "cve", "title": "Apache Tomcat before 6.0.39, 7.x before 7.0.47, and 8.x before 8.0.0-RC3, when an HTTP connector or AJP connector is used, does not properly handle certain inconsistent HTTP request headers, which allows remote attackers to trigger incorrect identification of a request's length and conduct request-smuggling attacks via (1) multiple Content-Length headers or (2) a Content-Length header and a \"Transfer-Encoding: chunked\" header.  NOTE: this vulnerability exists because of an incomplete fix for CVE-2005-2090.", "score": 5.8, "scoreColor": "#ffc107", "description": "Apache Tomcat before 6.0.39, 7.x before 7.0.47, and 8.x before 8.0.0-RC3, when an HTTP connector or AJP connector is used, does not properly handle certain inconsistent HTTP request headers, which allows remote attackers to trigger incorrect identification of a request's length and conduct request-smuggling attacks via (1) multiple Content-Length headers or (2) a Content-Length header and a \"Transfer-Encoding: chunked\" header.  NOTE: this vulnerability exists because of an incomplete fix for CVE-2005-2090." }, { "id": "CVE-2012-5568", "type": "cve", "title": "Apache Tomcat through 7.0.x allows remote attackers to cause a denial of service (daemon outage) via partial HTTP requests, as demonstrated by Slowloris.", "score": 5, "scoreColor": "#ffee58", "description": "Apache Tomcat through 7.0.x allows remote attackers to cause a denial of service (daemon outage) via partial HTTP requests, as demonstrated by Slowloris." }, { "id": "CVE-2013-4322", "type": "cve", "title": "Apache Tomcat before 6.0.39, 7.x before 7.0.50, and 8.x before 8.0.0-RC10 processes chunked transfer coding without properly handling (1) a large total amount of chunked data or (2) whitespace characters in an HTTP header value within a trailer field, which allows remote attackers to cause a denial of service by streaming data.  NOTE: this vulnerability exists because of an incomplete fix for CVE-2012-3544.", "score": 4.3, "scoreColor": "#c6ff00", "description": "Apache Tomcat before 6.0.39, 7.x before 7.0.50, and 8.x before 8.0.0-RC10 processes chunked transfer coding without properly handling (1) a large total amount of chunked data or (2) whitespace characters in an HTTP header value within a trailer field, which allows remote attackers to cause a denial of service by streaming data.  NOTE: this vulnerability exists because of an incomplete fix for CVE-2012-3544." }, { "id": "CVE-2013-4590", "type": "cve", "title": "Apache Tomcat before 6.0.39, 7.x before 7.0.50, and 8.x before 8.0.0-RC10 allows attackers to obtain \"Tomcat internals\" information by leveraging the presence of an untrusted web application with a context.xml, web.xml, *.jspx, *.tagx, or *.tld XML document containing an external entity declaration in conjunction with an entity reference, related to an XML External Entity (XXE) issue.", "score": 4.3, "scoreColor": "#c6ff00", "description": "Apache Tomcat before 6.0.39, 7.x before 7.0.50, and 8.x before 8.0.0-RC10 allows attackers to obtain \"Tomcat internals\" information by leveraging the presence of an untrusted web application with a context.xml, web.xml, *.jspx, *.tagx, or *.tld XML document containing an external entity declaration in conjunction with an entity reference, related to an XML External Entity (XXE) issue." }, { "id": "CVE-2005-2090", "type": "cve", "title": "Jakarta Tomcat 5.0.19 (Coyote/1.1) and Tomcat 4.1.24 (Coyote/1.0) allows remote attackers to poison the web cache, bypass web application firewall protection, and conduct XSS attacks via an HTTP request with both a \"Transfer-Encoding: chunked\" header and a Content-Length header, which causes Tomcat to incorrectly handle and forward the body of the request in a way that causes the receiving server to process it as a separate HTTP request, aka \"HTTP Request Smuggling.\"", "score": 4.3, "scoreColor": "#c6ff00", "description": "Jakarta Tomcat 5.0.19 (Coyote/1.1) and Tomcat 4.1.24 (Coyote/1.0) allows remote attackers to poison the web cache, bypass web application firewall protection, and conduct XSS attacks via an HTTP request with both a \"Transfer-Encoding: chunked\" header and a Content-Length header, which causes Tomcat to incorrectly handle and forward the body of the request in a way that causes the receiving server to process it as a separate HTTP request, aka \"HTTP Request Smuggling.\"" }], "score": 7.8, "scoreColor": "#f57c00" } }, "vulnerable": true }, { "name": "in.getclicky.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "pro.ageverify.co", "software": { "Apache, headers": { "software": "Apache, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "chimpstatic.com", "software": { "OpenResty, headers": { "software": "OpenResty, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "www.lohud.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "version": "1.11.3", "vulnerabilities": [{ "id": "CVE-2017-7529", "type": "cve", "title": "Nginx versions since 0.5.6 up to and including 1.13.2 are vulnerable to integer overflow vulnerability in nginx range filter module resulting into leak of potentially sensitive information triggered by specially crafted request.", "score": 5, "scoreColor": "#ffee58", "description": "Nginx versions since 0.5.6 up to and including 1.13.2 are vulnerable to integer overflow vulnerability in nginx range filter module resulting into leak of potentially sensitive information triggered by specially crafted request." }], "score": 5, "scoreColor": "#ffee58" }, "Igor Sysoev nginx": { "software": "Igor Sysoev nginx", "version": "1.11.3", "vulnerabilities": [], "score": 0 } }, "vulnerable": true }, { "name": "volcanoecigs.zendesk.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "rainbow-us.mythings.com", "software": { "Microsoft IIS": { "software": "Microsoft IIS", "version": "7.5", "vulnerabilities": [{ "id": "CVE-2010-3972", "type": "cve", "title": "Heap-based buffer overflow in the TELNET_STREAM_CONTEXT::OnSendData function in ftpsvc.dll in Microsoft FTP Service 7.0 and 7.5 for Internet Information Services (IIS) 7.0, and IIS 7.5, allows remote attackers to execute arbitrary code or cause a denial of service (daemon crash) via a crafted FTP command, aka \"IIS FTP Service Heap Buffer Overrun Vulnerability.\" NOTE: some of these details are obtained from third party information.", "score": 10, "scoreColor": "#e65100", "description": "Heap-based buffer overflow in the TELNET_STREAM_CONTEXT::OnSendData function in ftpsvc.dll in Microsoft FTP Service 7.0 and 7.5 for Internet Information Services (IIS) 7.0, and IIS 7.5, allows remote attackers to execute arbitrary code or cause a denial of service (daemon crash) via a crafted FTP command, aka \"IIS FTP Service Heap Buffer Overrun Vulnerability.\" NOTE: some of these details are obtained from third party information." }, { "id": "CVE-2010-2730", "type": "cve", "title": "Buffer overflow in Microsoft Internet Information Services (IIS) 7.5, when FastCGI is enabled, allows remote attackers to execute arbitrary code via crafted headers in a request, aka \"Request Header Buffer Overflow Vulnerability.\"", "score": 9.3, "scoreColor": "#ef6c00", "description": "Buffer overflow in Microsoft Internet Information Services (IIS) 7.5, when FastCGI is enabled, allows remote attackers to execute arbitrary code via crafted headers in a request, aka \"Request Header Buffer Overflow Vulnerability.\"" }, { "id": "CVE-2010-1256", "type": "cve", "title": "Unspecified vulnerability in Microsoft IIS 6.0, 7.0, and 7.5, when Extended Protection for Authentication is enabled, allows remote authenticated users to execute arbitrary code via unknown vectors related to \"token checking\" that trigger memory corruption, aka \"IIS Authentication Memory Corruption Vulnerability.\"", "score": 8.5, "scoreColor": "#ef6c00", "description": "Unspecified vulnerability in Microsoft IIS 6.0, 7.0, and 7.5, when Extended Protection for Authentication is enabled, allows remote authenticated users to execute arbitrary code via unknown vectors related to \"token checking\" that trigger memory corruption, aka \"IIS Authentication Memory Corruption Vulnerability.\"" }, { "id": "IIS_FTP7_MS12-073.NASL", "type": "nessus", "title": "MS12-073: Vulnerabilities in Microsoft IIS Could Allow Information Disclosure (2733829) (uncredentialed check)", "score": 5, "scoreColor": "#ffee58", "description": "The FTP service in the version of Microsoft IIS 7.0 or 7.5 on the remote Windows host is affected by a command injection vulnerability that could result in unauthorized information disclosure." }, { "id": "SMB_NT_MS12-073.NASL", "type": "nessus", "title": "MS12-073: Vulnerabilities in Microsoft Internet Information Services (IIS) Could Allow Information Disclosure (2733829)", "score": 5, "scoreColor": "#ffee58", "description": "The FTP service in the version of IIS 7.0 or 7.5 on the remote Windows host is affected by multiple vulnerabilities that could result in unauthorized information disclosure." }, { "id": "CVE-2010-1899", "type": "cve", "title": "Stack consumption vulnerability in the ASP implementation in Microsoft Internet Information Services (IIS) 5.1, 6.0, 7.0, and 7.5 allows remote attackers to cause a denial of service (daemon outage) via a crafted request, related to asp.dll, aka \"IIS Repeated Parameter Request Denial of Service Vulnerability.\"", "score": 4.3, "scoreColor": "#c6ff00", "description": "Stack consumption vulnerability in the ASP implementation in Microsoft Internet Information Services (IIS) 5.1, 6.0, 7.0, and 7.5 allows remote attackers to cause a denial of service (daemon outage) via a crafted request, related to asp.dll, aka \"IIS Repeated Parameter Request Denial of Service Vulnerability.\"" }, { "id": "CVE-2012-2531", "type": "cve", "title": "Microsoft Internet Information Services (IIS) 7.5 uses weak permissions for the Operational log, which allows local users to discover credentials by reading this file, aka \"Password Disclosure Vulnerability.\"", "score": 2.1, "scoreColor": "#76ff03", "description": "Microsoft Internet Information Services (IIS) 7.5 uses weak permissions for the Operational log, which allows local users to discover credentials by reading this file, aka \"Password Disclosure Vulnerability.\"" }], "score": 10, "scoreColor": "#e65100" } }, "vulnerable": true }, { "name": "cdn.livechatinc.com", "software": { "Apache, headers": { "software": "Apache, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "www.rolfsvaporjoint.com", "software": { "Apache, headers": { "software": "Apache, headers", "vulnerabilities": [], "score": 0 }, "PHP": { "software": "PHP", "version": "5.6.31", "vulnerabilities": [{ "id": "PHP_5_6_31.NASL", "type": "nessus", "title": "PHP 5.6.x < 5.6.31 Multiple Vulnerabilities", "score": 7.8, "scoreColor": "#f57c00", "description": "According to its banner, the version of PHP running on the remote web server is 5.6.x prior to 5.6.31. It is, therefore, affected by the following vulnerabilities :\n\n  - An out-of-bounds read error exists in the PCRE library     in the compile_bracket_matchingpath() function within     file pcre_jit_compile.c. An unauthenticated, remote     attacker can exploit this, via a specially crafted     regular expression, to crash a process linked to the     library, resulting in a denial of service condition.\n    (CVE-2017-6004)\n\n  - An out-of-bounds read error exists in the GD Graphics     Library (LibGD) in the gdImageCreateFromGifCtx()     function within file gd_gif_in.c when handling a     specially crafted GIF file. An unauthenticated, remote     attacker can exploit this to disclose sensitive memory     contents or crash a process linked to the library.\n    (CVE-2017-7890)\n\n  - An out-of-bounds read error exists in Oniguruma in the     match_at() function within file regexec.c. An     unauthenticated, remote attacker can exploit this to     disclose sensitive memory contents or crash a process     linked to the library. (CVE-2017-9224)\n\n  - An out-of-bounds write error exists in Oniguruma in the     next_state_val() function during regular expression     compilation. An unauthenticated, remote attacker can     exploit this to execute arbitrary code. (CVE-2017-9226)\n\n  - An out-of-bounds read error exists in Oniguruma in the     mbc_enc_len() function within file utf8.c. An     unauthenticated, remote attacker can exploit this to     disclose memory contents or crash a process linked to     the library. (CVE-2017-9227)\n\n  - An out-of-bounds write error exists in Oniguruma in the     bitset_set_range() function during regular expression     compilation. An unauthenticated, remote attacker can     exploit this to execute arbitrary code. (CVE-2017-9228)\n\n  - An invalid pointer deference flaw exists in Oniguruma     in the left_adjust_char_head() function within file     regexec.c during regular expression compilation. An     unauthenticated, remote attacker can exploit this to     crash a process linked to the library, resulting in a     denial of service condition. (CVE-2017-9229)\n\n  - A denial of service condition exists in PHP when     handling overlarge POST requests. An unauthenticated,     remote attacker can exploit this to exhaust available     CPU resources. (CVE-2017-11142)\n\n  - An extended invalid free error exists in PHP in the     php_wddx_push_element() function within file     ext/wddx/wddx.c when parsing empty boolean tags.\n    An unauthenticated, remote attacker can exploit this to     cause a denial of service condition. (CVE-2017-11143)\n\n  - A flaw exists in OpenSSL in the EVP_SealInit() function     within file crypto/evp/p_seal.c due to returning an     undocumented value of '-1'. An unauthenticated, remote     attacker can exploit this to cause an unspecified     impact. (CVE-2017-11144)\n\n  - An out-of-bounds read error exists in PHP in the     php_parse_date() function within file     ext/date/lib/parse_date.c. An unauthenticated, remote     attacker can exploit this to disclose memory contents or     cause a denial of service condition.\n    (CVE-2017-11145)\n\n  - An out-of-bounds read error exists in PHP in the     finish_nested_data() function within file     ext/standard/var_unserializer.re. An unauthenticated,     remote attacker can exploit this to disclose memory     contents or cause a denial of service condition.\n    (VulnDB 160497)\n\n  - An off-by-one overflow condition exists in PHP in the     INI parsing API, specifically in the zend_ini_do_op()     function within file Zend/zend_ini_parser.y, due to     improper validation of user-supplied input. An     unauthenticated, remote attacker can exploit this to     cause a denial of service condition or the execution of     arbitrary code. (VulnDB 160499)" }], "score": 7.8, "scoreColor": "#f57c00" }, "Wordpress": { "software": "Wordpress", "version": "4.7.8", "vulnerabilities": [{ "id": "WPVDB-ID:8941", "type": "wpvulndb", "title": "WordPress <= 4.8.2 - $wpdb->prepare() Weakness", "score": 7.5, "scoreColor": "#f57c00", "description": "WordPress Vulnerability - WordPress <= 4.8.2 - $wpdb->prepare() Weakness" }, { "id": "WPVDB-ID:8969", "type": "wpvulndb", "title": "WordPress 3.7-4.9 - 'newbloguser' Key Weak Hashing", "score": 6.5, "scoreColor": "#ff9800", "description": "WordPress Vulnerability - WordPress 3.7-4.9 - 'newbloguser' Key Weak Hashing" }, { "id": "WPVDB-ID:8912", "type": "wpvulndb", "title": "WordPress 4.4-4.8.1 - Path Traversal in Customizer ", "score": 5, "scoreColor": "#ffee58", "description": "WordPress Vulnerability - WordPress 4.4-4.8.1 - Path Traversal in Customizer " }, { "id": "WPVDB-ID:8911", "type": "wpvulndb", "title": "WordPress 3.0-4.8.1 - Path Traversal in Unzipping", "score": 5, "scoreColor": "#ffee58", "description": "WordPress Vulnerability - WordPress 3.0-4.8.1 - Path Traversal in Unzipping" }, { "id": "WPVDB-ID:8910", "type": "wpvulndb", "title": "WordPress 2.9.2-4.8.1 - Open Redirect", "score": 4.9, "scoreColor": "#ffee58", "description": "WordPress Vulnerability - WordPress 2.9.2-4.8.1 - Open Redirect" }, { "id": "WPVDB-ID:8914", "type": "wpvulndb", "title": "WordPress 4.2.3-4.8.1 - Authenticated Cross-Site Scripting (XSS) in Visual Editor", "score": 4.3, "scoreColor": "#c6ff00", "description": "WordPress Vulnerability - WordPress 4.2.3-4.8.1 - Authenticated Cross-Site Scripting (XSS) in Visual Editor" }, { "id": "WPVDB-ID:8913", "type": "wpvulndb", "title": "WordPress 4.4-4.8.1 - Cross-Site Scripting (XSS) in oEmbed", "score": 4.3, "scoreColor": "#c6ff00", "description": "WordPress Vulnerability - WordPress 4.4-4.8.1 - Cross-Site Scripting (XSS) in oEmbed" }, { "id": "WPVDB-ID:8968", "type": "wpvulndb", "title": "WordPress 4.3.0-4.9 - HTML Language Attribute Escaping", "score": 3.5, "scoreColor": "#c6ff00", "description": "WordPress Vulnerability - WordPress 4.3.0-4.9 - HTML Language Attribute Escaping" }, { "id": "WPVDB-ID:8966", "type": "wpvulndb", "title": "WordPress 2.8.6-4.9 - Authenticated JavaScript File Upload", "score": 3.5, "scoreColor": "#c6ff00", "description": "WordPress Vulnerability - WordPress 2.8.6-4.9 - Authenticated JavaScript File Upload" }, { "id": "WPVDB-ID:8967", "type": "wpvulndb", "title": "WordPress 1.5.0-4.9 - RSS and Atom Feed Escaping", "score": 3.5, "scoreColor": "#c6ff00", "description": "WordPress Vulnerability - WordPress 1.5.0-4.9 - RSS and Atom Feed Escaping" }, { "id": "WPVDB-ID:8905", "type": "wpvulndb", "title": "WordPress 2.3.0-4.8.1 - $wpdb->prepare() potential SQL Injection", "score": 0, "description": "WordPress Vulnerability - WordPress 2.3.0-4.8.1 - $wpdb->prepare() potential SQL Injection" }], "score": 7.5, "scoreColor": "#f57c00" } }, "vulnerable": true }, { "name": "staticw2.yotpo.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "rt.mythings.com", "software": { "Microsoft IIS": { "software": "Microsoft IIS", "version": "7.5", "vulnerabilities": [{ "id": "CVE-2010-3972", "type": "cve", "title": "Heap-based buffer overflow in the TELNET_STREAM_CONTEXT::OnSendData function in ftpsvc.dll in Microsoft FTP Service 7.0 and 7.5 for Internet Information Services (IIS) 7.0, and IIS 7.5, allows remote attackers to execute arbitrary code or cause a denial of service (daemon crash) via a crafted FTP command, aka \"IIS FTP Service Heap Buffer Overrun Vulnerability.\" NOTE: some of these details are obtained from third party information.", "score": 10, "scoreColor": "#e65100", "description": "Heap-based buffer overflow in the TELNET_STREAM_CONTEXT::OnSendData function in ftpsvc.dll in Microsoft FTP Service 7.0 and 7.5 for Internet Information Services (IIS) 7.0, and IIS 7.5, allows remote attackers to execute arbitrary code or cause a denial of service (daemon crash) via a crafted FTP command, aka \"IIS FTP Service Heap Buffer Overrun Vulnerability.\" NOTE: some of these details are obtained from third party information." }, { "id": "CVE-2010-2730", "type": "cve", "title": "Buffer overflow in Microsoft Internet Information Services (IIS) 7.5, when FastCGI is enabled, allows remote attackers to execute arbitrary code via crafted headers in a request, aka \"Request Header Buffer Overflow Vulnerability.\"", "score": 9.3, "scoreColor": "#ef6c00", "description": "Buffer overflow in Microsoft Internet Information Services (IIS) 7.5, when FastCGI is enabled, allows remote attackers to execute arbitrary code via crafted headers in a request, aka \"Request Header Buffer Overflow Vulnerability.\"" }, { "id": "CVE-2010-1256", "type": "cve", "title": "Unspecified vulnerability in Microsoft IIS 6.0, 7.0, and 7.5, when Extended Protection for Authentication is enabled, allows remote authenticated users to execute arbitrary code via unknown vectors related to \"token checking\" that trigger memory corruption, aka \"IIS Authentication Memory Corruption Vulnerability.\"", "score": 8.5, "scoreColor": "#ef6c00", "description": "Unspecified vulnerability in Microsoft IIS 6.0, 7.0, and 7.5, when Extended Protection for Authentication is enabled, allows remote authenticated users to execute arbitrary code via unknown vectors related to \"token checking\" that trigger memory corruption, aka \"IIS Authentication Memory Corruption Vulnerability.\"" }, { "id": "IIS_FTP7_MS12-073.NASL", "type": "nessus", "title": "MS12-073: Vulnerabilities in Microsoft IIS Could Allow Information Disclosure (2733829) (uncredentialed check)", "score": 5, "scoreColor": "#ffee58", "description": "The FTP service in the version of Microsoft IIS 7.0 or 7.5 on the remote Windows host is affected by a command injection vulnerability that could result in unauthorized information disclosure." }, { "id": "SMB_NT_MS12-073.NASL", "type": "nessus", "title": "MS12-073: Vulnerabilities in Microsoft Internet Information Services (IIS) Could Allow Information Disclosure (2733829)", "score": 5, "scoreColor": "#ffee58", "description": "The FTP service in the version of IIS 7.0 or 7.5 on the remote Windows host is affected by multiple vulnerabilities that could result in unauthorized information disclosure." }, { "id": "CVE-2010-1899", "type": "cve", "title": "Stack consumption vulnerability in the ASP implementation in Microsoft Internet Information Services (IIS) 5.1, 6.0, 7.0, and 7.5 allows remote attackers to cause a denial of service (daemon outage) via a crafted request, related to asp.dll, aka \"IIS Repeated Parameter Request Denial of Service Vulnerability.\"", "score": 4.3, "scoreColor": "#c6ff00", "description": "Stack consumption vulnerability in the ASP implementation in Microsoft Internet Information Services (IIS) 5.1, 6.0, 7.0, and 7.5 allows remote attackers to cause a denial of service (daemon outage) via a crafted request, related to asp.dll, aka \"IIS Repeated Parameter Request Denial of Service Vulnerability.\"" }, { "id": "CVE-2012-2531", "type": "cve", "title": "Microsoft Internet Information Services (IIS) 7.5 uses weak permissions for the Operational log, which allows local users to discover credentials by reading this file, aka \"Password Disclosure Vulnerability.\"", "score": 2.1, "scoreColor": "#76ff03", "description": "Microsoft Internet Information Services (IIS) 7.5 uses weak permissions for the Operational log, which allows local users to discover credentials by reading this file, aka \"Password Disclosure Vulnerability.\"" }], "score": 10, "scoreColor": "#e65100" } }, "vulnerable": true }, { "name": "www.vapewild.com", "software": { "jQuery, script": { "software": "jQuery, script", "version": "1.7.2", "vulnerabilities": [], "score": 0 }, "jQuery UI, script": { "software": "jQuery UI, script", "version": "1.8.18", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "login.gcion.com", "software": { "Igor Sysoev nginx": { "software": "Igor Sysoev nginx", "version": "1.11.3", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "event.jirafe.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "version": "1.1.19", "vulnerabilities": [{ "id": "CVE-2017-7529", "type": "cve", "title": "Nginx versions since 0.5.6 up to and including 1.13.2 are vulnerable to integer overflow vulnerability in nginx range filter module resulting into leak of potentially sensitive information triggered by specially crafted request.", "score": 5, "scoreColor": "#ffee58", "description": "Nginx versions since 0.5.6 up to and including 1.13.2 are vulnerable to integer overflow vulnerability in nginx range filter module resulting into leak of potentially sensitive information triggered by specially crafted request." }, { "id": "CVE-2014-3616", "type": "cve", "title": "nginx 0.5.6 through 1.7.4, when using the same shared ssl_session_cache or ssl_session_ticket_key for multiple servers, can reuse a cached SSL session for an unrelated context, which allows remote attackers with certain privileges to conduct \"virtual host confusion\" attacks.", "score": 4.3, "scoreColor": "#c6ff00", "description": "nginx 0.5.6 through 1.7.4, when using the same shared ssl_session_cache or ssl_session_ticket_key for multiple servers, can reuse a cached SSL session for an unrelated context, which allows remote attackers with certain privileges to conduct \"virtual host confusion\" attacks." }], "score": 5, "scoreColor": "#ffee58" }, "Igor Sysoev nginx": { "software": "Igor Sysoev nginx", "version": "1.1.19", "vulnerabilities": [{ "id": "CVE-2013-4547", "type": "cve", "title": "nginx 0.8.41 through 1.4.3 and 1.5.x before 1.5.7 allows remote attackers to bypass intended restrictions via an unescaped space character in a URI.", "score": 7.5, "scoreColor": "#f57c00", "description": "nginx 0.8.41 through 1.4.3 and 1.5.x before 1.5.7 allows remote attackers to bypass intended restrictions via an unescaped space character in a URI." }, { "id": "CVE-2013-0337", "type": "cve", "title": "The default configuration of nginx, possibly 1.3.13 and earlier, uses world-readable permissions for the (1) access.log and (2) error.log files, which allows local users to obtain sensitive information by reading the files.", "score": 7.5, "scoreColor": "#f57c00", "description": "The default configuration of nginx, possibly 1.3.13 and earlier, uses world-readable permissions for the (1) access.log and (2) error.log files, which allows local users to obtain sensitive information by reading the files." }, { "id": "CVE-2013-2070", "type": "cve", "title": "http/modules/ngx_http_proxy_module.c in nginx 1.1.4 through 1.2.8 and 1.3.0 through 1.4.0, when proxy_pass is used with untrusted HTTP servers, allows remote attackers to cause a denial of service (crash) and obtain sensitive information from worker process memory via a crafted proxy response, a similar vulnerability to CVE-2013-2028.", "score": 5.8, "scoreColor": "#ffc107", "description": "http/modules/ngx_http_proxy_module.c in nginx 1.1.4 through 1.2.8 and 1.3.0 through 1.4.0, when proxy_pass is used with untrusted HTTP servers, allows remote attackers to cause a denial of service (crash) and obtain sensitive information from worker process memory via a crafted proxy response, a similar vulnerability to CVE-2013-2028." }], "score": 7.5, "scoreColor": "#f57c00" } }, "vulnerable": true }, { "name": "pixel-us.mythings.com", "software": { "Microsoft IIS": { "software": "Microsoft IIS", "version": "7.5", "vulnerabilities": [{ "id": "CVE-2010-3972", "type": "cve", "title": "Heap-based buffer overflow in the TELNET_STREAM_CONTEXT::OnSendData function in ftpsvc.dll in Microsoft FTP Service 7.0 and 7.5 for Internet Information Services (IIS) 7.0, and IIS 7.5, allows remote attackers to execute arbitrary code or cause a denial of service (daemon crash) via a crafted FTP command, aka \"IIS FTP Service Heap Buffer Overrun Vulnerability.\" NOTE: some of these details are obtained from third party information.", "score": 10, "scoreColor": "#e65100", "description": "Heap-based buffer overflow in the TELNET_STREAM_CONTEXT::OnSendData function in ftpsvc.dll in Microsoft FTP Service 7.0 and 7.5 for Internet Information Services (IIS) 7.0, and IIS 7.5, allows remote attackers to execute arbitrary code or cause a denial of service (daemon crash) via a crafted FTP command, aka \"IIS FTP Service Heap Buffer Overrun Vulnerability.\" NOTE: some of these details are obtained from third party information." }, { "id": "CVE-2010-2730", "type": "cve", "title": "Buffer overflow in Microsoft Internet Information Services (IIS) 7.5, when FastCGI is enabled, allows remote attackers to execute arbitrary code via crafted headers in a request, aka \"Request Header Buffer Overflow Vulnerability.\"", "score": 9.3, "scoreColor": "#ef6c00", "description": "Buffer overflow in Microsoft Internet Information Services (IIS) 7.5, when FastCGI is enabled, allows remote attackers to execute arbitrary code via crafted headers in a request, aka \"Request Header Buffer Overflow Vulnerability.\"" }, { "id": "CVE-2010-1256", "type": "cve", "title": "Unspecified vulnerability in Microsoft IIS 6.0, 7.0, and 7.5, when Extended Protection for Authentication is enabled, allows remote authenticated users to execute arbitrary code via unknown vectors related to \"token checking\" that trigger memory corruption, aka \"IIS Authentication Memory Corruption Vulnerability.\"", "score": 8.5, "scoreColor": "#ef6c00", "description": "Unspecified vulnerability in Microsoft IIS 6.0, 7.0, and 7.5, when Extended Protection for Authentication is enabled, allows remote authenticated users to execute arbitrary code via unknown vectors related to \"token checking\" that trigger memory corruption, aka \"IIS Authentication Memory Corruption Vulnerability.\"" }, { "id": "IIS_FTP7_MS12-073.NASL", "type": "nessus", "title": "MS12-073: Vulnerabilities in Microsoft IIS Could Allow Information Disclosure (2733829) (uncredentialed check)", "score": 5, "scoreColor": "#ffee58", "description": "The FTP service in the version of Microsoft IIS 7.0 or 7.5 on the remote Windows host is affected by a command injection vulnerability that could result in unauthorized information disclosure." }, { "id": "SMB_NT_MS12-073.NASL", "type": "nessus", "title": "MS12-073: Vulnerabilities in Microsoft Internet Information Services (IIS) Could Allow Information Disclosure (2733829)", "score": 5, "scoreColor": "#ffee58", "description": "The FTP service in the version of IIS 7.0 or 7.5 on the remote Windows host is affected by multiple vulnerabilities that could result in unauthorized information disclosure." }, { "id": "CVE-2010-1899", "type": "cve", "title": "Stack consumption vulnerability in the ASP implementation in Microsoft Internet Information Services (IIS) 5.1, 6.0, 7.0, and 7.5 allows remote attackers to cause a denial of service (daemon outage) via a crafted request, related to asp.dll, aka \"IIS Repeated Parameter Request Denial of Service Vulnerability.\"", "score": 4.3, "scoreColor": "#c6ff00", "description": "Stack consumption vulnerability in the ASP implementation in Microsoft Internet Information Services (IIS) 5.1, 6.0, 7.0, and 7.5 allows remote attackers to cause a denial of service (daemon outage) via a crafted request, related to asp.dll, aka \"IIS Repeated Parameter Request Denial of Service Vulnerability.\"" }, { "id": "CVE-2012-2531", "type": "cve", "title": "Microsoft Internet Information Services (IIS) 7.5 uses weak permissions for the Operational log, which allows local users to discover credentials by reading this file, aka \"Password Disclosure Vulnerability.\"", "score": 2.1, "scoreColor": "#76ff03", "description": "Microsoft Internet Information Services (IIS) 7.5 uses weak permissions for the Operational log, which allows local users to discover credentials by reading this file, aka \"Password Disclosure Vulnerability.\"" }], "score": 10, "scoreColor": "#e65100" } }, "vulnerable": true }, { "name": "w2.yotpo.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "uw-media.lohud.com", "software": { "Igor Sysoev nginx": { "software": "Igor Sysoev nginx", "version": "1.11.3", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "p.yotpo.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "cookie-us.mythings.com", "software": { "Microsoft IIS": { "software": "Microsoft IIS", "version": "7.5", "vulnerabilities": [{ "id": "CVE-2010-3972", "type": "cve", "title": "Heap-based buffer overflow in the TELNET_STREAM_CONTEXT::OnSendData function in ftpsvc.dll in Microsoft FTP Service 7.0 and 7.5 for Internet Information Services (IIS) 7.0, and IIS 7.5, allows remote attackers to execute arbitrary code or cause a denial of service (daemon crash) via a crafted FTP command, aka \"IIS FTP Service Heap Buffer Overrun Vulnerability.\" NOTE: some of these details are obtained from third party information.", "score": 10, "scoreColor": "#e65100", "description": "Heap-based buffer overflow in the TELNET_STREAM_CONTEXT::OnSendData function in ftpsvc.dll in Microsoft FTP Service 7.0 and 7.5 for Internet Information Services (IIS) 7.0, and IIS 7.5, allows remote attackers to execute arbitrary code or cause a denial of service (daemon crash) via a crafted FTP command, aka \"IIS FTP Service Heap Buffer Overrun Vulnerability.\" NOTE: some of these details are obtained from third party information." }, { "id": "CVE-2010-2730", "type": "cve", "title": "Buffer overflow in Microsoft Internet Information Services (IIS) 7.5, when FastCGI is enabled, allows remote attackers to execute arbitrary code via crafted headers in a request, aka \"Request Header Buffer Overflow Vulnerability.\"", "score": 9.3, "scoreColor": "#ef6c00", "description": "Buffer overflow in Microsoft Internet Information Services (IIS) 7.5, when FastCGI is enabled, allows remote attackers to execute arbitrary code via crafted headers in a request, aka \"Request Header Buffer Overflow Vulnerability.\"" }, { "id": "CVE-2010-1256", "type": "cve", "title": "Unspecified vulnerability in Microsoft IIS 6.0, 7.0, and 7.5, when Extended Protection for Authentication is enabled, allows remote authenticated users to execute arbitrary code via unknown vectors related to \"token checking\" that trigger memory corruption, aka \"IIS Authentication Memory Corruption Vulnerability.\"", "score": 8.5, "scoreColor": "#ef6c00", "description": "Unspecified vulnerability in Microsoft IIS 6.0, 7.0, and 7.5, when Extended Protection for Authentication is enabled, allows remote authenticated users to execute arbitrary code via unknown vectors related to \"token checking\" that trigger memory corruption, aka \"IIS Authentication Memory Corruption Vulnerability.\"" }, { "id": "IIS_FTP7_MS12-073.NASL", "type": "nessus", "title": "MS12-073: Vulnerabilities in Microsoft IIS Could Allow Information Disclosure (2733829) (uncredentialed check)", "score": 5, "scoreColor": "#ffee58", "description": "The FTP service in the version of Microsoft IIS 7.0 or 7.5 on the remote Windows host is affected by a command injection vulnerability that could result in unauthorized information disclosure." }, { "id": "SMB_NT_MS12-073.NASL", "type": "nessus", "title": "MS12-073: Vulnerabilities in Microsoft Internet Information Services (IIS) Could Allow Information Disclosure (2733829)", "score": 5, "scoreColor": "#ffee58", "description": "The FTP service in the version of IIS 7.0 or 7.5 on the remote Windows host is affected by multiple vulnerabilities that could result in unauthorized information disclosure." }, { "id": "CVE-2010-1899", "type": "cve", "title": "Stack consumption vulnerability in the ASP implementation in Microsoft Internet Information Services (IIS) 5.1, 6.0, 7.0, and 7.5 allows remote attackers to cause a denial of service (daemon outage) via a crafted request, related to asp.dll, aka \"IIS Repeated Parameter Request Denial of Service Vulnerability.\"", "score": 4.3, "scoreColor": "#c6ff00", "description": "Stack consumption vulnerability in the ASP implementation in Microsoft Internet Information Services (IIS) 5.1, 6.0, 7.0, and 7.5 allows remote attackers to cause a denial of service (daemon outage) via a crafted request, related to asp.dll, aka \"IIS Repeated Parameter Request Denial of Service Vulnerability.\"" }, { "id": "CVE-2012-2531", "type": "cve", "title": "Microsoft Internet Information Services (IIS) 7.5 uses weak permissions for the Operational log, which allows local users to discover credentials by reading this file, aka \"Password Disclosure Vulnerability.\"", "score": 2.1, "scoreColor": "#76ff03", "description": "Microsoft Internet Information Services (IIS) 7.5 uses weak permissions for the Operational log, which allows local users to discover credentials by reading this file, aka \"Password Disclosure Vulnerability.\"" }], "score": 10, "scoreColor": "#e65100" } }, "vulnerable": true }, { "name": "tags.tiqcdn.com", "software": { "Apache, headers": { "software": "Apache, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "user.lohud.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "version": "1.11.3", "vulnerabilities": [{ "id": "CVE-2017-7529", "type": "cve", "title": "Nginx versions since 0.5.6 up to and including 1.13.2 are vulnerable to integer overflow vulnerability in nginx range filter module resulting into leak of potentially sensitive information triggered by specially crafted request.", "score": 5, "scoreColor": "#ffee58", "description": "Nginx versions since 0.5.6 up to and including 1.13.2 are vulnerable to integer overflow vulnerability in nginx range filter module resulting into leak of potentially sensitive information triggered by specially crafted request." }], "score": 5, "scoreColor": "#ffee58" }, "Igor Sysoev nginx": { "software": "Igor Sysoev nginx", "version": "1.11.3", "vulnerabilities": [], "score": 0 } }, "vulnerable": true }, { "name": "img.secureserver.net", "software": { "Microsoft IIS": { "software": "Microsoft IIS", "version": "8.5", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "static.criteo.net", "software": { "Nginx, headers": { "software": "Nginx, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "as.casalemedia.com", "software": { "Apache, headers": { "software": "Apache, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "static.chartbeat.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "ads.pubmatic.com", "software": { "Apache, headers": { "software": "Apache, headers", "version": "2.2.15", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "gads.pubmatic.com", "software": { "Apache, headers": { "software": "Apache, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "fast.gannett.demdex.net", "software": { "Apache, headers": { "software": "Apache, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "apex.go.sonobi.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "version": "1.4.6", "vulnerabilities": [], "score": 0 }, "Igor Sysoev nginx": { "software": "Igor Sysoev nginx", "version": "1.4.6", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "simage2.pubmatic.com", "software": { "Apache, headers": { "software": "Apache, headers", "version": "2.2.24", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "dsum-sec.casalemedia.com", "software": { "Apache, headers": { "software": "Apache, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "pixel.adsafeprotected.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "d.adroll.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "version": "1.12.1", "vulnerabilities": [], "score": 0 }, "Igor Sysoev nginx": { "software": "Igor Sysoev nginx", "version": "1.12.1", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "pong.gannettdigital.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "version": "1.11.3", "vulnerabilities": [{ "id": "CVE-2017-7529", "type": "cve", "title": "Nginx versions since 0.5.6 up to and including 1.13.2 are vulnerable to integer overflow vulnerability in nginx range filter module resulting into leak of potentially sensitive information triggered by specially crafted request.", "score": 5, "scoreColor": "#ffee58", "description": "Nginx versions since 0.5.6 up to and including 1.13.2 are vulnerable to integer overflow vulnerability in nginx range filter module resulting into leak of potentially sensitive information triggered by specially crafted request." }], "score": 5, "scoreColor": "#ffee58" }, "Igor Sysoev nginx": { "software": "Igor Sysoev nginx", "version": "1.11.3", "vulnerabilities": [], "score": 0 } }, "vulnerable": true }, { "name": "ad.afy11.net", "software": { "Microsoft IIS": { "software": "Microsoft IIS", "version": "7.5", "vulnerabilities": [{ "id": "CVE-2010-3972", "type": "cve", "title": "Heap-based buffer overflow in the TELNET_STREAM_CONTEXT::OnSendData function in ftpsvc.dll in Microsoft FTP Service 7.0 and 7.5 for Internet Information Services (IIS) 7.0, and IIS 7.5, allows remote attackers to execute arbitrary code or cause a denial of service (daemon crash) via a crafted FTP command, aka \"IIS FTP Service Heap Buffer Overrun Vulnerability.\" NOTE: some of these details are obtained from third party information.", "score": 10, "scoreColor": "#e65100", "description": "Heap-based buffer overflow in the TELNET_STREAM_CONTEXT::OnSendData function in ftpsvc.dll in Microsoft FTP Service 7.0 and 7.5 for Internet Information Services (IIS) 7.0, and IIS 7.5, allows remote attackers to execute arbitrary code or cause a denial of service (daemon crash) via a crafted FTP command, aka \"IIS FTP Service Heap Buffer Overrun Vulnerability.\" NOTE: some of these details are obtained from third party information." }, { "id": "CVE-2010-2730", "type": "cve", "title": "Buffer overflow in Microsoft Internet Information Services (IIS) 7.5, when FastCGI is enabled, allows remote attackers to execute arbitrary code via crafted headers in a request, aka \"Request Header Buffer Overflow Vulnerability.\"", "score": 9.3, "scoreColor": "#ef6c00", "description": "Buffer overflow in Microsoft Internet Information Services (IIS) 7.5, when FastCGI is enabled, allows remote attackers to execute arbitrary code via crafted headers in a request, aka \"Request Header Buffer Overflow Vulnerability.\"" }, { "id": "CVE-2010-1256", "type": "cve", "title": "Unspecified vulnerability in Microsoft IIS 6.0, 7.0, and 7.5, when Extended Protection for Authentication is enabled, allows remote authenticated users to execute arbitrary code via unknown vectors related to \"token checking\" that trigger memory corruption, aka \"IIS Authentication Memory Corruption Vulnerability.\"", "score": 8.5, "scoreColor": "#ef6c00", "description": "Unspecified vulnerability in Microsoft IIS 6.0, 7.0, and 7.5, when Extended Protection for Authentication is enabled, allows remote authenticated users to execute arbitrary code via unknown vectors related to \"token checking\" that trigger memory corruption, aka \"IIS Authentication Memory Corruption Vulnerability.\"" }, { "id": "IIS_FTP7_MS12-073.NASL", "type": "nessus", "title": "MS12-073: Vulnerabilities in Microsoft IIS Could Allow Information Disclosure (2733829) (uncredentialed check)", "score": 5, "scoreColor": "#ffee58", "description": "The FTP service in the version of Microsoft IIS 7.0 or 7.5 on the remote Windows host is affected by a command injection vulnerability that could result in unauthorized information disclosure." }, { "id": "SMB_NT_MS12-073.NASL", "type": "nessus", "title": "MS12-073: Vulnerabilities in Microsoft Internet Information Services (IIS) Could Allow Information Disclosure (2733829)", "score": 5, "scoreColor": "#ffee58", "description": "The FTP service in the version of IIS 7.0 or 7.5 on the remote Windows host is affected by multiple vulnerabilities that could result in unauthorized information disclosure." }, { "id": "CVE-2010-1899", "type": "cve", "title": "Stack consumption vulnerability in the ASP implementation in Microsoft Internet Information Services (IIS) 5.1, 6.0, 7.0, and 7.5 allows remote attackers to cause a denial of service (daemon outage) via a crafted request, related to asp.dll, aka \"IIS Repeated Parameter Request Denial of Service Vulnerability.\"", "score": 4.3, "scoreColor": "#c6ff00", "description": "Stack consumption vulnerability in the ASP implementation in Microsoft Internet Information Services (IIS) 5.1, 6.0, 7.0, and 7.5 allows remote attackers to cause a denial of service (daemon outage) via a crafted request, related to asp.dll, aka \"IIS Repeated Parameter Request Denial of Service Vulnerability.\"" }, { "id": "CVE-2012-2531", "type": "cve", "title": "Microsoft Internet Information Services (IIS) 7.5 uses weak permissions for the Operational log, which allows local users to discover credentials by reading this file, aka \"Password Disclosure Vulnerability.\"", "score": 2.1, "scoreColor": "#76ff03", "description": "Microsoft Internet Information Services (IIS) 7.5 uses weak permissions for the Operational log, which allows local users to discover credentials by reading this file, aka \"Password Disclosure Vulnerability.\"" }], "score": 10, "scoreColor": "#e65100" } }, "vulnerable": true }, { "name": "image4.pubmatic.com", "software": { "Apache, headers": { "software": "Apache, headers", "version": "2.2.24", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "jadserve.postrelease.com", "software": { "Igor Sysoev nginx": { "software": "Igor Sysoev nginx", "version": "1.12.1", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "pix.impdesk.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "version": "1.10.3", "vulnerabilities": [], "score": 0 }, "Igor Sysoev nginx": { "software": "Igor Sysoev nginx", "version": "1.10.3", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "x.bidswitch.net", "software": { "Nginx, headers": { "software": "Nginx, headers", "version": "1.12.0", "vulnerabilities": [], "score": 0 }, "Igor Sysoev nginx": { "software": "Igor Sysoev nginx", "version": "1.12.0", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "sync.1rx.io", "software": { "Nginx, headers": { "software": "Nginx, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "ml314.com", "software": { "Microsoft IIS": { "software": "Microsoft IIS", "version": "8.5", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "www.gannett-cdn.com", "software": { "Igor Sysoev nginx": { "software": "Igor Sysoev nginx", "version": "1.11.3", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "match.taboola.com", "software": { "Igor Sysoev nginx": { "software": "Igor Sysoev nginx", "version": "1.9.12", "vulnerabilities": [], "score": 0 }, "Nginx, headers": { "software": "Nginx, headers", "version": "1.9.12", "vulnerabilities": [{ "id": "CVE-2017-7529", "type": "cve", "title": "Nginx versions since 0.5.6 up to and including 1.13.2 are vulnerable to integer overflow vulnerability in nginx range filter module resulting into leak of potentially sensitive information triggered by specially crafted request.", "score": 5, "scoreColor": "#ffee58", "description": "Nginx versions since 0.5.6 up to and including 1.13.2 are vulnerable to integer overflow vulnerability in nginx range filter module resulting into leak of potentially sensitive information triggered by specially crafted request." }], "score": 5, "scoreColor": "#ffee58" } }, "vulnerable": true }, { "name": "d3kkw-y716t.ads.tremorhub.com", "software": { "Apache Coyote (Tomcat)": { "software": "Apache Coyote (Tomcat)", "version": "1.1", "vulnerabilities": [{ "id": "CVE-2005-4836", "type": "cve", "title": "The HTTP/1.1 connector in Apache Tomcat 4.1.15 through 4.1.40 does not reject NULL bytes in a URL when allowLinking is configured, which allows remote attackers to read JSP source files and obtain sensitive information.", "score": 7.8, "scoreColor": "#f57c00", "description": "The HTTP/1.1 connector in Apache Tomcat 4.1.15 through 4.1.40 does not reject NULL bytes in a URL when allowLinking is configured, which allows remote attackers to read JSP source files and obtain sensitive information." }, { "id": "CVE-2014-0050", "type": "cve", "title": "MultipartStream.java in Apache Commons FileUpload before 1.3.1, as used in Apache Tomcat, JBoss Web, and other products, allows remote attackers to cause a denial of service (infinite loop and CPU consumption) via a crafted Content-Type header that bypasses a loop's intended exit conditions.", "score": 7.5, "scoreColor": "#f57c00", "description": "MultipartStream.java in Apache Commons FileUpload before 1.3.1, as used in Apache Tomcat, JBoss Web, and other products, allows remote attackers to cause a denial of service (infinite loop and CPU consumption) via a crafted Content-Type header that bypasses a loop's intended exit conditions." }, { "id": "CVE-2013-6357", "type": "cve", "title": "** DISPUTED ** Cross-site request forgery (CSRF) vulnerability in the Manager application in Apache Tomcat 5.5.25 and earlier allows remote attackers to hijack the authentication of administrators for requests that manipulate application deployment via the POST method, as demonstrated by a /manager/html/undeploy?path= URI.  NOTE: the vendor disputes the significance of this report, stating that \"the Apache Tomcat Security team has not accepted any reports of CSRF attacks against the Manager application ... as they require a reckless system administrator.\"", "score": 6.8, "scoreColor": "#ff9800", "description": "** DISPUTED ** Cross-site request forgery (CSRF) vulnerability in the Manager application in Apache Tomcat 5.5.25 and earlier allows remote attackers to hijack the authentication of administrators for requests that manipulate application deployment via the POST method, as demonstrated by a /manager/html/undeploy?path= URI.  NOTE: the vendor disputes the significance of this report, stating that \"the Apache Tomcat Security team has not accepted any reports of CSRF attacks against the Manager application ... as they require a reckless system administrator.\"" }, { "id": "CVE-2013-4286", "type": "cve", "title": "Apache Tomcat before 6.0.39, 7.x before 7.0.47, and 8.x before 8.0.0-RC3, when an HTTP connector or AJP connector is used, does not properly handle certain inconsistent HTTP request headers, which allows remote attackers to trigger incorrect identification of a request's length and conduct request-smuggling attacks via (1) multiple Content-Length headers or (2) a Content-Length header and a \"Transfer-Encoding: chunked\" header.  NOTE: this vulnerability exists because of an incomplete fix for CVE-2005-2090.", "score": 5.8, "scoreColor": "#ffc107", "description": "Apache Tomcat before 6.0.39, 7.x before 7.0.47, and 8.x before 8.0.0-RC3, when an HTTP connector or AJP connector is used, does not properly handle certain inconsistent HTTP request headers, which allows remote attackers to trigger incorrect identification of a request's length and conduct request-smuggling attacks via (1) multiple Content-Length headers or (2) a Content-Length header and a \"Transfer-Encoding: chunked\" header.  NOTE: this vulnerability exists because of an incomplete fix for CVE-2005-2090." }, { "id": "CVE-2012-5568", "type": "cve", "title": "Apache Tomcat through 7.0.x allows remote attackers to cause a denial of service (daemon outage) via partial HTTP requests, as demonstrated by Slowloris.", "score": 5, "scoreColor": "#ffee58", "description": "Apache Tomcat through 7.0.x allows remote attackers to cause a denial of service (daemon outage) via partial HTTP requests, as demonstrated by Slowloris." }, { "id": "CVE-2013-4322", "type": "cve", "title": "Apache Tomcat before 6.0.39, 7.x before 7.0.50, and 8.x before 8.0.0-RC10 processes chunked transfer coding without properly handling (1) a large total amount of chunked data or (2) whitespace characters in an HTTP header value within a trailer field, which allows remote attackers to cause a denial of service by streaming data.  NOTE: this vulnerability exists because of an incomplete fix for CVE-2012-3544.", "score": 4.3, "scoreColor": "#c6ff00", "description": "Apache Tomcat before 6.0.39, 7.x before 7.0.50, and 8.x before 8.0.0-RC10 processes chunked transfer coding without properly handling (1) a large total amount of chunked data or (2) whitespace characters in an HTTP header value within a trailer field, which allows remote attackers to cause a denial of service by streaming data.  NOTE: this vulnerability exists because of an incomplete fix for CVE-2012-3544." }, { "id": "CVE-2013-4590", "type": "cve", "title": "Apache Tomcat before 6.0.39, 7.x before 7.0.50, and 8.x before 8.0.0-RC10 allows attackers to obtain \"Tomcat internals\" information by leveraging the presence of an untrusted web application with a context.xml, web.xml, *.jspx, *.tagx, or *.tld XML document containing an external entity declaration in conjunction with an entity reference, related to an XML External Entity (XXE) issue.", "score": 4.3, "scoreColor": "#c6ff00", "description": "Apache Tomcat before 6.0.39, 7.x before 7.0.50, and 8.x before 8.0.0-RC10 allows attackers to obtain \"Tomcat internals\" information by leveraging the presence of an untrusted web application with a context.xml, web.xml, *.jspx, *.tagx, or *.tld XML document containing an external entity declaration in conjunction with an entity reference, related to an XML External Entity (XXE) issue." }, { "id": "CVE-2005-2090", "type": "cve", "title": "Jakarta Tomcat 5.0.19 (Coyote/1.1) and Tomcat 4.1.24 (Coyote/1.0) allows remote attackers to poison the web cache, bypass web application firewall protection, and conduct XSS attacks via an HTTP request with both a \"Transfer-Encoding: chunked\" header and a Content-Length header, which causes Tomcat to incorrectly handle and forward the body of the request in a way that causes the receiving server to process it as a separate HTTP request, aka \"HTTP Request Smuggling.\"", "score": 4.3, "scoreColor": "#c6ff00", "description": "Jakarta Tomcat 5.0.19 (Coyote/1.1) and Tomcat 4.1.24 (Coyote/1.0) allows remote attackers to poison the web cache, bypass web application firewall protection, and conduct XSS attacks via an HTTP request with both a \"Transfer-Encoding: chunked\" header and a Content-Length header, which causes Tomcat to incorrectly handle and forward the body of the request in a way that causes the receiving server to process it as a separate HTTP request, aka \"HTTP Request Smuggling.\"" }], "score": 7.8, "scoreColor": "#f57c00" } }, "vulnerable": true }, { "name": "pixel.tapad.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "version": "1.11.3", "vulnerabilities": [{ "id": "CVE-2017-7529", "type": "cve", "title": "Nginx versions since 0.5.6 up to and including 1.13.2 are vulnerable to integer overflow vulnerability in nginx range filter module resulting into leak of potentially sensitive information triggered by specially crafted request.", "score": 5, "scoreColor": "#ffee58", "description": "Nginx versions since 0.5.6 up to and including 1.13.2 are vulnerable to integer overflow vulnerability in nginx range filter module resulting into leak of potentially sensitive information triggered by specially crafted request." }], "score": 5, "scoreColor": "#ffee58" }, "Igor Sysoev nginx": { "software": "Igor Sysoev nginx", "version": "1.11.3", "vulnerabilities": [], "score": 0 } }, "vulnerable": true }, { "name": "cipix.acxiom.com", "software": { "Apache Coyote (Tomcat)": { "software": "Apache Coyote (Tomcat)", "version": "1.1", "vulnerabilities": [{ "id": "CVE-2005-4836", "type": "cve", "title": "The HTTP/1.1 connector in Apache Tomcat 4.1.15 through 4.1.40 does not reject NULL bytes in a URL when allowLinking is configured, which allows remote attackers to read JSP source files and obtain sensitive information.", "score": 7.8, "scoreColor": "#f57c00", "description": "The HTTP/1.1 connector in Apache Tomcat 4.1.15 through 4.1.40 does not reject NULL bytes in a URL when allowLinking is configured, which allows remote attackers to read JSP source files and obtain sensitive information." }, { "id": "CVE-2014-0050", "type": "cve", "title": "MultipartStream.java in Apache Commons FileUpload before 1.3.1, as used in Apache Tomcat, JBoss Web, and other products, allows remote attackers to cause a denial of service (infinite loop and CPU consumption) via a crafted Content-Type header that bypasses a loop's intended exit conditions.", "score": 7.5, "scoreColor": "#f57c00", "description": "MultipartStream.java in Apache Commons FileUpload before 1.3.1, as used in Apache Tomcat, JBoss Web, and other products, allows remote attackers to cause a denial of service (infinite loop and CPU consumption) via a crafted Content-Type header that bypasses a loop's intended exit conditions." }, { "id": "CVE-2013-6357", "type": "cve", "title": "** DISPUTED ** Cross-site request forgery (CSRF) vulnerability in the Manager application in Apache Tomcat 5.5.25 and earlier allows remote attackers to hijack the authentication of administrators for requests that manipulate application deployment via the POST method, as demonstrated by a /manager/html/undeploy?path= URI.  NOTE: the vendor disputes the significance of this report, stating that \"the Apache Tomcat Security team has not accepted any reports of CSRF attacks against the Manager application ... as they require a reckless system administrator.\"", "score": 6.8, "scoreColor": "#ff9800", "description": "** DISPUTED ** Cross-site request forgery (CSRF) vulnerability in the Manager application in Apache Tomcat 5.5.25 and earlier allows remote attackers to hijack the authentication of administrators for requests that manipulate application deployment via the POST method, as demonstrated by a /manager/html/undeploy?path= URI.  NOTE: the vendor disputes the significance of this report, stating that \"the Apache Tomcat Security team has not accepted any reports of CSRF attacks against the Manager application ... as they require a reckless system administrator.\"" }, { "id": "CVE-2013-4286", "type": "cve", "title": "Apache Tomcat before 6.0.39, 7.x before 7.0.47, and 8.x before 8.0.0-RC3, when an HTTP connector or AJP connector is used, does not properly handle certain inconsistent HTTP request headers, which allows remote attackers to trigger incorrect identification of a request's length and conduct request-smuggling attacks via (1) multiple Content-Length headers or (2) a Content-Length header and a \"Transfer-Encoding: chunked\" header.  NOTE: this vulnerability exists because of an incomplete fix for CVE-2005-2090.", "score": 5.8, "scoreColor": "#ffc107", "description": "Apache Tomcat before 6.0.39, 7.x before 7.0.47, and 8.x before 8.0.0-RC3, when an HTTP connector or AJP connector is used, does not properly handle certain inconsistent HTTP request headers, which allows remote attackers to trigger incorrect identification of a request's length and conduct request-smuggling attacks via (1) multiple Content-Length headers or (2) a Content-Length header and a \"Transfer-Encoding: chunked\" header.  NOTE: this vulnerability exists because of an incomplete fix for CVE-2005-2090." }, { "id": "CVE-2012-5568", "type": "cve", "title": "Apache Tomcat through 7.0.x allows remote attackers to cause a denial of service (daemon outage) via partial HTTP requests, as demonstrated by Slowloris.", "score": 5, "scoreColor": "#ffee58", "description": "Apache Tomcat through 7.0.x allows remote attackers to cause a denial of service (daemon outage) via partial HTTP requests, as demonstrated by Slowloris." }, { "id": "CVE-2013-4322", "type": "cve", "title": "Apache Tomcat before 6.0.39, 7.x before 7.0.50, and 8.x before 8.0.0-RC10 processes chunked transfer coding without properly handling (1) a large total amount of chunked data or (2) whitespace characters in an HTTP header value within a trailer field, which allows remote attackers to cause a denial of service by streaming data.  NOTE: this vulnerability exists because of an incomplete fix for CVE-2012-3544.", "score": 4.3, "scoreColor": "#c6ff00", "description": "Apache Tomcat before 6.0.39, 7.x before 7.0.50, and 8.x before 8.0.0-RC10 processes chunked transfer coding without properly handling (1) a large total amount of chunked data or (2) whitespace characters in an HTTP header value within a trailer field, which allows remote attackers to cause a denial of service by streaming data.  NOTE: this vulnerability exists because of an incomplete fix for CVE-2012-3544." }, { "id": "CVE-2013-4590", "type": "cve", "title": "Apache Tomcat before 6.0.39, 7.x before 7.0.50, and 8.x before 8.0.0-RC10 allows attackers to obtain \"Tomcat internals\" information by leveraging the presence of an untrusted web application with a context.xml, web.xml, *.jspx, *.tagx, or *.tld XML document containing an external entity declaration in conjunction with an entity reference, related to an XML External Entity (XXE) issue.", "score": 4.3, "scoreColor": "#c6ff00", "description": "Apache Tomcat before 6.0.39, 7.x before 7.0.50, and 8.x before 8.0.0-RC10 allows attackers to obtain \"Tomcat internals\" information by leveraging the presence of an untrusted web application with a context.xml, web.xml, *.jspx, *.tagx, or *.tld XML document containing an external entity declaration in conjunction with an entity reference, related to an XML External Entity (XXE) issue." }, { "id": "CVE-2005-2090", "type": "cve", "title": "Jakarta Tomcat 5.0.19 (Coyote/1.1) and Tomcat 4.1.24 (Coyote/1.0) allows remote attackers to poison the web cache, bypass web application firewall protection, and conduct XSS attacks via an HTTP request with both a \"Transfer-Encoding: chunked\" header and a Content-Length header, which causes Tomcat to incorrectly handle and forward the body of the request in a way that causes the receiving server to process it as a separate HTTP request, aka \"HTTP Request Smuggling.\"", "score": 4.3, "scoreColor": "#c6ff00", "description": "Jakarta Tomcat 5.0.19 (Coyote/1.1) and Tomcat 4.1.24 (Coyote/1.0) allows remote attackers to poison the web cache, bypass web application firewall protection, and conduct XSS attacks via an HTTP request with both a \"Transfer-Encoding: chunked\" header and a Content-Length header, which causes Tomcat to incorrectly handle and forward the body of the request in a way that causes the receiving server to process it as a separate HTTP request, aka \"HTTP Request Smuggling.\"" }], "score": 7.8, "scoreColor": "#f57c00" } }, "vulnerable": true }, { "name": "pxl.connexity.net", "software": { "Nginx, headers": { "software": "Nginx, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "static.adsafeprotected.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "px.moatads.com", "software": { "Apache, headers": { "software": "Apache, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "dt.adsafeprotected.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "vulnerabilities": [], "score": 0 }, "Igor Sysoev nginx": { "software": "Igor Sysoev nginx", "version": "1.11.6", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "triplelift.pxl.ace.advertising.com", "software": { "Microsoft IIS": { "software": "Microsoft IIS", "version": "7.5", "vulnerabilities": [{ "id": "CVE-2010-3972", "type": "cve", "title": "Heap-based buffer overflow in the TELNET_STREAM_CONTEXT::OnSendData function in ftpsvc.dll in Microsoft FTP Service 7.0 and 7.5 for Internet Information Services (IIS) 7.0, and IIS 7.5, allows remote attackers to execute arbitrary code or cause a denial of service (daemon crash) via a crafted FTP command, aka \"IIS FTP Service Heap Buffer Overrun Vulnerability.\" NOTE: some of these details are obtained from third party information.", "score": 10, "scoreColor": "#e65100", "description": "Heap-based buffer overflow in the TELNET_STREAM_CONTEXT::OnSendData function in ftpsvc.dll in Microsoft FTP Service 7.0 and 7.5 for Internet Information Services (IIS) 7.0, and IIS 7.5, allows remote attackers to execute arbitrary code or cause a denial of service (daemon crash) via a crafted FTP command, aka \"IIS FTP Service Heap Buffer Overrun Vulnerability.\" NOTE: some of these details are obtained from third party information." }, { "id": "CVE-2010-2730", "type": "cve", "title": "Buffer overflow in Microsoft Internet Information Services (IIS) 7.5, when FastCGI is enabled, allows remote attackers to execute arbitrary code via crafted headers in a request, aka \"Request Header Buffer Overflow Vulnerability.\"", "score": 9.3, "scoreColor": "#ef6c00", "description": "Buffer overflow in Microsoft Internet Information Services (IIS) 7.5, when FastCGI is enabled, allows remote attackers to execute arbitrary code via crafted headers in a request, aka \"Request Header Buffer Overflow Vulnerability.\"" }, { "id": "CVE-2010-1256", "type": "cve", "title": "Unspecified vulnerability in Microsoft IIS 6.0, 7.0, and 7.5, when Extended Protection for Authentication is enabled, allows remote authenticated users to execute arbitrary code via unknown vectors related to \"token checking\" that trigger memory corruption, aka \"IIS Authentication Memory Corruption Vulnerability.\"", "score": 8.5, "scoreColor": "#ef6c00", "description": "Unspecified vulnerability in Microsoft IIS 6.0, 7.0, and 7.5, when Extended Protection for Authentication is enabled, allows remote authenticated users to execute arbitrary code via unknown vectors related to \"token checking\" that trigger memory corruption, aka \"IIS Authentication Memory Corruption Vulnerability.\"" }, { "id": "IIS_FTP7_MS12-073.NASL", "type": "nessus", "title": "MS12-073: Vulnerabilities in Microsoft IIS Could Allow Information Disclosure (2733829) (uncredentialed check)", "score": 5, "scoreColor": "#ffee58", "description": "The FTP service in the version of Microsoft IIS 7.0 or 7.5 on the remote Windows host is affected by a command injection vulnerability that could result in unauthorized information disclosure." }, { "id": "SMB_NT_MS12-073.NASL", "type": "nessus", "title": "MS12-073: Vulnerabilities in Microsoft Internet Information Services (IIS) Could Allow Information Disclosure (2733829)", "score": 5, "scoreColor": "#ffee58", "description": "The FTP service in the version of IIS 7.0 or 7.5 on the remote Windows host is affected by multiple vulnerabilities that could result in unauthorized information disclosure." }, { "id": "CVE-2010-1899", "type": "cve", "title": "Stack consumption vulnerability in the ASP implementation in Microsoft Internet Information Services (IIS) 5.1, 6.0, 7.0, and 7.5 allows remote attackers to cause a denial of service (daemon outage) via a crafted request, related to asp.dll, aka \"IIS Repeated Parameter Request Denial of Service Vulnerability.\"", "score": 4.3, "scoreColor": "#c6ff00", "description": "Stack consumption vulnerability in the ASP implementation in Microsoft Internet Information Services (IIS) 5.1, 6.0, 7.0, and 7.5 allows remote attackers to cause a denial of service (daemon outage) via a crafted request, related to asp.dll, aka \"IIS Repeated Parameter Request Denial of Service Vulnerability.\"" }, { "id": "CVE-2012-2531", "type": "cve", "title": "Microsoft Internet Information Services (IIS) 7.5 uses weak permissions for the Operational log, which allows local users to discover credentials by reading this file, aka \"Password Disclosure Vulnerability.\"", "score": 2.1, "scoreColor": "#76ff03", "description": "Microsoft Internet Information Services (IIS) 7.5 uses weak permissions for the Operational log, which allows local users to discover credentials by reading this file, aka \"Password Disclosure Vulnerability.\"" }], "score": 10, "scoreColor": "#e65100" } }, "vulnerable": true }, { "name": "rp.gwallet.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "version": "1.10.2", "vulnerabilities": [], "score": 0 }, "Igor Sysoev nginx": { "software": "Igor Sysoev nginx", "version": "1.10.2", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "api.bounceexchange.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "ad.360yield.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "bh.contextweb.com", "software": { "Jetty": { "software": "Jetty", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "dis.criteo.com", "software": { "Microsoft IIS": { "software": "Microsoft IIS", "version": "10.0", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "delivery.swid.switchads.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "version": "1.10.2", "vulnerabilities": [], "score": 0 }, "Igor Sysoev nginx": { "software": "Igor Sysoev nginx", "version": "1.10.2", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "contextual.media.net", "software": { "Apache, headers": { "software": "Apache, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "ads.yahoo.com", "software": { "Apache Traffic Server, headers": { "software": "Apache Traffic Server, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "ads.converge-digital.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "ce.lijit.com", "software": { "Nginx, headers": { "software": "Nginx, headers", "vulnerabilities": [], "score": 0 } }, "vulnerable": false }, { "name": "ad.sxp.smartclip.net", "software": { "Nginx, headers": { "software": "Nginx, headers", "version": "1.11.3", "vulnerabilities": [{ "id": "CVE-2017-7529", "type": "cve", "title": "Nginx versions since 0.5.6 up to and including 1.13.2 are vulnerable to integer overflow vulnerability in nginx range filter module resulting into leak of potentially sensitive information triggered by specially crafted request.", "score": 5, "scoreColor": "#ffee58", "description": "Nginx versions since 0.5.6 up to and including 1.13.2 are vulnerable to integer overflow vulnerability in nginx range filter module resulting into leak of potentially sensitive information triggered by specially crafted request." }], "score": 5, "scoreColor": "#ffee58" }, "Igor Sysoev nginx": { "software": "Igor Sysoev nginx", "version": "1.11.3", "vulnerabilities": [], "score": 0 } }, "vulnerable": true }, { "name": "www.cvedetails.com", "software": { "PHP": { "software": "PHP", "version": "5.4.45", "vulnerabilities": [{ "id": "PHP_5_4_45.NASL", "type": "nessus", "title": "PHP 5.4.x < 5.4.45 Multiple Vulnerabilities", "score": 7.5, "scoreColor": "#f57c00", "description": "According to its banner, the version of PHP running on the remote web server is 5.4.x prior to 5.4.45. It is, therefore, affected by the following vulnerabilities :\n\n  - Multiple use-after-free memory errors exist related to     the unserialize() function. A remote attacker can     exploit these errors to execute arbitrary code.\n    (CVE-2015-6834)\n\n  - A use-after-free memory error exists related to the     php_var_unserialize() function. A remote attacker, using     a crafted serialize string, can exploit this to execute     arbitrary code. (CVE-2015-6835)\n\n  - A type confusion error exists related to the     serialize_function_call() function due to improper     validation of the headers field. A remote attacker can     exploit this to have unspecified impact. (CVE-2015-6836)\n\n  - Multiple flaws exist in the XSLTProcessor class due to     improper validation of input from the libxslt library. A     remote attacker can exploit thse flaws to have an     unspecified impact. (CVE-2015-6837, CVE-2015-6838)\n\n  - A flaw exists in the php_zip_extract_file() function     in file php_zip.c due to improper sanitization of     user-supplied input. An unauthenticated, remote attacker     can exploit this to create arbitrary directories outside     of the restricted path. (VulnDB 127122)\n\nNote that Nessus has not tested for these issues but has instead relied only on the application's self-reported version number." }, { "id": "CVE-2015-8994", "type": "cve", "title": "An issue was discovered in PHP 5.x and 7.x, when the configuration uses apache2handler/mod_php or php-fpm with OpCache enabled. With 5.x after 5.6.28 or 7.x after 7.0.13, the issue is resolved in a non-default configuration with the opcache.validate_permission=1 setting. The vulnerability details are as follows. In PHP SAPIs where PHP interpreters share a common parent process, Zend OpCache creates a shared memory object owned by the common parent during initialization. Child PHP processes inherit the SHM descriptor, using it to cache and retrieve compiled script bytecode (\"opcode\" in PHP jargon). Cache keys vary depending on configuration, but filename is a central key component, and compiled opcode can generally be run if a script's filename is known or can be guessed. Many common shared-hosting configurations change EUID in child processes to enforce privilege separation among hosted users (for example using mod_ruid2 for the Apache HTTP Server, or php-fpm user settings). In these scenarios, the default Zend OpCache behavior defeats script file permissions by sharing a single SHM cache among all child PHP processes. PHP scripts often contain sensitive information: Think of CMS configurations where reading or running another user's script usually means gaining privileges to the CMS database.", "score": 6.8, "scoreColor": "#ff9800", "description": "An issue was discovered in PHP 5.x and 7.x, when the configuration uses apache2handler/mod_php or php-fpm with OpCache enabled. With 5.x after 5.6.28 or 7.x after 7.0.13, the issue is resolved in a non-default configuration with the opcache.validate_permission=1 setting. The vulnerability details are as follows. In PHP SAPIs where PHP interpreters share a common parent process, Zend OpCache creates a shared memory object owned by the common parent during initialization. Child PHP processes inherit the SHM descriptor, using it to cache and retrieve compiled script bytecode (\"opcode\" in PHP jargon). Cache keys vary depending on configuration, but filename is a central key component, and compiled opcode can generally be run if a script's filename is known or can be guessed. Many common shared-hosting configurations change EUID in child processes to enforce privilege separation among hosted users (for example using mod_ruid2 for the Apache HTTP Server, or php-fpm user settings). In these scenarios, the default Zend OpCache behavior defeats script file permissions by sharing a single SHM cache among all child PHP processes. PHP scripts often contain sensitive information: Think of CMS configurations where reading or running another user's script usually means gaining privileges to the CMS database." }, { "id": "CVE-2017-16642", "type": "cve", "title": "In PHP before 5.6.32, 7.x before 7.0.25, and 7.1.x before 7.1.11, an error in the date extension's timelib_meridian handling of 'front of' and 'back of' directives could be used by attackers able to supply date strings to leak information from the interpreter, related to ext/date/lib/parse_date.c out-of-bounds reads affecting the php_parse_date function. NOTE: this is a different issue than CVE-2017-11145.", "score": 5, "scoreColor": "#ffee58", "description": "In PHP before 5.6.32, 7.x before 7.0.25, and 7.1.x before 7.1.11, an error in the date extension's timelib_meridian handling of 'front of' and 'back of' directives could be used by attackers able to supply date strings to leak information from the interpreter, related to ext/date/lib/parse_date.c out-of-bounds reads affecting the php_parse_date function. NOTE: this is a different issue than CVE-2017-11145." }, { "id": "CVE-2016-7478", "type": "cve", "title": "Zend/zend_exceptions.c in PHP, possibly 5.x before 5.6.28 and 7.x before 7.0.13, allows remote attackers to cause a denial of service (infinite loop) via a crafted Exception object in serialized data, a related issue to CVE-2015-8876.", "score": 5, "scoreColor": "#ffee58", "description": "Zend/zend_exceptions.c in PHP, possibly 5.x before 5.6.28 and 7.x before 7.0.13, allows remote attackers to cause a denial of service (infinite loop) via a crafted Exception object in serialized data, a related issue to CVE-2015-8876." }, { "id": "CVE-2014-9767", "type": "cve", "title": "Directory traversal vulnerability in the ZipArchive::extractTo function in ext/zip/php_zip.c in PHP before 5.4.45, 5.5.x before 5.5.29, and 5.6.x before 5.6.13 and ext/zip/ext_zip.cpp in HHVM before 3.12.1 allows remote attackers to create arbitrary empty directories via a crafted ZIP archive.", "score": 4.3, "scoreColor": "#c6ff00", "description": "Directory traversal vulnerability in the ZipArchive::extractTo function in ext/zip/php_zip.c in PHP before 5.4.45, 5.5.x before 5.5.29, and 5.6.x before 5.6.13 and ext/zip/ext_zip.cpp in HHVM before 3.12.1 allows remote attackers to create arbitrary empty directories via a crafted ZIP archive." }], "score": 7.5, "scoreColor": "#f57c00" }, "jQuery UI, script": { "software": "jQuery UI, script", "version": "1.12.0", "vulnerabilities": [], "score": 0 } }, "vulnerable": true }],

                        url: 'www.cvedetails.com',

                        stat: {
                            scanned: 2,
                            vulnerable: 0
                        },

                        settings: {
                            showAllDomains: true,
                            showOnlyVulnerable: true,
                            doExtraScan: true
                        }
                    });

                case 'CHANGE_SETTINGS':
                    console.log('[ACTION]', action);
                    return;

            }
        };
    };
};

/***/ }),

/***/ 41:
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

var clearData = exports.clearData = function clearData(vulners) {
    return {
        type: 'CLEAR_DATA',
        vulners: vulners
    };
};

var changeSettings = exports.changeSettings = function changeSettings(settings) {
    return {
        type: 'CHANGE_SETTINGS',
        settings: settings
    };
};

var changeLandingSeen = exports.changeLandingSeen = function changeLandingSeen(landingSeen) {
    return {
        type: 'LANDING_SEEN',
        landingSeen: landingSeen
    };
};

/***/ })

},[219]);
//# sourceMappingURL=main.bundle.js.map