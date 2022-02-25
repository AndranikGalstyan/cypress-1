const { faker } = require('@faker-js/faker')
let email = "tebapo1325@naluzotan.com"
let password = "test1234"
let invalidemail = "testgmail.com"



// check login with valid data
let suite = describe("login_page", () => {
    beforeEach(() => {
        cy.visit("/")
        cy.location('protocol').should('eq', 'https:')
        cy.title().should('eq', 'nopCommerce demo store')
    })

    it("login_with_valid_data", () => {
        cy.get('.ico-login')
            .should('be.visible')
            .click()
        cy.get("#Email")
            .type(email)
        cy.get("#Password")
            .type(password)
        cy.get(".button-1.login-button")
            .click()
        cy.get('.ico-logout')
            .should("contain", 'Log out')
            .click()
        cy.get('.topic-block-title')
            .should("contain", 'Welcome to our store')

    })

     //check login with invlid data
     it("login_with_invalid_data", () => {
         cy.get('.ico-login')
             .should('be.visible')
             .click()
         cy.get("#Email")
             .type(invalidemail)
         cy.get("#Password")
             .type(password)
         cy.get(".button-1.login-button")
             .click()
         cy.get('#Email-error')
             .should("contain","Wrong email")
     })
})
