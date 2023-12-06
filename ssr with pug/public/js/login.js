import axios from "axios";
import { showAlert } from "./alert";

export const login = async (email, password) => {
  // alert(email, password);
  console.log(email, password);
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:3000/api/v1/users/login",
      data: {
        email,
        password,
      },
    });
    if (res.data.status === "success") {
      // alert("Logged in Successfully");
      showAlert("success", "Logged in Successfully");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
    // const res = await fetch("http://127.0.0.1:3000/api/v1/users/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email, password }),
    // });
    // const data = await res.json();
    // console.log(res, data);
  } catch (err) {
    // console.log(err.response.data);
    console.log(err);
    // console.log(err.response.data);
    // alert("error", err.response.data.message);
  }
};
