var decadesForNavBar = [
  "1910s",
  "1920s",
  "1930s",
  "1940s",
  "1950s",
  "1960s",
  "1970s"
];
console.log(decadesForNavBar);
(function() {
  "use strict";

  function Decade(props) {
    return (
      <li className="nav-link">
        <a href="#">{props.decade}</a>
      </li>
    );
  }

  function People(props) {
    return (
      <ul className="nav-center">
        {props.decades.map(function(decade) {
          return <Decade key={decade} decade={decade} />;
        })}
      </ul>
    );
  }

  class Decades extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        decades: decadesForNavBar
      };
    }

    render() {
      return (
        <div className="company-directory">
          <People decades={this.state.decades} />
        </div>
      );
    }
  }
  ReactDOM.render(<Decades />, document.getElementById("global-nav"));
})();
