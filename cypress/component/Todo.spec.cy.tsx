import React from 'react'
import { Todo } from '../../src/components/Todo'
import { mount } from 'cypress/react18'

describe('Todo component', () => {
  it('should render new item', () => {
    // given
    const todo = {
      id: 1,
      text: 'Hello world',
      isCompleted: false,
    }

    // when
    mount(<Todo todo={todo} toggleTodo={cy.stub()} removeTodo={cy.stub()} index={todo.id} />)
    // then
    cy.contains('.todo button', 'Complete')
  })

  it('should render completed item', () => {
    // given
    const todo = {
      id: 1,
      text: 'Hello world',
      isCompleted: true,
    }
    // when
    mount(<Todo todo={todo} toggleTodo={cy.stub()} removeTodo={cy.stub()} index={todo.id} />)
    // then
    cy.contains('.todo button', 'Redo')
  })
  it('should remove todo item', () => {
    // given
    const todo = {
      id: 1,
      text: 'Hello world',
      isCompleted: true,
    }

    const removeTodo = cy.stub().as('remove')
    // when
    mount(<Todo todo={todo} toggleTodo={cy.stub()} removeTodo={removeTodo} index={todo.id} />)
    // then
    cy.contains('.todo', 'Hello world').find("[data-testid='remove-todo']").click()
    cy.get('@remove').should('be.calledWith', todo.id)
  })
  it('should toggle todo item', () => {
    // given
    const todo = {
      id: 1,
      text: 'Hello world',
      isCompleted: false,
    }

    const toggleTodo = cy.stub().as('toggle')
    // when
    mount(<Todo todo={todo} toggleTodo={toggleTodo} removeTodo={cy.stub()} index={todo.id} />)
    // then
    cy.contains('.todo', 'Hello world').contains('Complete').click()
    cy.get('@toggle').should('be.calledWith', todo.id)
  })
})
