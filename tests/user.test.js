import { getFirstName, isValidPassword } from '../src/utils/user';

test('Should return first name when given full name', () => {
  const firstName = getFirstName('Tristan Southwell');

  expect(firstName).toBe('Tristan');
});

test('Should return first name when given a first name', () => {
  const firstName = getFirstName('Trit');

  expect(firstName).toBe('Trit');
});

test('Should reject password shorter than 8 characters', () => {
  const isValid = isValidPassword('abc123');
  expect(isValid).toBe(false);
});

test('Should reject password that contains password', () => {
  const isValid = isValidPassword('abdPassword098');

  expect(isValid).toBe(false);
});

test('Should correctly validate a valid password', () => {
  const isValid = isValidPassword('Test1234567');

  expect(isValid).toBe(true);
});
