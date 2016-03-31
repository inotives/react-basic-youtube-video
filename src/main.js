import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer.jsx';
import SearchBar from './components/SearchBar.jsx';
import VideoList from './components/VideoList.jsx';
import VideoDetail from './components/VideoDetail.jsx';
import YTSearch from 'youtube-api-search';

const YOUTUBE_API_KEY = 'AIzaSyCE-akM-eJMno-HMjK83yagSmbEjHl6Elk';



class App extends React.Component {
  constructor(props){
    super(props);

    this.state = { videos: [] }

    YTSearch({key: YOUTUBE_API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos })  // equal to :: this.setState({videos: videos})
    });
  }

  render(){
    return (
      <div>
        <hr/>
        <SearchBar />
        <hr />
        
        <VideoDetail video={this.state.videos[0]}/>
        <br/>
        <VideoList videos={this.state.videos}/>
        <hr />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'))
