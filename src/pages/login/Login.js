import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../context/stateprovider/StateProvider";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [involid, setInvolid] = useState(false);
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();

  let result =
    process.env.REACT_APP_LOGIN === login &&
    process.env.REACT_APP_PASSWORD === password;

  const check = () => {
    if (!result) {
      setInvolid(true);
    }
    dispatch({
      type: "CHECK",
      user: result,
    });
    result && history.push("/approuter/admin/createblogs");
  };

  const enterLogin = (e)=> {
    if(e.keyCode === 13) return check();
  }

  return (
    <div className="login">
      <div className="login_container">
        <h1>Log in</h1>
        <label htmlFor="">Your login:</label>
        <input
          type="text"
          placeholder="Enter your login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <label htmlFor="">Your password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e)=> enterLogin(e) && check()}
        />
        <p
          style={involid ? { opacity: 1 } : { opacity: 0 }}
          className="login_involid"
        >
          Login or Password is involid
        </p>
        <button onClick={check}>Submit</button>
      </div>
    </div>
  );
}

export default Login;
