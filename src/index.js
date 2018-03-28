import _ from 'lodash';
import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar.js';
import VideoList  from './components/video_list.js';
import VideoDetail from './components/video_detail.js';

const API_KEY = 'AIzaSyDUP8UZWhjhwHJXzLPEZEXFDkdMxIIXrBo';

// API test
// YTSearch({key: API_KEY, term: 'cats'}, function(data) {
//   console.log(data);
// });

// Create new componet. This componet should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [],
    selectedVideo: null
  };

  this.videoSearch('Top 40 songs')

}

  videoSearch(term) {
      YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      // this.setState({ videos: videos})
    });
  }


  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={(videoSearch)} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}


//Take component's generated HTML and put it in the DOM

ReactDOM.render(<App />, document.querySelector(".container"))
