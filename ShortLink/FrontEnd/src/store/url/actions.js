import axios from "axios";
import { Notify } from "quasar";

export async function RankingAction(context) {
  try {
    const response = await axios.get("http://localhost:3000/");

    let urls = response.data;
    context.commit("setUrlRankingMutation", urls)
  } catch (error) {
    console.log(error);
  }
};
export async function shortAction(context, url) {
  try {
    const response = await axios.post("http://localhost:3000/", {
      link: url.value,
      count: 0,
    });
    context.commit("setShortUrlMutation", response.data.url.shortUrl)
  } catch (error) {
    Notify.create({
      type: "negative",
      message: error.response.data.msg,
      timeout: 2000,
      position: "top-right",
    });
  }
};