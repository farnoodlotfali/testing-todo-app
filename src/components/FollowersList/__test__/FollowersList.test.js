import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {

  beforeEach(()=>{
    console.log("Before each");
  })

  beforeAll(()=>{
    console.log("Before all");

  })

  afterEach(()=>{
    console.log("after each");
  })

  afterAll(()=>{
    console.log("after all");

  })


  it("should be follower-item in the list", async () => {
    render(<MockFollowersList />);

    const followerDivElement = await screen.findByTestId("follower-item-0");
    // screen.debug()
    expect(followerDivElement).toBeInTheDocument();
  });  
  
  it("should be follower-item in the list", async () => {
    render(<MockFollowersList />);

    const followerDivElement = await screen.findByTestId("follower-item-0");
    // screen.debug()
    expect(followerDivElement).toBeInTheDocument();
  });

  // it("should be 5 follower-item in the list", async () => {
  //   render(<MockFollowersList />);

  //   const followerDivElements = await screen.findAllByTestId(/follower-item/i);

  //   expect(followerDivElements.length).toBe(5);
  // });
});
