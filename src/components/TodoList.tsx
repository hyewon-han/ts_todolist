import Todo from "./Todo";
import styled from "styled-components";
import theme from "../styles/Theme";
import { useSelector } from "react-redux";
import { RootState } from "../redux/config/configStore";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../api/todos";

type TodoType = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

type Props = {
  isDone: boolean;
};

const TodoList = ({ isDone }: Props) => {
  //   const todos = useSelector((state: RootState) => state.todosSlice);

  const {
    data: todos = [],
    isLoading,
    error,
  } = useQuery<TodoType[]>({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
  console.log(todos);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <StState>{isDone ? "Done..!🎉" : "Working..!🔥"}</StState>
      <StTodoList>
        {todos
          .filter((todo) => todo.isDone === isDone)
          .map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
      </StTodoList>
    </>
  );
};

export default TodoList;

const StTodoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0px;
  min-height: 270px;
`;

const StState = styled.h2`
  width: 100%;
  font-size: ${theme.fontSize.xl};
  font-weight: 700;
`;
