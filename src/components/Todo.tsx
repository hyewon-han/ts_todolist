import React, { Dispatch, SetStateAction } from "react";
import Button from "./common/Button";
import styled from "styled-components";

type Todo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

const Todo = ({ todo, todos, setTodos }: Props) => {
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const switchTodo = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) return { ...todo, isDone: !todo.isDone };
        else return todo;
      })
    );
  };
  return (
    <StTodo key={todo.id}>
      <p>{todo.title}</p>
      <p>{todo.content}</p>
      <div>
        <Button onClick={() => deleteTodo(todo.id)} color="yellow">
          삭제하기
        </Button>
        <Button onClick={() => switchTodo(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </Button>
      </div>
    </StTodo>
  );
};

export default Todo;

const StTodo = styled.li`
  overflow: hidden;
  text-overflow: ellipsis;
  width: 230px;
  height: 230px;
  background-color: lightgrey;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 8px 16px 0px #00000033;
  padding: 15px;
`;
