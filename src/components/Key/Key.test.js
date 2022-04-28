import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Key from "./Key";

describe("Given a Key component", () => {
  describe("When it receives 1, false, false and a function", () => {
    test("Then it should render a button with 1 and call a function when clicked", ()=> {
      const text= "1";
      const big = false; 
      const disabled = false;
      const actionOnClick = jest.fn();

      render(<Key text={text} big={big} disabled={disabled} actionOnClick={actionOnClick} />);
      const button = screen.getAllByRole("button")[0];
      userEvent.click(button)
      const textButton = screen.getByText("text");

      expect(textButton).toBeInTheDocument();
      expect(actionOnClick).toHaveBeenCalled()
    })
  })
})
