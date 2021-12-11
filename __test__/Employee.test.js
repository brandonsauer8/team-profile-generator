const Employee = require('../lib/Employee');

test('makes employee object', () => {
    const employee = new Employee("Joseph");

    expect(employee.name).toBe("Joseph");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});
