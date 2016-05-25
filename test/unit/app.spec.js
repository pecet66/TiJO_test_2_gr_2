describe('app', function ()
{
    'use strict';

    var answers = window.app;

    describe('returnOnlyLetter', function () {
        it('should return only letter', function () {
            expect(answers.returnOnlyLetter('a4l1f5a')).toBe('alfa');
            expect(answers.returnOnlyLetter('a1b2bc3')).toBe('abbc');

        });
        it('should return empty string', function () {
            expect(answers.returnOnlyLetter('45345')).toBe('');
            expect(answers.returnOnlyLetter('12345')).toBe('');

        });
        it('number should return false', function () {
            expect(answers.returnOnlyLetter(45345)).toEqual(false);
            expect(answers.returnOnlyLetter(123)).toEqual(false);

        });
    });

    describe('alphabetOrder', function () {
        it('should return letters in alphabetical order', function () {
            expect(answers.alphabetOrder('alfa')).toBe('aafl');
            expect(answers.alphabetOrder('cba')).toBe('abc');

        });
        it('should return lower case letters in alphabetical order', function () {
            expect(answers.alphabetOrder('AlfA')).toBe('aafl');
            expect(answers.alphabetOrder('CBA')).toBe('cba');

        });
        it('should return only letters in alphabetical order', function () {
            expect(answers.alphabetOrder('A1l2f3a')).toBe('aafl');
            expect(answers.alphabetOrder('a1b2c3')).toBe('abc');
        });
     });
});

