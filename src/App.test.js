import { getAllByAltText, getAllByLabelText, getByText, render, screen } from '@testing-library/react';
import Header from './components/Header'
import AddTask from "./components/AddTask"

test('renders the tittle of the app in header', () => {
  render(<Header/>);
  const linkElement = screen.getByText("Task Manager App");
  expect(linkElement).toBeInTheDocument();
});

test('render the task form in addTask component', ()=>{
  render(<AddTask/>)
  const linkElement = screen.getByText("Task");
  expect(linkElement).toBeInTheDocument();
  
})