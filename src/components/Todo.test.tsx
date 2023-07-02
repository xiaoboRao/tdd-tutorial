import { screen } from '@testing-library/react'
import { store } from '../store/todo'
import { Todo } from './Todo'
import { renderWithRedux } from '../utils/renderWithRedux'
import userEvent from '@testing-library/user-event'

jest.spyOn(store, 'dispatch')

describe('Todo component', () => {
  test('should render new item', () => {
    // given
    const todo = {
      id: 1,
      text: 'Hello world',
      isCompleted: false,
    }
    renderWithRedux(<Todo todo={todo} index={todo.id} />)
    // when
    const element = screen.getByText('Hello world')
    // then
    expect(element).toBeInTheDocument()
  })

  test('should render completed item', () => {
    // given
    const todo = {
      id: 1,
      text: 'Hello world',
      isCompleted: false,
    }
    renderWithRedux(<Todo todo={todo} index={todo.id} />)

    // when
    const element = screen.getByText('Complete')
    // then
    expect(element).toBeInTheDocument()
  })
  test('should render redo item', () => {
    // given
    const todo = {
      id: 1,
      text: 'Hello world',
      isCompleted: true,
    }
    renderWithRedux(<Todo todo={todo} index={todo.id} />)

    // when
    const element = screen.getByText('Redo')

    //then
    expect(element).toBeInTheDocument()
  })

  test('should toggle item', async () => {
    // given
    const todo = {
      id: 1,
      text: 'Hello world',
      isCompleted: true,
    }

    renderWithRedux(<Todo todo={todo} index={todo.id} />, { store })
    // when
    const element = screen.getByText('Redo')
    // mock the click event
    await userEvent.click(element)
    //then

    expect(store.dispatch).toHaveBeenCalledWith(expect.objectContaining({ payload: todo.id }))
  })

  test('should toggle item when todo not completed', async () => {
    // given
    const todo = {
      id: 1,
      text: 'Hello world',
      isCompleted: false,
    }

    renderWithRedux(<Todo todo={todo} index={todo.id} />, { store })
    // when
    const element = screen.getByText('Complete')
    // mock the click event
    await userEvent.click(element)
    //then

    expect(store.dispatch).toHaveBeenCalledWith(expect.objectContaining({ payload: todo.id }))
  })

  test('should remove item', async () => {
    // given
    const todo = {
      id: 1,
      text: 'Hello world',
      isCompleted: true,
    }

    renderWithRedux(<Todo todo={todo} index={todo.id} />, { store })

    // when
    const element = screen.getByText('x')
    // mock the click event
    await userEvent.click(element)
    //then
    expect(store.dispatch).toHaveBeenCalledWith(expect.objectContaining({ payload: todo.id }))
  })
})
