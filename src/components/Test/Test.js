import React from 'react';

class FormData extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state= {data:"information..."}
		this.updateData=this.updateData.bind(this);
	}
	
	updateData(e)
	{
		this.setState({data : e.target.value})
	}
	
	render()
	{
		return(
	
		<div>
			<input type="text" value={this.state.data} onChange={this.updateData}/>
			<h4> {this.state.data} </h4>
		</div>
		
		);
	}
}
export default FormData;