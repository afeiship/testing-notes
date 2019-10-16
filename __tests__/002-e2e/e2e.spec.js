describe('e2e test', () => {
  beforeAll(async () => {
    await page.goto('http://0.0.0.0:8080/');
  });

  test('should be titled "e2e-test"', async () => {
    console.log(page.click);
    await expect(page.title()).resolves.toMatch('e2e-test');
    await page.click('input[name="firstName"]');
    await page.keyboard.type('fei');
    await page.click('input[name="lastName"]');
    await page.keyboard.type('zheng');
    await page.click('#btn-submit');

    const res = await page.evaluate(() =>{
      var el = document.querySelector('#result');
      var str = el.innerHTML;
      return str;
    });

    expect(res).toBe('fei zheng');
  });
});
