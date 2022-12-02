import React from 'react'

export default class StateExample extends React.Component {
    state={
        name:"prakash",
        age:20
    }
  render() {
   // console.log(this.state.names)
    return (
      <div>
        StateExample
        <p>{this.state.name}
        {this.state.age}</p>

      </div>
    )
  }
}
