import React,{useState} from "react";

var count=0;

const  Users=()=>
{	
	const[username, setUserName] = useState();
	const[userId, setUserId] = useState(-1);
	const[userList, setUserList] = useState([]);

    const handlesubmit = () =>
    {
		let user = {}; 
		if(userList.length > 0 && userId >= 0)
		{
			user.id = userId;
			user.name = username;
			update(userId);
			setUserId(-1);
			setUserName("");
		}
		else
		{
			user.id = count;
			user.name = username;
			count++;
			userList.push(user);
			setUserList(userList);
			setUserName("");
		}
    }

    const edit = (id) =>
	{
		let selectedUser = "";
		for(let i=0; i<userList.length; i++)
		{
			let userId = parseInt(userList[i].id);
			let inputId = parseInt(id);
			if(userId !== undefined && userId === inputId)
			{
				selectedUser = userList[i].name;
				setUserId(userList[i].id);
				setUserName(selectedUser);
			}
		}
	}

	const update = (id) =>
	{
		for(let i=0;i<userList.length;i++)
		{
			let userId = parseInt(userList[i].id);
			let inputId = parseInt(id);
			if(userId !== undefined && userId===inputId){
				userList[i].name=username;
				setUserName(" ");
			}
		}
	}
	
	const deleteData = (id) =>
	{
		let newUsers = [];
		for(let i=0;i<userList.length;i++)
		{
			let userId = parseInt(userList[i].id);
			let inputId = parseInt(id);	
			if(userId !== undefined && userId!==inputId)
			{
				newUsers.push(userList[i]);
			}
		}
		setUserList(newUsers);
	}

return(
	<>
        Enter name:<input type="text" value={username} name="name" onInput={(e)=>setUserName(e.target.value)}/>
        <button type="submit" onClick={handlesubmit}>Submit</button>
        <div>
		<table>
			<thead>
				<tr>User List</tr> </thead>
			<tbody>
			{
				userList.map((user)=>
					<tr>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td><button type="submit" onClick={() => edit(user.id)}>Edit</button></td>
						<td><button type="submit" onClick={()=> deleteData(user.id)}> Delete </button></td>
					</tr>
				)
			}
			</tbody>
		</table>
	</div>
	</>
	);
}

export default Users;