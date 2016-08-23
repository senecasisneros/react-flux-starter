import React, { Component } from 'react';
import NameList from './NameList'
import NewNameForm from './NewNameForm'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className="text-center">Welcome to React!</h1>
        <NewNameForm />
        <NameList />
      </div>
    )
  }
}
