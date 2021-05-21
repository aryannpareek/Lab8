# Lab8 Starter

Name: Aryan Pareek

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

A. Within a Github action that runs whenever code is pushed 

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No. You would have to test individual components of the messaging feature rather than the entire feature as a whole. Messaging acts on an application/feature level, so unit tests would not be feasible since there would be many interacting parts.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

Yes, since this is a smaller part of a feature which can be tested on its own without impacting the application as a whole. Since we know what the max message length is, it would be easy to implement and encapsulate in a single test.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

The tests will run, but there will be no browser UI such as Chromium. You can't see what is happening on the UI as you simulate your user activity.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500');
    await page.waitForTimeout(500);
    await page.click('header > img');
});

