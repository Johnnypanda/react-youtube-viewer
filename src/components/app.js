import React, { Component } from 'react';
import SearchBar from'./search_bar.js';
import VideoList from'./video_list.js';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCexBKb_cDe4Z8ieY_vX6ECYisVmVQxhZg';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'pewdiepie'}, (videos) => {
      this.setState({ videos });
      //which means this.setState({videos: videos});
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;