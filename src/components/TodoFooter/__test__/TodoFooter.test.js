import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("TodoFooter", () => {
  it("should render the correct   amount of incomplete tasks", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it('should render "task" when amount of incomplete tasks is one', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});

describe("TodoFooter", () => {
  describe("function 1", () => {
    it("should render the correct   amount of incomplete tasks", async () => {
      render(<MockTodoFooter numberOfIncompleteTasks={5} />);
      const paragraphElement = screen.getByText(/5 tasks left/i);
      expect(paragraphElement).toBeInTheDocument();
    });
  });

  it('should render "task" when amount of incomplete tasks is one', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});

it('should render "task" when amount of incomplete tasks is one', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeTruthy();
});

it('should render "task" when amount of incomplete tasks is one', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeVisible();
});

it('should render "task" when amount of incomplete tasks is one', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toContainHTML("p");
});

it('should render "task" when amount of incomplete tasks is one', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByTestId("para");
  expect(paragraphElement).toHaveTextContent("1 task left");
});

it('should render "task" when amount of incomplete tasks is one', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByTestId("para");
  expect(paragraphElement).not.toHaveTextContent("2 tasks left");
});

it('should render "task" when amount of incomplete tasks is one', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByTestId("para");
  expect(paragraphElement).not.toBeFalsy();
});

it('should render "task" when amount of incomplete tasks is one', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByTestId("para");
  expect(paragraphElement.textContent).toBe("1 task left");
});

it('should render "task" when amount of incomplete tasks is one', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByTestId("para");
  expect(paragraphElement.textContent).toContain("task");
});
