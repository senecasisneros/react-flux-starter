import React, { Component } from 'react'
import ListItem from './ListItem'
import NameStore from '../stores/NameStore'
import NameActions from '../actions/NameActions'

export default class NameList extends Component {
  constructor() {
    super();

    this.state = {
      names: NameStore.getAll()
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    NameActions.getAllNames();
    NameStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    NameStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      names: NameStore.getAll()
    });
  }

  render() {
    const ListItems = this.state.names.map(name => {
      return (
        <ListItem key={name._id} {...name}/>
      )
    })

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {ListItems}
        </tbody>
      </table>
    )
  }
}
