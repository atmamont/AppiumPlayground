const assert = require('assert');

describe('Start checkout flow', async () => {
    it('Taps add to cart on the first item', async () => {
        await $('~store-item-button-01').click();
    });

    it('Updates cart tab item badge value', async () => {
        const cartBadgeValue = await $('~Cart').getValue();
        assert.equal(cartBadgeValue, '1 item');
    });

    it('Switches to the "Cart" tab', async () => {
        await $('~Cart').click();
    });

    it('Opens Checkout Dropin', async () => {
        const dropinTitle = "Payment Methods";
        await $('~Continue to Checkout').click();
        assert.strictEqual(await $('~Payment Methods').getText(), dropinTitle);
    });
})