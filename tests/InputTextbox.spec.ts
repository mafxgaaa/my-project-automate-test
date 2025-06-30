import { expect, test } from '@playwright/test';

export const openwebsite = (page) => {
    const url = 'https://the-internet.herokuapp.com/inputs';
    return page.goto(url);
}

export const get_input_number = (page) => {
    return page.locator(`xpath=//input[@type="number"]`);
};


test('Input accepts number 123', async({page}) =>{
    await openwebsite(page);

    const input_number = get_input_number(page)
    
    await input_number.fill('123');

    await expect(input_number).toHaveValue("123");
});


test('Input accepts negative number -99', async({page}) =>{
    await openwebsite(page);

    const input_number = get_input_number(page)
    
    await input_number.fill('-99');

    await expect(input_number).toHaveValue("-99");
});

test('ArrowUp increases the number', async({page}) =>{
    await openwebsite(page);

    const input_number = get_input_number(page)
    
    await input_number.fill('10');
    await input_number.press("ArrowUp");
});

test('ArrowDown decreases the number', async({page}) =>{
    await openwebsite(page);

    const input_number = get_input_number(page)
    
    await input_number.fill('10');
    await input_number.press("ArrowDown");
});