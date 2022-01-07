/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** ./static/main.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Tweet = __webpack_require__(/*! ./components/Tweet */ 1);
	
	var _Tweet2 = _interopRequireDefault(_Tweet);
	
	var _TweetList = __webpack_require__(/*! ./components/TweetList */ 2);
	
	var _TweetList2 = _interopRequireDefault(_TweetList);
	
	var _reactCookie = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-cookie\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reactCookie2 = _interopRequireDefault(_reactCookie);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Main = function (_React$Component) {
	  _inherits(Main, _React$Component);
	
	  function Main(props) {
	    _classCallCheck(this, Main);
	
	    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));
	
	    _this.state = { userId: _reactCookie2.default.load('session') };
	    _this.state = { tweets: [] };
	    return _this;
	  }
	  // function to post tweets
	
	
	  _createClass(Main, [{
	    key: "addTweet",
	    value: function addTweet(tweet) {
	      var self = this;
	      $.ajax({
	        url: '/api/v2/tweets',
	        contentType: 'application/json',
	        type: 'POST',
	        data: JSON.stringify({
	          'username': "Saussiona55",
	          'body': tweet
	        }),
	        success: function success() {
	          alert("success");
	          var newTweetList = self.state.tweets;
	          newTweetList.unshift({ tweetedby: "Saussiona55", body: tweet, timestamp: Date.now });
	          self.setState({ tweets: newTweetList });
	          return;
	        },
	        error: function error() {
	          return console.log("Failed");
	        }
	      });
	    }
	    // function to pull tweets
	
	  }, {
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      var self = this;
	      $.getJSON('/api/v2/tweets', function (tweetModels) {
	        var t = tweetModels;
	        // var t = $.map(tweetModels, function(item) {
	        //     return item;
	        //  });
	        alert(t);
	        self.setState({ tweets: t });
	      });
	
	      // $.ajax("/api/v2/tweets")
	      // //  .success(data => this.setState({tweets: data}))
	      //  .success(alert(data))
	      //  .error(error => console.log(error));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(_Tweet2.default, { sendTweet: this.addTweet.bind(this) }),
	        React.createElement(_TweetList2.default, { tweet: this.state.tweets })
	      );
	    }
	  }]);
	
	  return Main;
	}(React.Component);
	
	var documentReady = function documentReady() {
	  ReactDOM.render(React.createElement(Main, null), document.getElementById('react'));
	};
	
	$(documentReady);

/***/ },
/* 1 */
/*!************************************!*\
  !*** ./static/components/Tweet.js ***!
  \************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tweet = function (_React$Component) {
	  _inherits(Tweet, _React$Component);
	
	  function Tweet() {
	    _classCallCheck(this, Tweet);
	
	    return _possibleConstructorReturn(this, (Tweet.__proto__ || Object.getPrototypeOf(Tweet)).apply(this, arguments));
	  }
	
	  _createClass(Tweet, [{
	    key: "sendTweet",
	    value: function sendTweet(event) {
	      event.preventDefault();
	      this.props.sendTweet(this.refs.tweetTextArea.value);
	      this.refs.tweetTextArea.value = '';
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        { className: "row" },
	        React.createElement(
	          "nav",
	          null,
	          React.createElement(
	            "div",
	            { className: "nav-wrapper" },
	            React.createElement(
	              "a",
	              { href: "#", className: "brand-logo" },
	              "APP"
	            ),
	            React.createElement(
	              "ul",
	              { id: "nav-mobile", className: "right hide-on-med-and-down" },
	              React.createElement(
	                "li",
	                null,
	                React.createElement(
	                  "a",
	                  { href: "/profile" },
	                  "Profile"
	                )
	              ),
	              React.createElement(
	                "li",
	                null,
	                React.createElement(
	                  "a",
	                  { href: "/logout" },
	                  "Logout"
	                )
	              )
	            )
	          )
	        ),
	        React.createElement(
	          "form",
	          { onSubmit: this.sendTweet.bind(this) },
	          React.createElement(
	            "div",
	            { className: "input-field" },
	            React.createElement("textarea", { ref: "tweetTextArea", className: "materialize-textarea" }),
	            React.createElement(
	              "label",
	              null,
	              "How you doing?"
	            ),
	            React.createElement(
	              "button",
	              { className: "btn waves-effect waves-light right" },
	              "Tweet now ",
	              React.createElement(
	                "i",
	                { className: "material-icons right" },
	                "send"
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Tweet;
	}(React.Component);
	
	exports.default = Tweet;

/***/ },
/* 2 */
/*!****************************************!*\
  !*** ./static/components/TweetList.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _templatetweet = __webpack_require__(/*! ./templatetweet */ 3);
	
	var _templatetweet2 = _interopRequireDefault(_templatetweet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TweetList = function (_React$Component) {
	  _inherits(TweetList, _React$Component);
	
	  function TweetList() {
	    _classCallCheck(this, TweetList);
	
	    return _possibleConstructorReturn(this, (TweetList.__proto__ || Object.getPrototypeOf(TweetList)).apply(this, arguments));
	  }
	
	  _createClass(TweetList, [{
	    key: "render",
	    value: function render() {
	      var tweetlist = this.props.tweet.map(function (tweet) {
	        return React.createElement(_templatetweet2.default, _extends({ key: tweet.timestamp }, tweet));
	      });
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          "ul",
	          { className: "collection" },
	          tweetlist
	        )
	      );
	    }
	  }]);
	
	  return TweetList;
	}(React.Component);
	
	exports.default = TweetList;

/***/ },
/* 3 */
/*!********************************************!*\
  !*** ./static/components/templatetweet.js ***!
  \********************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tweettemplate = function (_React$Component) {
	  _inherits(Tweettemplate, _React$Component);
	
	  function Tweettemplate() {
	    _classCallCheck(this, Tweettemplate);
	
	    return _possibleConstructorReturn(this, (Tweettemplate.__proto__ || Object.getPrototypeOf(Tweettemplate)).apply(this, arguments));
	  }
	
	  _createClass(Tweettemplate, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "li",
	        { className: "collection-item avatar" },
	        React.createElement(
	          "i",
	          { className: "material-icons circle red" },
	          "play_arrow"
	        ),
	        React.createElement(
	          "span",
	          { className: "title" },
	          this.props.tweetedby
	        ),
	        React.createElement(
	          "p",
	          null,
	          this.props.body
	        ),
	        React.createElement(
	          "p",
	          null,
	          this.props.timestamp
	        )
	      );
	    }
	  }]);
	
	  return Tweettemplate;
	}(React.Component);
	
	exports.default = Tweettemplate;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map