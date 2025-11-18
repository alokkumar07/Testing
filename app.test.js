const sortingByAge = require('./app');

test('sortingByAge sorts users by age in ascending order', () => {      
    const sortedUsers = sortingByAge();
    expect(sortedUsers[0].name).toBe("Alok");
});