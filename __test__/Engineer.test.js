const Engineer = require('../lib/Engineer');

test("sets up GitHub", () => {
    const testValue = "brandonsauer8";
    const employee = new Engineer("Brandon", 1, "brandon@test.com", testValue);
    expect(employee.github).toBe(testValue);
})

test("get role", () => {
    const testValue = "Engineer";
    const employee = new Engineer("Brandon", 1, "brandon@test.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get GitHub", () => {
    const testValue = "brandonsauer8";
    const employee = new Engineer("Brandon", 1, "brandon@test.com", testValue);
    expect(employee.getGitHub()).toBe(testValue);
})