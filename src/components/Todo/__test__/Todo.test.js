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
// integration test
describe("Todo", () => {
  it("should have empty input when add button is clicked", async () => {
    render(<MockTodo />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });

    fireEvent.change(inputElement, { target: { value: "go shopping" } });
    fireEvent.click(buttonElement);

    const divElement = screen.getByText(/go shopping/i);

    expect(divElement).toBeInTheDocument();
  });
});
