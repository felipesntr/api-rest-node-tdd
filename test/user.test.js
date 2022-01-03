const app = require('../src/app');
const request = require("supertest")

describe('User', () => {
    it('Deve listar todos os usuários', async () => {
        const response = await request(app).get('/users');
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(1);
        expect(response.body[0]).toHaveProperty('name', 'John Doe');
    });

    it('Deve inserir um usuário com sucesso', async () => {
        const response = await request(app).post('/users').send({
            name: 'Will Smith',
            mail: 'mail@mail.com'
        });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('name', 'Will Smith');
        expect(response.body).toHaveProperty('mail', 'mail@mail.com');
    });
})