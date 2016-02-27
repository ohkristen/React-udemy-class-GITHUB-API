var Card = React.createClass({
  getInitialState:  function() {
    return {}
  },

  render: function() {
    return (
      <div>
        <img src="" width="80" />
        <h3>Pete Hunt</h3>
        <hr/>
        </div>
    )
  }
})

var Main = React.createClass({
  render: function () {
    return (
    <div>
      <Card login="petehunt"/>
    </div>
    )
  }
});

React.render(<Main />, document.getElementById("root"));
