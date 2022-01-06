console.log("<------------------Welcome to the Address Book System------------------>");

class Contact {

    constructor(...parameters) {
        this.firstName = parameters[0];
        this.lastName = parameters[1];
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        this.zip = parameters[5];
        this.phoneNumber = parameters[6];
        this.email = parameters[7];
    }

    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        const FIRST_NAME_REGEX = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (FIRST_NAME_REGEX.test(firstName)) {
            this._firstName = firstName;
        }
        else throw "First Name : " + firstName + " is Invalid!";

    }

    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        const LAST_NAME_REGEX = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (LAST_NAME_REGEX.test(lastName)) {
            this._lastName = lastName;
        }
        else throw "Last Name : " + lastName + " is Invalid!";

    }

    get address() {
        return this._address;
    }
    set address(address) {
        const ADRESS_REGEX = RegExp("[A-Za-z0-9- ]{4,}");
        if (ADRESS_REGEX.test(address)) {
            this._address = address;
        }
        else throw "Address : " + address + " is Invalid!";
    }

    get city() {
        return this._city;
    }
    set city(city) {
        const CITY_REGEX = RegExp("[A-Za-z ]{4,}");
        if (CITY_REGEX.test(city)) {
            this._city = city;
        }
        else throw "City : " + city + " is Invalid!";
    }

    get state() {
        return this._state;
    }
    set state(state) {
        const STATE_REGEX = RegExp("[A-Za-z ]{4,}");
        if (STATE_REGEX.test(state)) {
            this._state = state;
        }
        else throw "State : " + state + " is Invalid!";
    }

    get zip() {
        return this._zip;
    }
    set zip(zip) {
        const ZIP_REGEX = RegExp("^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$");
        if (ZIP_REGEX.test(zip)) {
            this._zip = zip;
        }
        else throw "Zip : " + zip + " is Invalid!";
    }

    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        const PHONE_NUMBER_REGEX = RegExp("^[1-9]{1}[0-9]{9}$");
        if (PHONE_NUMBER_REGEX.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        }
        else throw "Phone Number : " + phoneNumber + " is Invalid!";
    }

    get email() {
        return this._email;
    }
    set email(email) {
        const EMAIL_REGEX = RegExp("^[a-z0-9]+(([\\._+-][a-z0-9]+)?)\\@[a-z0-9]+\\.(([a-z]{2,4})(\\.[a-z]{2,4})?)$");
        if (EMAIL_REGEX.test(email)) {
            this._email = email;
        }
        else throw "Email : " + email + " is Invalid!";
    }

    toString() {
        return "First Name: " + this.firstName + " | Last Name: " + this.lastName + " | Address: "
            + this.address + " | City: " + this.city + " | State: " + this.state + " | Zip: " + this.zip +
            " | Phone Number: " + this.phoneNumber + " | Email: " + this.email + "\n";
    }
}

//UC1 : Creating New Contact Object
let contact = new Contact("Bhuvana", "Chandra", "3/118 new bus stand", "Betamcherla", "Andhra Pradesh", 518599, 9391173347, "abc@gmail.com");
console.log(contact.toString());
console.log("********************************************************************************************************************\n\n")


//UC2 : Checking For Invalid Fields
{
    try {
    contact.firstName = "Tinku";
    } catch (error) {
        console.error(error);
    }
    try {
        contact.lastName = "1234";
    } catch (error) {
        console.error(error);
    }
    try {
        contact.address = "New Bus Stand";
    } catch (error) {
        console.error(error);
    }
    try {
        contact.city = "Kurnool";
    } catch (error) {
        console.error(error);
    }
    try {
        contact.state = "Andhra Pradesh";
    } catch (error) {
        console.error(error);
    }
    try {
        contact.zip = "518599";
    } catch (error) {
        console.error(error);
    }
    try {
        contact.phoneNumber = 9391173347;
    } catch (error) {
        console.error(error);
    }
    try {
        contact.email = "abc@gmail.com";
    } catch (error) {
        console.error(error);
    }
    console.log("\nContact After Setting Invalid Fields : \n" + contact.toString());
}
console.log("********************************************************************************************************************\n\n")


