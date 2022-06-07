import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../context/stateprovider/StateProvider";
import { auth } from "../../server/firebase"
import "./Login.css";

function Login() {
  const history = useHistory();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [involid, setInvolid] = useState(false);
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();


  const loginUser = ()=>{
      auth.signInWithEmailAndPassword(login, password)
      .then(user => {
          if(user) {
              dispatch({
                type: "CHECK",
                user: user,
              });
              localStorage.setItem("admin", JSON.stringify(user))
              history.push("/approuter/admin/createblogs");
          }
      })
      .catch(error => {
        setInvolid(true)
        console.error(error)})
  }

  // const check = () => {
  //   if (!result) {
  //     setInvolid(true);
  //   }
  //   dispatch({
  //     type: "CHECK",
  //     user: result,
  //   });
  //   result && history.push("/approuter/admin/createblogs");
  // };

  const enterLogin = (e)=> {
    if(e.keyCode === 13) return loginUser();
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
          onKeyDown={(e)=> enterLogin(e) && loginUser()}
        />
        <p
          style={involid ? { opacity: 1 } : { opacity: 0 }}
          className="login_involid"
        >
          Login or Password is involid
        </p>
        <button onClick={loginUser}>Submit</button>
      </div>
    </div>
  );
}

export default Login;
