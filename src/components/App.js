import React from 'react'
import GifListContainer from '../containers/GifListContainer'
import NavBar from './NavBar'

// the App component should render out the GifListContainer component 

class App extends React.Component {
  state = {
    search: 'puppies'

  }

 render () {
  return (
    <div>
        <GifListContainer search={this.state.search}/>
        < NavBar color='black' title="Giphy Search" />
    </div>
  )
 }
}

export default App
