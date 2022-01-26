import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then(console.log("1"));
  };
  return (
    <section>
      <Header></Header>
      <section>
        <h1>Login</h1>
        <ul>
          <li>
            <button onClick={onLogin}>Google</button>
          </li>
          <li>
            <button onClick={onLogin}>Github</button>
          </li>
        </ul>
      </section>
      <Footer></Footer>
    </section>
  );
};

export default Login;
