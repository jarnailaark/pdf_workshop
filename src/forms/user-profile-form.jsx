import React, { useState, useEffect } from "react";
import EyeOff from "../svg/eye-off";
import EyeOn from "../svg/eye-on";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";

const RegisterForm = () => {
  const [userDetail, setUserDetail] = useState({
    username: "",
    email: "",
    id: "",
  });
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    user_id: "",
  });

  const getUserData = async (user_data) => {
    user_data = {
      token: localStorage.getItem("token"),
      u_id: localStorage.getItem("u_id"),
    };

    try {
      let response = await fetch(
        "http://localhost:3000/api/user/edit_profile",
        {
          method: "POST",
          body: JSON.stringify(user_data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      response = await response.json();
      console.log(response.user_data);
      setFormData(response.user_data);
      // setUserDetail({
      //   username: response.user_data.username,
      //   email: response.user_data.email,
      //   id: response.user_data.user_id,
      // });
      // console.log({ userDetail });
      if (response.error) {
        alert(`${response.error}`);
      }
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    try {
      let response = await fetch(
        "http://localhost:3000/api/user/profile_update",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      response = await response.json();
      console.log(response);
      if (response.message) {
        alert(`${response.message}`);
      } else {
        alert(`${response.error}`);
      }
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error);
    }
  };

  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="u_id" value={formData.user_id} />
        <div className="row">
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
            <input
                type="text"
                name="username"
                className="form-control p-3"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <span className="floating-label">Full Name</span>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input
                type="email"
                name="email"
                className="form-control p-3"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <span className="floating-label">Your Email</span>
            </div>
          </div>
        </div>

        <div className="signin-banner-from-btn mb-20">
          <button type="submit" className="signin-btn ">
            Profile Update
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
