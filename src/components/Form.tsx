import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import Button from "./common/Button";
import { nanoid } from "nanoid";
import { useTodos } from "../hooks/useTodos";

const Form = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  //   const dispatch = useDispatch();

  const { addTodo } = useTodos();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "title") setTitle(value);
    if (name === "content") setContent(value);
  };

  const submitTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todoObj = {
      id: nanoid(),
      title,
      content,
      isDone: false,
    };
    // dispatch(addTodo(todoObj));
    addTodo(todoObj);
    setTitle("");
    setContent("");
  };

  return (
    <StForm onSubmit={submitTodo}>
      <label htmlFor="title">제목</label>
      <input
        id="title"
        type="text"
        name="title"
        value={title}
        onChange={onChangeHandler}
        required
      />
      <label htmlFor="title">내용</label>
      <input
        type="text"
        name="content"
        value={content}
        onChange={onChangeHandler}
        required
      />
      <Button color="sand">추가하기</Button>
    </StForm>
  );
};

export default Form;

const StForm = styled.form`
  margin: 20px auto;
  background-color: wheat;
  width: 950px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0px 8px 16px 0px #00000033;
  gap: 20px;

  & label {
    font-size: 22px;
    font-weight: 600;
  }

  & input {
    width: 250px;
    height: 30px;
    padding: 10px;
    font-size: large;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 20px;
  }
`;
