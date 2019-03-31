class StringCalculator {

	constructor() {
	}

	add(number) {
		let sum = 0;
		let separator = ',';
		const changeDelimiter = number.indexOf('//');
		if (changeDelimiter === 0) {
			separator = number[number.search('//') + 2];
			number = number.substring(3, number.length);
		}
		number = number.split('\n').join(separator);
		const numbers = number.split(separator).map(Number);
		numbers.forEach(element => {
			sum += element;
		});
		return  sum;
	}
}
module.exports = StringCalculator;