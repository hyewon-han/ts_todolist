import Layout from "./shared/Layout";
import Form from "./components/Form";
import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";
import TodoList from "./components/TodoList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Form />
        <TodoList isDone={false} />
        <TodoList isDone={true} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
