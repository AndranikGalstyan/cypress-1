import loginPage from "../pages/loginPage/loginPage"
import VerificationResult from "../pages/verifications"
import Functions from "../pages/functions"

const verify = new VerificationResult();
const functions = new Functions();


// check login with valid data
describe("login_page", () => {
    beforeEach(() => {
        cy.visit("/")
        verify.urlVerification(cy.url(), Cypress.env("baseUrl"))
        verify.verifyProtocol('contains', 'https:')
        verify.verifyTitle('contains', 'nopCommerce demo store')
        // verify.visibilityVerification(loginpage.elements.loginIco())
        // functions.clickOnWebElement(loginPage.elements.loginIco())

    })
    // check login with valid data
    it("login_with_valid_data", () => {
        functions.clickOnWebElement(loginPage.elements.loginIco())
        functions.typeInField(loginPage.elements.emailInput(), loginPage.datas.email)
        functions.typeInField(loginPage.elements.passwordInput(), loginPage.datas.password)
        functions.clickOnWebElement(loginPage.elements.loginBtn())
        verify.containingVerification(loginPage.elements.logoutBtn(), 'Log out')
        functions.clickOnWebElement(loginPage.elements.logoutBtn())
        verify.containingVerification(loginPage.elements.signInMessage(), 'Welcome, Please Sign In!')
    })

    //check login with invlid data
    it("login_with_invalid_data", () => {
        loginPage.datas.invalidEmailArray.forEach((email, index) => {

            functions.clickOnWebElement(loginPage.elements.loginIco())
            functions.typeInField(loginPage.elements.emailInput(), email)
            functions.typeInField(loginPage.elements.passwordInput(), loginPage.datas.password)
            functions.clickOnWebElement(loginPage.elements.loginBtn())
            if (index === 1) {
                verify.containingVerification(loginPage.elements.loginErrorr(),
                    "Login was unsuccessful. Please correct the errors and try again.",
                    "No customer account found")
            } else {
                verify.containingVerification(loginPage.elements.emailError(), 'Wrong email')
            }
        })
        })
})











