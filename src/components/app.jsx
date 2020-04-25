import React, { Component } from 'react';
import SearchBar from './search_bar.jsx'
import Gif from './gif.jsx'
import GifList from './gif_list.jsx'
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      gifs: [{ id: '3ohs7KViF6rA4aan5u'},
      { id: '3jcgPn9fzfaXc1EHJC'}],
      selectedGifId: '3ohs7KViF6rA4aan5u'
    }
    this.search("homer thinking")
  }
  
  search = (query) => {
    giphy('3XQ1Y4LOi7q6P082bvH89DxGBFEtgs9x').search({
      q: query,
      rating: 'g',
      limit: 10
    },(err, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }
  
  render() {
    const gifs = [
      { id: '3ohs7KViF6rA4aan5u'},
      { id: '3jcgPn9fzfaXc1EHJC'}
    ]
    return(
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
