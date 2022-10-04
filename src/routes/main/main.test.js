const request = require('supertest');
const app = require('../../app');
const Keygrip = require('keygrip');
require('dotenv').config();

const keys = [process.env.COOKIE_KEY_1, process.env.COOKIE_KEY_2];
const cookie = Buffer.from(JSON.stringify({passport: {user: '123'}})).toString('base64');
const signature = Keygrip(keys).sign(`session=${cookie}`);

test('Should return 401 if user not authenticated', async () => {
    await request(app).get('/secret').expect('Content-Type', /json/).expect(401);
});

test('Should return 200 if user authenticated', async () => {
    await request(app)
        .get('/secret').expect('Content-Type', /text\/html/)
        .set('cookie', [`session=${cookie}; session.sig=${signature};`])
        .expect(200);
});