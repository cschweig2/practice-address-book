// Business Logic for AddressBook -------------
function AddressBook () { 
  this.contacts = [];
  this.currentId = 0;
}

// prototype method pushing contact (below) to contacts (above)
AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

//can functionally work on it's own as is without relying on other information to work so far
AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
// this function will search for a specific contact
AddressBook.prototype.findContact = function(id) {
  for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
    if (this.contacts[i].id == id) {
      return this.contacts[i];
    }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
    if (this.contacts[i].id == id) {
      delete this.contacts[i];
      return true;
    }
    }
  };
  return false;
}
// Business Logic for Contacts -----------------
// This is a constructor
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

// prototype method concatinating first and last name
Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
}


// some fucntions just perform actions

// some fucntions return a value

// x = 5

// f(x)
//1000 (5) 

