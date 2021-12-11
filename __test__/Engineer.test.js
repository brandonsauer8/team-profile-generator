const Engineer = require('../lib/Engineer');

test("setting up github via constructor", () => {
    const testValue = "brandonsauer8";
    const employee = new Engineer("Brandon", 1, "test@gmail.com", testValue);
    expect(employee.github).toBe(testValue);
})

test("getRole function", () => {
    const testValue = "Engineer";
    const employee = new Engineer("Brandon", 1, "test@gmail.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get gitHub", () => {
    const testValue = "brandonsauer8";
    const employee = new Engineer("Brandon", 1, "test@gmail.com", testValue);
    expect(employee.getGitHub()).toBe(testValue);
})