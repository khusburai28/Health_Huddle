import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaGem,
  FaTachometerAlt,
  FaUser,
} from "react-icons/fa";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";

// Reference:
// https://codesandbox.io/s/react-sidebar-routing-boj4c

const Sidebar = ({
  collapsed,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange,
}) => {
  const { logOut } = useUserAuth();
  const handleLogout = () => {
    logOut();
  };

  return (
    <ProSidebar
      image={false}
      collapsed={collapsed}
      toggled={toggled}
      onToggle={handleToggleSidebar}
      breakPoint="md"
    >
      {/* Header */}
      <SidebarHeader>
        <Menu iconShape="circle">
          {collapsed ? (
            <MenuItem
              icon={<FaAngleDoubleRight />}
              onClick={handleCollapsedChange}
            ></MenuItem>
          ) : (
            <MenuItem
              suffix={<FaAngleDoubleLeft />}
              onClick={handleCollapsedChange}
            >
              <div
                style={{
                  padding: "9px",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: 15,
                  letterSpacing: "1px",
                }}
              >
                Health Huddle
              </div>
            </MenuItem>
          )}
        </Menu>
      </SidebarHeader>
      {/* Content */}
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<FaTachometerAlt />}>
            Write
            <NavLink to="/dashboard/write-new" />
          </MenuItem>
          {/* <MenuItem icon={<FaGem />}>Components </MenuItem> */}
          <MenuItem icon={<FaGem />}>
            Private Journals <NavLink to="/dashboard/private-journals" />
          </MenuItem>
          <MenuItem icon={<FaGem />}>
            Public Journals <NavLink to="/dashboard/public-journals" />
          </MenuItem>
          <MenuItem icon={<FaTachometerAlt />}>
            Insights
            <NavLink to="/dashboard/insights" />
          </MenuItem>
          <MenuItem icon={<FaTachometerAlt />}>
            Uplift
            <NavLink to="/dashboard/uplift" />
          </MenuItem>
          <MenuItem
            icon={<FaGem />}
            suffix={<span className="badge red">S.O.S.</span>}
          >
            Resources <NavLink to="/dashboard/resources" />
          </MenuItem>
          <MenuItem icon={<FaGem />}>
            Home <NavLink to="/" />
          </MenuItem>
        </Menu>
      </SidebarContent>
      {/* Footer */}
      <SidebarFooter style={{ textAlign: "center" }}>
        <div className="sidebar-btn-wrapper" style={{ padding: "16px" }}>
          <div
            className="sidebar-btn"
            onClick={handleLogout}
            style={{ cursor: "pointer" }}
          >
            <FaUser />
            <span>Logout</span>
          </div>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;
