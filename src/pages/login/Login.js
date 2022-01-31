import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../context/stateprovider/StateProvider';
import "./Login.css"

function Login() {
  const history = useHistory()
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [state, dispatch] = useStateValue();
  console.log(state.as);

  let result = process.env.REACT_APP_LOGIN === login && process.env.REACT_APP_PASSWORD === password

  const check = () => {
    dispatch({
      type:"CHECK",
      user:result
    })
    result && history.push("/approuter/admin/createblogs")
  }
  console.log("result >>>", result);
  console.log("login >>> ", process.env.REACT_APP_LOGIN);
  console.log("password >>> ", process.env.REACT_APP_PASSWORD);
  console.log("REACT_APP_API_KEY >>> ", process.env.REACT_APP_API_KEY);
  console.log("REACT_APP_APP_ID >>> ", process.env.REACT_APP_APP_ID);

  return <div className='login'>
      <div className="login_container">
        <h1>Log in</h1>
        <label htmlFor="">Your login:</label>
        <input type="text" placeholder='Enter your login' value={login} onChange={e=> setLogin(e.target.value)}/>
        <label htmlFor="">Your password:</label>
        <input type="password"  placeholder='Enter your password'  value={password} onChange={e=> setPassword(e.target.value)}/>
        <button onClick={check}>Submit</button>
      </div>
  </div>;
}

export default Login;
