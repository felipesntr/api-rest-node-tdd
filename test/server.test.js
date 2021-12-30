const supertest = require('supertest');


describe('Server', () => {

    it('Deve responder na porta 3001', async () => {
        // acessar a url http://localhost:3001
        const request = supertest('http://localhost:3001');
        const response = await request.get('/');
        // verificar se a resposta é 200
        expect(response.status).toBe(200);
    });

})