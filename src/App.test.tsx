import { render, screen, within, act } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'

test('should render todo list', () => {
  // given
  render(<App />)
  // when
  const todos = screen.getAllByTestId('todo-item')
  // then
  expect(todos).toHaveLength(3)
})

test('should add todo', () => {
  // given
  render(<App />)
  act(() => {
    // when
    userEvent.type(screen.getByPlaceholderText("What's your plan?"), 'buy milk{enter}')
  })
  // then
  expect(screen.getAllByTestId('todo-item')).toHaveLength(4)
})

test('should remove todo', () => {
  // given
  render(<App />)

  act(() => {
    // when
    userEvent.click(within(screen.getByText('Learn about React')).getByTestId('remove-todo'))
  })
  // then
  expect(screen.getAllByTestId('todo-item')).toHaveLength(2)
})

test('should toggle todo', () => {
  // given
  render(<App />)

  let firstTodo = within(screen.getByText('Learn about React'))

  act(() => {
    // when
    userEvent.click(firstTodo.getByText('Complete'))
  })
  firstTodo = within(screen.getByText('Learn about React'))
  // then
  expect(firstTodo.getByText('Redo')).toBeInTheDocument()
})
