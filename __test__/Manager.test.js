const Manager = require('../lib/Manager');


test("setting office number", () => {
    const testOffice = "1";
    const employee = new Manager("Brandon", 1, "brandon@test.com", testOffice);
    expect(employee.officeNumber).toBe(testOffice);
})

test("get Role function", () => {
    const testRole = "Manager";
    const employee = new Manager("Brandon", 1, "brandon@teste.com", testRole);
    expect(employee.getRole()).toBe(testRole);
})