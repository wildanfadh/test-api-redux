import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../../data/actions/auth.js";
import { setMessage, clearMessage } from "../../data/actions/message.js";

const LoginComp = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const auth = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  console.log(auth, message, loading);

  useEffect(() => {
    if (message) {
      setLoading(false);
    }
  }, [message]);

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    dispatch(login(data.username, data.password));
  };

  if (auth.isLoggedIn) {
    navigate("/dashboard");
    dispatch(setMessage("You are already logged in"));
  }

  return (
    <div>
      <div className="auth-section">
        <Row>
          <Col md={12}>
            <div className="card-login">
              <div className="logo"></div>
              <div className="login-block">
                <h1>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    {...register("username", { required: true, minLength: 3 })}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    {...register("password", { required: true, minLength: 3 })}
                  />
                  <button className="btn" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LoginComp;
