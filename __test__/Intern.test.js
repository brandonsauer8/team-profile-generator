const Intern = require("../lib/Intern");

test("sets school", () => {
    const testSchool = "UC Davis";
    const employee = new Intern("Brandon", 1, "brandon@test.com", testSchool);
    expect(employee.school).toBe(testSchool);
})

test("sets employee role", () => {
    const testRole = "Intern";
    const employee = new Intern("Brandon", 1, "brandon@test.com", testRole);
    expect(employee.getRole()).toBe(testRole);
})

test("get school", () => {
    const testSchool = "UC Davis";
    const employee = new Intern("Brandon", 1, "brandon@test.com", testSchool);
    expect(employee.getSchool()).toBe(testSchool);
});