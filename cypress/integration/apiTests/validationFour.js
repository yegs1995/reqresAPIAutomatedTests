/// <reference types="cypress" />

describe('Validation Four', () => {


    it('Verify reponse time', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/'
        }).then((resp) => {
            resp.status, {
                delay: 3000
            }
            const reponseTime = resp.duration
            return reponseTime
        }).then((reponseTime)=>{
            expect(reponseTime).to.not.greaterThan(1000)

        })

    })

})