/// <reference types="cypress" />

const user = require('../../fixtures/createUser.json')
describe('Validation Two',()=>{

    var today = new Date().toISOString().slice(0, 10);
  
    it ('create user',()=>{

        cy.request({
            method: 'POST',
            url:'https://reqres.in/api/users',
            body:{
                "name": user.name,
                "job": user.job
            }
        }).then((resp) => {
            expect(resp.status).to.eq(201)
            const resDate = new Date(resp.body.createdAt);
            expect(resDate.toISOString().slice(0, 10)).to.eq(today)            
          })

    })
})