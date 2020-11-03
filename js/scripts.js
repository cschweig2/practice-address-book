// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = [];
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

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

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.email = email;
  this.addresses = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Contact.prototype.addAddress = function(add) {
  this.addresses.push(add);
}

// Business Logic for Addresses ----------
function Address(homeAddress, workAddress) {
  this.homeAddress = homeAddress;
  this.workAddress = workAddress;
}


// User Interface Logic ---------
let addressBook = new AddressBook();

function displayContactDetails(addressBookToDisplay) {
  let contactsList = $("ul#contacts");
  let htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
};

function showContact(contactId) {
  const contact = addressBook.findContact(contactId);
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber);
  $(".email").html(contact.email);
  $(".input-home-address").html(contact.addresses[0].homeAddress);
  $(".input-work-address").html(contact.addresses[0].workAddress);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + contact.id + ">Delete</button>");
}

function attachContactListeners() {
  $("ul#contacts").on("click", "li", function() {
    showContact(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    addressBook.deleteContact(this.id);
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  });
};

$(document).ready(function() {
  attachContactListeners();
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    const inputtedFirstName = $("input#new-first-name").val();
    const inputtedLastName = $("input#new-last-name").val();
    const inputtedPhoneNumber = $("input#new-phone-number").val();
    const inputtedEmail = $("input#email").val();
    const inputtedHomeAddress = $("input#homeAddress").val();
    const inputtedWorkAddress = $("input#workAddress").val();
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");
    $("input#email").val("");
    $("input#homeAddress").val("");
    $("input#workAddress").val("");
    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmail);
    let address = new Address(inputtedHomeAddress, inputtedWorkAddress);
    console.log(address);
    newContact.addAddress(address)
    addressBook.addContact(newContact);
    displayContactDetails(addressBook);
    console.log(addressBook);
  })
})



/*working code below 

function AddressBook() {
  this.contacts = [];
}

AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
}

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.addresses = [];
}

Contact.prototype.addAddress = function(address1) {
  this.addresses.push(address1);
}

function Address(home, work) {
    this.home = home;
    this.work = work; 
}

let add = new Address("will","work");
let addressBook = new AddressBook();
let contact = new Contact("Ada", "Lovelace", "503-555-0100");
let contact2 = new Contact("Grace", "Hopper", "503-555-0199");
contact.addAddress(add);
contact2.addAddress(add); 
addressBook.addContact(contact);
addressBook.addContact(contact2);
addressBook; 

*/

/* more functioning code 

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    let add = new Address($("input#homeAddress").val(),$("input#workAddress").val());
    let addressBook = new AddressBook();
    let contact = new Contact("Ada", "Lovelace", "503-555-0100");
    let contact2 = new Contact("Grace", "Hopper", "503-555-0199");
    contact.addAddress(add);
    contact2.addAddress(add); 
    addressBook.addContact(contact);
    addressBook.addContact(contact2);
    console.log(addressBook);

*/