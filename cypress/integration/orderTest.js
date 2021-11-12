// orderTest.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Order Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/Pizza')
    })

    //test
    const nameTest = () => cy.get('input[name="name"]').should('exist')
    const specialRequestTest = () => cy.get('input[name="specialRequest"]').should('exist')
    const pepperoniTest = () => cy.get('input[name="Pepperoni"]').should('exist')
    const hamTest = () => cy.get('input[name="Ham"]').should('exist')
    const chickenTest = () => cy.get('input[name="Chicken"]').should('exist')
    const baconTest = () => cy.get('input[name="Bacon"]').should('exist')
    const sausageTest = () => cy.get('input[name="Sausage"]').should('exist')
    const meatballsTest = () => cy.get('input[name="Meatballs"]').should('exist')
    const buttonSubmitTest = () => cy.get("button").should('exist')

})