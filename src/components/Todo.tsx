import Button from "./common/Button";
import styled from "styled-components";
import { useTodos } from "../hooks/useTodos";

type Props = {
  todo: TodoType;
};

const Todo = ({ todo }: Props) => {
  const { updateTodo, deleteTodo } = useTodos();

  const deleteTodoObj = (id: string) => {
    const userConfirmed = window.confirm("정말 삭제하시겠습니까?");
    if (userConfirmed) deleteTodo(id);
  };

  const switchTodoObj = (id: string) => {
    const todoObj = {
      ...todo,
      isDone: !todo.isDone,
    };
    updateTodo(todoObj);
  };
  return (
    <StTodo key={todo.id}>
      <p>{todo.title}</p>
      <p>{todo.content}</p>
      <div>
        <StBtns>
          <Button onClick={() => deleteTodoObj(todo.id)}>삭제하기</Button>
          <Button onClick={() => switchTodoObj(todo.id)}>
            {todo.isDone ? "취소" : "완료"}
          </Button>
        </StBtns>
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
  & p {
    font-size: 22px;
    font-weight: 400;
  }
`;

const StBtns = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
`;
