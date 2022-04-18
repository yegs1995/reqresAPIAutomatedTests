/// <reference types="cypress" />

describe('Validation three',()=>{

    it ('Update user and verify the data response is right',()=>{

        cy.request({
            method: 'PUT',
            url:'https://reqres.in/api/users/2',
            body:{
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then((resp) => {
            expect(resp.status).to.eq(200)
            cy.log(resp.body.data)
          })

    })
})