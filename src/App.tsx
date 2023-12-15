import React, { useState } from "react";
import Layout from "./shared/Layout";
import Form from "./components/Form";
import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<
    { id: string; title: string; content: string; isDone: boolean }[]
  >([]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Form todos={todos} setTodos={setTodos} />
        <TodoList isDone={false} todos={todos} setTodos={setTodos} />
        <TodoList isDone={true} todos={todos} setTodos={setTodos} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
