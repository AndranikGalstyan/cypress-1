import registrationPage from "../pages/registrationPage/registrationPage";
import VerificationResult from "../pages/verifications"
import Functions from "../pages/functions"

const verify = new VerificationResult();
const functions = new Functions();

describe("registration_tests", () => {
    beforeEach(() => {
        cy.visit("/")
        verify.urlVerification(cy.url(), Cypress.env("baseUrl"))
        verify.verifyProtocol('contains', 'https:')
        verify.verifyTitle('contains', 'nopCommerce demo store')
        verify.visibilityVerification(registrationPage.elements.registIco())
        functions.clickOnWebElement(registrationPage.elements.registIco())
        verify.visibilityVerification(registrationPage.elements.pageLogo())
    })

    // check registration page with valid data
    it("registration_with_valid_data", () => {
        functions.clickOnWebElement(registrationPage.elements.gender())
        functions.typeInField(registrationPage.elements.firstNameInput(), registrationPage.data.name)
        functions.typeInField(registrationPage.elements.lastNameInput(), registrationPage.data.lastName)
        functions.selectData(registrationPage.elements.days())
        functions.selectData(registrationPage.elements.months())
        functions.selectData(registrationPage.elements.years())
        functions.typeInField(registrationPage.elements.emailInput(), registrationPage.data.randomEmail)
        functions.typeInField(registrationPage.elements.companyNameInput(), registrationPage.data.companyName)
        functions.clickOnWebElement(registrationPage.elements.newsletterBtn())
        functions.typeInField(registrationPage.elements.password(), registrationPage.data.validPassword)
        functions.typeInField(registrationPage.elements.confirmPass(), registrationPage.data.validPassword)
        functions.clickOnWebElement(registrationPage.elements.registBtn())
        verify.visibilityVerification(registrationPage.elements.pageLogo())
        verify.containingVerification(registrationPage.elements.registrationMessage(),
            'Your registration completed')
    })


    // check registration with password more tan 6 characters
    it('registration_with_invalid_data', () => {
        functions.clickOnWebElement(registrationPage.elements.gender())
        functions.typeInField(registrationPage.elements.firstNameInput(), registrationPage.data.name)
        functions.typeInField(registrationPage.elements.lastNameInput(), registrationPage.data.lastName)
        functions.selectData(registrationPage.elements.days())
        functions.selectData(registrationPage.elements.months())
        functions.selectData(registrationPage.elements.years())
        functions.typeInField(registrationPage.elements.emailInput(), registrationPage.data.randomEmail)
        functions.typeInField(registrationPage.elements.companyNameInput(), registrationPage.data.companyName)
        functions.clickOnWebElement(registrationPage.elements.newsletterBtn())
        functions.typeInField(registrationPage.elements.password(), registrationPage.data.invalidPassword)
        functions.typeInField(registrationPage.elements.confirmPass(), registrationPage.data.invalidPassword)
        functions.clickOnWebElement(registrationPage.elements.registBtn())
        verify.containingVerification(registrationPage.elements.passwordError(),
            'Password must meet the following rules', 'must have at least 6 characters')

//
    })

    // check registration page without filing in required field
    it("registration_without_filing_in_required_field", () => {
        functions.clickOnWebElement(registrationPage.elements.gender())
        functions.selectData(registrationPage.elements.days())
        functions.selectData(registrationPage.elements.months())
        functions.selectData(registrationPage.elements.years())
        functions.typeInField(registrationPage.elements.emailInput(), registrationPage.data.randomEmail)
        functions.typeInField(registrationPage.elements.companyNameInput(), registrationPage.data.companyName)
        functions.clickOnWebElement(registrationPage.elements.newsletterBtn())
        functions.typeInField(registrationPage.elements.password(), registrationPage.data.validPassword)
        functions.typeInField(registrationPage.elements.confirmPass(), registrationPage.data.validPassword)
        functions.clickOnWebElement(registrationPage.elements.registBtn())
        verify.visibilityVerification(registrationPage.elements.pageLogo())
        verify.containingVerification(registrationPage.elements.firstNameError(),
            'First name is required.')
        verify.containingVerification(registrationPage.elements.lastNameError(),
            'Last name is required.')


    })

    //check registration with invalid email
    registrationPage.data.invalidEmailArray.forEach((email) => {
        it("registration_with_invalid_email", () => {
            functions.clickOnWebElement(registrationPage.elements.gender())
            functions.typeInField(registrationPage.elements.firstNameInput(), registrationPage.data.name)
            functions.typeInField(registrationPage.elements.lastNameInput(), registrationPage.data.lastName)
            functions.selectData(registrationPage.elements.days())
            functions.selectData(registrationPage.elements.months())
            functions.selectData(registrationPage.elements.years())
            functions.typeInField(registrationPage.elements.emailInput(), email)
            functions.typeInField(registrationPage.elements.companyNameInput(), registrationPage.data.companyName)
            functions.clickOnWebElement(registrationPage.elements.newsletterBtn())
            functions.typeInField(registrationPage.elements.password(), registrationPage.data.validPassword)
            functions.typeInField(registrationPage.elements.confirmPass(), registrationPage.data.validPassword)
            functions.clickOnWebElement(registrationPage.elements.registBtn())
            verify.visibilityVerification(registrationPage.elements.pageLogo())
            verify.containingVerification(registrationPage.elements.emailError(),
                'Wrong email')
        })
    })



})


