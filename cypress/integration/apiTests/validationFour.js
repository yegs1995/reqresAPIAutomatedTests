/// <reference types="cypress" />

describe('Validation Four ',()=>{

    it ('Verify reponse time',()=>{

        cy.request({
            method: 'GET',
            url:'https://reqres.in/api/users/'
        }).then((resp) => {
            expect(resp.status).to.eq(200)
          })

    })
})