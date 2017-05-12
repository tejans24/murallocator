const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const should = chai.should();
const app = require('../app');

chai.use(chaiHttp);

describe("ApiProxy", function() {
    describe("/api/get_lt", function(done) {
        it('it should proxy /api/get_lt', function() {
           chai.request(app)
               .get("/api/get_lt")
               .end(function(err, res) {
                   console.log(`res= ${JSON.stringify(res)}`);
                   res.should.have.status(200);
                   done();
               });
        });
    });
});