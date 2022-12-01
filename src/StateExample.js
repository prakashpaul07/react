import React from 'react'

export default class StateExample extends React.Component {
    state={
        name:"prakash",
        age:20
    }
  render() {
    return (
      <div>
        StateExample
        <p>{this.state.name}
        {this.state.age}</p>

      </div>
    )
  }
}
