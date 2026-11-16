
const productPrice = 50000;

const calculateCheckout = (price) => (quantity) => (discount) => {

    const subtotal = price * quantity;
    const discountAmount = subtotal * discount / 100;
    const discountedPrice = subtotal - discountAmount;
    const total = discountedPrice;

    return {
        subtotal,
        discountAmount,
        total
    };
};

const quantity = document.querySelector("#quantity");
const discount = document.querySelector("#discount");

const subtotal = document.getElementById("subtotal");
const discountAmount = document.getElementById("discountAmount");
const total = document.getElementById("total");

const updateCheckout = () => {
    const qty = Number(quantity.value);
    const disc = Number(discount.value);

    const result = calculateCheckout(productPrice)(qty)(disc);
    subtotal.textContent = result.subtotal.toFixed(2);
    discountAmount.textContent = result.discountAmount.toFixed(2);
    total.textContent = result.total.toFixed(2);

};

quantity.addEventListener("input", updateCheckout);
discount.addEventListener("input", updateCheckout);

updateCheckout();
