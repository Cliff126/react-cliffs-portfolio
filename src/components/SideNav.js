// import React from "react";
// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarFooter,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem,
// } from "cdbreact";
// import { NavLink, Link } from "react-router-dom";
// import AdobeStock_430723045 from "../images/AdobeStock_430723045.jpeg";
// import SideNavStyle from './SideNavStyle.css'

// function SideNav() {
//   return (
//     <div
//       style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
//     >
//       <CDBSidebar textColor="#fff" backgroundColor="#000000" className="sidebar">
//         <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
//           <Link to="/" className="navbar-logo">
//             <img
//               className="clickable-icon"
//               src={AdobeStock_430723045}
//               alt="Letter C"
//             />
//             <h3 style={{color: "white"}}>Clifford</h3>
//             <h6 className="title" style={{color: "white"}}>Full Stack Web Developer</h6>
//           </Link>
//         </CDBSidebarHeader>
//         <CDBSidebarContent className="sidebar-content">
//           <CDBSidebarMenu>
//             <NavLink to="/" className="activeClicked">
//               <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink  to="/tables" className="activeClicked">
//               <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink to="/profile" className="activeClicked">
//               <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink to="/analytics" className="activeClicked">
//               <CDBSidebarMenuItem icon="chart-line">
//                 Analytics
//               </CDBSidebarMenuItem>
//             </NavLink>

//             <NavLink
              
//               to="/hero404"
//               target="_blank"
//               className="activeClicked"
//             >
//               <CDBSidebarMenuItem icon="exclamation-circle">
//                 404 page
//               </CDBSidebarMenuItem>
//             </NavLink>
//           </CDBSidebarMenu>
//         </CDBSidebarContent>
//         <CDBSidebarFooter style={{ textAlign: "center" }}>
//           <div
//             className="sidebar-btn-wrapper"
//             style={{
//               padding: "20px 5px",
//             }}
//           >
//             Sidebar Footer
//           </div>
//         </CDBSidebarFooter>
//       </CDBSidebar>
//     </div>
//   );
// }

// export default SideNav;
