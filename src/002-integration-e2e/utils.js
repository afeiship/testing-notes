function getFullName(inFirstName, inLastName) {
  var firstName = inFirstName || 'FIRST_NAME';
  var lastName = inLastName || 'LAST_NAME';
  return firstName + ' ' + lastName;
}

module.exports = {
  getFullName
};
