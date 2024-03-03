//telephone class
class Telephone{

    constructor(){
        this.phoneContact = new Set()
      }

    //add a phone number
    addPhoneNumber(number){
        this.phoneContact.add(number)
    }
    
    //delete a phonenumber
    removephoneNumber(contact){
        const index = this.phoneContact.indexOf(number);
        if (index !== -1) {
            this.phoneContact.splice(index, 1);
        }
    }

    //dial a phone number
    dialPhoneNumber(){
        this.phoneContact.forEach( contact => {
            console.log(contact.message)
            // console.log(contact.number)
          })
    }

}

class Observer{
   number(){

   }
   message(){
        console.log(this.number) 
   }
}

//define observer
class PhoneObserver {
    notify(phoneContact) {
        console.log(`The phone number: ${phoneContact}`);
    }
}

const telephone = new Telephone();
const observer1 = new PhoneObserver();
const observer2 = {
    notify: function(phoneContact) {
        console.log(`Now Dialing ${phoneContact}`);
    }
};

telephone.addPhoneNumber(observer1);
telephone.addPhoneNumber(observer2);

telephone.addPhoneNumber("2347023232");
telephone.dialPhoneNumber("2347023232");