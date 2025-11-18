const sortingByAge = require('./app');

test('sortingByAge sorts users by age in ascending order', () => {      
    const sortedUsers = sortingByAge();
    expect(sortedUsers[0].name).toBe("Alok");
});

test('test for last member', () => {      
    const sortedUsers = sortingByAge();
    expect(sortedUsers[sortedUsers.length-1].name).toBe("Charlie");
});

test('test for total sorted length', () => {      
    const sortedUsers = sortingByAge();
    expect(sortedUsers.length).toBe(4);
});

test('test for data undefined', () => {      
    const sortedUsers = sortingByAge();
    expect(sortedUsers).not.toBe(undefined);
});