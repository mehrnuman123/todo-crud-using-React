import { render, getAllByTestId, fireEvent } from "@testing-library/react";
import AddTask from "../components/AddTask";

describe('render add task components', ()=>{
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

  // it("save the task",()=>{
  //   const onSave=jest.fn()
  //   const {getByRole}=render(<AddTask onSave={onSave}/>)
  //   const form=getByRole("form")
  //   fireEvent.submit(form)
  //   expect(onSave).toHaveBeenCalledTimes(1)
  // })
})



