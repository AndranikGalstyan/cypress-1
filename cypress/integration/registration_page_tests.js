const { faker } = require('@faker-js/faker')
let validPassword = "pas123456"
let invalidPassword ="pas12"
let invalidemail = "abcgmail.com"
let name = faker.name.firstName()
let lastName = faker.name.lastName()
let randomEmail = faker.internet.email()
let companyName = faker.company.companyName()


let suite = describe("registration_tests", () => {
    beforeEach(() => {
        cy.visit("/")
        cy.location('protocol').should('eq','https:')
        cy.title().should('eq','nopCommerce demo store')
    })

    // check registration page with valid data
    it("registration_with_valid_data", () => {
        cy.get('[alt="nopCommerce demo store"]')
            .should('be.visible')


        cy.get('.ico-register')
            .should('be.visible')
            .should('contain.text','Register')
            .click()
        cy.get('#gender-male').click()

        cy.get('#FirstName')
             .type(name)

        cy.get('#LastName')
             .type(lastName);

        cy.get('[name="DateOfBirthDay"] option').then(days => {
            let daysQuantity = days.length
            let randIndexD = Math.floor(Math.random() * (daysQuantity) + 1)
            cy.wrap(days).parent().select(randIndexD)
        })
        cy.get('[name="DateOfBirthMonth"] option').then(month => {
            let monthQuantity = month.length
            let randIndexM = Math.floor(Math.random() * (monthQuantity) + 1)
            cy.wrap(month).parent().select(randIndexM)
        })
        cy.get('[name="DateOfBirthYear"] option').then(year => {
            let yearQuantity = year.length
            let randIndexY = Math.floor(Math.random() * (yearQuantity) + 1)
            cy.wrap(year).parent().select(randIndexY)
        })
        cy.get('#Email')
            .type(randomEmail)

        cy.get('#Company')
            .type(companyName)
        cy.get('#Newsletter')
            .click()
        cy.get('#Password')
            .type(validPassword)
        cy.get('#ConfirmPassword')
            .type(validPassword)
        cy.get('#register-button')
            .click()
        cy.get('[alt="nopCommerce demo store"]')
            .should('be.visible')
        cy.get('.page-body')
            .should("contain.text",'Your registration completed')
    })


    // check registration with password more tan 6 characters
    it('registration_with_invalid_data', () => {
         cy.get("[alt='nopCommerce demo store']")
         .should('be.visible')
         cy.get(".ico-register")
             .should('be.visible')
             .should('contain.text','Register')
             .click()
         cy.get("#gender-male").click()

         cy.get('#FirstName')
             .type(name)

         cy.get('#LastName')
             .type(lastName);

         cy.get('[name="DateOfBirthDay"] option').then(days => {
             let daysQuantity = days.length
             let randIndexD = Math.floor(Math.random() * (daysQuantity) + 1)
             cy.wrap(days).parent().select(randIndexD)
         })
         cy.get('[name="DateOfBirthMonth"] option').then(month => {
             let monthQuantity = month.length
             let randIndexM = Math.floor(Math.random() * (monthQuantity) + 1)
             cy.wrap(month).parent().select(randIndexM)
         })
         cy.get('[name="DateOfBirthYear"] option').then(year => {
             let yearQuantity = year.length
             let randIndexY = Math.floor(Math.random() * (yearQuantity) + 1)
             cy.wrap(year).parent().select(randIndexY)
         })
         cy.get('#Email')
             .type(randomEmail)

         cy.get('#Company')
             .type(companyName)
         cy.get('#Newsletter')
             .click()
         cy.get('#Password')
             .type(invalidPassword)
         cy.get('#ConfirmPassword')
             .type(invalidPassword)
         cy.get('#register-button')
             .click()
         cy.get('#Password-error')
             .should("contain.text",
                 'Password must meet the following rules','must have at least 6 characters')

     })
    // check registration page without filing in required field
    it("registration_with_invalid_data", () => {
        cy.get("[alt='nopCommerce demo store']")
            .should('be.visible')
        cy.get(".ico-register")
            .should('be.visible')
            .should('contain.text','Register')
            .click()
        cy.get("#gender-male").click()

        cy.get("[name='DateOfBirthDay'] option").then(days => {
            let daysQuantity = days.length
            let randIndexD = Math.floor(Math.random() * (daysQuantity) + 1)
            cy.wrap(days).parent().select(randIndexD)
        })
        cy.get("[name='DateOfBirthMonth'] option").then(month => {
            let monthQuantity = month.length
            let randIndexM = Math.floor(Math.random() * (monthQuantity) + 1)
            cy.wrap(month).parent().select(randIndexM)
        })
        cy.get("[name='DateOfBirthYear'] option").then(year => {
            let yearQuantity = year.length
            let randIndexY = Math.floor(Math.random() * (yearQuantity) + 1)
            cy.wrap(year).parent().select(randIndexY)
        })
        cy.get('#Email')
            .type(randomEmail)

        cy.get('#Company')
            .type(companyName)
        cy.get('#Newsletter')
            .click()
        cy.get('#Password')
            .type(validPassword)
        cy.get('#ConfirmPassword')
            .type(validPassword)
        cy.get('#register-button')
            .click()
        cy.get('#FirstName-error')
            .should("contain.text",
                'First name is required.')
        cy.get('#LastName-error')
            .should("contain.text",
                'Last name is required.')
    })
// check registration page with invalid email
    it("registration_with_valid_data", () => {
        cy.get('[alt="nopCommerce demo store"]')
            .should('be.visible')


        cy.get('.ico-register')
            .should('be.visible')
            .should('contain.text','Register')
            .click()
        cy.get('#gender-male').click()

        cy.get('#FirstName')
            .type(name)

        cy.get('#LastName')
            .type(lastName);

        cy.get('[name="DateOfBirthDay"] option').then(days => {
            let daysQuantity = days.length
            let randIndexD = Math.floor(Math.random() * (daysQuantity) + 1)
            cy.wrap(days).parent().select(randIndexD)
        })
        cy.get('[name="DateOfBirthMonth"] option').then(month => {
            let monthQuantity = month.length
            let randIndexM = Math.floor(Math.random() * (monthQuantity) + 1)
            cy.wrap(month).parent().select(randIndexM)
        })
        cy.get('[name="DateOfBirthYear"] option').then(year => {
            let yearQuantity = year.length
            let randIndexY = Math.floor(Math.random() * (yearQuantity) + 1)
            cy.wrap(year).parent().select(randIndexY)
        })
        cy.get('#Email')
            .type(invalidemail)

        cy.get('#Company')
            .type(companyName)
        cy.get('#Newsletter')
            .click()
        cy.get('#Password')
            .type(validPassword)
        cy.get('#ConfirmPassword')
            .type(validPassword)
        cy.get('#register-button')
            .click()
        cy.get('#Email-error')
            .should("contain.text","Wrong email")
        // cy.get('[alt="nopCommerce demo store"]')
        //     .should('be.visible')
        // cy.get('.page-body')
        //     .should("contain.text",'Your registration completed')
    })
})