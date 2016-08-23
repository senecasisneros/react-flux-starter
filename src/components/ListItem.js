import React, { Component } from 'react';
import moment from 'moment'

export default class ListItem extends Component {
  constructor() {
    super();
  }

  render() {
    let { _id, name, address, email, phoneNumber } = this.props;

    return (
      <tr>
        <td>{ name }</td>
        <td>{ address }</td>
        <td>{ email }</td>
        <td>{ phoneNumber }</td>
        <td>{ moment(createdAt).format('lll') }</td>
      </tr>
    )
  }
}
