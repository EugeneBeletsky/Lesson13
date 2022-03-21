// Создаем транспортные средства с наследованием, используем методы на них

//Создаем методы



class Methods{
    constructor(){
        this.vehicle = [];
    }
    addTransport(transport){
        this.vehicle.push(transport);       //добавляем транспорт
    }
    getPrice(){
        return this.vehicle.map(obj=>obj.price)     //общая стоимость
        .reduce((a,b)=>a+b);
    }
    sortPrice(){
        return this.vehicle.sort((a,b)=>a.price - b.price);     //сортировка по цене
    }
    sortPower(){
        return this.vehicle.sort((a,b)=> a.power - b.power);        //сортировка по мощности
    }
    sortWeight(){
        return this.vehicle.sort((a,b)=>a.weight-b.weight);     //сортировка по весу
    }

    //не получается сделать сортировку например только по марке AUDI, подскажи пожалуйста как
    sortByMark(){
        if(this.vehicle.mark === 'AUDI'){
            return this.vehicle;
        }
        
    }

    //не получается отсортировать например транспорт в ценовой категории от 5000 до 10000, подскажи пожалуйста
    // и допустим только для авто АУДИ
    sortPrice1(){
        if(this.vehicle.price>5000 && this.vehicle.price<10000){
            return this.vehicle;
        }
        
    }
    }
    
  

    //Создаем классы

class Transport{
    constructor(name, price, power, weight){
        this.name=name;
        this.price=price;
        this.power=power;
        this.weight=weight;
        
    }

}

class Automobile extends Transport{
    constructor(name, price, power, weight, mark){
        super(name, price, power, weight);
        this.mark=mark;
    }
    Message(){
        return `This is Automobile ${this.mark}, ${this.name}, ${this.price}`;
    }
}



class Bus extends Automobile{
    constructor(name, price, power, weight,mark, numberOfSeats){
        super(name, price, power, weight,mark);
        this.numberOfSeats=numberOfSeats;
    }
    Message(){
        return `This is Bus with ${this.numberOfSeats} number of seats`;
    }
}

class Motobike extends Transport{
    constructor(name, price, power, weight, mark){
        super(name, price, power, weight);
        this.mark=mark;
    }
    Message(){
        return `This is Motorbike ${this.mark}, ${this.name}, ${this.price}`
    }
    //чтобы собрать например общую сумму мотоциклов нужно прописывать метод в классе Motorbike???
    // getPriceM(){
    //     return this.vehicle.map(obj=>obj.price)     //общая стоимость
    //     .reduce((a,b)=>a+b);
    // }
}

class Train extends Transport{
    constructor(name, price, power, weight, numberOfVagons){
        super(name, price, power, weight);
        this.numberOfVagons=numberOfVagons;
    }
}



//Создаем объёкты

const transports = new Methods();
transports.addTransport(new Automobile('A8', 15000, 300, 2000, 'AUDI'));
transports.addTransport(new Automobile('A6', 10000, 300, 1500, 'AUDI'));
transports.addTransport(new Automobile('A4', 9500, 180, 1200, 'AUDI'));
transports.addTransport(new Automobile('E250', 12000, 270, 1500, 'Mercedes'));
transports.addTransport(new Automobile('C180', 11000, 200, 1300, 'Mercedes'));
transports.addTransport(new Automobile('Logan', 6000, 100, 1000, 'Renault'));
transports.addTransport(new Automobile('Duster', 8000, 110, 1500, 'Renault'));
transports.addTransport(new Automobile('Octavia', 8000, 140, 1200, 'Skoda'));
transports.addTransport(new Automobile('Superb', 10000, 150, 1300, 'Skoda'));



transports.addTransport(new Motobike('R7', 5000, 250, 500, 'Yamaha'));
transports.addTransport(new Motobike('R10', 7000, 350, 500, 'Yamaha'));
transports.addTransport(new Motobike('S3', 4000, 200, 500, 'Suzuki'));

transports.addTransport(new Bus('Sprinter', 12000, 140, 2500, 'Mercedes', 12));
transports.addTransport(new Bus('T4', 11000, 140, 2500, 'Volkswagen', 14));

transports.addTransport(new Train('Electron', 100000, 1000, 100000, 'BelZD', 20));





//Работаем с выводом

// console.log(A6);
// console.log(A6.Message());


// console.log(transports.getPrice());
// console.log(transports.sortPrice());
// console.log(transports.sortWeight());


// console.log(transports.sortByMark());
// console.log(transports.sortPrice1());


