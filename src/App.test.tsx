import { screen, within } from '@testing-library/react'
import App from './App'
import { renderWithRedux } from './utils/renderWithRedux'
import userEvent from '@testing-library/user-event'

test('should render todo list', async () => {
  // given
  renderWithRedux(<App />)
  // when
  const todos = await screen.findAllByTestId('todo-item')
  // then
  expect(todos).toHaveLength(3)
})

test('should add todo', async () => {
  // given
  renderWithRedux(<App />)
  // when
  await userEvent.type(await screen.findByPlaceholderText("What's your plan?"), 'buy milk{enter}')
  // then
  expect(screen.getAllByTestId('todo-item')).toHaveLength(4)
})

test('should remove todo', async () => {
  // given
  renderWithRedux(<App />)

  // when
  await userEvent.click(within(await screen.findByText('Learn about React')).getByTestId('remove-todo'))
  // then
  expect(screen.getAllByTestId('todo-item')).toHaveLength(2)
})

test('should toggle todo', async () => {
  // given
  renderWithRedux(<App />)
  let todo = await screen.findByText('Learn about React')

  let firstTodo = within(todo)
  // when
  await userEvent.click(await firstTodo.findByText('Complete'))
  firstTodo = within(await screen.findByText('Learn about React'))
  // then
  expect(await firstTodo.findByText('Redo')).toBeInTheDocument()
})

test('should get todos from api directly', async () => {
  // given
  renderWithRedux(<App />)
  let todo = await screen.findByText(/Build something/i)
  // then
  expect(todo).toBeInTheDocument()
})
