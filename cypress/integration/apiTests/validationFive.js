/// <reference types="cypress" />

describe('Validation five', () => {
    const data = [];
    it('get all users', () => {
        for (let i = 1; i <= 2; i++) {
            cy.request({
                method: 'GET',
                url: 'https://reqres.in/api/users?page=' + i
            }).then(resp => {
                const users = resp.body.data;
                users.forEach(item => {
                    data.push(item)
                });
            })
        }

    });

    it('Verify the response code of ten users are 200', () => {
        for (const item of data) {
            cy.request({
                method: 'GET',
                url: 'https://reqres.in/api/users/' + item.id
            }).then(resp => {
                expect(resp.status).to.eq(200)
            })
        }
    });
})