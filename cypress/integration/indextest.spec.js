// indextest.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('index.html')
      cy.wait(100)
    })
  
    // https://on.cypress.io/interacting-with-elements
  
    it('clicks scroll down and verify text appear', () => {
      cy.get('[data-cy=scrolldown]').click();
      cy.get('[data-cy=button1]').click();
      cy.get('[data-cy=buttonresult]').scrollIntoView()
      cy.get('[data-cy=buttonresult]').contains('shame on you!')
    })
  })