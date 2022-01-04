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

    toString() {
        return "First Name: " + this.firstName + " | Last Name: " + this.lastName + " | Address: "
            + this.address + " | City: " + this.city + " | State: " + this.state + " | Zip: " + this.zip +
            " | Phone Number: " + this.phoneNumber + " | Email: " + this.email + "\n";
    }
}

let contact = new Contact("bhuvana", "chandra", "3/118 new bus stand ", "Betamcherla", "Andhra Pradesh", 518599, 9391173347, "abc@gmail.com");
console.log(contact.toString());