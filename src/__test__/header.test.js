import { fireEvent, render } from "@testing-library/react";
import Header from "../components/Header";

describe("Render and load Header",()=>{
  it("rendering",()=>{
   render(<Header/>)
  })
  const showForm= jest.fn()
  const {getByRole} = render(<Header showForm={showForm}/>)
  const button=getByRole("button")
  fireEvent.click(button)
  expect(showForm).toHaveBeenCalledTimes(1)
})