const { expect } = require('chai');
const { companyAdministration } = require('./companyAdministration');

describe('Company Administration Tests', () => {
    describe('hiringEmployee tests', () => {
        it('test1', () => {
            expect(() => companyAdministration.hiringEmployee('Ivan', 'Cleaner', 20)).to.throw('We are not looking for workers for this position.');

            expect(() => companyAdministration.hiringEmployee('Ivan', 'Teacher', 20)).to.throw('We are not looking for workers for this position.');

            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 3)).to.equal('Ivan was successfully hired for the position Programmer.');

            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 5)).to.equal('Ivan was successfully hired for the position Programmer.');

            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 0)).to.equal('Ivan is not approved for this position.');

            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', -1)).to.equal('Ivan is not approved for this position.');
        });
    });

    describe('calculateSalary tests', () => {

        it('test2', () => {

            expect(() => companyAdministration.calculateSalary('this')).to.throw("Invalid hours");
            expect(() => companyAdministration.calculateSalary([])).to.throw("Invalid hours");
            expect(() => companyAdministration.calculateSalary({})).to.throw("Invalid hours");
            expect(() => companyAdministration.calculateSalary(-1)).to.throw("Invalid hours");
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
        });

    });

    describe('firedEmployee tests', () => {

        it('test3', () => {

            expect(() => companyAdministration.firedEmployee('tree', 1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(null, 1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee({}, 1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee([], 1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Peter', 'George', 'Ivan'], [])).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Peter', 'George', 'Ivan'], -1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Peter', 'George', 'Ivan'], 3)).to.throw('Invalid input');

            expect(companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], 1)).to.equal('Petar, George');
        })
    });
})
