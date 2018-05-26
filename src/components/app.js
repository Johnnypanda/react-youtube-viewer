import _ from 'lodash';
import React, { Component } from 'react';
import SearchBar from'./search_bar.js';
import VideoList from'./video_list.js';
import YTSearch from 'youtube-api-search';
import VideoDetail from './video_detail';

const API_KEY = 'AIzaSyCexBKb_cDe4Z8ieY_vX6ECYisVmVQxhZg';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
     };

    this.videoSearch('pewdiepie');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0] 
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
         onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
         videos={this.state.videos} />
      </div>
    );
  }
}

export default App;