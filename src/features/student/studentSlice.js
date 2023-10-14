import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  student: {
    name: "",
    age: "",
  },
};

 const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudentName: (state, action) => {
      state.student.name = action.payload;
    },
    addStudentAge: (state, action) => {
      state.student.age = action.payload;
    },
  },
});

export const { addStudentName, addStudentAge } = studentSlice.actions;

export default studentSlice.reducer;
