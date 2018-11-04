"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
var assert = require("assert");
var main_1 = require("../main");
var config_1 = require("../config");
describe('APP', function () {
    describe('Models', function () {
        describe('Email', function () {
            it('should be ok if email is empty string', function () {
                new model_1.Email('');
            });
            it('should be ok if obj is null', function () {
                new model_1.Email(null);
            });
            it('should be ok if obj is undefined', function () {
                new model_1.Email(undefined);
            });
            it('should be created if obj is @', function () {
                new model_1.Email('@');
            });
            it('should be created if obj is 1', function () {
                var object = new model_1.Email('1');
            });
            describe('length', function () {
                it('should return 8 when email is \'v@ni.com\'', function () {
                    var object = new model_1.Email('v@ni.com');
                    assert.strictEqual(object.length, 8);
                });
                it('should return 0 when email is empty string', function () {
                    var object = new model_1.Email('');
                    assert.strictEqual(object.length, 0);
                });
            });
        });
        describe('Phone', function () {
            it('should be ok if email is empty string', function () {
                new model_1.Phone('');
            });
            it('should be ok if obj is null', function () {
                new model_1.Phone(null);
            });
            it('should be ok if obj is undefined', function () {
                new model_1.Phone(undefined);
            });
            it('should be created if obj is @', function () {
                new model_1.Phone('@');
            });
            it('should be created if obj is 1', function () {
                var object = new model_1.Phone('1');
            });
            describe('length', function () {
                it('should return 8 when Phone is \'+375-29-1111111\'', function () {
                    var object = new model_1.Phone('+375-29-1111111');
                    assert.strictEqual(object.length, 13);
                });
                it('should return 0 when Phone is empty string', function () {
                    var object = new model_1.Phone('');
                    assert.strictEqual(object.length, 0);
                });
            });
        });
        describe('RegistrationDate', function () {
            it('should be ok if email is empty string', function () {
                new model_1.RegistrationDate('');
            });
            it('should be ok if obj is null', function () {
                new model_1.RegistrationDate(null);
            });
            it('should be ok if obj is undefined', function () {
                new model_1.RegistrationDate(undefined);
            });
            it('should be created if obj is @', function () {
                new model_1.RegistrationDate('@');
            });
            it('should be created if obj is 1', function () {
                var object = new model_1.RegistrationDate('1');
            });
            describe('length', function () {
                it('should return 8 when RegistrationDate is \'12-12-2017\'', function () {
                    var object = new model_1.RegistrationDate('12-12-2017');
                    assert.strictEqual(object.length, 8);
                });
                it('should return 0 when RegistrationDate is empty string', function () {
                    var object = new model_1.RegistrationDate('');
                    assert.strictEqual(object.length, 0);
                });
            });
        });
        describe('RegistrationTime', function () {
            it('should be ok if email is empty string', function () {
                new model_1.RegistrationTime('');
            });
            it('should be ok if obj is null', function () {
                new model_1.RegistrationTime(null);
            });
            it('should be ok if obj is undefined', function () {
                new model_1.RegistrationTime(undefined);
            });
            it('should be created if obj is @', function () {
                new model_1.RegistrationTime('@');
            });
            it('should be created if obj is 1', function () {
                var object = new model_1.RegistrationTime('1');
            });
            describe('length', function () {
                it('should return 8 when RegistrationTime is \'12/48\'', function () {
                    var object = new model_1.RegistrationTime('12/48');
                    assert.strictEqual(object.length, 4);
                });
                it('should return 0 when RegistrationTime is empty string', function () {
                    var object = new model_1.RegistrationTime('');
                    assert.strictEqual(object.length, 0);
                });
            });
        });
    });
    describe('Main', function () {
        describe('Validate function', function () {
            it('should return false is data is null', function () {
                assert.strictEqual(main_1.validate(null), false);
            });
            it('should return true if data is valid', function () {
                var data = {
                    id: '1',
                    name: 'Veronika',
                    date: '12-11-2017',
                    time: '12-14',
                    age: '19',
                    email: 'v@mail.ru',
                    phone: '+375-29-1111111'
                };
                assert.strictEqual(main_1.validate(data), true);
            });
        });
    });
    describe('Config', function () {
        describe('checkLength', function () {
            it('should return true if value is \'abc\' and min and max = 2 3', function () {
                assert.strictEqual(config_1.checkLength(2, 3)('abc'), true);
            });
            it('should return true if value is \'abc\' and min and max = 3 3', function () {
                assert.strictEqual(config_1.checkLength(3, 3)('abc'), true);
            });
            it('should return false if value is \'abc\' and min and max = 2 2', function () {
                assert.strictEqual(config_1.checkLength(2, 2)('abc'), false);
            });
        });
        describe('checkMinMax', function () {
            it('should return true if value is 5 and min and max = 1 6', function () {
                assert.strictEqual(config_1.checkMinMax(1, 6)(5), true);
            });
            it('should return true if value is 5 and min and max = 1 5', function () {
                assert.strictEqual(config_1.checkMinMax(1, 5)(5), true);
            });
            it('should return true if value is 5 and min and max = 5 5', function () {
                assert.strictEqual(config_1.checkMinMax(5, 5)(5), true);
            });
            it('should return true if value is 5 and min and max = 5 6', function () {
                assert.strictEqual(config_1.checkMinMax(5, 6)(5), true);
            });
            it('should return true if value is 5 and min and max = 2 3', function () {
                assert.strictEqual(config_1.checkLength(2, 3)(5), false);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3Zlcm9uaWthYm9nZGFub3ZpY2gvRG93bmxvYWRzL2Nzdi10by1kYi90ZXN0L3Rlc3QudHMiLCJzb3VyY2VzIjpbIi9Vc2Vycy92ZXJvbmlrYWJvZ2Rhbm92aWNoL0Rvd25sb2Fkcy9jc3YtdG8tZGIvdGVzdC90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0NBQW9GO0FBQ3BGLCtCQUFpQztBQUNqQyxnQ0FBaUM7QUFDakMsb0NBQW1EO0FBRW5ELFFBQVEsQ0FBQyxLQUFLLEVBQUU7SUFDZixRQUFRLENBQUMsUUFBUSxFQUFFO1FBQ2xCLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDakIsRUFBRSxDQUFDLHVDQUF1QyxFQUFFO2dCQUMzQyxJQUFJLGFBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUNkLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLDZCQUE2QixFQUFFO2dCQUNqQyxJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQixDQUFDLENBQUMsQ0FBQztZQUVILEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRTtnQkFDdEMsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsK0JBQStCLEVBQUU7Z0JBQ25DLElBQUksYUFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLCtCQUErQixFQUFFO2dCQUNuQyxJQUFNLE1BQU0sR0FBRyxJQUFJLGFBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztZQUVILFFBQVEsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLEVBQUUsQ0FBQyw0Q0FBNEMsRUFBRTtvQkFDaEQsSUFBTSxNQUFNLEdBQUcsSUFBSSxhQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBRXJDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdEMsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsRUFBRSxDQUFDLDRDQUE0QyxFQUFFO29CQUNoRCxJQUFNLE1BQU0sR0FBRyxJQUFJLGFBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFFN0IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUosQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ2pCLEVBQUUsQ0FBQyx1Q0FBdUMsRUFBRTtnQkFDM0MsSUFBSSxhQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDZCxDQUFDLENBQUMsQ0FBQztZQUVILEVBQUUsQ0FBQyw2QkFBNkIsRUFBRTtnQkFDakMsSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsa0NBQWtDLEVBQUU7Z0JBQ3RDLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLCtCQUErQixFQUFFO2dCQUNuQyxJQUFJLGFBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQztZQUVILEVBQUUsQ0FBQywrQkFBK0IsRUFBRTtnQkFDbkMsSUFBTSxNQUFNLEdBQUcsSUFBSSxhQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7WUFFSCxRQUFRLENBQUMsUUFBUSxFQUFFO2dCQUNsQixFQUFFLENBQUMsbURBQW1ELEVBQUU7b0JBQ3ZELElBQU0sTUFBTSxHQUFHLElBQUksYUFBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBRTVDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDdkMsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsRUFBRSxDQUFDLDRDQUE0QyxFQUFFO29CQUNoRCxJQUFNLE1BQU0sR0FBRyxJQUFJLGFBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFFN0IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUosQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsa0JBQWtCLEVBQUU7WUFDNUIsRUFBRSxDQUFDLHVDQUF1QyxFQUFFO2dCQUMzQyxJQUFJLHdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLDZCQUE2QixFQUFFO2dCQUNqQyxJQUFJLHdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLGtDQUFrQyxFQUFFO2dCQUN0QyxJQUFJLHdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLCtCQUErQixFQUFFO2dCQUNuQyxJQUFJLHdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLCtCQUErQixFQUFFO2dCQUNuQyxJQUFNLE1BQU0sR0FBRyxJQUFJLHdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1lBRUgsUUFBUSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsRUFBRSxDQUFDLHlEQUF5RCxFQUFFO29CQUM3RCxJQUFNLE1BQU0sR0FBRyxJQUFJLHdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUVsRCxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLENBQUMsQ0FBQyxDQUFDO2dCQUVILEVBQUUsQ0FBQyx1REFBdUQsRUFBRTtvQkFDM0QsSUFBTSxNQUFNLEdBQUcsSUFBSSx3QkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFFeEMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUosQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsa0JBQWtCLEVBQUU7WUFDNUIsRUFBRSxDQUFDLHVDQUF1QyxFQUFFO2dCQUMzQyxJQUFJLHdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLDZCQUE2QixFQUFFO2dCQUNqQyxJQUFJLHdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLGtDQUFrQyxFQUFFO2dCQUN0QyxJQUFJLHdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLCtCQUErQixFQUFFO2dCQUNuQyxJQUFJLHdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLCtCQUErQixFQUFFO2dCQUNuQyxJQUFNLE1BQU0sR0FBRyxJQUFJLHdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1lBRUgsUUFBUSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsRUFBRSxDQUFDLG9EQUFvRCxFQUFFO29CQUN4RCxJQUFNLE1BQU0sR0FBRyxJQUFJLHdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUU3QyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLENBQUMsQ0FBQyxDQUFDO2dCQUVILEVBQUUsQ0FBQyx1REFBdUQsRUFBRTtvQkFDM0QsSUFBTSxNQUFNLEdBQUcsSUFBSSx3QkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFFeEMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUosQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxNQUFNLEVBQUU7UUFDaEIsUUFBUSxDQUFDLG1CQUFtQixFQUFFO1lBQzdCLEVBQUUsQ0FBQyxxQ0FBcUMsRUFBRTtnQkFDekMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDM0MsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMscUNBQXFDLEVBQUU7Z0JBQ3pDLElBQU0sSUFBSSxHQUFhO29CQUN0QixFQUFFLEVBQUUsR0FBRztvQkFDUCxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsSUFBSSxFQUFFLFlBQVk7b0JBQ2xCLElBQUksRUFBRSxPQUFPO29CQUNiLEdBQUcsRUFBRSxJQUFJO29CQUNULEtBQUssRUFBRSxXQUFXO29CQUNsQixLQUFLLEVBQUUsaUJBQWlCO2lCQUN4QixDQUFDO2dCQUVGLE1BQU0sQ0FBQyxXQUFXLENBQUMsZUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxRQUFRLEVBQUU7UUFDbEIsUUFBUSxDQUFDLGFBQWEsRUFBRTtZQUN2QixFQUFFLENBQUMsOERBQThELEVBQUU7Z0JBQ2xFLE1BQU0sQ0FBQyxXQUFXLENBQUMsb0JBQVcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkQsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsOERBQThELEVBQUU7Z0JBQ2xFLE1BQU0sQ0FBQyxXQUFXLENBQUMsb0JBQVcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkQsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsK0RBQStELEVBQUU7Z0JBQ25FLE1BQU0sQ0FBQyxXQUFXLENBQUMsb0JBQVcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDcEQsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxhQUFhLEVBQUU7WUFDdkIsRUFBRSxDQUFDLHdEQUF3RCxFQUFFO2dCQUM1RCxNQUFNLENBQUMsV0FBVyxDQUFDLG9CQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQy9DLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLHdEQUF3RCxFQUFFO2dCQUM1RCxNQUFNLENBQUMsV0FBVyxDQUFDLG9CQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQy9DLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLHdEQUF3RCxFQUFFO2dCQUM1RCxNQUFNLENBQUMsV0FBVyxDQUFDLG9CQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQy9DLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLHdEQUF3RCxFQUFFO2dCQUM1RCxNQUFNLENBQUMsV0FBVyxDQUFDLG9CQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQy9DLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLHdEQUF3RCxFQUFFO2dCQUM1RCxNQUFNLENBQUMsV0FBVyxDQUFDLG9CQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2hELENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDc3ZNb2RlbCwgRW1haWwsIFBob25lLCBSZWdpc3RyYXRpb25EYXRlLCBSZWdpc3RyYXRpb25UaW1lfSBmcm9tICcuLi9tb2RlbCc7XG5pbXBvcnQgKiBhcyBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcbmltcG9ydCB7dmFsaWRhdGV9IGZyb20gJy4uL21haW4nO1xuaW1wb3J0IHtjaGVja0xlbmd0aCwgY2hlY2tNaW5NYXh9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmRlc2NyaWJlKCdBUFAnLCAoKSA9PiB7XG5cdGRlc2NyaWJlKCdNb2RlbHMnLCAoKSA9PiB7XG5cdFx0ZGVzY3JpYmUoJ0VtYWlsJywgKCkgPT4ge1xuXHRcdFx0aXQoJ3Nob3VsZCBiZSBvayBpZiBlbWFpbCBpcyBlbXB0eSBzdHJpbmcnLCAoKSA9PiB7XG5cdFx0XHRcdG5ldyBFbWFpbCgnJylcblx0XHRcdH0pO1xuXG5cdFx0XHRpdCgnc2hvdWxkIGJlIG9rIGlmIG9iaiBpcyBudWxsJywgKCkgPT4ge1xuXHRcdFx0XHRuZXcgRW1haWwobnVsbCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aXQoJ3Nob3VsZCBiZSBvayBpZiBvYmogaXMgdW5kZWZpbmVkJywgKCkgPT4ge1xuXHRcdFx0XHRuZXcgRW1haWwodW5kZWZpbmVkKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpdCgnc2hvdWxkIGJlIGNyZWF0ZWQgaWYgb2JqIGlzIEAnLCAoKSA9PiB7XG5cdFx0XHRcdG5ldyBFbWFpbCgnQCcpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGl0KCdzaG91bGQgYmUgY3JlYXRlZCBpZiBvYmogaXMgMScsICgpID0+IHtcblx0XHRcdFx0Y29uc3Qgb2JqZWN0ID0gbmV3IEVtYWlsKCcxJyk7XG5cdFx0XHR9KTtcblxuXHRcdFx0ZGVzY3JpYmUoJ2xlbmd0aCcsICgpID0+IHtcblx0XHRcdFx0aXQoJ3Nob3VsZCByZXR1cm4gOCB3aGVuIGVtYWlsIGlzIFxcJ3ZAbmkuY29tXFwnJywgKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IG9iamVjdCA9IG5ldyBFbWFpbCgndkBuaS5jb20nKTtcblxuXHRcdFx0XHRcdGFzc2VydC5zdHJpY3RFcXVhbChvYmplY3QubGVuZ3RoLCA4KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aXQoJ3Nob3VsZCByZXR1cm4gMCB3aGVuIGVtYWlsIGlzIGVtcHR5IHN0cmluZycsICgpID0+IHtcblx0XHRcdFx0XHRjb25zdCBvYmplY3QgPSBuZXcgRW1haWwoJycpO1xuXG5cdFx0XHRcdFx0YXNzZXJ0LnN0cmljdEVxdWFsKG9iamVjdC5sZW5ndGgsIDApO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG5cdFx0fSk7XG5cblx0XHRkZXNjcmliZSgnUGhvbmUnLCAoKSA9PiB7XG5cdFx0XHRpdCgnc2hvdWxkIGJlIG9rIGlmIGVtYWlsIGlzIGVtcHR5IHN0cmluZycsICgpID0+IHtcblx0XHRcdFx0bmV3IFBob25lKCcnKVxuXHRcdFx0fSk7XG5cblx0XHRcdGl0KCdzaG91bGQgYmUgb2sgaWYgb2JqIGlzIG51bGwnLCAoKSA9PiB7XG5cdFx0XHRcdG5ldyBQaG9uZShudWxsKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpdCgnc2hvdWxkIGJlIG9rIGlmIG9iaiBpcyB1bmRlZmluZWQnLCAoKSA9PiB7XG5cdFx0XHRcdG5ldyBQaG9uZSh1bmRlZmluZWQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGl0KCdzaG91bGQgYmUgY3JlYXRlZCBpZiBvYmogaXMgQCcsICgpID0+IHtcblx0XHRcdFx0bmV3IFBob25lKCdAJyk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aXQoJ3Nob3VsZCBiZSBjcmVhdGVkIGlmIG9iaiBpcyAxJywgKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBvYmplY3QgPSBuZXcgUGhvbmUoJzEnKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRkZXNjcmliZSgnbGVuZ3RoJywgKCkgPT4ge1xuXHRcdFx0XHRpdCgnc2hvdWxkIHJldHVybiA4IHdoZW4gUGhvbmUgaXMgXFwnKzM3NS0yOS0xMTExMTExXFwnJywgKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IG9iamVjdCA9IG5ldyBQaG9uZSgnKzM3NS0yOS0xMTExMTExJyk7XG5cblx0XHRcdFx0XHRhc3NlcnQuc3RyaWN0RXF1YWwob2JqZWN0Lmxlbmd0aCwgMTMpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpdCgnc2hvdWxkIHJldHVybiAwIHdoZW4gUGhvbmUgaXMgZW1wdHkgc3RyaW5nJywgKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IG9iamVjdCA9IG5ldyBQaG9uZSgnJyk7XG5cblx0XHRcdFx0XHRhc3NlcnQuc3RyaWN0RXF1YWwob2JqZWN0Lmxlbmd0aCwgMCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHR9KTtcblxuXHRcdGRlc2NyaWJlKCdSZWdpc3RyYXRpb25EYXRlJywgKCkgPT4ge1xuXHRcdFx0aXQoJ3Nob3VsZCBiZSBvayBpZiBlbWFpbCBpcyBlbXB0eSBzdHJpbmcnLCAoKSA9PiB7XG5cdFx0XHRcdG5ldyBSZWdpc3RyYXRpb25EYXRlKCcnKVxuXHRcdFx0fSk7XG5cblx0XHRcdGl0KCdzaG91bGQgYmUgb2sgaWYgb2JqIGlzIG51bGwnLCAoKSA9PiB7XG5cdFx0XHRcdG5ldyBSZWdpc3RyYXRpb25EYXRlKG51bGwpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGl0KCdzaG91bGQgYmUgb2sgaWYgb2JqIGlzIHVuZGVmaW5lZCcsICgpID0+IHtcblx0XHRcdFx0bmV3IFJlZ2lzdHJhdGlvbkRhdGUodW5kZWZpbmVkKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpdCgnc2hvdWxkIGJlIGNyZWF0ZWQgaWYgb2JqIGlzIEAnLCAoKSA9PiB7XG5cdFx0XHRcdG5ldyBSZWdpc3RyYXRpb25EYXRlKCdAJyk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aXQoJ3Nob3VsZCBiZSBjcmVhdGVkIGlmIG9iaiBpcyAxJywgKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBvYmplY3QgPSBuZXcgUmVnaXN0cmF0aW9uRGF0ZSgnMScpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGRlc2NyaWJlKCdsZW5ndGgnLCAoKSA9PiB7XG5cdFx0XHRcdGl0KCdzaG91bGQgcmV0dXJuIDggd2hlbiBSZWdpc3RyYXRpb25EYXRlIGlzIFxcJzEyLTEyLTIwMTdcXCcnLCAoKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qgb2JqZWN0ID0gbmV3IFJlZ2lzdHJhdGlvbkRhdGUoJzEyLTEyLTIwMTcnKTtcblxuXHRcdFx0XHRcdGFzc2VydC5zdHJpY3RFcXVhbChvYmplY3QubGVuZ3RoLCA4KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aXQoJ3Nob3VsZCByZXR1cm4gMCB3aGVuIFJlZ2lzdHJhdGlvbkRhdGUgaXMgZW1wdHkgc3RyaW5nJywgKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IG9iamVjdCA9IG5ldyBSZWdpc3RyYXRpb25EYXRlKCcnKTtcblxuXHRcdFx0XHRcdGFzc2VydC5zdHJpY3RFcXVhbChvYmplY3QubGVuZ3RoLCAwKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdH0pO1xuXG5cdFx0ZGVzY3JpYmUoJ1JlZ2lzdHJhdGlvblRpbWUnLCAoKSA9PiB7XG5cdFx0XHRpdCgnc2hvdWxkIGJlIG9rIGlmIGVtYWlsIGlzIGVtcHR5IHN0cmluZycsICgpID0+IHtcblx0XHRcdFx0bmV3IFJlZ2lzdHJhdGlvblRpbWUoJycpXG5cdFx0XHR9KTtcblxuXHRcdFx0aXQoJ3Nob3VsZCBiZSBvayBpZiBvYmogaXMgbnVsbCcsICgpID0+IHtcblx0XHRcdFx0bmV3IFJlZ2lzdHJhdGlvblRpbWUobnVsbCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aXQoJ3Nob3VsZCBiZSBvayBpZiBvYmogaXMgdW5kZWZpbmVkJywgKCkgPT4ge1xuXHRcdFx0XHRuZXcgUmVnaXN0cmF0aW9uVGltZSh1bmRlZmluZWQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGl0KCdzaG91bGQgYmUgY3JlYXRlZCBpZiBvYmogaXMgQCcsICgpID0+IHtcblx0XHRcdFx0bmV3IFJlZ2lzdHJhdGlvblRpbWUoJ0AnKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpdCgnc2hvdWxkIGJlIGNyZWF0ZWQgaWYgb2JqIGlzIDEnLCAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IG9iamVjdCA9IG5ldyBSZWdpc3RyYXRpb25UaW1lKCcxJyk7XG5cdFx0XHR9KTtcblxuXHRcdFx0ZGVzY3JpYmUoJ2xlbmd0aCcsICgpID0+IHtcblx0XHRcdFx0aXQoJ3Nob3VsZCByZXR1cm4gOCB3aGVuIFJlZ2lzdHJhdGlvblRpbWUgaXMgXFwnMTIvNDhcXCcnLCAoKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qgb2JqZWN0ID0gbmV3IFJlZ2lzdHJhdGlvblRpbWUoJzEyLzQ4Jyk7XG5cblx0XHRcdFx0XHRhc3NlcnQuc3RyaWN0RXF1YWwob2JqZWN0Lmxlbmd0aCwgNCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGl0KCdzaG91bGQgcmV0dXJuIDAgd2hlbiBSZWdpc3RyYXRpb25UaW1lIGlzIGVtcHR5IHN0cmluZycsICgpID0+IHtcblx0XHRcdFx0XHRjb25zdCBvYmplY3QgPSBuZXcgUmVnaXN0cmF0aW9uVGltZSgnJyk7XG5cblx0XHRcdFx0XHRhc3NlcnQuc3RyaWN0RXF1YWwob2JqZWN0Lmxlbmd0aCwgMCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHR9KTtcblx0fSk7XG5cblx0ZGVzY3JpYmUoJ01haW4nLCAoKSA9PiB7XG5cdFx0ZGVzY3JpYmUoJ1ZhbGlkYXRlIGZ1bmN0aW9uJywgKCkgPT4ge1xuXHRcdFx0aXQoJ3Nob3VsZCByZXR1cm4gZmFsc2UgaXMgZGF0YSBpcyBudWxsJywgKCkgPT4ge1xuXHRcdFx0XHRhc3NlcnQuc3RyaWN0RXF1YWwodmFsaWRhdGUobnVsbCksIGZhbHNlKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpdCgnc2hvdWxkIHJldHVybiB0cnVlIGlmIGRhdGEgaXMgdmFsaWQnLCAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGRhdGE6IENzdk1vZGVsID0ge1xuXHRcdFx0XHRcdGlkOiAnMScsXG5cdFx0XHRcdFx0bmFtZTogJ1Zlcm9uaWthJyxcblx0XHRcdFx0XHRkYXRlOiAnMTItMTEtMjAxNycsXG5cdFx0XHRcdFx0dGltZTogJzEyLTE0Jyxcblx0XHRcdFx0XHRhZ2U6ICcxOScsXG5cdFx0XHRcdFx0ZW1haWw6ICd2QG1haWwucnUnLFxuXHRcdFx0XHRcdHBob25lOiAnKzM3NS0yOS0xMTExMTExJ1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdGFzc2VydC5zdHJpY3RFcXVhbCh2YWxpZGF0ZShkYXRhKSwgdHJ1ZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSk7XG5cblx0ZGVzY3JpYmUoJ0NvbmZpZycsICgpID0+IHtcblx0XHRkZXNjcmliZSgnY2hlY2tMZW5ndGgnLCAoKSA9PiB7XG5cdFx0XHRpdCgnc2hvdWxkIHJldHVybiB0cnVlIGlmIHZhbHVlIGlzIFxcJ2FiY1xcJyBhbmQgbWluIGFuZCBtYXggPSAyIDMnLCAoKSA9PiB7XG5cdFx0XHRcdGFzc2VydC5zdHJpY3RFcXVhbChjaGVja0xlbmd0aCgyLDMpKCdhYmMnKSwgdHJ1ZSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aXQoJ3Nob3VsZCByZXR1cm4gdHJ1ZSBpZiB2YWx1ZSBpcyBcXCdhYmNcXCcgYW5kIG1pbiBhbmQgbWF4ID0gMyAzJywgKCkgPT4ge1xuXHRcdFx0XHRhc3NlcnQuc3RyaWN0RXF1YWwoY2hlY2tMZW5ndGgoMywzKSgnYWJjJyksIHRydWUpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGl0KCdzaG91bGQgcmV0dXJuIGZhbHNlIGlmIHZhbHVlIGlzIFxcJ2FiY1xcJyBhbmQgbWluIGFuZCBtYXggPSAyIDInLCAoKSA9PiB7XG5cdFx0XHRcdGFzc2VydC5zdHJpY3RFcXVhbChjaGVja0xlbmd0aCgyLDIpKCdhYmMnKSwgZmFsc2UpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRkZXNjcmliZSgnY2hlY2tNaW5NYXgnLCAoKSA9PiB7XG5cdFx0XHRpdCgnc2hvdWxkIHJldHVybiB0cnVlIGlmIHZhbHVlIGlzIDUgYW5kIG1pbiBhbmQgbWF4ID0gMSA2JywgKCkgPT4ge1xuXHRcdFx0XHRhc3NlcnQuc3RyaWN0RXF1YWwoY2hlY2tNaW5NYXgoMSw2KSg1KSwgdHJ1ZSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aXQoJ3Nob3VsZCByZXR1cm4gdHJ1ZSBpZiB2YWx1ZSBpcyA1IGFuZCBtaW4gYW5kIG1heCA9IDEgNScsICgpID0+IHtcblx0XHRcdFx0YXNzZXJ0LnN0cmljdEVxdWFsKGNoZWNrTWluTWF4KDEsNSkoNSksIHRydWUpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGl0KCdzaG91bGQgcmV0dXJuIHRydWUgaWYgdmFsdWUgaXMgNSBhbmQgbWluIGFuZCBtYXggPSA1IDUnLCAoKSA9PiB7XG5cdFx0XHRcdGFzc2VydC5zdHJpY3RFcXVhbChjaGVja01pbk1heCg1LDUpKDUpLCB0cnVlKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpdCgnc2hvdWxkIHJldHVybiB0cnVlIGlmIHZhbHVlIGlzIDUgYW5kIG1pbiBhbmQgbWF4ID0gNSA2JywgKCkgPT4ge1xuXHRcdFx0XHRhc3NlcnQuc3RyaWN0RXF1YWwoY2hlY2tNaW5NYXgoNSw2KSg1KSwgdHJ1ZSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aXQoJ3Nob3VsZCByZXR1cm4gdHJ1ZSBpZiB2YWx1ZSBpcyA1IGFuZCBtaW4gYW5kIG1heCA9IDIgMycsICgpID0+IHtcblx0XHRcdFx0YXNzZXJ0LnN0cmljdEVxdWFsKGNoZWNrTGVuZ3RoKDIsMykoNSksIGZhbHNlKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9KTtcbn0pOyJdfQ==