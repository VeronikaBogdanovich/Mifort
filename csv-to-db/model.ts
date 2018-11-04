export interface CsvModel {
	id: string;
	name: string;
	age: string;
	email: string;
	date: string;
	time: string;
	phone: string;
}

export class Email {
	name: string;
	domain: string;
	length: number;

	constructor(obj?: string) {
		if(obj) {
			let parts: Array<string> = obj.split('@');

			this.name = parts[0];
			this.domain = '@' + parts.slice(1).join('');
		}

		this.length = this.getLength();
	}

	getLength(): number {
		let length: number = 0;

		if(this.name) {
			length += this.name.length;
		}
		if(this.domain) {
			length += this.domain.length;
		}

		return length;
	}
}

export class RegistrationDate {
	year: number;
	month: number;
	day: number;
	length: number;

	constructor(obj?: string) {
		if (obj) {
			/* Split this string into array of only numbers, for example:
			* '11-1999' will be splitted into this array:
			* ['11', '1999']
			*/
			const parts: Array<string> = obj.split(/[^0-9]/);

			this.day = parts[0] && +parts[0];
			this.month = parts[1] && +parts[1];
			this.year = parts[2] && +parts[2];
		}
		this.length = this.getLength();
	}

	getLength(): number {
		let length: number = 0;

		if (this.year != null && this.year != undefined) {
			// 0 equals 00 and 2 equals 02
			length += this.year.toString().length;
		}

		if (this.month != null && this.month != undefined) {
			// 0 equals 00 and 2 equals 02
			length += 2;
		}

		if (this.day != null && this.day != undefined) {
			length += 2;
		}

		return length;
	}

	toNumber(): number {
		// get milliseconds
		return (new Date(this.year, this.month, this.day)).getTime();
	}
}

export class RegistrationTime {
	hours: number;
	minutes: number;
	length: number;

	constructor(obj?: string) {
		if (obj) {
			/* Split this string into array of only numbers, for example:
			* '12-35' will be splitted into this array:
			* ['12', '35']
			*/
			const parts: Array<string> = obj.split(/[^0-9]/);

			this.hours = parts[0] && +parts[0];
			this.minutes = parts[1] && +parts[1];
		}
		this.length = this.getLength();
	}

	getLength(): number {
		let length: number = 0;

		if (this.hours != null && this.hours != undefined) {
			// since 2 == 02
			length += 2;
		}

		if (this.minutes != null && this.minutes != undefined) {
			// since 0 == 00
			length += 2;
		}

		return length;
	}

	toNumber(): number {
		// get milliseconds
		return this.hours * 60 + this.minutes;
	}
}

export class Phone {
	code1: string;
	code2: number;
	number: number;
	length: number;

	constructor(obj?: string) {
		if (obj) {
			/* Split this string into array of only numbers and +, for example:
			* '+375a29-2774234' will be splitted into this array:
			* ['+375', '29', '2774234']
			*/
			const parts: Array<string> = obj.split(/[^+0-9]/);
			// console.log('Phone parts -> ', parts);

			this.code1 = parts[0];
			this.code2 = parts[1] && +parts[1];

			// 'number' = all other indexes of 'parts':
			this.number = parts.slice(2).join('') && +parts.slice(2).join('');
		}
		this.length = this.getLength();
	}

	getLength(): number {
		let length: number = 0;

		if (this.code1) {
			length += this.code1.length;
		}

		if (this.code2) {
			length += this.code2.toString().length;
		}

		if (this.number) {
			length += this.number.toString().length;
		}

		return length;
	}
}