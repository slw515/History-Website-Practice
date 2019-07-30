"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var decadesForNavBar = ["1910s", "1920s", "1930s", "1940s", "1950s", "1960s", "1970s"];
console.log(decadesForNavBar);
(function () {
  "use strict";

  function Decade(props) {
    return React.createElement(
      "li",
      { className: "nav-link" },
      React.createElement(
        "a",
        { href: "#" },
        props.decade
      )
    );
  }

  function People(props) {
    return React.createElement(
      "ul",
      { className: "nav-center" },
      props.decades.map(function (decade) {
        return React.createElement(Decade, { key: decade, decade: decade });
      })
    );
  }

  var Decades = function (_React$Component) {
    _inherits(Decades, _React$Component);

    function Decades(props) {
      _classCallCheck(this, Decades);

      var _this = _possibleConstructorReturn(this, (Decades.__proto__ || Object.getPrototypeOf(Decades)).call(this, props));

      _this.state = {
        decades: decadesForNavBar
      };
      return _this;
    }

    _createClass(Decades, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          { className: "company-directory" },
          React.createElement(People, { decades: this.state.decades })
        );
      }
    }]);

    return Decades;
  }(React.Component);

  ReactDOM.render(React.createElement(Decades, null), document.getElementById("global-nav"));
})();
//# sourceMappingURL=addReact-dist.js.map