import * as fs from 'fs';
import * as csv from 'csv-parser';
import {CsvModel, Email, Phone, RegistrationDate, RegistrationTime} from './model';
import {checkLength, checkMinMax, config} from './config';
import {createConnection} from 'mysql';

/**
 * To run this file you need to run
 * 'npm install' and then run
 * 'ts-node main.ts' in your terminal
 */

const SEPARATOR: string = ',';
export const NEED_SAVE_DB: boolean = false;

export function validate(data: CsvModel): boolean {
    if (!data) {
        return false;
    }

    const errors: any = {};

    // name
    // @ts-ignore
    let validationObj = config.csv.find(obj => obj.name === 'name');
    errors.name = checkLength(validationObj.minLength, validationObj.maxLength)(data.name)
        && new RegExp(validationObj.regExp, 'g').test(data.name);

    // age
    // @ts-ignore
    validationObj = config.csv.find(obj => obj.name === 'age');
    errors.age = checkLength(validationObj.minLength, validationObj.maxLength)(data.age)
        && new RegExp(validationObj.regExp, 'g').test(data.age)
        && checkMinMax(validationObj.min, validationObj.max)(+data.age);

    // date
    // @ts-ignore
    validationObj = config.csv.find(obj => obj.name === 'date');
    const date = new RegistrationDate(data.date);
    errors.date = checkLength(validationObj.minLength, validationObj.maxLength)(date)
        && checkMinMax(validationObj.minYear, validationObj.maxYear)(date.year)
        && checkMinMax(validationObj.minMonth, validationObj.maxMonth)(date.month)
        && checkMinMax(validationObj.minDay, validationObj.maxDay)(date.day);

    // time
    // @ts-ignore
    validationObj = config.csv.find(obj => obj.name === 'time');
    const time = new RegistrationTime(data.time);
    errors.time = checkLength(validationObj.minLength, validationObj.maxLength)(time)
        && checkMinMax(validationObj.minHour, validationObj.maxHour)(time.hours)
        && checkMinMax(validationObj.minMinute, validationObj.maxMinute)(time.minutes);

    // email
    // @ts-ignore
    validationObj = config.csv.find(obj => obj.name === 'email');
    const email = new Email(data.email);
    errors.email = checkLength(validationObj.minLength, validationObj.maxLength)(email)
        && new RegExp(validationObj.regExpName, 'g').test(email.name)
        && new RegExp(validationObj.regExpDomain).test(email.domain);

    // phone
    // @ts-ignore
    validationObj = config.csv.find(obj => obj.name === 'phone');
    const phone = new Phone(data.phone);
    errors.phone = checkLength(validationObj.minLength, validationObj.maxLength)(phone);

    // return false is errors object has false in any property
    // console.log('-->', errors);
    return !Object.keys(errors).some(item => !errors[item])
}

const results: Array<CsvModel> = [];
const errors: Array<CsvModel> = [];

export function saveToDB(validObjects: Array<CsvModel>): void {
    if (!validObjects || !validObjects.length) {
        return;
    }

    const connection = createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'course_db'
    });

    connection.connect((err) => {
        if (err) throw err;
        console.log('CONNECTED TO DB:');


        validObjects.forEach((item, index) => {
            const sql = `INSERT INTO users (id, name, age, email, date, time, phone) VALUES (${+item.id}, \'${item.name}\', \'${item.age}\', \'${item.email}\', \'${item.date}\', \'${item.time}\', \'${item.phone}\')`;

            connection.query(sql, (err, result) => {
                if (err) throw err;
                console.log("1 record inserted");

                if (index === validObjects.length - 1) {
                    connection.end();
                }
            });


        });
    });
}

function makeCsvFile(array: Array<CsvModel>): void {
    if (array.length) {
        let writer = fs.createWriteStream('assets/invalid.csv');

        writer.write(Object.keys(array[0]).join(SEPARATOR) + '\n');
        array.forEach((item, index) => {
            let arr = [];

            for (let key in item) {
                arr.push(item[key]);
            }

            writer.write(arr.join(SEPARATOR) + '\n');
        });
    }
}

fs.createReadStream('assets/Users.csv')
    .pipe(csv({separator: SEPARATOR}))
    .on('data', (data: CsvModel) => {
        (validate(data) ? results : errors).push(data);
    })
    .on('end', () => {
        if (NEED_SAVE_DB) {
            saveToDB(results);
        }
        makeCsvFile(errors);
        console.log('res', results);
    });