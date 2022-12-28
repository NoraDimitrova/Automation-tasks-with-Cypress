/// <reference types='cypress'/>

it('Pokerstars task', function () {

    cy.visit('https://testpages.herokuapp.com/styled/basic-html-form-test.html')
    cy.get(':nth-child(1) > td > input').type('Greta')
    cy.get(':nth-child(2) > td > input').type('g12345')
    cy.get('textarea').clear().type('I am a teacher')
    cy.get('[value="cb1"]').click()
    cy.get('[value="cb3"]').click()
    cy.get('[value="rd1"]').click()
    cy.contains('Multiple Select Values').click()
    cy.get(':nth-child(8) > td > select').select('Drop Down Item 5')
    cy.get('[type="submit"]').click()

    cy.get('h1').should('contain', 'Processed Form Details')
    cy.get('h1').should('be.visible')
    assert.equal('Processed Form Details', 'Processed Form Details', 'Not register successfully')


})
