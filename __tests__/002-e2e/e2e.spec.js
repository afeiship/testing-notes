describe('e2e test', () => {
  beforeAll(async () => {
    await page.goto('http://0.0.0.0:8080/');
  });

  test('should be titled "e2e-test"', async () => {
    await expect(page.title()).resolves.toMatch('e2e-test');
  });
});
