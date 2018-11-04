"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkLength(minLength, maxLength) {
    return function (obj) {
        return obj.length >= minLength && obj.length <= maxLength;
    };
}
exports.checkLength = checkLength;
function checkMinMax(min, max) {
    return function (obj) {
        return obj >= min && obj <= max;
    };
}
exports.checkMinMax = checkMinMax;
exports.config = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3Zlcm9uaWthYm9nZGFub3ZpY2gvRG93bmxvYWRzL2Nzdi10by1kYi9jb25maWcudHMiLCJzb3VyY2VzIjpbIi9Vc2Vycy92ZXJvbmlrYWJvZ2Rhbm92aWNoL0Rvd25sb2Fkcy9jc3YtdG8tZGIvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBZ0IsV0FBVyxDQUFDLFNBQWlCLEVBQUUsU0FBaUI7SUFDL0QsT0FBTyxVQUFVLEdBQXVCO1FBQ3ZDLE9BQU8sR0FBRyxDQUFDLE1BQU0sSUFBSSxTQUFTLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUM7SUFDM0QsQ0FBQyxDQUFBO0FBQ0YsQ0FBQztBQUpELGtDQUlDO0FBRUQsU0FBZ0IsV0FBVyxDQUFDLEdBQVcsRUFBRSxHQUFXO0lBQ25ELE9BQU8sVUFBVSxHQUFXO1FBQzNCLE9BQU8sR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDO0lBQ2pDLENBQUMsQ0FBQTtBQUNGLENBQUM7QUFKRCxrQ0FJQztBQUVZLFFBQUEsTUFBTSxHQUFzQjtJQUN4QyxHQUFHLEVBQUU7UUFDSjtZQUNDLElBQUksRUFBRSxNQUFNO1lBQ1osU0FBUyxFQUFFLENBQUM7WUFDWixTQUFTLEVBQUUsRUFBRTtZQUNiLE1BQU0sRUFBRSxVQUFVO1NBQ2xCO1FBQ0Q7WUFDQyxJQUFJLEVBQUUsS0FBSztZQUNYLFNBQVMsRUFBRSxDQUFDO1lBQ1osU0FBUyxFQUFFLENBQUM7WUFDWixHQUFHLEVBQUUsRUFBRTtZQUNQLEdBQUcsRUFBRSxFQUFFO1lBQ1AsTUFBTSxFQUFFLE9BQU87U0FDZjtRQUNEO1lBQ0MsSUFBSSxFQUFFLE1BQU07WUFDWixTQUFTLEVBQUUsQ0FBQztZQUNaLFNBQVMsRUFBRSxDQUFDO1lBQ1osT0FBTyxFQUFFLElBQUk7WUFDYixPQUFPLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFO1lBQ25DLFFBQVEsRUFBRSxDQUFDO1lBQ1gsUUFBUSxFQUFFLEVBQUU7WUFDWixNQUFNLEVBQUUsQ0FBQztZQUNULE1BQU0sRUFBRSxFQUFFO1NBQ1Y7UUFDRDtZQUNDLElBQUksRUFBRSxNQUFNO1lBQ1osU0FBUyxFQUFFLENBQUM7WUFDWixTQUFTLEVBQUUsQ0FBQztZQUNaLE9BQU8sRUFBRSxDQUFDO1lBQ1YsT0FBTyxFQUFFLEVBQUU7WUFDWCxTQUFTLEVBQUUsQ0FBQztZQUNaLFNBQVMsRUFBRSxFQUFFO1NBQ2I7UUFDRDtZQUNDLElBQUksRUFBRSxPQUFPO1lBQ2IsU0FBUyxFQUFFLENBQUM7WUFDWixTQUFTLEVBQUUsRUFBRTtZQUNiLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLFlBQVksRUFBRSx5QkFBeUI7U0FDdkM7UUFDRDtZQUNDLElBQUksRUFBRSxPQUFPO1lBQ2IsU0FBUyxFQUFFLEVBQUU7WUFDYixTQUFTLEVBQUUsRUFBRTtTQUNiO0tBQ0Q7Q0FDRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTGVuZ3RoKG1pbkxlbmd0aDogbnVtYmVyLCBtYXhMZW5ndGg6IG51bWJlcik6IEZ1bmN0aW9uIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChvYmo6IHsgbGVuZ3RoOiBudW1iZXIgfSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBvYmoubGVuZ3RoID49IG1pbkxlbmd0aCAmJiBvYmoubGVuZ3RoIDw9IG1heExlbmd0aDtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNaW5NYXgobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogRnVuY3Rpb24ge1xuXHRyZXR1cm4gZnVuY3Rpb24gKG9iajogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIG9iaiA+PSBtaW4gJiYgb2JqIDw9IG1heDtcblx0fVxufVxuXG5leHBvcnQgY29uc3QgY29uZmlnOiB7Y3N2OiBBcnJheTxhbnk+fSA9IHtcblx0Y3N2OiBbXG5cdFx0e1xuXHRcdFx0bmFtZTogJ25hbWUnLFxuXHRcdFx0bWluTGVuZ3RoOiAzLFxuXHRcdFx0bWF4TGVuZ3RoOiAxNSxcblx0XHRcdHJlZ0V4cDogJ1thLXpBLVpdJ1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ2FnZScsXG5cdFx0XHRtaW5MZW5ndGg6IDIsXG5cdFx0XHRtYXhMZW5ndGg6IDIsXG5cdFx0XHRtaW46IDE0LFxuXHRcdFx0bWF4OiA0NSxcblx0XHRcdHJlZ0V4cDogJ1swLTldJ1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ2RhdGUnLFxuXHRcdFx0bWluTGVuZ3RoOiA4LFxuXHRcdFx0bWF4TGVuZ3RoOiA4LFxuXHRcdFx0bWluWWVhcjogMjAxMixcblx0XHRcdG1heFllYXI6IChuZXcgRGF0ZSgpKS5nZXRGdWxsWWVhcigpLFxuXHRcdFx0bWluTW9udGg6IDEsXG5cdFx0XHRtYXhNb250aDogMTIsXG5cdFx0XHRtaW5EYXk6IDEsXG5cdFx0XHRtYXhEYXk6IDMxLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ3RpbWUnLFxuXHRcdFx0bWluTGVuZ3RoOiA0LFxuXHRcdFx0bWF4TGVuZ3RoOiA0LFxuXHRcdFx0bWluSG91cjogMCxcblx0XHRcdG1heEhvdXI6IDIzLFxuXHRcdFx0bWluTWludXRlOiAwLFxuXHRcdFx0bWF4TWludXRlOiA1OVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ2VtYWlsJyxcblx0XHRcdG1pbkxlbmd0aDogNyxcblx0XHRcdG1heExlbmd0aDogNDAsXG5cdFx0XHRyZWdFeHBOYW1lOiAnW2EtejAtOV0nLFxuXHRcdFx0cmVnRXhwRG9tYWluOiAnQFthLXpdezIsNX1cXC5bYS16XXsyLDR9J1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ3Bob25lJyxcblx0XHRcdG1pbkxlbmd0aDogMTMsXG5cdFx0XHRtYXhMZW5ndGg6IDEzXG5cdFx0fSxcblx0XVxufTsiXX0=