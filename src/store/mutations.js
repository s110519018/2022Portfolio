export const mutations = {
  //全部作品
  WORKS_DATA_REQUEST(state) {
    state.isLoading = true;
  },
  SET_WORKS_DATA(state, worksData) {
    state.worksData = worksData;
    state.isLoading = false;
  },
  //單一作品
  WORK_DATA_REQUEST(state) {
    state.isLoading = true;
  },
  SET_WORK_DATA(state, workData) {
    state.workData = workData;
    state.isLoading = false;
  },
};
