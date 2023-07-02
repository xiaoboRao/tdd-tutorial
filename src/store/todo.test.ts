import { store } from './todo'
import { addTodo, toggleTodo, deleteTodo } from './todoSlice'
test('should add, complete, delete todo,', () => {
  // // add todo
  let todos = store.getState().todo
  expect(todos).toHaveLength(3)

  store.dispatch(addTodo('add new todo'))

  todos = store.getState().todo
  expect(todos).toHaveLength(4)

  // complete todo
  store.dispatch(toggleTodo(0))
  let firstTodo = store.getState().todo[0]

  expect(firstTodo.isCompleted).toEqual(true)

  // delete todo
  store.dispatch(deleteTodo(2))
  todos = store.getState().todo

  expect(todos).toHaveLength(3)

  expect(todos).toMatchSnapshot(
    `Array [
      Object {
        "isCompleted": true,
        "text": "Learn about React",
      },
      Object {
        "isCompleted": false,
        "text": "Meet friend for lunch",
      },
      Object {
        "isCompleted": false,
        "text": "add new todo",
      },
    ]`
  )
})
