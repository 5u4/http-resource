const chai         = require('chai');
const should       = chai.should();
const UserResource = require('./UserResource');



describe('Test Resource class', function() {
    /**
     * A dummy user for testing
     */
    const user = {
        _id: 'randomidstring',
        username: 'test_user',
        password: 'somehashedvalue',
        __v: 0,
    };

    describe('Response tests', function() {
        it('should return a desire format of response', function() {
            const res = UserResource.make(user).response();

            res.should.have.property('data');
            res.data.should.have.property('id').equal(user._id);
            res.data.should.have.property('username').equal(user.username);
        });
    });
});
