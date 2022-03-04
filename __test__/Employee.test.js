const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test('sets  name', () => {
    const name = "Brandon"
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});
test('sets the id', () => {
    const testId = 50;
    const employee = new Employee("Brandon", testId);
    expect(employee.id).toBe(testId);
});
test('sets the email', () => {
    const testEmail = "brandon@gmail.com"
    const employee = new Employee("Brandon", 1, testEmail);
    expect(employee.email).toBe(testEmail);
});
test('get name', () => {
    const testName = "Brandon"
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});
test('get ID', () => {
    const testId = "50"
    const employee = new Employee("Brandon", testId);
    expect(employee.getId()).toBe(testId);
});
test('get email', () => {
    const testEmail = "brandon@test.com"
    const employee = new Employee("Brandon", 1, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});
test('get role', () => {
    const testRole = "Employee"
    const employee = new Employee("Brandon", 1, "brandon@test.com");
    expect(employee.getRole()).toBe(testRole);
});