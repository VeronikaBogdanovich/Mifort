"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Email = /** @class */ (function () {
    function Email(obj) {
        if (obj) {
            var parts = obj.split('@');
            this.name = parts[0];
            this.domain = '@' + parts.slice(1).join('');
        }
        this.length = this.getLength();
    }
    Email.prototype.getLength = function () {
        var length = 0;
        if (this.name) {
            length += this.name.length;
        }
        if (this.domain) {
            length += this.domain.length;
        }
        return length;
    };
    return Email;
}());
exports.Email = Email;
var RegistrationDate = /** @class */ (function () {
    function RegistrationDate(obj) {
        if (obj) {
            /* Split this string into array of only numbers, for example:
            * '11-1999' will be splitted into this array:
            * ['11', '1999']
            */
            var parts = obj.split(/[^0-9]/);
            this.day = parts[0] && +parts[0];
            this.month = parts[1] && +parts[1];
            this.year = parts[2] && +parts[2];
        }
        this.length = this.getLength();
    }
    RegistrationDate.prototype.getLength = function () {
        var length = 0;
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
    };
    RegistrationDate.prototype.toNumber = function () {
        // get milliseconds
        return (new Date(this.year, this.month, this.day)).getTime();
    };
    return RegistrationDate;
}());
exports.RegistrationDate = RegistrationDate;
var RegistrationTime = /** @class */ (function () {
    function RegistrationTime(obj) {
        if (obj) {
            /* Split this string into array of only numbers, for example:
            * '12-35' will be splitted into this array:
            * ['12', '35']
            */
            var parts = obj.split(/[^0-9]/);
            this.hours = parts[0] && +parts[0];
            this.minutes = parts[1] && +parts[1];
        }
        this.length = this.getLength();
    }
    RegistrationTime.prototype.getLength = function () {
        var length = 0;
        if (this.hours != null && this.hours != undefined) {
            // since 2 == 02
            length += 2;
        }
        if (this.minutes != null && this.minutes != undefined) {
            // since 0 == 00
            length += 2;
        }
        return length;
    };
    RegistrationTime.prototype.toNumber = function () {
        // get milliseconds
        return this.hours * 60 + this.minutes;
    };
    return RegistrationTime;
}());
exports.RegistrationTime = RegistrationTime;
var Phone = /** @class */ (function () {
    function Phone(obj) {
        if (obj) {
            /* Split this string into array of only numbers and +, for example:
            * '+375a29-2774234' will be splitted into this array:
            * ['+375', '29', '2774234']
            */
            var parts = obj.split(/[^+0-9]/);
            // console.log('Phone parts -> ', parts);
            this.code1 = parts[0];
            this.code2 = parts[1] && +parts[1];
            // 'number' = all other indexes of 'parts':
            this.number = parts.slice(2).join('') && +parts.slice(2).join('');
        }
        this.length = this.getLength();
    }
    Phone.prototype.getLength = function () {
        var length = 0;
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
    };
    return Phone;
}());
exports.Phone = Phone;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3Zlcm9uaWthYm9nZGFub3ZpY2gvRG93bmxvYWRzL2Nzdi10by1kYi9tb2RlbC50cyIsInNvdXJjZXMiOlsiL1VzZXJzL3Zlcm9uaWthYm9nZGFub3ZpY2gvRG93bmxvYWRzL2Nzdi10by1kYi9tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVVBO0lBS0MsZUFBWSxHQUFZO1FBQ3ZCLElBQUcsR0FBRyxFQUFFO1lBQ1AsSUFBSSxLQUFLLEdBQWtCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFMUMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDNUM7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQseUJBQVMsR0FBVDtRQUNDLElBQUksTUFBTSxHQUFXLENBQUMsQ0FBQztRQUV2QixJQUFHLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDM0I7UUFDRCxJQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDN0I7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUM7SUFDRixZQUFDO0FBQUQsQ0FBQyxBQTVCRCxJQTRCQztBQTVCWSxzQkFBSztBQThCbEI7SUFNQywwQkFBWSxHQUFZO1FBQ3ZCLElBQUksR0FBRyxFQUFFO1lBQ1I7OztjQUdFO1lBQ0YsSUFBTSxLQUFLLEdBQWtCLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFakQsSUFBSSxDQUFDLEdBQUcs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R0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNsRCx5Q0FBeUM7WUFFekMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFbkMsMkNBQTJDO1lBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNsRTtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCx5QkFBUyxHQUFUO1FBQ0MsSUFBSSxNQUFNLEdBQVcsQ0FBQyxDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztTQUM1QjtRQUVELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQztTQUN2QztRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUM7U0FDeEM7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUM7SUFDRixZQUFDO0FBQUQsQ0FBQyxBQXpDRCxJQXlDQztBQXpDWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgQ3N2TW9kZWwge1xuXHRpZDogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG5cdGFnZTogc3RyaW5nO1xuXHRlbWFpbDogc3RyaW5nO1xuXHRkYXRlOiBzdHJpbmc7XG5cdHRpbWU6IHN0cmluZztcblx0cGhvbmU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEVtYWlsIHtcblx0bmFtZTogc3RyaW5nO1xuXHRkb21haW46IHN0cmluZztcblx0bGVuZ3RoOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3Iob2JqPzogc3RyaW5nKSB7XG5cdFx0aWYob2JqKSB7XG5cdFx0XHRsZXQgcGFydHM6IEFycmF5PHN0cmluZz4gPSBvYmouc3BsaXQoJ0AnKTtcblxuXHRcdFx0dGhpcy5uYW1lID0gcGFydHNbMF07XG5cdFx0XHR0aGlzLmRvbWFpbiA9ICdAJyArIHBhcnRzLnNsaWNlKDEpLmpvaW4oJycpO1xuXHRcdH1cblxuXHRcdHRoaXMubGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblx0fVxuXG5cdGdldExlbmd0aCgpOiBudW1iZXIge1xuXHRcdGxldCBsZW5ndGg6IG51bWJlciA9IDA7XG5cblx0XHRpZih0aGlzLm5hbWUpIHtcblx0XHRcdGxlbmd0aCArPSB0aGlzLm5hbWUubGVuZ3RoO1xuXHRcdH1cblx0XHRpZih0aGlzLmRvbWFpbikge1xuXHRcdFx0bGVuZ3RoICs9IHRoaXMuZG9tYWluLmxlbmd0aDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbGVuZ3RoO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWdpc3RyYXRpb25EYXRlIHtcblx0eWVhcjogbnVtYmVyO1xuXHRtb250aDogbnVtYmVyO1xuXHRkYXk6IG51bWJlcjtcblx0bGVuZ3RoOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3Iob2JqPzogc3RyaW5nKSB7XG5cdFx0aWYgKG9iaikge1xuXHRcdFx0LyogU3BsaXQgdGhpcyBzdHJpbmcgaW50byBhcnJheSBvZiBvbmx5IG51bWJlcnMsIGZvciBleGFtcGxlOlxuXHRcdFx0KiAnMTEtMTk5OScgd2lsbCBiZSBzcGxpdHRlZCBpbnRvIHRoaXMgYXJyYXk6XG5cdFx0XHQqIFsnMTEnLCAnMTk5OSddXG5cdFx0XHQqL1xuXHRcdFx0Y29uc3QgcGFydHM6IEFycmF5PHN0cmluZz4gPSBvYmouc3BsaXQoL1teMC05XS8pO1xuXG5cdFx0XHR0aGlzLmRheSA9IHBhcnRzWzBdICYmICtwYXJ0c1swXTtcblx0XHRcdHRoaXMubW9udGggPSBwYXJ0c1sxXSAmJiArcGFydHNbMV07XG5cdFx0XHR0aGlzLnllYXIgPSBwYXJ0c1syXSAmJiArcGFydHNbMl07XG5cdFx0fVxuXHRcdHRoaXMubGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblx0fVxuXG5cdGdldExlbmd0aCgpOiBudW1iZXIge1xuXHRcdGxldCBsZW5ndGg6IG51bWJlciA9IDA7XG5cblx0XHRpZiAodGhpcy55ZWFyICE9IG51bGwgJiYgdGhpcy55ZWFyICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0Ly8gMCBlcXVhbHMgMDAgYW5kIDIgZXF1YWxzIDAyXG5cdFx0XHRsZW5ndGggKz0gdGhpcy55ZWFyLnRvU3RyaW5nKCkubGVuZ3RoO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLm1vbnRoICE9IG51bGwgJiYgdGhpcy5tb250aCAhPSB1bmRlZmluZWQpIHtcblx0XHRcdC8vIDAgZXF1YWxzIDAwIGFuZCAyIGVxdWFscyAwMlxuXHRcdFx0bGVuZ3RoICs9IDI7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZGF5ICE9IG51bGwgJiYgdGhpcy5kYXkgIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRsZW5ndGggKz0gMjtcblx0XHR9XG5cblx0XHRyZXR1cm4gbGVuZ3RoO1xuXHR9XG5cblx0dG9OdW1iZXIoKTogbnVtYmVyIHtcblx0XHQvLyBnZXQgbWlsbGlzZWNvbmRzXG5cdFx0cmV0dXJuIChuZXcgRGF0ZSh0aGlzLnllYXIsIHRoaXMubW9udGgsIHRoaXMuZGF5KSkuZ2V0VGltZSgpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWdpc3RyYXRpb25UaW1lIHtcblx0aG91cnM6IG51bWJlcjtcblx0bWludXRlczogbnVtYmVyO1xuXHRsZW5ndGg6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3RvcihvYmo/OiBzdHJpbmcpIHtcblx0XHRpZiAob2JqKSB7XG5cdFx0XHQvKiBTcGxpdCB0aGlzIHN0cmluZyBpbnRvIGFycmF5IG9mIG9ubHkgbnVtYmVycywgZm9yIGV4YW1wbGU6XG5cdFx0XHQqICcxMi0zNScgd2lsbCBiZSBzcGxpdHRlZCBpbnRvIHRoaXMgYXJyYXk6XG5cdFx0XHQqIFsnMTInLCAnMzUnXVxuXHRcdFx0Ki9cblx0XHRcdGNvbnN0IHBhcnRzOiBBcnJheTxzdHJpbmc+ID0gb2JqLnNwbGl0KC9bXjAtOV0vKTtcblxuXHRcdFx0dGhpcy5ob3VycyA9IHBhcnRzWzBdICYmICtwYXJ0c1swXTtcblx0XHRcdHRoaXMubWludXRlcyA9IHBhcnRzWzFdICYmICtwYXJ0c1sxXTtcblx0XHR9XG5cdFx0dGhpcy5sZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXHR9XG5cblx0Z2V0TGVuZ3RoKCk6IG51bWJlciB7XG5cdFx0bGV0IGxlbmd0aDogbnVtYmVyID0gMDtcblxuXHRcdGlmICh0aGlzLmhvdXJzICE9IG51bGwgJiYgdGhpcy5ob3VycyAhPSB1bmRlZmluZWQpIHtcblx0XHRcdC8vIHNpbmNlIDIgPT0gMDJcblx0XHRcdGxlbmd0aCArPSAyO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLm1pbnV0ZXMgIT0gbnVsbCAmJiB0aGlzLm1pbnV0ZXMgIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHQvLyBzaW5jZSAwID09IDAwXG5cdFx0XHRsZW5ndGggKz0gMjtcblx0XHR9XG5cblx0XHRyZXR1cm4gbGVuZ3RoO1xuXHR9XG5cblx0dG9OdW1iZXIoKTogbnVtYmVyIHtcblx0XHQvLyBnZXQgbWlsbGlzZWNvbmRzXG5cdFx0cmV0dXJuIHRoaXMuaG91cnMgKiA2MCArIHRoaXMubWludXRlcztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUGhvbmUge1xuXHRjb2RlMTogc3RyaW5nO1xuXHRjb2RlMjogbnVtYmVyO1xuXHRudW1iZXI6IG51bWJlcjtcblx0bGVuZ3RoOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3Iob2JqPzogc3RyaW5nKSB7XG5cdFx0aWYgKG9iaikge1xuXHRcdFx0LyogU3BsaXQgdGhpcyBzdHJpbmcgaW50byBhcnJheSBvZiBvbmx5IG51bWJlcnMgYW5kICssIGZvciBleGFtcGxlOlxuXHRcdFx0KiAnKzM3NWEyOS0yNzc0MjM0JyB3aWxsIGJlIHNwbGl0dGVkIGludG8gdGhpcyBhcnJheTpcblx0XHRcdCogWycrMzc1JywgJzI5JywgJzI3NzQyMzQnXVxuXHRcdFx0Ki9cblx0XHRcdGNvbnN0IHBhcnRzOiBBcnJheTxzdHJpbmc+ID0gb2JqLnNwbGl0KC9bXiswLTldLyk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUGhvbmUgcGFydHMgLT4gJywgcGFydHMpO1xuXG5cdFx0XHR0aGlzLmNvZGUxID0gcGFydHNbMF07XG5cdFx0XHR0aGlzLmNvZGUyID0gcGFydHNbMV0gJiYgK3BhcnRzWzFdO1xuXG5cdFx0XHQvLyAnbnVtYmVyJyA9IGFsbCBvdGhlciBpbmRleGVzIG9mICdwYXJ0cyc6XG5cdFx0XHR0aGlzLm51bWJlciA9IHBhcnRzLnNsaWNlKDIpLmpvaW4oJycpICYmICtwYXJ0cy5zbGljZSgyKS5qb2luKCcnKTtcblx0XHR9XG5cdFx0dGhpcy5sZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXHR9XG5cblx0Z2V0TGVuZ3RoKCk6IG51bWJlciB7XG5cdFx0bGV0IGxlbmd0aDogbnVtYmVyID0gMDtcblxuXHRcdGlmICh0aGlzLmNvZGUxKSB7XG5cdFx0XHRsZW5ndGggKz0gdGhpcy5jb2RlMS5sZW5ndGg7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuY29kZTIpIHtcblx0XHRcdGxlbmd0aCArPSB0aGlzLmNvZGUyLnRvU3RyaW5nKCkubGVuZ3RoO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLm51bWJlcikge1xuXHRcdFx0bGVuZ3RoICs9IHRoaXMubnVtYmVyLnRvU3RyaW5nKCkubGVuZ3RoO1xuXHRcdH1cblxuXHRcdHJldHVybiBsZW5ndGg7XG5cdH1cbn0iXX0=