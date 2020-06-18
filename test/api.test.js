
const request = require('supertest');
var chai = require('chai');
var expect = chai.expect;

const app = require('../index');

// ==================== /users API test ====================

describe('GET /api/users', () => {
    it('respond with json containing an array of all users', (done) => {
        request(app)
            .get('/api/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect((res) => {
                expect(res.body.users).to.be.an('array');
            })
            .expect(200, done);
    });
});
