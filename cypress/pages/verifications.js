export default class VerificationResult{

            urlVerification (actualUrl, expectedUrl){
                actualUrl.should("contain", expectedUrl)
            }

            verifyTitle (condition,text) {
                cy.title().should(condition,text)
            }
            verifyProtocol (condition,protocol){
                cy.location('protocol').should(condition,protocol)
            }

            visibilityVerification (element)  {
                element.should("be.visible")
            }
            enabilityVerification (element) {
                element.should("be.enabled")
            }

            containingVerification (element,containText)  {
                element.should("contain.text", containText)
            }

            haveLengthVerification (element, expectedLength)  {
                element.should("have.length", expectedLength)
            }

            multipleElementsContainingVerification (element, array)  {
                array.forEach(value => {
                    element.should("contain", value)
                })
            }

            notExistingVerification (element)  {
                element.should("not.be.exist")
            }

            equalityVerification (element, expectation)  {
                element.should("eq", expectation)
            }

            notContainVerification (element, expectation)  {
                element.should("not.contain", expectation)
            }

            notEqualityVerification (element, expectation)  {
                element.should("not.eq", expectation)
            }

        }

