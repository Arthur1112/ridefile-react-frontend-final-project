import { Button, Form, Input } from "antd";
import "../styling/loginPage.css";

export default function Login({ token, setToken }) {
  // useEffect(() => {
  //   if (token) {
  //     // redirect them to /profile
  //   }
  // }, []);

  const handleLogin = ({ email, password }) => {
    console.log(email, password);
    fetch("http://localhost:7050/login", {
      // fetch("https://ridefile-final-project-as.web.app/login", {
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
        console.log(data.token);
        localStorage.setItem("token", data.token);
        setToken(data.token);
      })
      .catch((err) => console.log(err));
  };
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
