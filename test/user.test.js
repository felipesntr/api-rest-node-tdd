const app = require('../src/main/config/app.js');
const request = require("supertest")

describe('User', () => {
    it('Deve listar todos os usuários', async () => {
        const response = await request(app).get('/users');
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(1);
        expect(response.body[0]).toHaveProperty('name', 'John Doe');
    });
})