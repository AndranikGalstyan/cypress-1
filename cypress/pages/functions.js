 // import Reregistration_page from "../pages/registrationPage/registration_page"
 // const  registrationPage = new Reregistration_page
 // let array = registrationPage.data.invalidEmailArrays


 export  default  class Functions {

    clickOnWebElement(element) {
        element.click()
    }

    typeInField(element,text){
        element.type(text)
    }



    selectData(elements){
        elements.then(data => {
            let daysQuantity = data.length
            let randIndexD = Math.floor(Math.random() * (daysQuantity) + 1)
                  cy.wrap(data).parent().select(randIndexD)
              })

    }







}