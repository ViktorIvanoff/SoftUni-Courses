// const { test, expect } = require('@playwright/test');   // CommonJS
import { test, expect } from "@playwright/test"; // ES6 Syntax
const url = "http://localhost:3000";

// testing navigation for GUEST users
test('Verify that "All Books" link is visible', async ({ page }) => {
  // go to home page
  await page.goto(url);
  await page.waitForSelector("nav.navbar");
  const allBooksLink = await page.$('a[href="/catalog"]');
  const isLinkVisible = await allBooksLink.isVisible();

  expect(isLinkVisible).toBe(true);
});

test('Verify That the "Login" Button Is Visible', async ({ page }) => {
  await page.goto(url);
  await page.waitForSelector("nav.navbar");

  const loginButton = await page.$('a[href="/login"]');
  const isLoginBtnVisible = await loginButton.isVisible();

  expect(isLoginBtnVisible).toBe(true);
});

test('Verify That the "Register" Button Is Visible', async ({ page }) => {
  await page.goto(url);
  await page.waitForSelector("nav.navbar");

  const loginButton = await page.$('a[href="/register"]');
  const isLoginBtnVisible = await loginButton.isVisible();

  expect(isLoginBtnVisible).toBe(true);
});

// testing navigation for LOGGED IN users
test('Verify that "All Books" link is visible after user log in', async ({
  page,
}) => {
  await page.goto(`${url}/login`);

  await page.fill("#email", "peter@abv.bg");
  await page.fill("#password", "123456");
  await page.click('input[value="Login"]');

  const allBooksLink = await page.$('a[href="/catalog"]');
  const isLinkVisible = await allBooksLink.isVisible();
  expect(isLinkVisible).toBe(true);
});

test('Verify that "My Books" link is visible after user log in', async ({
  page,
}) => {
  await page.goto(`${url}/login`);

  await page.fill("#email", "peter@abv.bg");
  await page.fill("#password", "123456");
  await page.click('input[value="Login"]');

  const allBooksLink = await page.$('a[href="/catalog"]');
  const isLinkVisible = await allBooksLink.isVisible();
  expect(isLinkVisible).toBe(true);
});

test('Verify That the "Add Book" Link Is Visible after user log in', async ({
  page,
}) => {
  await page.goto(`${url}/login`);

  await page.fill("#email", "peter@abv.bg");
  await page.fill("#password", "123456");
  await page.click('input[value="Login"]');

  const allBooksLink = await page.$('a[href="/catalog"]');
  const isLinkVisible = await allBooksLink.isVisible();

  expect(isLinkVisible).toBe(true);
});

// TESTING THE LOGIN PAGE

test("Login with valid credentials", async ({ page }) => {
  await page.goto(`${url}/login`);

  await page.fill("#email", "peter@abv.bg");
  await page.fill("#password", "123456");
  await page.click('input[value="Login"]');

  await page.$('a[href="/catalog"]');
  const pageURL = page.url();
  expect(pageURL).toBe(`${url}/catalog`);
});

test("Submit the Form with Empty Input Fields", async ({ page }) => {
  await page.goto(`${url}/login`);
  await page.click('input[value="Login"]');

  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toBe(alert);
    expect(dialog.message()).toContain("All fields are required!");
    await dialog.accept();
  });

  await page.$('a[href="/login"]');
  expect(page.url()).toBe(`${url}/login`);
});

// REGISTER PAGE

test("Submit the Form with valid values", async ({ page }) => {
  await page.goto(`${url}/register`);
  const regButton = page.getByRole("button", { name: "Register" });
  await regButton.click();

  await page.fill("#email", "lo6iq@abv.bg");
  await page.fill("#password", "abvabv");
  await page.fill("#repeat-pass", "abvabv");
  await page.click('input[value="Register"]');

  await page.$('a[href="/register"]');
  const pageURL = page.url();
  expect(pageURL).toBe(`${url}/register`);
});

test("Submit the Register Form with Empty Input Fields", async ({ page }) => {
  await page.goto(`${url}/register`);
  const regButton = page.getByRole("button", { name: "Register" });
  await regButton.click();

  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toBe(alert);
    expect(dialog.message()).toContain("All fields are required!");
    await dialog.accept();
  });

  await page.$('a[href="/register"]');
  expect(page.url()).toBe(`${url}/register`);
});

// ADD BOOK PAGE

