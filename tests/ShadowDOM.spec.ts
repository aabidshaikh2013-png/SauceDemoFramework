
// playwright can handle shadow dom elements like normal elements, no need of any extra thing like selenium

import {expect,test} from '@playwright/test'

test('Working with Shadow DOM', async ({page})=>{

    await page.goto('https://practice.expandtesting.com/shadowdom',{waitUntil:'domcontentloaded'});

    //locators
    let shadowDOM = page.locator('#my-btn').last();

    //assertions
    await expect(shadowDOM).toBeVisible()

    //actions
    await shadowDOM.click();
    let text = await shadowDOM.innerText();
    console.log(text);

})


test('Handle multiple Shadow DOM components', async ({ page }) => {
  await page.setContent(`
    <product-card
      product-name="Laptop"
      product-price="$1000">
    </product-card>

    <product-card
      product-name="Mobile"
      product-price="$500">
    </product-card>

    <product-card
      product-name="Headphones"
      product-price="$100">
    </product-card>

    <script>
      class ProductCard extends HTMLElement {
        constructor() {
          super();

          const shadow = this.attachShadow({ mode: 'open' });

          const productName = this.getAttribute('product-name');
          const productPrice = this.getAttribute('product-price');

          shadow.innerHTML = \`
            <article class="product">
              <h2>\${productName}</h2>
              <p class="price">\${productPrice}</p>
              <button>Add to cart</button>
              <p class="status"></p>
            </article>
          \`;

          shadow.querySelector('button').addEventListener('click', () => {
            shadow.querySelector('.status').textContent =
              productName + ' added';
          });
        }
      }

      customElements.define('product-card', ProductCard);
    </script>
  `);



//////////////////////////////////////////////////////////////////


//   const productCards = page.locator('product-card');

//   await expect(productCards).toHaveCount(3);

//   // Select the component containing "Mobile".
//   const mobileCard = productCards.filter({
//     hasText: 'Mobile'
//   });

//   await expect(mobileCard.locator('h2')).toHaveText('Mobile');
//   await expect(mobileCard.locator('.price')).toHaveText('$500');

//   await mobileCard.getByRole('button', {
//     name: 'Add to cart'
//   }).click();

//   await expect(mobileCard.locator('.status')).toHaveText(
//     'Mobile added'
//   );


await page.locator('.product').filter({hasText:'Mobile'}).getByText('Add to cart').click()

});