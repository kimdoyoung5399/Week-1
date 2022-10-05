import React, { useState, useRef } from "react";

import "./style.css";

function Form({ texts, setTexts }) {
  const initialState = {
    id: 0,
    title: "",
    body: "",
    sDone: false,
  };

  const [inputs, setInputs] = useState(initialState);
  const { title, body } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log(title, body);
  };

  const nextId = useRef(3);

  const onCreate = () => {
    const list = {
      id: nextId.current,
      title,
      body,
      isDone: false,
    };
    setInputs({
      title: "",
      body: "",
    });
    if (title.trim() === "" || body.trim() === "") {
      return null;
    } else {
      setTexts([...texts, list]);
      nextId.current += 1;
    }
  };

  return (
    <form className="form">
      <div className="input-group">
        <label name="title" className="form-label">
          제목
        </label>
        <input
          className="add-input"
          name="title"
          value={title}
          onChange={onChange}
        />
        <label name="body" className="form-label">
          내용
        </label>
        <input
          className="add-input"
          name="body"
          value={body}
          onChange={onChange}
        />
      </div>
      <button type="button" className="add-botton" onClick={onCreate}>
        추가하기
      </button>
    </form>
  );
}
export default Form;
