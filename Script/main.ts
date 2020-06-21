class Locations {
    name : string;
    city : string;
    zipcode: number;
    address: string;
    image: any;

    constructor(name,city,zipcode,address,image) {
    this.name = name;
    this.city = city;
    this.zipcode = zipcode;
    this.address = address;
    this.image = image;
    }

displayLoc(){
    return `
    <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="card mb-4 bg-primary text-white">
        <img src="${this.image}" class="card-img-top img-same d-none d-md-block" alt="...">
            <div class="card-body">
            <h4 class="card-title">${this.name}</h4>
            <p><strong>City:</strong> ${this.city}</p>
            <p>ZIP-Code:${this.zipcode}</p>
            <p>Address:<br>${this.address}</p>
        </div>  
    </div>
    </div>`
    }
}

class Restaurants extends Locations {
    tel: any;
    type: string;
    website: any;

    constructor(name,city,zipcode,address,image,tel,type,website) {
        super(name,city,zipcode,address,image);
        this.tel = tel;
        this.type = type;
        this.website = website;
    }

displayRest(){
    return `
    <div class="col-sm-12 col-md-6 col-lg-3" >
        <div class="card mb-4 bg-primary text-white">
        <img src="${this.image}" class="card-img-top img-same d-none d-md-block" alt="...">
            <div class="card-body">
           
            <h4 class="card-title">${this.name}</h4>
            <p><strong>City:</strong> ${this.city}</p>
            <p>ZIP-Code:${this.zipcode}</p>
            <p>Address:</br>${this.address}</p>
            <p>Phone:${this.tel}</p>
            <p>Type:${this.type}</p>
            <p>Website:<a class="text-white" href="${this.website}">Web</a></p><br>
            </div>
        </div>
    </div>`
    }
}

class Events extends Locations {
    eventdate: any;
    eventtime: string;
    ticketprice: any;

    constructor(name,city,zipcode,address,image,eventdate,eventtime,ticketprice) {
        super(name,city,zipcode,address,image);
        this.eventdate = eventdate;
        this.eventtime = eventtime;
        this.ticketprice = ticketprice;
    }

displayEven() {
        return `
        <div class="col-sm-12 col-md-6 col-lg-3" >
        <div class="card mb-4 bg-primary text-white">
        <img src="${this.image}" class="card-img-top img-same d-none d-md-block" alt="...">
                <div class="card-body">
               
                
                <h4 class="card-title">${this.name}</h4>
                        <p><strong>City:</strong> ${this.city}</p>
                        <p>ZIP-Code:${this.zipcode}</p>
                        <p>Address:<br>${this.address}</p>
                        <p>Event Date:${this.eventdate}</p>
                        <p>Event Time:${this.eventtime}</p>
                        <p>Ticket Price :${this.ticketprice}</p>
                </div>
        </div>
        </div>`
}
}

var locData = new Array();

locData[0] = new Locations("Basilica Cistern", "Istanbul", 34410, "Yerebatan Cad. 1/3", "Images/basilicaCistern.jpg");
locData[1] = new Locations("Ortaköy Camii","Istanbul", 34247, "Mecidiye Koprusu No:1", "Images/ortakoYCamii1.jpg");
locData[2] = new Locations("Rumelian Castle","Istanbul", 34400, "Yahya Kemal Cad. Sariyer","Images/ist2.jpg");
locData[3] = new Locations("Spice Bazaar",34200,"Istanbul", "Erzak Ambari Sok:92 Fatih", "Images/bazaar.jpg");

var restData = new Array();

restData[0] = new Restaurants("Mavi Balik","Istanbul", 34000, "Besiktas", "Images/mavibalik.jpg", "+90 532 599 20 10", "Fish Restaurant", "www.mavibalik.com")
restData[1] = new Restaurants("Koska Helvacisi","Istanbul", 34000, "Beyoglu", "Images/koskaBeyoglu.jpg", "+90 212 243 21 10", "Dessert", "http://www.koskahelvacisi.com.tr/")
restData[2] = new Restaurants("Salt Galata","Istanbul",34420, "Karakoy","Images/sarma.jpeg","+90 212 244 00 16", "Traditional Turkish", "http://www.neolokal.com/en/neolokal_en/#we-are")
restData[3] = new Restaurants("Salloura Restaurant", "Istanbul",34093, "Fatih","Images/baklava1.jpg","+90 212 267 89 67", "Syrian Restaurant", "https://www.zomato.com/tr/istanbul/salloura-o%C4%9Flu-f%C4%B1nd%C4%B1kzade-istanbul")

var evenData = new Array();

evenData[0] = new Events("Istanbul International Film Festival","Istanbul", 34400, "Beyoglu", "Images/filmFestival.jpg", "23.09.2022", "tbc", "tbc")
evenData[1] = new Events("Lizzo Concert","Istanbul", 34100, "Maslak", "Images/lizzoConcert.jpg", "10.01.2023", "tbc", "tbc")
evenData[2] = new Events("Gay Pride Istanbul", "Istanbul",34000, "Beyoglu", "Images/gay.jpg", "28.06.2020", "tbc", "free")
evenData[3] = new Events("International Book Fair", "Istanbul", "34500","Buyukcekmece", "Images/tuyap.jpg","20.01.2021", "all day", "free")


for (let i=0; i<locData.length; i++){
    $("#sight").append(`${locData[i].displayLoc()}`)
}

for (let i=0; i<restData.length; i++){
    $("#restaurant").append(`${restData[i].displayRest()}`)
}

for (let i=0; i<evenData.length; i++){
    $("#performance").append(`${evenData[i].displayEven()}`)
}

