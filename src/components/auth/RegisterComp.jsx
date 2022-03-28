import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerService } from "../../data/actions/auth.js";
import { setMessage, clearMessage } from "../../data/actions/message.js";

const RegisterComp = (props) => {
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
    dispatch(
      registerService(data.username, data.name, data.email, data.password)
    );
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
            <div className="card-register">
              <div className="logo"></div>
              <div className="register-block">
                <h1>Register</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input type="hidden" name="group" value="user" />
                  <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    {...register("username", { required: true, minLength: 3 })}
                  />
                  <input
                    type="text"
                    placeholder="name"
                    id="name"
                    {...register("name", { required: true, minLength: 3 })}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    {...register("email", { required: true, minLength: 3 })}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    {...register("password", { required: true, minLength: 3 })}
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    id="password_confirm"
                    {...register("password_confirm", {
                      required: true,
                      minLength: 3,
                    })}
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

export default RegisterComp;
