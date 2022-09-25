import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addtask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

// integration test
describe("Todo", () => {
  it("should render input value in the list when add button clicked", async () => {
    render(<MockTodo />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });

    fireEvent.change(inputElement, { target: { value: "go shopping" } });
    fireEvent.click(buttonElement);

    const divElement = screen.getByText(/go shopping/i);

    expect(divElement).toBeInTheDocument();
  });

  it("should render multiple items in the list when add button clicked", async () => {
    render(<MockTodo />);

    addtask(["go shopping", "clean room"]);

    const divElements = screen.getAllByTestId("task-container");

    expect(divElements.length).toBe(2);
  });

  it("should render not have completed className when initially typed in", async () => {
    render(<MockTodo />);
    addtask(["go shopping"]);

    const divElement = screen.getByText(/go shopping/i);

    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("should render  have completed className when clicked", async () => {
    render(<MockTodo />);
    addtask(["go shopping"]);

    const divElement = screen.getByText(/go shopping/i);
    fireEvent.click(divElement);

    expect(divElement).toHaveClass("todo-item-active");
  });
});
