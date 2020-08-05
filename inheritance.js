class Shop{
    constructor(name){
        this.companyName = name;
    }
}

class Mobile extends Shop{
    
    constructor(companyName, name, price, model){
        super(companyName)
        this.name  = name;
        this.price = price;
        this.model = model;
    }
}
const phone0  = new Mobile('PhoneHut','HUAWEI', 14000, 'Y6S');
const phone1  = new Mobile('MobileBazar','NOKIA', 18000, 'V05');
const phone2  = new Mobile('MobieleDokan','REIDME', 17000, 'S97');

console.log(phone0);
console.log(phone1);
console.log(phone2);
