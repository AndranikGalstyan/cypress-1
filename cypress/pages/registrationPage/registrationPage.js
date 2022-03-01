import faker from "@faker-js/faker";
class registrationPage {

    elements = {
        firstNameInput :() => cy.get ("#FirstName"),
        lastNameInput : () => cy.get ("#LastName"),
        emailInput : () => cy.get("#Email"),
        companyNameInput : () => cy.get("#Company"),
        newsletterBtn : () => cy.get('#Newsletter'),
        password : () => cy.get('#Password'),
        confirmPass : () => cy.get('#ConfirmPassword'),
        registBtn : () => cy.get('#register-button'),
        registIco : () => cy.get('.ico-register'),
        pageLogo : () => cy.get('[alt="nopCommerce demo store"]'),
        gender : () => cy.get('#gender-male'),
        days : () => cy.get("[name='DateOfBirthDay'] option"),
        months : () => cy.get("[name='DateOfBirthMonth'] option"),
        years : () => cy.get("[name='DateOfBirthYear'] option"),
        registrationMessage : () => cy.get ('.page-body'),
        passwordError : () => cy.get ('#Password-error'),
        firstNameError : () => cy.get ('#FirstName-error'),
        lastNameError : () => cy.get ('#LastName-error'),
        emailError : () => cy.get ('#Email-error')
    }

    data= {
        validPassword : "pas123456",
        invalidPassword : "pas12",
        invalidEmailArray : ["abcgmail.com",
                        "abd123@gmailcom",
                         "abcd123",
                          "abc123@.com"],

        name : faker.name.firstName(),
        lastName : faker.name.lastName(),
        randomEmail : faker.internet.email(),
        companyName : faker.company.companyName(),
    }
    // firstNameInput(firstname){
    //     this.elements.firstNameInput().clear().type(firstname)
    // }
    // lastNameInput(lastname){
    // this.elements.lastNameInput().clear().type(lastname)
    // }
    // emailInput(email){
    //     this.elements.emailInput().clear().type(email)
    // }
    // companyNameInput(companyname){
    //     this.elements.companyNameInput().clear().type(companyname)
    // }
    // newsletterBtn(){
    //     this.elements.newsletterBtn().click()
    // }
    // passwordField (password){
    //     this.elements.passwordInput().clear().type(password)
    // }
    // confirmPas (password){
    //     this.elements.confirmPass().clear().type(password)
    // }
    // clickRegistrBtn(){
    //     this.elements.registBtn().click()
    // }
    // clicRegistrIco(){
    //     this.elements.registIco().click()
    // }
}

module.exports = new registrationPage()