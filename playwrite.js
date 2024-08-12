const { chromium } = require("playwright");

// You base webiste url
const WEBISTE_URL = 'https://your-website-domain.com';

(async () => {
  // Open the browser
  const browser = await chromium.launch({ headless: false, devtools: true }); // Set headless: true for headless mode
  // const browser = await chromium.launch({ });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Go to the website
  await page.goto(WEBISTE_URL);

  // Take a screenshot after the page loads
  await page.screenshot({ path: "pre-session.png" });

  // Make an HTTPS POST call from the browser
  await page.evaluate(async () => {
    try {
      // complete session cookie api url e.g. https://mt8w1c2pk6.execute-api.us-east-1.amazonaws.com/beta/token-to-session
      const SESSION_COOKIE_API_URL = 'https://your-website-domain.com/api/session-cookies';
      const ACCESS_TOKEN = 'ACCESS_TOKEN';

      const response = await fetch(SESSION_COOKIE_API_URL, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accessToken: ACCESS_TOKEN,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  });

  // Wait for 3 seconds
  await page.waitForTimeout(3000);

  // reload page
  await page.reload();

  // Wait for 3 seconds
  await page.waitForTimeout(5000);

  // Take another screenshot
  await page.screenshot({ path: "post-session.png" });

  // Close the browser
  await browser.close();
})();
