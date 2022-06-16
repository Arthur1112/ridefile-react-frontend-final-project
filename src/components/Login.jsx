import { Button, Form, Input } from "antd";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import "../styling/loginPage.css";
import Loader from "./Loader";
import ProfilePage from "./ProfilePage";

export default function Login() {
  const { user, setUser, token, setToken } = useContext(UserContext);
  const [loggedInState, setLoggedInState] = useState();
  let navigate = useNavigate();
  const handleLogin = ({ email, password }, e) => {
    // e.preventDefault();
    // setLoggedInState("logging in");
    console.log(email, password);
    // fetch("http://localhost:7050/login", {
    fetch("https://ridefile-final-project-as.web.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          return;
        }
        console.log(data.user);
        console.log(data.token);
        localStorage.setItem("token", data.token);
        setToken(data.token);
        setUser(data.user);
      })
      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //   const _token = localStorage.getItem("token");
  //   if (_token) {
  //     navigate("/profile");
  //   }
  // }, []);

  return (
    <section id="loginContainer">
      {!token ? (
        <section className="loginSection">
          <h2 id="loginPageTitle">RideFile</h2>
          <h3>Welcome Back</h3>
          <Form
            name="login"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            onFinish={handleLogin}
          >
            <Form.Item name="email">
              <Input id="loginInput" placeholder="Email" />
            </Form.Item>
            <br />
            <Form.Item name="password">
              <Input.Password id="loginInput" placeholder="Password" />
            </Form.Item>
            <br />
            <br />
            <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
              <Button id="loginButton" htmlType="submit">
                Login
                {/* {loggedInState === "logged in" ? <Loader /> : ""} */}
              </Button>
              <br />
              <p>New to Ridefile?</p>
              <Button
                id="loginButton"
                onClick={() => {
                  navigate("/newProfile");
                }}
              >
                Sign up now!
              </Button>
            </Form.Item>
          </Form>
        </section>
      ) : !user ? (
        <Loader />
      ) : (
        navigate("/profile")
      )}
    </section>
  );
}
