/* 
   Contact management
*/

var Contact = {
  init: function(nom, prenom){
    this.nom = nom;
    this.prenom = prenom;
  },
  
  afficher: function() {
    return "Last name : "+this.nom+", name : "+this.prenom;
  }
}
var contact1 = Object.create(Contact);
contact1.init("Holly","David");
var contact2 = Object.create(Contact);
contact2.init("Nelson","Mary");
console.log(contact1.afficher());
console.log(contact2.afficher());

var tabContacts = [];
tabContacts.push(contact1);
tabContacts.push(contact2);

console.log('Welcome to the contact manager !');
var fin = 0;
while (!fin) {
  console.log('1 : List contacts');
  console.log('2 : Add a contact');
  console.log('0 : Quit');
  console.log("\n");
  var reponse = prompt('Choose an option :');
  switch (reponse) {
    case '1':
      console.log("Here is the list of all your contacts :");
      tabContacts.forEach(
        function(contact){
          console.log(contact.afficher());
        }
      )
      console.log("\n");
      break;
    case '2':
      var nomUser = prompt("Enter the last name of the new contact :");
      var prenomUser = prompt("Enter the first name of the new contact :");
      var contactUser = Object.create(Contact);
      contactUser.init(nomUser,prenomUser);
      tabContacts.push(contactUser);
      console.log("The new contact is added")
      break;
    case '0':
      console.log("Good bye ! ")
      fin = 1;
      break;
    default:
      console.log("!!! You must enter 1, 2 ou 0 !!!");
    break;  
  }
}

