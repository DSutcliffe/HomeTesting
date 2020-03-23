const index = require('../index');


describe('testing all increase functions doing what they are meant to', () => {
    // test or it can be used
    test('should see pace increase by 1 after function call', () => {
        expect(index.abrar.pace).toBe(97)   // 97
        index.abrar.increasePace();         // called function 97 + 1
        expect(index.abrar.pace).toBe(98)   // now 98
        
        // reset back to original value
        index.abrar.pace = 97;              
    });
})

describe('testing all decrease functions doing what they are meant to', () => {
    // test or it can be used
    test('should see pace decrease by 1 after function call', () => {
        expect(index.abrar.pace).toBe(97)   // 97
        index.abrar.decreasePace();         // called function 97 - 1
        expect(index.abrar.pace).toBe(96)   // now 96
    });
    test('should see passing decrease by 1 after function call', () => {
        expect(index.abrar.passing).toBe(4)   // 4
        index.abrar.decreasePassing();     // called function 4 - 1
        expect(index.abrar.passing).toBe(3)   // now 3
    });
})

