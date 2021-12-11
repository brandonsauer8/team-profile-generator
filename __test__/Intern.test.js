const Intern = require("../lib/Intern");

test("setting school", () => {
    const testValue = "UC Davis";
    const employee = new Intern("Brandon", 1, "test@gmail.com", testValue);
    expect(employee.school).toBe(testValue);
})

test("setting employee role", () => {
    const testValue = "Intern";
    const employee = new Intern("Brandon", 1, "test@gmail.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get School", () => {
    const testValue = "UC Davis";
    const employee = new Intern("Brandon", 1, "test@gmail.com", testValue);
    expect(employee.getSchool()).toBe(testValue);
});