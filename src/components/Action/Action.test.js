import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Action from "./Action"

describe("Given an Action element,", () => {
  describe ("When it receives 'call', true and a fuction", () => {
    test("Then it should render the text 'Call', and call the function", () => {
      const action = "call"
      const actionOnClick = jest.fn()
      const isActive = true;

      render(<Action action={action} isActive={isActive} actionOnClick={actionOnClick} />)
      const actionCall = screen.getAllByRole("link")[0];
      userEvent.click(actionCall)

      expect(actionOnClick).toHaveBeenCalled();
    })
  })

  describe ("When it receives 'hang', false and a fuction", () => {
    test("Then it should render the text 'False', and call the function", () => {
      const action = "hang"
      const actionOnClick = jest.fn()
      const isActive = false;

      render(<Action action={action} isActive={isActive} actionOnClick={actionOnClick} />)
      const actionHang = screen.getAllByRole("link")[0];
      userEvent.click(actionHang)

      expect(actionOnClick).toHaveBeenCalled();
    })
  })
})
