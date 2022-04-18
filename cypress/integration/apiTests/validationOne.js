/// <reference types="cypress" />

describe('Validation one',()=>{

    it ('Get user and return the users with ODD id',()=>{

        cy.request({
            method: 'GET',
            url:'https://reqres.in/api/users'
        }).then(resp => {
            expect(resp.status).to.eq(200)
            cy.log("users with ODD id",resp.body.data.filter(num => num.id % 2))
          })

    })
})