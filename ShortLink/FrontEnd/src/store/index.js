import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import user from "./user";
import url from "./url";

export default store(function () {
  const Store = createStore({
    modules: {
      user,
      url
    },

    strict: process.env.DEBUGGING,
  });

  return Store;
});
