/// <reference types="cypress" />

describe('Validation five',()=>{

    it ('Verify the response code of ten users are 200',()=>{

        cy.request({
            method: 'GET',
            url:'https://reqres.in/api/users'
        }).then((resp) => {
            expect(resp.status).to.eq(200)
          })

    })
})