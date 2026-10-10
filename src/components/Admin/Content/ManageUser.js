import { useState } from "react";
import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>

            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-warning" onClick={() => setShowModalCreateUser(true)}> <FcPlus/>Add new users</button>
                </div>
            </div>

            <div className="table-users-container">
                Table users
            </div>
            <ModalCreateUser show={showModalCreateUser} setShow={setShowModalCreateUser}/>
        </div>
    )
}


export default ManageUser;