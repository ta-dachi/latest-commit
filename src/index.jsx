/**
 * See https://developer.github.com/v3/repos/branches/#get-branch
 *
 * Example Github api request:
 * https://api.github.com/repos/ta-dachi/eatsleepcode.tech/branches/master
 */
class LatestCommitComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      branch: "",
      date: "",
      sha: ""
    };
  }

  componentDidMount() {
    fetch(
      "https://api.github.com/repos/ta-dachi/eatsleepcode.tech/branches/master"
    )
      .then(response => {
        response.json().then(json => {
          console.log(json);
          this.setState({
            author: json.commit.author.login,
            branch: json.name,
            date: json.commit.commit.author.date,
            sha: json.commit.sha
          });
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div>{this.state.author}</div>
        <div>{this.state.branch}</div>
        <div>{this.state.date}</div>
        <div>{this.state.sha}</div>
      </div>
    );
  }
}

ReactDOM.render(<LatestCommitComponent />, document.getElementById("root"));
