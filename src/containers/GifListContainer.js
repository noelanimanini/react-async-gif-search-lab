import React from 'react'; 
import GifList from '../components/GifList'; 
import GifSearch from '../components/GifSearch';


export default class GifListContainer extends React.Component {
    state = {
        gifs: []
    }

    render () {
        return (
            <div>
                <GifSearch fetchThemGifs={this.fetchThemGifs}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
   fetchThemGifs = (query = "dolphins") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=p4NP5vTVMOuq8sB3XYrA9WwG7jec9txm`).then(response => response.json()).then(({data}) => {
        this.setState({gifs: data.map(gif => ({url: gif.images.original.url}))})
    })
   }
   componentDidMount() {
       this.fetchThemGifs()
   }
}