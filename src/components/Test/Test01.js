import React from "react";

class Parent extends React.Component
{
	constructor(props)
    {
		super(props);
		this.state={ companyName: ""}
	}

	render(){
        return(
            <div>
                <h1> Enter company name </h1>
                <Child companyName = {this.state.companyName}/>
            </div>
        )
	}
}

class Child extends React.Component
{	
    constructor(props)
    {
		super(props);
		this.state={ companyName: props.companyName}
	}

    changetext(e)
    {
        this.setState({companyName:e.target.value})
    }
		
			
	render()
    {
		return(
            <div>
                <input type="text" id="Companyname" onChange={this.changetext.bind(this)}/>
                <h2>Company Name : {this.state.companyName}</h2>
            </div>
	)}
		
}
export default Parent;