/// <reference types="cypress" />

describe('Validation Two',()=>{
    const d = new Date();
    let day = d.getDate()+1;
    it ('create user',()=>{

        cy.request({
            method: 'POST',
            url:'https://reqres.in/api/users',
            body:{
                "name": "morpheus",
                "job": "leader"
            }
        }).then((resp) => {
            expect(resp.status).to.eq(201)
            cy.log(resp.body.data)
            expect(Date.parse(resp.body.createdAt)).to.eq(Date.parse(d))
          })

    })
})