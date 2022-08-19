import React from "react";

class TestMe extends React.Component
{
	constructor()
    {
		super();
		this.state={message:" The original state"}
		this.UpdateState=this.UpdateState.bind(this)
	}
	UpdateState()
    {
		this.setState({message:"The new updated state"})
	}

    timeCheck = () => {
        setTimeout(alert("Time Check!"), 3000)
    }

render()
{
	return(
	<div>
        <h1> {this.state.message} </h1>
        <button onClick={this.UpdateState}> Click to update </button>
        <p> now checking callback func </p>
        <button onClick={this.timeCheck}>Timer</button>	
	</div>
)}
}
export default TestMe;