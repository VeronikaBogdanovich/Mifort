export function checkLength(minLength: number, maxLength: number): Function {
	return function (obj: { length: number }): boolean {
		return obj.length >= minLength && obj.length <= maxLength;
	}
}

export function checkMinMax(min: number, max: number): Function {
	return function (obj: number): boolean {
		return obj >= min && obj <= max;
	}
}

export const config: {csv: Array<any>} = {
	csv: [
		{
			name: 'name',
			minLength: 3,
			maxLength: 15,
			regExp: '[a-zA-Z]'
		},
		{
			name: 'age',
			minLength: 2,
			maxLength: 2,
			min: 14,
			max: 45,
			regExp: '[0-9]'
		},
		{
			name: 'date',
			minLength: 8,
			maxLength: 8,
			minYear: 2012,
			maxYear: (new Date()).getFullYear(),
			minMonth: 1,
			maxMonth: 12,
			minDay: 1,
			maxDay: 31,
		},
		{
			name: 'time',
			minLength: 4,
			maxLength: 4,
			minHour: 0,
			maxHour: 23,
			minMinute: 0,
			maxMinute: 59
		},
		{
			name: 'email',
			minLength: 7,
			maxLength: 40,
			regExpName: '[a-z0-9]',
			regExpDomain: '@[a-z]{2,5}\.[a-z]{2,4}'
		},
		{
			name: 'phone',
			minLength: 13,
			maxLength: 13
		},
	]
};