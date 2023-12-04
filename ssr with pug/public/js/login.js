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

    console.log(res);

    if (res.data.status === "success") {
      // alert("Logged in Successfully");
      showAlert("success", "Logged in Successfully");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
  } catch (err) {
    // console.log(err.response.data);
    console.log(err);
    // console.log(err.response.data);
    // alert("error", err.response.data.message);
  }
};
