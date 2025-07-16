function toggleUPIOptions() {
    var upiOptions = document.getElementById('upi-options');
    upiOptions.style.display = upiOptions.style.display === 'none' ? 'block' : 'none';
}
function togglePaymentOptions() {
    const paymentMethod = document.getElementById('payment').value;
    document.getElementById('upiOptions').style.display = paymentMethod === 'upi' ? 'block' : 'none';
    document.getElementById('cardDetails').style.display = paymentMethod === 'credit_debit' ? 'block' : 'none';
    document.getElementById('bankOptions').style.display = paymentMethod === 'net_banking' ? 'block' : 'none';
}
function bookRoom() {
    // Show alert message
    alert("Booking Is Sucessfull...Redirecting To The Home Page.... ");

    // Redirect to the homepage
    window.location.href = "../index.html"; // Replace "index.html" with your homepage URL
}