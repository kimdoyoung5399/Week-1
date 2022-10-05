import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";

function TodoList() {
  const [texts, setTexts] = useState([
    {
      id: "1",
      title: "리액트를 배워보자1.",
      body: "리액트 기초를 공부해 봅시다.",
      isDone: false,
    },
    {
      id: "2",
      title: "리액트를 배워보자2.",
      body: "리액트 기초를 공부해 봅시다.",
      isDone: true,
    },
  ]);
  return (
    <Layout>
      <Header />
      <Form texts={texts} setTexts={setTexts} />
      <List texts={texts} setTexts={setTexts} />
    </Layout>
  );
}

export default TodoList;
