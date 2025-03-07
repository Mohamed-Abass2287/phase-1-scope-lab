// Declare a variable in global scope called customerName and assign it the value 'bob'
var customerName = 'bob';

function getCustomerName() {
  return customerName;
}
// Function to access and uppercase the global variable customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to declare a variable called bestCustomer in global scope and assign it to 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob'; // Declares a global variable (not recommended but done here intentionally)
}

// Function to overwrite the global variable bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant called leastFavoriteCustomer in global scope
const leastFavoriteCustomer = 'initial value';

// Function to attempt changing the constant leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value'; // This will throw an error since constants cannot be reassigned
}
