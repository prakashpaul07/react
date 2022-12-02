import React from 'react';

export default class Events extends React.Component {
    state={
        username:""
    }
    handleUser=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleClick=()=>{
       console.log(this.state.username)
       this.setState({
        username:""
       })
    }
  render() {
   // console.log(this.state.username)
    return (
    <div>
        <input type="text" name="username" placeholder='user' value={this.state.username} onChange={this.handleUser}/>

        <button onClick={this.handleClick}>submit</button>
     </div>
    )
  }
}
