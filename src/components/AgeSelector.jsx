import React, { useState } from "react";
import { createClientMessage } from "react-chatbot-kit";
import { useDispatch } from "react-redux";
import { addStudentAge } from "../features/student/studentSlice";

const AgeSelector = (props) => {
  const [age, setAge] = useState();
  const dispatch = useDispatch();
  const array = [];
  for (let i = 18; i <= 40; i++) {
    array.push(i);
  }

  const handleChange = (e) => {
    setAge(e.target.value);
    const botMessage = createClientMessage(e.target.value);
    props.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    dispatch(addStudentAge(e.target.value));
    props.actionProvider.enrolledSuccess();
  };

  return (
    <div>
      <select
        className="border w-52 p-1 bg-stone-200"
        value={age}
        onChange={handleChange}
      >
        <option>Enter your Age</option>
        {array.map((num, ind) => (
          <option key={ind}>{num}</option>
        ))}
      </select>
    </div>
  );
};

export default AgeSelector;
