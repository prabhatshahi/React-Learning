import { createSlicer } from "@reduxjs/Toolkit";

const initalState = {
  todos: [{ id: 1, text: "Hello world" }],
};

export const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: "action.payload",
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // updateTodo: (state, action) => {
    //   state.todos = state.todos.map((todo) =>
    //     todo.id === action.payload.id? action.//payload : todo
    //   );
    // },
  },
});

export const { addToDo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
