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
      sha: "",
      link: "",
      error: null
    };
  }

  componentDidMount() {
    // Replace this with your own repo
    // https://api.github.com/repos/:owner/:repo/branches/maste
    fetch(
      "https://api.github.com/repos/ta-dachi/eatsleepcode.tech/branches/master"
    )
      .then(response => {
        response.json().then(json => {
          console.log(json);
          if (json.commit) {
            this.setState({
              author: json.commit.author.login,
              branch: json.name,
              date: json.commit.commit.author.date,
              sha: json.commit.sha,
              link: json._links.html
            });
          } else {
            this.setState({
              error: json.message
            });
          }
        });
      })
      .catch(error => {
        this.setState({
          error: error
        });
        console.log(error);
      });
  }

  render() {
    const html = this.state.error ? (
      <div id="error">{this.state.error}</div>
    ) : (
      <div>
        <div id="author">{this.state.author}</div>
        <div id="branch">{this.state.branch}</div>
        <div id="date">{this.state.date}</div>
        <div id="sha">{this.state.sha}</div>
        <div id="link">{this.state.link}</div>
      </div>
    );

    return <div>{html}</div>;
  }
}

ReactDOM.render(<LatestCommitComponent />, document.getElementById("root"));
