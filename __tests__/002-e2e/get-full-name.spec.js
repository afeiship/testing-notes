const { getFullName } = require('@/src/002-integration-e2e/utils');

describe('e2e api test', () => {
  test('firstName & lastName are exist', () => {
    expect(getFullName('fei', 'zheng')).toBe('fei zheng');
  });

  test('firstName & lastName=null should return firstName LAST_NAME', () => {
    expect(getFullName('fei')).toBe('fei LAST_NAME');
  });

  test('firstName=null & lastName should return FIRST_NAME lastName', () => {
    expect(getFullName(null, 'zheng')).toBe('FIRST_NAME zheng');
  });

  test('firstName=null & lastName=null should return FIRST_NAME LAST_NAME', () => {
    expect(getFullName()).toBe('FIRST_NAME LAST_NAME');
  });
});
