/// <reference types="cypress" />

const user = require('../../fixtures/updateUser.json')
describe('Validation three', () => {

    it('Update user and verify the data response is right', () => {

        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            body: {
                "name": user.name,
                "job": user.job
            }
        }).then((resp) => {
            expect(resp.status).to.eq(200)
            expect(resp.body.name).to.eq(user.name)
            expect(resp.body.job).to.eq(user.job)
        })
    })
})