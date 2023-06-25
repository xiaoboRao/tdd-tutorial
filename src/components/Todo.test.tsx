import { render, screen } from '@testing-library/react'
import { Todo } from './Todo'
import userEvent from '@testing-library/user-event'

describe('Todo component', () => {
  test('should render new item', () => {
    // given
    const todo = {
      id: 1,
      text: 'Hello world',
      isCompleted: false,
    }
    render(<Todo todo={todo} toggleTodo={jest.fn()} removeTodo={jest.fn()} index={todo.id} />)
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
    render(<Todo todo={todo} toggleTodo={jest.fn()} removeTodo={jest.fn()} index={todo.id} />)
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
    render(<Todo todo={todo} toggleTodo={jest.fn()} removeTodo={jest.fn()} index={todo.id} />)
    // when
    const element = screen.getByText('Redo')

    //then
    expect(element).toBeInTheDocument()
  })

  test('should toggle item when todo not completed', async () => {
    // given
    const todo = {
      id: 1,
      text: 'Hello world',
      isCompleted: false,
    }

    const toggleTodo = jest.fn()
    render(<Todo todo={todo} toggleTodo={toggleTodo} removeTodo={jest.fn()} index={todo.id} />)
    // when
    const element = screen.getByText('Complete')
    // mock the click event
    await userEvent.click(element)
    //then
    expect(toggleTodo).toHaveBeenCalledTimes(1)

    expect(element).toBeInTheDocument()
  })

  test('should remove item', async () => {
    // given
    const todo = {
      id: 1,
      text: 'Hello world',
      isCompleted: true,
    }

    const removeTodo = jest.fn()
    render(<Todo todo={todo} toggleTodo={jest.fn()} removeTodo={removeTodo} index={todo.id} />)
    // when
    const element = screen.getByText('x')
    // mock the click event
    await userEvent.click(element)
    //then
    expect(removeTodo).toHaveBeenCalledTimes(1)
  })
})
