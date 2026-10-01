import 'react-pro-sidebar/dist/css/styles.css';
import './SideBar.scss';
import {FaGem} from 'react-icons/fa';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import sidebarBg from '../../assets/bg2.jpg';
import { DiReact } from "react-icons/di";
import { MdDashboard } from "react-icons/md";
import {Link} from 'react-router-dom';

const SideBar = (props) => {
    const { image, collapsed, toggled, handleToggleSidebar } = props;
    return(
        <>   
<ProSidebar
      image={sidebarBg}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          <DiReact size={'3em'} color={"#00bfff"}/>
          <span>Nope Pro</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<MdDashboard />}
           
           // suffix={<span className='badge red'>Main</span>} //for show tag on right or menuitem
          >
            Dashboard
            <Link to="/admin"/>
          </MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            icon={<FaGem />}
            title="Features"
          >
            <MenuItem>Quản lý Users</MenuItem>
            <Link to="/admin/manage-users"/>
            <MenuItem>Quản lý Bài Quiz</MenuItem>
            <MenuItem>Quản lý Câu Hỏi</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/Dungnope/reacthoidanit"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
              &#169; Nope Pro Dev
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
        </>
    )
}

export default SideBar;