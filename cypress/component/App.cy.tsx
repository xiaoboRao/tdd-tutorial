import { mount } from 'cypress/react18'
import App from '../../src/App'

describe('todo App', () => {
  context('app', () => {
    beforeEach(() => {
      mount(<App />)
    })

    it('should works', () => {
      cy.get('.todo').should('have.length', 3)
      cy.get('.input').type('text with cypress {enter}')
      cy.get('.todo').should('have.length', 4).contains('Learn about React').find("[data-testid='remove-todo']").click()
      cy.get('.todo').should('have.length', 3)
    })
  })
})