//UC3 : Create an Address Book Array and Add New Contacts to it.
let addressBookArray = new Array();
let contact1=new Contact("Guru","Prasad","Satram",'Kurnool','Andhra Pradesh','518500',"8886329322",'gnanak@gmail.com');
addressBookArray.push(contact1)
let contact2=new Contact("Murali","Mohan","Old Bus Stand",'Kadapa','Andhra Pradesh','502501',"6302656987",'muralimohan@gmail.com');
addressBookArray.push(contact2)
let contact3=new Contact("Pavan","Cena","NR pet",'Bangalore','Karnataka','540800',"7382871075",'pavancena@gmail.com');
addressBookArray.push(contact3)
let contact4=new Contact("Lokesh","John","jubilee Hills",'Hyderabad','Telangana','500301',"9876543210",'lokeshjohn@gmail.com');
addressBookArray.push(contact4)
console.log("ADDRESS BOOK ARRAY :");
addressBookArray.forEach(contact => console.log(contact.toString()));
console.log("********************************************************************************************************************\n\n")


//UC4 : Find and Edit Existing Contact using their Name
let findName = "Guru"
contact2 = addressBookArray.find(contact => contact._firstName == findName)
if(contact2 != undefined) {
    contact2.phoneNumber = 9898565653
    contact2.address = "NGO Colony"
    contact2.email = "reddy@gmail.com"
} else {
    console.log(`${findName} not found`)
}
console.log("After editing existing contact : ")
console.log(addressBookArray)
console.log("********************************************************************************************************************\n\n")


//UC5: Find and Delete contact from address book
{
    let findName = "Murali"
    let index = addressBookArray.findIndex(contact => contact._firstName === findName)
    if (index != -1) {
        addressBookArray.splice(index, 1)
    } else {
        console.log(`${findName} not found`)
    }
    console.log("After deleting contact from address book : ")
    console.log(addressBookArray)
}
console.log("********************************************************************************************************************\n\n")



//UC6: Find number of contacts in the address book
function numberOfContacts(totalCount) {
    return totalCount + 1
}
let totalNumberOfContacts = addressBookArray.reduce(numberOfContacts, 0)
console.log("Total Number of Contacts in the Address Book Array : " + totalNumberOfContacts);
console.log("********************************************************************************************************************\n\n")


//UC7 : Ensure No Duplicate entries of same Contact present in address book
console.log("Ensures no duplicate entry present in address book :- ")
let newContact=new Contact("Guru","Prasad","NGO Colony",'Kurnool','Andhra Pradesh','518500',"8886329322",'gnanak@gmail.com');
try {
    addContact(newContact);
} catch (error) {
    console.error(error);
}
function isExists(newContact) {
    let foundContact = addressBookArray.find(contact => contact.firstName == newContact.firstName && contact.lastName == newContact.lastName);
    if (foundContact != undefined) return true;
    else return false;
}
function addContact(contactToAdd) {
    let alreadyExists = isExists(contactToAdd);
    if (!alreadyExists) {
        addressBookArray.push(contactToAdd);        
    } else throw "Contact : " + contactToAdd.firstName + " " + contactToAdd.lastName + " is already present in the Address Book Array";   
}
console.log("********************************************************************************************************************\n\n")



//UC8: Search the person/contact by state or by city
{
    console.log("Search contact by city name :-")
    let cityName = "Kurnool"
    addressBookArray.filter(contact => contact.city == cityName).forEach(contact => console.log(contact.toString()))
    console.log("Search contact by state name :-")
    let stateName = "Andhra Pradesh"
    addressBookArray.filter(contact => contact.state == stateName).forEach(contact => console.log(contact.toString()))    
}
console.log("********************************************************************************************************************\n\n")




//UC9: View persons by city or state name
{
    console.log("View contacts by city name :-")
    let cityName = "Hyderabad"
    console.log(addressBookArray.filter(contact => contact.city == cityName).map(contact => contact.firstName))
    console.log("View contacts by state name :-")
    let stateName = "Karnataka"
    console.log(addressBookArray.filter(contact => contact.state == stateName).map(contact => contact.firstName))
}
console.log("********************************************************************************************************************\n\n")
