export const getters = {
  getCommentsByMovie: state => id => state.comments[id] || [],
};
