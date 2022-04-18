/// <reference types="cypress" />

describe('Validation Four', () => {

    it('Verify reponse time', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/'
        }).then(resp => {
            resp.status, {
                delay: 3000
            }
            return resp
        }).then(resp=>{
            expect(resp.duration).to.not.greaterThan(1000)
            expect(resp.status).to.eql(200)

        })

    })

})