import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ManageUser.scss'
import { FcPlus } from "react-icons/fc";
import axios from 'axios';

const ModalCreateUser = (props) =>  {
  const {show, setShow} = props;

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setPassword("");
    setUsername("");
    setImage("");
    setRole("USER");
    setPreviewImage("");

  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [role, setRole] = useState("USER");
  const [previewImage, setPreviewImage] = useState("");

  const handleUploadImage = (event) => {
    if(event.target && event.target.files && event.target.files[0])
    {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    }

  }

  const handleSubmitCreateUser = async() => {
    //validate info before allow save user
    // let data = {
    //   email: email,
    //   password: password,
    //   username: username,
    //   role: role,
    //   userImage: image
    // }
    
  const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);

    let res = await axios.post('http://localhost:8081/api/v1/participant', data);
    console.log(">>>check res", res);
  }

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose} size='xl' backdrop='static' className='modal-add-user'>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <div className="row g-3">
                    <div className="form-group col-md-6">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email"  value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    />
                    </div>
                    <div className="form-group col-md-6">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    />
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-md-6">
                    <label>Username</label>
                    <input type="text" className="form-control" value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    />
                    </div>
                    <div className="form-group col-md-4">
                        <label >Role</label>
                        <select className="form-control" onChange={(event) => setRole(event.target.value)}>
                            <option value="USER">USER</option>
                            <option value="ADMIN">ADMIN</option>
                        </select>
                    </div>

                    <div className='col-md-12'>
                        <label className='form-label label-upload' htmlFor='labelUpload'>
                          <FcPlus />
                          Upload file image
                        </label>
                        <input type='file' id='labelUpload' hidden
                        onChange={(event) => handleUploadImage(event)}/>
                    </div>

                    <div className='col-md-12 img-preview'>
                      {previewImage ? 
                        <img alt="preview_image" src={previewImage}/>
                        :
                        <span>Preview Image</span>
                      } 
                    </div>

                </div>

            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCreateUser;