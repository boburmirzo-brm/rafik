import React from 'react';
import { NavLink, useRouteMatch, Route } from 'react-router-dom';
import './Admin.css'
import { useHistory } from "react-router-dom";
import {useStateValue} from "../../context/stateprovider/StateProvider"

const CreateBlogs = React.lazy(() => import('../../components/createBlogs/CreateBlogs')); // Lazy-loaded
const GetContact = React.lazy(() => import('../../components/getContact/GetContact')); // Lazy-loaded


function Admin() {
  const {path, url} = useRouteMatch();
  const history = useHistory();
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();

  const signOut = ()=>{
    localStorage.removeItem("admin");
    history.push("/approuter/login");
    dispatch({
      type: "CHECK",
      user: null,
    });
  }

  return <div className='admin'>
      <div className='admin_header'>
        <h1 className='admin_title'>Admin Panel</h1>
        <button onClick={signOut} className='admin_btn'>Sign out</button>
      </div>
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
