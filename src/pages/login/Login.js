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
    result && history.push("/approuter/admin")
  }

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
