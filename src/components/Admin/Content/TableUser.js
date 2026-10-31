import { useState } from "react";

const TableUser = (props) => {
    const {listUsers} = props;

    return(
        <>
            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {listUsers && listUsers.length > 0 ?
                    listUsers.map((item, idx) => {
                        return (
                        <tr key={`table user ${item.id}`}>
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td>
                                <button className="btn btn-secondary">View</button>
                                <button className="btn btn-primary mx-3">Update</button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                        )
                    }) :

                    <tr>
                        <td colSpan={'4'}>
                            Not found data
                        </td>
                    </tr>
                }

              </tbody>
            </table>
        </>
    )
}

export default TableUser;