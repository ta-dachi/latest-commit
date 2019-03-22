class Greetings extends React.Component {
  render() {
    return <h1>Greetings, {this.props.name}!</h1>;
  }
}
console.log("test");
ReactDOM.render(<Greetings name="Chris" />, document.getElementById("test"));
