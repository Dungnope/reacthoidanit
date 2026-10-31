import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setshowModalUpdateUser] = useState(false);
    const [dataUpdate, setdataUpdate] = useState({});

    const [listUsers, setListUsers] = useState([]);
        //componentDidMount, chay sau khi ham return chay
        //goi API
        useEffect(() => {
            fetchListUsers();
        }, [])

        const fetchListUsers = async () => {
            let res =  await getAllUsers();
            if(res.EC === 0){
                setListUsers(res.DT);
            }
        }

        const handleClickBtnUpdate = (user) => {
            setshowModalUpdateUser(true);
            setdataUpdate(user);
        }

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
                <TableUser listUsers={listUsers}
                handleClickBtnUpdate={handleClickBtnUpdate}
                />
            </div>
            <ModalCreateUser 
            show={showModalCreateUser} 
            setShow={setShowModalCreateUser}
            fetchListUsers={fetchListUsers}
            />
            <ModalUpdateUser
            show={showModalUpdateUser}
            setShow={setshowModalUpdateUser}
            dataUpdate={dataUpdate}
            />
        </div>
    )
}


export default ManageUser;