import { createStore } from "vuex";
import { mutations } from "./mutations";
import { actions } from "./actions";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      isLoading: false,
      worksData: [],
      workData: null,
    };
  },
  mutations: mutations,
  actions: actions,
});

export default store;
