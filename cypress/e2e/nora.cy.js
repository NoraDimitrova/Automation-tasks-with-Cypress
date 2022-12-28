/// <reference types="cypress"/>

it('Google testing', function () {

    cy.visit('https://www.google.com')
    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('.gLFyf').type('Atomation Step by Step{enter}')
    cy.get('[href="https://automationstepbystep.com/"] > .LC20lb').click()
    // cy.wait(10000)
    // cy.contains('Qiuz').click()


})
