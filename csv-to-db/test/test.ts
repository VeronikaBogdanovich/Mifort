import {CsvModel, Email, Phone, RegistrationDate, RegistrationTime} from '../model';
import * as assert from 'assert';
import {saveToDB, validate} from '../main';
import {checkLength, checkMinMax} from '../config';
import {createConnection} from 'mysql';


describe('APP', () => {
    describe('Models', () => {
        describe('Email', () => {
            it('should be ok if email is empty string', () => {
                new Email('')
            });

            it('should be ok if obj is null', () => {
                new Email(null);
            });

            it('should be ok if obj is undefined', () => {
                new Email(undefined);
            });

            it('should be created if obj is @', () => {
                new Email('@');
            });

            it('should be created if obj is 1', () => {
                const object = new Email('1');
            });

            describe('length', () => {
                it('should return 8 when email is \'v@ni.com\'', () => {
                    const object = new Email('v@ni.com');

                    assert.strictEqual(object.length, 8);
                });

                it('should return 0 when email is empty string', () => {
                    const object = new Email('');

                    assert.strictEqual(object.length, 0);
                });
            });

        });

        describe('Phone', () => {
            it('should be ok if email is empty string', () => {
                new Phone('')
            });

            it('should be ok if obj is null', () => {
                new Phone(null);
            });

            it('should be ok if obj is undefined', () => {
                new Phone(undefined);
            });

            it('should be created if obj is @', () => {
                new Phone('@');
            });

            it('should be created if obj is 1', () => {
                const object = new Phone('1');
            });

            describe('length', () => {
                it('should return 8 when Phone is \'+375-29-1111111\'', () => {
                    const object = new Phone('+375-29-1111111');

                    assert.strictEqual(object.length, 13);
                });

                it('should return 0 when Phone is empty string', () => {
                    const object = new Phone('');

                    assert.strictEqual(object.length, 0);
                });
            });

        });

        describe('RegistrationDate', () => {
            it('should be ok if email is empty string', () => {
                new RegistrationDate('')
            });

            it('should be ok if obj is null', () => {
                new RegistrationDate(null);
            });

            it('should be ok if obj is undefined', () => {
                new RegistrationDate(undefined);
            });

            it('should be created if obj is @', () => {
                new RegistrationDate('@');
            });

            it('should be created if obj is 1', () => {
                const object = new RegistrationDate('1');
            });

            describe('length', () => {
                it('should return 8 when RegistrationDate is \'12-12-2017\'', () => {
                    const object = new RegistrationDate('12-12-2017');

                    assert.strictEqual(object.length, 8);
                });

                it('should return 0 when RegistrationDate is empty string', () => {
                    const object = new RegistrationDate('');

                    assert.strictEqual(object.length, 0);
                });
            });

        });

        describe('RegistrationTime', () => {
            it('should be ok if email is empty string', () => {
                new RegistrationTime('')
            });

            it('should be ok if obj is null', () => {
                new RegistrationTime(null);
            });

            it('should be ok if obj is undefined', () => {
                new RegistrationTime(undefined);
            });

            it('should be created if obj is @', () => {
                new RegistrationTime('@');
            });

            it('should be created if obj is 1', () => {
                const object = new RegistrationTime('1');
            });

            describe('length', () => {
                it('should return 8 when RegistrationTime is \'12/48\'', () => {
                    const object = new RegistrationTime('12/48');

                    assert.strictEqual(object.length, 4);
                });

                it('should return 0 when RegistrationTime is empty string', () => {
                    const object = new RegistrationTime('');

                    assert.strictEqual(object.length, 0);
                });
            });

        });
    });

    describe('Main', () => {
        describe('Validate function', () => {
            it('should return false is data is null', () => {
                assert.strictEqual(validate(null), false);
            });

            it('should return true if data is valid', () => {
                const data: CsvModel = {
                    id: '1',
                    name: 'Veronika',
                    date: '12-11-2017',
                    time: '12-14',
                    age: '19',
                    email: 'v@mail.ru',
                    phone: '+375-29-1111111'
                };

                assert.strictEqual(validate(data), true);
            });
        });

        describe('saveToDB', () => {
            it('should return if value is []', () => {
                saveToDB([]);
            });

            it('should create value in db if value is ok', (done) => {
                const data: CsvModel = {
                    id: '1',
                    name: 'Veronika',
                    date: '12-11-2017',
                    time: '12-14',
                    age: '19',
                    email: 'v@mail.ru',
                    phone: '+375-29-1111111'
                };

                saveToDB([data]);

                // we use setTimeout method because of the time we need to
                // wait until data will be saved to db
                setTimeout(() => {
                    const connection = createConnection({
                        host: 'localhost',
                        user: 'root',
                        password: '',
                        database: 'course_db'
                    });

                    connection.connect((err) => {
                        if (err) throw err;
                        const sql = `SELECT * FROM users WHERE id=${data.id}`;
                        connection.query(sql, (err, result: Array<any>) => {
                            if (err) throw err;

                            assert.strictEqual(result.length, 1);
                            assert.strictEqual(result[0].id.toString(), data.id.toString());
                            done();
                        });
                    })

                }, 1500)
            });
        })
    });

    describe('Config', () => {
        describe('checkLength', () => {
            it('should return true if value is \'abc\' and min and max = 2 3', () => {
                assert.strictEqual(checkLength(2, 3)('abc'), true);
            });

            it('should return true if value is \'abc\' and min and max = 3 3', () => {
                assert.strictEqual(checkLength(3, 3)('abc'), true);
            });

            it('should return false if value is \'abc\' and min and max = 2 2', () => {
                assert.strictEqual(checkLength(2, 2)('abc'), false);
            });
        });

        describe('checkMinMax', () => {
            it('should return true if value is 5 and min and max = 1 6', () => {
                assert.strictEqual(checkMinMax(1, 6)(5), true);
            });

            it('should return true if value is 5 and min and max = 1 5', () => {
                assert.strictEqual(checkMinMax(1, 5)(5), true);
            });

            it('should return true if value is 5 and min and max = 5 5', () => {
                assert.strictEqual(checkMinMax(5, 5)(5), true);
            });

            it('should return true if value is 5 and min and max = 5 6', () => {
                assert.strictEqual(checkMinMax(5, 6)(5), true);
            });

            it('should return true if value is 5 and min and max = 2 3', () => {
                assert.strictEqual(checkLength(2, 3)(5), false);
            });
        });
    });
});