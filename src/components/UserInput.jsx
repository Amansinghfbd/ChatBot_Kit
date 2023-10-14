import React, {useState } from "react";
import { useDispatch } from "react-redux";
import { addStudentName } from "../features/student/studentSlice";
import { createClientMessage } from "react-chatbot-kit";

const UserInput = (props) => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  dispatch(addStudentName(name));

  const handleFunction = (event) => {
    if (event.key === "Enter") {
      const botMessage = createClientMessage(name);
      props.setState((pre) => ({
        ...pre,
        messages: [...pre.messages, botMessage],
      }));
      props.actionProvider.handleAge();
    }
  };

  return (
    <div>
      <input
        type="text"
        className="p-1 border bg-stone-200"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleFunction}
      />
    </div>
  );
};

export default UserInput;
