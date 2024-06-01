document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.getElementById('subscriptionMessage').style.display = 'block';
    document.getElementById('subscriptionForm').reset();
});