test("Submit the Form with Correct Data", async ({ page }) => {
  // log in
  await page.goto(`${url}/login`);

  await page.fill("#email", "peter@abv.bg");
  await page.fill("#password", "123456");

  // wait for page to login and display all books catalog
  await Promise.all([
    page.click('input[type="submit"]'),
    page.waitForURL(`${url}/catalog`),
  ]);

  // click on Add book
  await page.click('a[href="/create"]');

  // wait for Add Book Form to load
  await page.waitForSelector("#create-form");

  // start filling up data
  await page.fill("#title", "Kur");
  await page.fill("#description", "Kura mi yanko");
  await page.fill("#image", "https://share.google/images/kiJtQcEP3na0gZjUw");
  await page.selectOption("#type", "Fiction");

  // click on Add book btn
  await page.click('input[value="Add Book"]');

  // verify that Im on Catalog
  await page.$('a[href="/catalog"]');
  const pageURL = page.url();
  expect(pageURL).toBe(`${url}/catalog`);
});

// Submit the Form with Empty Title Field

test("Add book with empty title field", async ({ page }) => {
  // log in
  await page.goto(`${url}/login`);

  await page.fill("#email", "peter@abv.bg");
  await page.fill("#password", "123456");

  // wait for page to login and display all books catalog
  await Promise.all([
    page.click('input[type="submit"]'),
    page.waitForURL(`${url}/catalog`),
  ]);

  // click on Add book
  await page.click('a[href="/create"]');

  // wait for Add Book Form to load
  await page.waitForSelector("#create-form");

  // start filling up data without title
  await page.fill("#description", "Kura mi yanko");
  await page.fill("#image", "https://share.google/images/kiJtQcEP3na0gZjUw");
  await page.selectOption("#type", "Fiction");

  // click on Add book btn
  await page.click('input[value="Add Book"]');

  // verify that an alert pops up
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toBe(alert);
    expect(dialog.message()).toContain("All fields are required!");
    await dialog.accept();
  });

  await page.$('a[href="/create"]');
  expect(page.url()).toBe(`${url}/create`);
});

// ALL BOOKS PAGE

test("Verify That All Books Are Displayed", async ({ page }) => {
  // log in
  await page.goto(`${url}/login`);

  await page.fill("#email", "peter@abv.bg");
  await page.fill("#password", "123456");

  // wait for page to login and display all books catalog
  await Promise.all([
    page.click('input[type="submit"]'),
    page.waitForURL(`${url}/catalog`),
  ]);

  // verify that All books section is present
  await page.waitForSelector(".dashboard");

  // take the ul with the books
  const books = await page.$$(".other-books-list li");

  //expect ul list NOT to be empty
  expect(books.length).toBeGreaterThan(0);
});

// DETAILS PAGE
test("Login and navigate to Details page", async ({ page }) => {
  // log in
  await page.goto(`${url}/login`);

  await page.fill("#email", "john@abv.bg");
  await page.fill("#password", "123456");

  // wait for page to login and display all books catalog
  await Promise.all([
    page.click('input[type="submit"]'),
    page.waitForURL(`${url}/catalog`),
  ]);

  //click on Details btn
  await page.click('a[href="/catalog"]');
  // wait for page to load
  await page.waitForSelector(".otherBooks");

  await page.click('a[href="/details/a9ba699b-0d45-4d63-95b8-13030de04bf4"]');

  await page.waitForSelector(".book-information");

  const detailsPageTitle = await page.textContent(".book-information h3");
  expect(detailsPageTitle).toBe("Kur");
});

// LOGOUT PAGE

test('Verify That the "Logout" Button Is Visible', async ({ page }) => {
  await page.goto(`${url}/login`);

  await page.fill("#email", "peter@abv.bg");
  await page.fill("#password", "123456");

  await Promise.all([
    page.click('input[type="submit"]'),
    page.waitForURL(`${url}/catalog`),
  ]);

  const logoutLink = await page.$('a[href="javascript:void(0)"]');
  const isLogoutVisible = await logoutLink.isVisible();

  expect(isLogoutVisible).toBe(true);
});

test('Verify That the "Logout" redirects correctly', async ({ page }) => {
  await page.goto(`${url}/login`);

  await page.fill("#email", "peter@abv.bg");
  await page.fill("#password", "123456");
  await page.click('input[type="submit"]');

  const logoutLink = await page.$('a[href="javascript:void(0)"]');
  await logoutLink.click();

  const redirectedURL = page.url();
  expect(redirectedURL).toBe(`${url}/catalog`);
});
