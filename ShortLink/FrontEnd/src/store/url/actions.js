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
  const config = {
    headers: { Authorization: `Bearer ${url.token}` }
  };
  try {
    const response = await axios.post("http://localhost:3000/", {
      link: url.link,
      count: 0,
    }, config);

    context.commit("setShortUrlMutation", response.data.url.shortUrl)
  } catch (error) {
    console.log(error);
    // Notify.create({
    //   type: "negative",
    //   message: error.response.data.msg,
    //   timeout: 2000,
    //   position: "top-right",
    // });
  }
};