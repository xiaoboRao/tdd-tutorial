import { mount } from 'cypress/react18'
import { TodoForm } from '../../src/components/TodoForm'

describe('TodoForm', () => {
  it('TodoForm enter empty input', () => {
    const addTodo = cy.stub().as('add')
    mount(<TodoForm addTodo={addTodo} />)

    cy.get('.input').type('{enter}')

    cy.get('@add').should('not.be.called')
  })

  it('TodoForm add todo when input is not empty', () => {
    const addTodo = cy.stub().as('add')

    mount(<TodoForm addTodo={addTodo} />)

    cy.get('.input').type('enter something{enter}')

    cy.get('@add').should('be.called')
  })
})
