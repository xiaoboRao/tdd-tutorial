import { render, screen } from '@testing-library/react'
import { TodoForm } from './TodoForm'
import userEvent from '@testing-library/user-event'

describe('TodoForm', () => {
  test('TodoForm enter empty input', () => {
    // given
    const addTodo = jest.fn()
    render(<TodoForm addTodo={addTodo} />)

    // when
    userEvent.type(screen.getByPlaceholderText("What's your plan?"), '{enter}')

    // then

    expect(addTodo).not.toBeCalled()
  })

  test('TodoForm add todo when input is not empty', () => {
    // given
    const addTodo = jest.fn()
    render(<TodoForm addTodo={addTodo} />)

    // when
    userEvent.type(screen.getByPlaceholderText("What's your plan?"), 'buy milk{enter}')

    // then
    expect(addTodo).toBeCalledWith('buy milk')
  })
})
