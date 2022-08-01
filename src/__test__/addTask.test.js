import { screen,render } from "@testing-library/react";
import AddTask from "../components/AddTask";

describe('Test the Add Task Component', ()=>{
  test('render the date field in Add Task',()=>{
    render(<AddTask/>)
    const inputFields = await screen.findAllByRole("text")
    expect(inputFields).toHaveLength(2)
  })
})
