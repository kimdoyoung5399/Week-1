import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List({ texts, setTexts }) {
  function onDelete(id) {
    setTexts(texts.filter((texts) => texts.id !== id));
  }

  function onToggle(id) {
    setTexts(
      texts.map((texts) => {
        if (texts.id === id) {
          return {
            ...texts,
            isDone: !texts.isDone,
          };
        } else {
          return { ...texts };
        }
      })
    );
  }
  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <div className="list-wrapper">
        {texts.map((texts) => {
          if (!texts.isDone) {
            return (
              <Todo
                texts={texts}
                key={texts.id}
                onDelete={onDelete}
                onToggle={onToggle}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <hr />
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="list-wrapper">
        {texts.map((texts) => {
          if (texts.isDone) {
            return (
              <Todo
                texts={texts}
                key={texts.id}
                onDelete={onDelete}
                onToggle={onToggle}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default List;
