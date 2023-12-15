import React, { Dispatch, SetStateAction } from "react";
import Todo from "./Todo";
import styled from "styled-components";
import theme from "../styles/Theme";

type TodoType = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

type Props = {
  isDone: boolean;
  todos: TodoType[];
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
};

const TodoList = ({ isDone, todos, setTodos }: Props) => {
  return (
    <>
      <StState>{isDone ? "Done..!🎉" : "Working..!🔥"}</StState>
      <StTodoList>
        {todos
          .filter((todo) => todo.isDone === isDone)
          .map((todo) => (
            <>
              <Todo todo={todo} todos={todos} setTodos={setTodos} />
            </>
          ))}
      </StTodoList>
    </>
  );
};

export default TodoList;

const StTodoList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 20px 0px;
`;

const StState = styled.h2`
  width: 100%;
  font-size: ${theme.fontSize.xl};
  font-weight: 700;
`;
