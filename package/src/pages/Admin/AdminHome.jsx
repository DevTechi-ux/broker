// import React, { useState } from 'react'
// import AdminSidebar from '../../components/Admin/AdminSidebar'
// import AdminNavbar from '../../components/Admin/AdminNavar'
// import { Outlet } from 'react-router-dom'

// const AdminHome = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   // Toggle function to open/close the sidebar
//   const toggleSidebar = () => setSidebarOpen((prev) => !prev);

//   return (
//     <>
//     <div style={{ display: "flex" }}>




//     {/* Pass the open state and toggle function to the sidebar */}
//     <AdminSidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
//     <div style={{ flex: 1 }}>

//       {/* Pass toggleSidebar to the navbar so that its toggle button works */}
//       <AdminNavbar toggleSidebar={toggleSidebar} />
//       <div style={{ padding: 20 }}>
//         <Outlet /> {/* Render nested admin routes */}
//       </div>
//     </div>
//   </div>
//   <div>Dashboard</div>
//   </>
//   )
// }



// export default AdminHome;