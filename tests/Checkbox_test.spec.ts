import { expect, test } from '@playwright/test';

export const openwebsite = (page) => {
    const url = 'https://the-internet.herokuapp.com/checkboxes';
    return page.goto(url);
}

export const get_checkbox = (page, index) => {
    return page.locator(`xpath=//input[@type="checkbox"][${index}]`);
};

test('Checkbox 1 should not be checked initially', async({page}) =>{

    await openwebsite(page);

    const checkbox_1 = get_checkbox(page,1)
    await expect(checkbox_1).not.toBeChecked();
});

test('Checkbox 2 should be checked initially', async({page}) =>{

    await openwebsite(page);

    const checkbox_2 = get_checkbox(page,2)
    await expect(checkbox_2).toBeChecked();
});

test('Checkbox 1 add verify', async({page}) =>{

    await openwebsite(page);

    const checkbox_1 = get_checkbox(page,1)
    await checkbox_1.click();

});