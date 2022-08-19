import React,{useState} from "react";
import UserTable from "./UserTable";

let count=0;
const userList = [];

const UserForm=()=>
{
	const [userName, setUserName] = useState();

	const handleOnChange=(e)=>
	{
		setUserName(e.target.value);
	}

	const handleOnsubmit=(e)=>
	{
		e.preventDefault();
		savedata(userName);
	}
	
	const savedata=(userName)=>
	{
		let user = {};
		user.id = count;
		user.name = userName;
		userList.push(user);
		setUserName("");
		count++;
	}

	const editCallback = (id) =>
	{
		let selectedUser = "";
		for(let i=0; i<userList.length; i++)
		{
			let userId = parseInt(userList[i].id);
			let inputId = parseInt(id);
			if(userId === inputId)
			{
				selectedUser = userList[i].name;
				setUserName(selectedUser);
			}
		}
	}
	
	
	return(
	<>
        <form>
			<label>Enter Name:
				<input id="name" type="text" value={userName} onChange={handleOnChange}/>
				<button onClick={handleOnsubmit}>submit</button>
			</label>
        </form>

		<UserTable users={userList} editCallback={editCallback}/>
	</>
	
	)
}
	export default UserForm;