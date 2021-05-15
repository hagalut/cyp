// indextest.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="cypress core tests" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('index.html')
    })
  
    // https://on.cypress.io/interacting-with-elements
  
    it('.type() - type into a DOM element', () => {
    cy.wait(300);
      cy.get('#ytplayer').click();
    })
  })