import React, { useState } from "react";
import Layout from "./shared/Layout";
import Form from "./components/Form";
import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Form todos={todos} />
        <TodoList />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
