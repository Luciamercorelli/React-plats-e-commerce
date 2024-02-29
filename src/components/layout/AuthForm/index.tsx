import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../../../assets/data/users";
import "./authform.css";

interface Props {
  isAuthenticated: boolean;
  onAuthenticate: (
    username: string,
    password: string,
    isLogin: boolean
  ) => void;
}

interface User {
  id: string;
  name: string;
  password: string;
  email: string;
}

const AuthForm: React.FC<Props> = ({ isAuthenticated, onAuthenticate }) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [isLogin, setIsLogin] = useState<boolean>(true);
  const navigate = useNavigate();

  const catchInputValue = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const currentUserName = form?.username;

    const loggedUser = users?.find((element) => {
      const currentUserAuthentication = element.name === currentUserName;
      if (currentUserAuthentication) {
        return true;
      } else {
        return false;
      }
    });

    console.log("loggedUser", loggedUser);

    if (loggedUser) {
      navigate("/home");
      return null;
    }
  };

  return (
    <div className="containainer-form">
      <h2>{isLogin ? "Login" : "Create Account"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <input
            name="username"
            type="text"
            value={form?.username}
            onChange={catchInputValue}
            placeholder="Username"
            required
          />
          <input
            name="password"
            type="password"
            value={form?.password}
            onChange={catchInputValue}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">{isLogin ? "Login" : "Create Account"}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Need to create an account?" : "Already have an account?"}
      </button>
    </div>
  );
};

export default AuthForm;
