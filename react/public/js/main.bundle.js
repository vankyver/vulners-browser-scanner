webpackJsonp([0],{

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(72);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(206);

var _App = __webpack_require__(207);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('body'));

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "css/index.css";

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(208);

var _Route = __webpack_require__(62);

var _Route2 = _interopRequireDefault(_Route);

var _Layout = __webpack_require__(235);

var _Layout2 = _interopRequireDefault(_Layout);

var _Main = __webpack_require__(237);

var _Main2 = _interopRequireDefault(_Main);

var _Search = __webpack_require__(238);

var _Search2 = _interopRequireDefault(_Search);

var _Settings = __webpack_require__(241);

var _Settings2 = _interopRequireDefault(_Settings);

var _Credits = __webpack_require__(242);

var _Credits2 = _interopRequireDefault(_Credits);

var _Switch = __webpack_require__(103);

var _Switch2 = _interopRequireDefault(_Switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
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
                _react2.default.createElement(_Route2.default, { path: '/settings', component: _Settings2.default }),
                _react2.default.createElement(_Route2.default, { path: '/credits', component: _Credits2.default })
            )
        )
    );
};

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(236);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(104);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_React$Component) {
    _inherits(Layout, _React$Component);

    function Layout() {
        _classCallCheck(this, Layout);

        return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
    }

    _createClass(Layout, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                { className: "body" },
                _react2.default.createElement(_Header2.default, null),
                this.props.children,
                _react2.default.createElement(_Footer2.default, null)
            );
        }
    }]);

    return Layout;
}(_react2.default.Component);

exports.default = Layout;

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { id: "header" },
                _react2.default.createElement(
                    "nav",
                    null,
                    _react2.default.createElement(
                        "div",
                        { className: "nav-wrapper grey darken-3" },
                        _react2.default.createElement(
                            "ul",
                            { className: "left stat" },
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "div",
                                    null,
                                    " vulnerable ",
                                    _react2.default.createElement(
                                        "span",
                                        { id: "stat-vulnerable" },
                                        " "
                                    ),
                                    " "
                                )
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "div",
                                    null,
                                    " scanned ",
                                    _react2.default.createElement(
                                        "span",
                                        { id: "stat-scanned" },
                                        " "
                                    ),
                                    " "
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "ul",
                            { className: "right " },
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "div",
                                    null,
                                    "Show all domains"
                                )
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "div",
                                    { className: "switch" },
                                    _react2.default.createElement(
                                        "label",
                                        null,
                                        _react2.default.createElement("input", { id: "show_all_content", type: "checkbox" }),
                                        _react2.default.createElement("span", { className: "lever" })
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "i",
                                    { className: "material-icons delete" },
                                    "delete"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _Footer = __webpack_require__(104);

var _Footer2 = _interopRequireDefault(_Footer);

var _Link = __webpack_require__(61);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Main);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Main.__proto__ || Object.getPrototypeOf(Main)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            data: []
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Main, [{
        key: "render",
        value: function render() {
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
        }
    }]);

    return Main;
}(_react2.default.Component);

Main.contextTypes = {
    router: _react2.default.PropTypes.object
};
exports.default = Main;

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _Domain = __webpack_require__(239);

var _Domain2 = _interopRequireDefault(_Domain);

var _Browser = __webpack_require__(240);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
    _inherits(Search, _React$Component);

    function Search() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Search);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            data: [],
            stats: []
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Search, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            _Browser.browser.tabs.getSelected(function (tab) {
                _Browser.browser.runtime.sendMessage({ action: 'show_vulnerabilities', tab_id: tab.id }, function (resp) {
                    _this2.setState(_extends({}, resp));
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var data = this.state.data;

            return _react2.default.createElement(
                'div',
                { id: 'index-content', className: 'center-align' },
                Object.keys(data).map(function (name) {
                    return _react2.default.createElement(_Domain2.default, { name: name, software: data[name] });
                })
            );
        }
    }]);

    return Search;
}(_react2.default.Component);

Search.propTypes = {
    data: _react2.default.PropTypes.array.isRequired
};
Search.defaultProps = {
    data: []
};
exports.default = Search;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Domain = function (_React$Component) {
    _inherits(Domain, _React$Component);

    function Domain() {
        _classCallCheck(this, Domain);

        return _possibleConstructorReturn(this, (Domain.__proto__ || Object.getPrototypeOf(Domain)).apply(this, arguments));
    }

    _createClass(Domain, [{
        key: 'getScore',
        value: function getScore(soft) {
            return soft.score ? _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'span',
                    { style: { fontSize: '16px', color: soft.scoreColor } },
                    soft.score
                )
            ) : _react2.default.createElement(
                'div',
                { className: 'light-green-text' },
                'Not vulnerable'
            );
        }
    }, {
        key: 'getVulnerability',
        value: function getVulnerability(vns) {
            return _react2.default.createElement(
                'li',
                { key: vns.id, className: 'collection-item data-item' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'a',
                        { className: '', href: "https://vulners.com/" + vns.type + "/" + vns.id + "?utm_source=scanner&utm_medium=chromePlugin&utm_campaign=scan" },
                        _react2.default.createElement(
                            'span',
                            { className: 'title' },
                            vns.id
                        )
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'truncate data-title ' },
                        vns.title
                    )
                ),
                _react2.default.createElement(
                    'a',
                    { className: 'secondary-content' },
                    _react2.default.createElement(
                        'span',
                        { style: { fontSize: '16px', color: vns.scoreColor } },
                        vns.score
                    )
                )
            );
        }
    }, {
        key: 'getSoftware',
        value: function getSoftware(softName, soft) {
            var _this2 = this;

            return _react2.default.createElement(
                'li',
                { key: softName, className: ["soft"].concat(soft.score && "hoverable").join(' ') },
                _react2.default.createElement(
                    'div',
                    { className: 'collapsible-header' },
                    soft.software - soft.version,
                    this.getScore(soft)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'collapsible-body' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'collection' },
                        soft.vulnerabilities.map(function (v) {
                            return _this2.getVulnerability(v);
                        })
                    )
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            $('.collapsible').collapsible();
            $('.tooltipped').tooltip({ delay: 50 });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

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
                    Object.keys(software).map(function (soft) {
                        return _this3.getSoftware(soft, software[soft]);
                    })
                )
            );
        }
    }]);

    return Domain;
}(_react2.default.Component);

Domain.propTypes = {
    name: _react2.default.PropTypes.string,
    software: _react2.default.PropTypes.object
};
Domain.defaultProps = {
    name: '',
    software: {}
};
exports.default = Domain;

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isChrome = /google/i.test(navigator.vendor);
var browser = isChrome ? chrome : browser;

exports.browser = browser;

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Settings = function (_React$Component) {
    _inherits(Settings, _React$Component);

    function Settings() {
        _classCallCheck(this, Settings);

        return _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).apply(this, arguments));
    }

    _createClass(Settings, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', null);
        }
    }]);

    return Settings;
}(_react2.default.Component);

exports.default = Settings;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

/***/ })

},[205]);
//# sourceMappingURL=main.bundle.js.map