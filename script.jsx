var Card = React.createClass({
  render: function() {
    return (
      <div>
        <img src="" />
        <h3>Name Here</h3>
        <hr/>
        </div>
    )
  }
})

var Main = React.createClass({
  render: function () {
    return (
    <div>
    ...
    </div>
    )
  }
});

React.render(<Main />, document.getElementById("root"));
