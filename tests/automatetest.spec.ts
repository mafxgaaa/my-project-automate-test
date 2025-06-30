import { expect, test } from '@playwright/test';

function add_Button(page) {
  return page.getByRole('button' , {name:"Add Element"});
}
function delete_Button(page) {
  return page.locator('.added-manually');
}

// group basic_test
test.describe('basic_test', () => {

  test('Login , Add to cart', async({page}) =>{

    const url_website = 'https://www.saucedemo.com/';
    const title_website = 'Swag Labs';

    await page.goto(url_website);
    
    await expect(page).toHaveTitle(title_website);

    await page
      .getByPlaceholder('Username')
      .fill('standard_user');
    
    await page
      .locator('.form_input[placeholder="Password"]')
      .fill("secret_sauce");

    await page
      .getByRole('button', { name:"login" }).click();

    await expect(page.getByText('Swag Labs')).toBeVisible();

    await expect(page.locator('.title')).toHaveText("Products");

    await page
      .locator('button[data-test^="add-to-cart"]').first().click();

    await page
      .locator('xpath=//a[@data-test="shopping-cart-link"]').click();

    await expect(page.locator('.cart_item')).toHaveCount(1);

  });


  // group basic_test
  test.describe('workshop 2', () => {

    const url_website = 'https://the-internet.herokuapp.com/add_remove_elements/';
    test('Add 3 Elements , expect Delect 3 Element', async({page}) => {

  
      await page.goto(url_website);

      const addButton = add_Button(page)
      await addButton.click();
      await addButton.click();
      await addButton.click();

      await expect(page.locator('.added-manually')).toHaveCount(3);
    });

    test('test' , async({page}) => {

      await page.goto(url_website);

      const addButton = add_Button(page)
      await addButton.click();
      await addButton.click();
      
      const deleteButton = delete_Button(page)
      await deleteButton.first().click();

      await expect(deleteButton).toHaveCount(1)
    });
  });

});  


