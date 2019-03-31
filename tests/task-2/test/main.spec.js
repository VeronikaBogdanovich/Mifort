const StringCalculator = require('../main');
const chai = require('chai');
const mocha = require('mocha');
const describe = mocha.describe;
const assert = chai.assert;

describe('Check function add() of StringCalculator', () => {
        let calculator;
        calculator = new StringCalculator();

        it('Should return zero if string is empty', () => {
            assert.equal(calculator.add(''), 0);
        });

        it('Should return number which equals a number of string if string contain only one number', () => {
            assert.equal(calculator.add('1'), 1);
        });

        it('Should return sum of two numbers from a given string if the string is given by 2 numbers separated by commas', () => {
            assert.equal(calculator.add('1,1'), 2);
        });

        it('Should return sum of 3 numbers from a given string if the string is given by 3 numbers separated by commas', () => {
            assert.equal(calculator.add('1,1,1'), 3);
        });

        it('Should return sum of two numbers from a given string if the string is given by 2 numbers separated by "\n"', () => {
            assert.equal(calculator.add('1\n1'), 2);
        });

        it('Should return sum of 3 numbers from a given string if the string is given by 3 numbers separated by "\n"', () => {
            assert.equal(calculator.add('1\n1\n1'), 3);
        });

        it('Should return sum of 2 negative numbers with a minus sign from a given string if the string is given by 3 numbers separated by commas', () => {
            assert.equal(calculator.add('-1,-1'), -2);
        });

        it('Should return sum of 3 numbers from a given string if the string is given by 3 numbers separated by commas and "\n"', () => {
            assert.equal(calculator.add('1,1\n1'), 3);
        });

        it('Should return sum of numbers from a given string if the string is given by any count of numbers separated by ";" and "\n"', () => {
            assert.equal(calculator.add('//;\n1;1'), 2);
        });

    }
);