import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodos = jest.fn();

describe("AddInput", () => {
  it("should render input element", async () => {
    render(
      <AddInput
        //  setTodos={() => {}}
        setTodos={mockedSetTodos}
        todos={[]}
      />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type in the input", async () => {
    render(<AddInput setTodos={mockedSetTodos} todos={[]} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: "go shopping" } });
    expect(inputElement.value).toBe("go shopping");
  });

  it("should have empty input when add button is clicked", async () => {
    render(<AddInput setTodos={mockedSetTodos} todos={[]} />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });

    fireEvent.change(inputElement, { target: { value: "go shopping" } });
    fireEvent.click(buttonElement);

    expect(inputElement.value).toBe("");
  });
});
