import { baseApi } from "./base";

type TodoType = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

export const getTodos = async () => {
  const response = await baseApi.get("/todos");
  return response.data;
};

export const addTodoItem = async (todo: TodoType) => {
  const response = await baseApi.post("/todos", todo);
  return response.data;
};

export const updateTodoItem = async (todo: TodoType) => {
  const response = await baseApi.patch(`/todos/${todo.id}`, todo);
  return response.data;
};

export const deleteTodoItem = async (id: string) => {
  const response = await baseApi.delete(`/todos/${id}`);
  return response.data;
};
