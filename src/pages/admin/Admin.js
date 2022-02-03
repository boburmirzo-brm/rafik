import React from 'react';
import { NavLink, useRouteMatch, Route } from 'react-router-dom';
import './Admin.css'

const CreateBlogs = React.lazy(() => import('../../components/createBlogs/CreateBlogs')); // Lazy-loaded
const GetContact = React.lazy(() => import('../../components/getContact/GetContact')); // Lazy-loaded


function Admin() {
  const {path, url} = useRouteMatch();
  return <div className='admin'>
      <h1 className='admin_title'>Admin Panel</h1>
      <div className="admin_navbar">
        <NavLink activeClassName='admin_active' className="admin_navbarItem" to={`${path}/createblogs`}>
          Create Blog
        </NavLink>
        <NavLink activeClassName='admin_active' className="admin_navbarItem" to={`${path}/getcontact`}>
          Contact me
        </NavLink>
      </div>
      <Route path={`${url}/createblogs`} component={CreateBlogs} />
      <Route path={`${url}/getcontact`} component={GetContact} />
  </div>;
}

export default Admin;
