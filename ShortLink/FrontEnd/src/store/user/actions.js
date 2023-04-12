import axios from "axios";
import { Notify } from "quasar";

export async function loginAction(context, user) {
  try {
    const response = await axios.post(
      "http://localhost:3000/register/login",

      {
        email: user.emailInput,
        password: user.passwordInput,
      }
    );
    const token = response.data.token;
    if (token) {
      context.commit("setUserMutation", user)
      context.commit("setTokenMutation", token)

    }
  } catch (error) {
    console.error(error);
  }
}
export async function registerAction(context, user) {
  try {
    const response = await axios.post('http://localhost:3000/register', {
      name: user.nameInput,
      email: user.emailInput,
      password: user.passwordInput,
      confirmPassword: user.confirmPasswdInput
    });
    const msg = response.data;
    Notify.create({
      type: "info",
      message: msg.msg,
      timeout: 2000,
      position: "top-right",
    });
  }
  catch (error) {

    Notify.create({
      type: "negative",
      message: error.response.data.msg,
      position: "top-right",
      timeout: 2000
    });

  }

}
