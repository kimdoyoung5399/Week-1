import React from "react";
import "./style.css";

function Todo({ texts, onDelete, onToggle }) {
  return (
    <div className="todo-container">
      <div>
        <h2 className="todo-title">{texts.title}</h2>
        <div>{texts.body}</div>
      </div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          onClick={() => onDelete(texts.id)}
        >
          삭제하기
        </button>

        <button
          className="todo-complete-button button"
          onClick={() => onToggle(texts.id)}
        >
          {texts.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default Todo;
