import { render, screen } from "@testing-library/react";
import Keyboard from "./Keyboard";

describe("Given the Keyboard component", () => {
  describe("When in renders", () => {
    test("Then it should render 10 buttons with numbers and 1 button with text 'delete'", () => {
      const expectedNumberButtonType = "number";
      const expectedNumberOfButtons = 10;
      const expectedText = "delete";

      render(<Keyboard />);
      const numberButton = screen.getAllByRole("button");
      
      expect(typeof numberButton[0]).toBe(expectedNumberButtonType);
      expect(numberButton.length - 1).toBe(expectedNumberOfButtons);
      expect(numberButton[numberButton.length - 1]).toBe(expectedText);
    })
  })
})
