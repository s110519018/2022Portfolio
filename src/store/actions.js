import { db } from "./db";
import { collection, getDocs } from "firebase/firestore";

export const actions = {
  async getWorksData({ commit }) {
    try {
      commit("WORKS_DATA_REQUEST");
      const querySnapshot = await getDocs(collection(db, "works"));
      const documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      console.log(documents);
      commit("SET_WORKS_DATA", documents);
    } catch (error) {
      console.log("getWorksData失敗! " + error);
    }
  },
};
