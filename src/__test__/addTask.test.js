import { render, getAllByTestId } from "@testing-library/react";
import AddTask from "../components/AddTask";

describe('Test the Add Task Component', ()=>{
  it('render the date field in Add Task',()=>{
   const {getAllByTestId} = render(<AddTask onSave/>)
    const inputField = getAllByTestId("textInput")
    expect(inputField).toBeTruthy()
  })
  it("render date inputfield", ()=>{
    const {getAllByTestId}=render(<AddTask onSave/>)
    const date = getAllByTestId("dateInput")
    expect(date).toBeTruthy()
  })
  it("rener button component",()=>{
  const {getAllByTestId} = render(<AddTask onSave/>)
  const button= getAllByTestId("submitBtn")
  expect(button).toBeTruthy()
  })
})



