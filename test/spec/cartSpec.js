describe('Add item to the cart', () => {
    it('Taps add to cart on the first item', async () => {
        await $('~store-item-button-01').click();
        const cartBadgeValue = await $('~Cart').getValue();
        expect(cartBadgeValue).toHaveText('1 item');
    })
})