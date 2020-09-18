import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

// Need a componentDidMount method and invoke our getRepos method?


  search(term) {
    console.log(`${term} was searched`);
    // TODO: Make a post request using ajax or axios to the correct server endpoint
    const context = this;
    axios.post('/repos', {username: term})
      .then((response) => {
        context.setState({
          repos: response.data
        })
      })
      .catch((error) => {
        console.log;
      })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));