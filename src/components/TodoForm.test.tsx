import { screen } from '@testing-library/react'
import { TodoForm } from './TodoForm'
import userEvent from '@testing-library/user-event'
import { renderWithRedux } from '../utils/renderWithRedux'
import { store } from '../store/todo'

jest.spyOn(store, 'dispatch')
describe('TodoForm', () => {
  test('TodoForm enter empty input', () => {
    // given
    renderWithRedux(<TodoForm />, { store })

    // when
    userEvent.type(screen.getByPlaceholderText("What's your plan?"), '{enter}')

    // then

    expect(store.dispatch).not.toBeCalled()
  })

  test('TodoForm add todo when input is not empty', async () => {
    // given
    renderWithRedux(<TodoForm />, { store })

    // when
    await userEvent.type(screen.getByPlaceholderText("What's your plan?"), 'buy milk{enter}')

    // then
    expect(store.dispatch).toBeCalledWith(expect.objectContaining({ payload: 'buy milk' }))
  })
})
