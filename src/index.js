import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyABUyZR4DDOLYZQ4Qh7FpQcxgUvwxM2W7c';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { videos: [],
     selectedVideo: null 
    };
    
    YTSearch({key: API_KEY, term: 'dota2'}, (videos) => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
    })
  }
  
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
  
}

ReactDOM.render(<App />, document.querySelector('.container'));

// AIzaSyABUyZR4DDOLYZQ4Qh7FpQcxgUvwxM2W7c