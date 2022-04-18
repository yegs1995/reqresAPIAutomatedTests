/// <reference types="cypress" />

describe('Validation five', () => {
    let data;
    it('get first users page one', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=1'
        }).then((resp) => {

            data = resp.body.data
        })

    });
    it('get last users page 2', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        }).then((resp) => {
            const users =  resp.body.data;
            users.forEach(item => {
                data.push(item)
              });
        })

    });

    it('Verify the response code of ten users are 200', () => {
        
        cy.log(data)
        for (const item of data) {
            cy.request({
                method: 'GET',
                url: 'https://reqres.in/api/users/' + item.id
            }).then((resp) => {
                expect(resp.status).to.eq(200)
            })
        }
    });
})