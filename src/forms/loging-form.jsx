import React, { useState } from "react";
import EyeOff from "../svg/eye-off";
import EyeOn from "../svg/eye-on";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from 'next/router';

const schema = yup
  .object({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(6).label("Password"),

  })
  .required();

const LogingForm = () => { 
  const {
    register,
    handleSubmit, 
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const onSubmit = async (data) =>{ 
    console.log(data)
    try {
      let response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        }
      });
      response = await response.json();
      
      if (response.success) {
        console.log(response.user_data.email);
        const token = response.token;
        localStorage.setItem("token", token);
        localStorage.setItem("u_id", response.user_data.user_id);
        localStorage.setItem("u_email", response.user_data.email);
        localStorage.setItem("u_name", response.user_data.username);

        // router.push('/'); 
        if (token) {
            router.push('/');
        }
      } else {
        alert(`${response.message}`);  
      }
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error);
    }
    reset()
  };

  // password show & hide
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12">
            <div className="postbox__comment-input mb-30"> 
              <input
                name="email"
                className="inputText"
                {...register("email")}
              />
              <span className="floating-label">Your Email</span>
              <p className="form_error">{errors.email?.message}</p>
            </div>
          </div>
          <div className="col-12">
            <div className="mb-30">
            <div className="postbox__comment-input"> 
              <input
                id="myInput"
                className="inputText password"
                type={passwordType}
                name="password"
                {...register("password")}
              />
              <span className="floating-label">Password</span>
              <span id="click" className="eye-btn" onClick={togglePassword}>
                {passwordType === "password" ? (
                  <span className="eye-off">
                    <EyeOff />
                  </span>
                ) : (
                  <span className="eye-off">
                    <EyeOn />
                  </span>
                )}
              </span>
            </div>
            
              <p className="form_error">{errors.password?.message}</p>
            </div>
          </div>
        </div>
        <div className="signin-banner-form-remember">
          <div className="row">
            <div className="col-6">
              <div className="postbox__comment-agree">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Remember me
                  </label>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="postbox__forget text-end">
                <Link href="#">Forgot password ?</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="signin-banner-from-btn mb-20">
          <button type="submit" className="signin-btn ">
            Sign In
          </button>
        </div>
        <div className="signin-banner-from-register">
          <Link href="/register">
            Don't have account ? <span>Register</span>
          </Link>
        </div>
      </form>
    </>
  );
};

export default LogingForm;
