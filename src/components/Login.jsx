import { Button, Form, Input, Select } from "antd";
import bcrypt from "bcryptjs";
import { salt } from "../mySalt";
import "../styling/loginPage.css";

export default function Login({ setToken }) {
  const handleLogin = ({ email, password }) => {
    console.log(email, password);
    const hash = bcrypt.hashSync(password, salt);
    console.log(hash);
    fetch("http://localhost:5050/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
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
    <section className="loginSection">
      <h3 id="loginPageTitle">Login</h3>
      <Form
        name="login"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        onFinish={handleLogin}
      >
        <Form.Item name="email">
          <Input placeholder="Email" />
        </Form.Item>
        <br />
        <Form.Item name="password">
          <Input.Password placeholder="Password" />
        </Form.Item>
        <br />
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <Button type="Primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
}
