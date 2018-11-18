const assert = require('chai').assert;
const service = require('../service');

describe('App', function () { 
    describe('getTotal', function () {
        it('should return total price', function () {
            let result = service.service
            assert.isAbove(result, 5);
        });        
    });
});



