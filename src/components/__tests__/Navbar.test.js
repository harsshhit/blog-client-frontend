import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar";

test("renders Navbar and checks Add Post button", () => {
  const mockAddPostClick = jest.fn();
  render(<Navbar onAddPostClick={mockAddPostClick} />);

  const addPostButton = screen.getByText("Add Post");
  expect(addPostButton).toBeInTheDocument();

  fireEvent.click(addPostButton);
  expect(mockAddPostClick).toHaveBeenCalledTimes(1);
});
