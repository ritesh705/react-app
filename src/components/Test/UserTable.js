import React from "react";


const UserTable = ({users, editCallback}) =>
{

	const edit = (id) =>
	{
		editCallback(id);
	}

	return(
	<div>
		<table>
			<thead>
				<tr>User List</tr> </thead>
			<tbody>
			{
				users.map((user)=>
					<tr>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td><button type="submit" onClick={() => edit(user.id)}>Edit</button></td>
					</tr>
				)
			}
			</tbody>
		</table>
	</div>
	)
}

export default UserTable;