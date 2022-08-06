import { db } from "./db";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";

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
      commit("SET_WORKS_DATA", documents);
    } catch (error) {
      console.log("getWorksData失敗! " + error);
    }
  },
  async getWorkData({ commit }, payload) {
    try {
      commit("WORK_DATA_REQUEST");
      const docSnap = await getDoc(doc(db, "works", payload));
      if (docSnap.exists()) {
        console.log(docSnap.data());
      }
      commit("SET_WORK_DATA", docSnap.data());
    } catch (error) {
      console.log("getWorkData失敗! " + error);
    }
  },
};
