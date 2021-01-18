var assert = require('assert');

describe('Test', function(){
    it('should do the test', function(){
        assert.equal(1,1);
    })

    it('should return error', function(){
        assert.equal(1,2);
    })
});