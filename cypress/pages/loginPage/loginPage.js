class loginPage{


    elements = {
        loginIco :() => cy.get ('.ico-login'),
        emailInput :()  => cy.get("#Email"),
        passwordInput :() => cy.get("#Password"),
        loginBtn : () => cy.get (".button-1.login-button"),
        logoutBtn : () => cy.get('.ico-logout'),
        signInMessage : () => cy.get('.page-title'),
        emailError : () => cy.get('#Email-error'),
        loginErrorr : () => cy.get (".message-error.validation-summary-errors")
}

    datas = {
         email : "tebapo1325@naluzotan.com",
         password : "test1234",
        invalidEmailArray : ["abcgmail.com",
                             "abd123@gmail",
                             "abcd123",
                             "abc123@.com"],
            }
}
module.exports = new loginPage()