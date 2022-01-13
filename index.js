var customerName = 'bob';
const leastFavoriteCustomer = 'carl';

function upperCaseCustomerName() {
   customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bob';
    return leastFavoriteCustomer;
}