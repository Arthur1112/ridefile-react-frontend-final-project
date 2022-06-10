import { Button, Form, Input } from "antd";
import { useEffect } from "react";
// import bcrypt from "bcryptjs";
// import { salt } from "../mySalt";
import "../styling/loginPage.css";
import ProfilePage from "./ProfilePage";

export default function Login({ token, setToken }) {
  useEffect(() => {
    if (token) {
      // redirect them to /profile
    }
  }, []);

  const handleLogin = ({ email, password }) => {
    //console.log(email, password);
    // const hash = bcrypt.hashSync(password, salt);
    const hash = password;
    //console.log(hash);
    fetch("http://localhost:7050/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password: hash }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          return;
        }
        console.log(data.token);
        localStorage.setItem("token", data.token);
        setToken(data.token);
      })
      .catch((err) => console.log(err));
  };
  return (
    <section>
      {!token ? (
        <section className="loginSection">
          <h3 id="loginPageTitle">Login</h3>
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
            <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
              <Button id="loginButton" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </section>
      ) : (
        <>You'll be redirected soon</>
      )}
    </section>
  );
}
