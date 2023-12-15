import React, { useState } from "react";
import styled from "styled-components";
import Button from "./common/Button";

type Props = {
  todos: { id: string }[];
};

const Form = ({ todos }: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <StForm>
      <label htmlFor="title">제목</label>
      <input
        id="title"
        type="text"
        name="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        required
      />
      <label htmlFor="title">내용</label>
      <input
        type="text"
        name="content"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        required
      />
      <Button>추가하기</Button>
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
