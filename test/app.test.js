const supertest = require("supertest");
const app = require('../src/main/config/app.js');

describe('App', () => {

    it('Deve responder na raiz', async () => {
        const request = supertest(app);
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });

})