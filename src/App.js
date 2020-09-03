import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Products from './Products'
import Person from './Person'
import Titles from './Titles'
import logo from './planet-earth-global-svgrepo-com.svg'
import './App.css'

// https://create-react-app.dev/docs/importing-a-component/

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { curTime: this.props.curTime }
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleString()
      })
    }, 1000)
  }

  render () {
    const fullName = new Person('Jon', 'Smith').getFullName()
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h3>Hello World.  It is now {this.state.curTime}</h3>
          Demo by {fullName} on Firebase using React v{React.version}
          <Products />
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          <p>Following RESTful titles fetched</p>
        </header>
        <Titles />
      </div>
    )
  }
}

App.propTypes = {
  curTime: PropTypes.string
}

export default App
