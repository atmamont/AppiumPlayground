const {remote} = require('webdriverio');

const capabilities = {
  'platformName': 'iOS',
  'appium:automationName': 'xcuitest',
  'appium:deviceName': 'iPhone 15',
  'appium:appPackage': 'com.adyen.mystore',
};

const wdOpts = {
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
};

async function runTest() {
  const driver = await remote(wdOpts);
  try {
    // const batteryItem = await driver.$('//*[@text="Add to cart"]');
    const batteryItem = await driver.$('~store-item-button-01');
    await batteryItem.click();
  } finally {
    await driver.pause(1000);
    await driver.deleteSession();
  }
}

runTest().catch(console.error);