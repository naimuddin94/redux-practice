import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Learning redux toolkit",
    description:
      "This is most exclusive description of the toolkit and will be used in the next",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, description, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            userId,
          },
        };
      },
    },
  },
});
export const { postAdded } = postSlice.actions;
export const selectedPosts = (state) => state.posts;
export default postSlice.reducer;
