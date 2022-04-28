import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("Given the Info component", () => {
  describe("When it renders", () => {
    test("Then it should render the text 'Calling' with Accessibility name 'Calling...'", () => {
      const expectedText= "Calling...";
      const expectedName = "Calling...";

      render(<Info />);
      const textInfo = screen.getByText(expectedText);
      const nameInfo = screen.getByRole("span", {name: expectedName})

      expect(textInfo).toBeInTheDocument(); 
      expect(nameInfo).toBe(expectedName);
    })
  })
})
