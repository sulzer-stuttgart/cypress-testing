/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://login.porsche.com/auth/de/de_DE')
  })

  // https://on.cypress.io/interacting-with-elements

  it.only('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('[data-protractor-id="username"]').find('input')
      .type('mmasetic@gmail.com', {force: true, delay: 100}).should('have.value', 'mmasetic@gmail.com')

    cy.get('[data-protractor-id="password"]').find('input')
          .type('password', {force: true})

    cy.get('[data-protractor-id="log-in"]')
        .click()

    cy.get('.navigation-topbar-desktop__link-title').contains('Mustafa Masetic')

  })
})
