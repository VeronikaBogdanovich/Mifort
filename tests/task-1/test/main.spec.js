const NumberValidator = require('../main');
const chai = require('chai');
const assert = chai.assert;
const mocha = require('mocha');
const describe = mocha.describe;


describe('isValid() of NumberValidator', () => {
	let validator;
	describe('Check validation for min value', () => {
		validator = new NumberValidator(2);

		it('Should return true if number greater than min value', () => {
			assert.isTrue(validator.isValid(5), 'true');
		});

		it('Should return true if number equals min value', () => {
			assert.isTrue(validator.isValid(2), 'true');
		});

		it('Should return false if number less than min value', () => {
			assert.isTrue(validator.isValid(0), 'false');
		});
	});

	describe('Check validation for max value', () => {
			validator = new NumberValidator(1, 9);
		it('Should return true if number less than max value', () => {
			assert.isTrue(validator.isValid(8), 'true');
		});

		it('Should return true if number equals max value', () => {
			assert.isTrue(validator.isValid(9), 'true');
		});

		it('Should return false if number greater than min value', () => {
			assert.isTrue(validator.isValid(11), 'false');
		});
    });

	describe('Check validation for acceptString', () => {
        beforeEach(() => {
			validator = new NumberValidator(1, 10, true);
		});
		it('Should return true if value can be parsed to number', () => {
			assert.isTrue(validator.isValid('9'), 'true');
		});

		it('Should return true if value can be parsed to number', () => {
			assert.isTrue(validator.isValid('1'), 'true');
		});

		it('Should return true if value can be parsed to number', () => {
			assert.isTrue(validator.isValid('10'), 'true');
		});

		it('Should return false if value cannot be parsed to number', () => {
			assert.isTrue(validator.isValid('a'), 'false');
		});

		it('Should return false if value cannot be parsed to number', () => {
			assert.isTrue(validator.isValid('A'), 'false');
		});

		it('Should return false if value cannot be parsed to number', () => {
			assert.isTrue(validator.isValid('*'), 'false');
		});

		it('Should return false if value cannot be parsed to number', () => {
			assert.isTrue(validator.isValid(' '), 'false');
		});

	});

	describe('Check validation for submitted', () => {
		beforeEach(() => {
			validator = new NumberValidator(1, 10, true);
		});
		it('Should return true if submitted is false', () => {
			assert.isTrue(validator.isValid('10'), 'true');
		});

		it('Should return false if submitted is true', () => {
			validator.setSubmitted();
			assert.isFalse(validator.isValid('a'), 'false');
		});
	});
});