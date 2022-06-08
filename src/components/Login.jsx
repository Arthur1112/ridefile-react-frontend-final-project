import { Button, Form, Input } from "antd";
import bcrypt from "bcryptjs";

const salt = "$2b$10$tDDW5Jmy/taXowERIwWHjO";

export default function Login({ setToken }) {
  const handleLogin = ({ email, Password }) => {
    console.log(email, password);
    const hash = bcrypt;
  };
  return (
    <>
      <h1>Login Please</h1>
      <Form
        name="login"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        onFinish={handleLogin}
      >
        <Form.Item name="email" label="Email">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <Button type="Primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
