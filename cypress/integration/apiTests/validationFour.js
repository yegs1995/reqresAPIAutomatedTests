/// <reference types="cypress" />

describe('Validation Four', () => {
    Cypress._.times(3, () => {
        it('Verify reponse time', () => {

            cy.request({
                method: 'GET',
                url: 'https://reqres.in/api/users/'
            }).then((resp) => {
                expect(resp.status).to.eq(200)
                cy.log(resp.duration)
                expect(resp.duration).to.not.greaterThan(1000)
            })

        })
    });
})