/*

svg - scalable vector graphics

cricle 
radius 

path 

<button


<svg

//css 

svg circle 
svg>cricle

xpath//
xpath/


*/

import { test, expect } from '@playwright/test';

test('Locate and validate an SVG circle', async ({ page }) => {
  await page.goto(
    'https://www.w3schools.com/graphics/tryit.asp?filename=trysvg_myfirst'
  );

  // The SVG output is displayed inside the result iframe
  const resultFrame = page.frameLocator('#iframeResult');

  // Locate the main SVG container
  const svg = resultFrame.locator('svg');

//const svg = resultFrame.locator('//[local-name()="svg"]');

  // Locate the circle inside the SVG
  const circle = resultFrame.locator('svg circle');
  //const circle = resultFrame.locator('//[local-name()="svg"]//[local-name()="circle"]');

  // Validate that the SVG and circle are visible
  await expect(svg).toBeVisible();
  await expect(circle).toBeVisible();

  // Validate the circle attributes
  await expect(circle).toHaveAttribute('cx', '50');
  await expect(circle).toHaveAttribute('cy', '50');
  await expect(circle).toHaveAttribute('r', '40');
  await expect(circle).toHaveAttribute('stroke', 'green');
  await expect(circle).toHaveAttribute('stroke-width', '4');
  await expect(circle).toHaveAttribute('fill', 'yellow');

  console.log('SVG circle was located successfully');
});