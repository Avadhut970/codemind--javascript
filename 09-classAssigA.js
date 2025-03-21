console.log(`==== Vehical class =====`);

class Vehicle {
    constructor(brand, model, year, fuelType, price) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.fuelType = fuelType;
        this.price = price;
    }
    details(){
        console.log(`brand :${this.brand}, model ${this.model},year ${this.year}, fuletype ${this.fuelType},price${this.price}`);
        
    }
    
}
const vehicle1 = new Vehicle("Toyota", "Corolla", 2020, "Petrol", 20000);
vehicle1.details();
const vehicle2 = new Vehicle("Honda", "Civic", 2021, "Diesel", 25000);
vehicle2.details();
const vehicle3 = new Vehicle("Ford", "Focus", 2019, "Hybrid", 22000);
vehicle3.details();
const vehicle4 = new Vehicle("Maruti Suzuki", "Wagnor", 2023, "Cng", 40000);
vehicle4.details();
const vehicle5 = new Vehicle("Bmw", "X7", 2022, "Petrol", 60000);
vehicle5.details();

console.log(`====  college class ===`);


class college {
    constructor(name,faclty,location,student) {
        this.name=name;
        this.faclty=faclty;
        this.location=location;
        this.student=student;
    }
    display(){
        console.log(`name :${this.name},faclty :${this.faclty},location :${this.location},student :${this.student}`);
   
    }
}

const name1 = new college("xyv","cbs","abc.as","fgh");
name1.display();

const name2 = new college("DSFS","sdvds","fwef","fewf",);
name2.display();

const name3 = new college("fwefew","fweaf","eragrg","freqwf")
name3.display();

const name4 = new college("wreeqw","gtrsg","gfag","fregweg")
name4.display();