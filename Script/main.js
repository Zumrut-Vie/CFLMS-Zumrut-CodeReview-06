var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Locations = /** @class */ (function () {
    function Locations(name, city, zipcode, address, image) {
        this.name = name;
        this.city = city;
        this.zipcode = zipcode;
        this.address = address;
        this.image = image;
    }
    Locations.prototype.displayLoc = function () {
        return "\n    <div class=\"col-sm-12 col-md-6 col-lg-3\">\n        <div class=\"card mb-4 bg-primary text-white\">\n        <img src=\"" + this.image + "\" class=\"card-img-top img-same d-none d-md-block\" alt=\"...\">\n            <div class=\"card-body\">\n            <h4 class=\"card-title\">" + this.name + "</h4>\n            <p><strong>City:</strong> " + this.city + "</p>\n            <p>ZIP-Code:" + this.zipcode + "</p>\n            <p>Address:<br>" + this.address + "</p>\n        </div>  \n    </div>\n    </div>";
    };
    return Locations;
}());
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(name, city, zipcode, address, image, tel, type, website) {
        var _this = _super.call(this, name, city, zipcode, address, image) || this;
        _this.tel = tel;
        _this.type = type;
        _this.website = website;
        return _this;
    }
    Restaurants.prototype.displayRest = function () {
        return "\n    <div class=\"col-sm-12 col-md-6 col-lg-3\" >\n        <div class=\"card mb-4 bg-primary text-white\">\n        <img src=\"" + this.image + "\" class=\"card-img-top img-same d-none d-md-block\" alt=\"...\">\n            <div class=\"card-body\">\n           \n            <h4 class=\"card-title\">" + this.name + "</h4>\n            <p><strong>City:</strong> " + this.city + "</p>\n            <p>ZIP-Code:" + this.zipcode + "</p>\n            <p>Address:</br>" + this.address + "</p>\n            <p>Phone:" + this.tel + "</p>\n            <p>Type:" + this.type + "</p>\n            <p>Website:<a class=\"text-white\" href=\"" + this.website + "\">Web</a></p><br>\n            </div>\n        </div>\n    </div>";
    };
    return Restaurants;
}(Locations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, city, zipcode, address, image, eventdate, eventtime, ticketprice) {
        var _this = _super.call(this, name, city, zipcode, address, image) || this;
        _this.eventdate = eventdate;
        _this.eventtime = eventtime;
        _this.ticketprice = ticketprice;
        return _this;
    }
    Events.prototype.displayEven = function () {
        return "\n        <div class=\"col-sm-12 col-md-6 col-lg-3\" >\n        <div class=\"card mb-4 bg-primary text-white\">\n        <img src=\"" + this.image + "\" class=\"card-img-top img-same d-none d-md-block\" alt=\"...\">\n                <div class=\"card-body\">\n               \n                \n                <h4 class=\"card-title\">" + this.name + "</h4>\n                        <p><strong>City:</strong> " + this.city + "</p>\n                        <p>ZIP-Code:" + this.zipcode + "</p>\n                        <p>Address:<br>" + this.address + "</p>\n                        <p>Event Date:" + this.eventdate + "</p>\n                        <p>Event Time:" + this.eventtime + "</p>\n                        <p>Ticket Price :" + this.ticketprice + "</p>\n                </div>\n        </div>\n        </div>";
    };
    return Events;
}(Locations));
var locData = new Array();
locData[0] = new Locations("Basilica Cistern", "Istanbul", 34410, "Yerebatan Cad. 1/3", "Images/basilicaCistern.jpg");
locData[1] = new Locations("Ortaköy Camii", "Istanbul", 34247, "Mecidiye Koprusu No:1", "Images/ortakoYCamii1.jpg");
locData[2] = new Locations("Rumelian Castle", "Istanbul", 34400, "Yahya Kemal Cad. Sariyer", "Images/ist2.jpg");
locData[3] = new Locations("Spice Bazaar", 34200, "Istanbul", "Erzak Ambari Sok:92 Fatih", "Images/bazaar.jpg");
var restData = new Array();
restData[0] = new Restaurants("Mavi Balik", "Istanbul", 34000, "Besiktas", "Images/mavibalik.jpg", "+90 532 599 20 10", "Fish Restaurant", "www.mavibalik.com");
restData[1] = new Restaurants("Koska Helvacisi", "Istanbul", 34000, "Beyoglu", "Images/koskaBeyoglu.jpg", "+90 212 243 21 10", "Dessert", "http://www.koskahelvacisi.com.tr/");
restData[2] = new Restaurants("Salt Galata", "Istanbul", 34420, "Karakoy", "Images/sarma.jpeg", "+90 212 244 00 16", "Traditional Turkish", "http://www.neolokal.com/en/neolokal_en/#we-are");
restData[3] = new Restaurants("Salloura Restaurant", "Istanbul", 34093, "Fatih", "Images/baklava1.jpg", "+90 212 267 89 67", "Syrian Restaurant", "https://www.zomato.com/tr/istanbul/salloura-o%C4%9Flu-f%C4%B1nd%C4%B1kzade-istanbul");
var evenData = new Array();
evenData[0] = new Events("Istanbul International Film Festival", "Istanbul", 34400, "Beyoglu", "Images/filmFestival.jpg", "23.09.2022", "tbc", "tbc");
evenData[1] = new Events("Lizzo Concert", "Istanbul", 34100, "Maslak", "Images/lizzoConcert.jpg", "10.01.2023", "tbc", "tbc");
evenData[2] = new Events("Gay Pride Istanbul", "Istanbul", 34000, "Beyoglu", "Images/gay.jpg", "28.06.2020", "tbc", "free");
evenData[3] = new Events("International Book Fair", "Istanbul", "34500", "Buyukcekmece", "Images/tuyap.jpg", "20.01.2021", "all day", "free");
for (var i = 0; i < locData.length; i++) {
    $("#sight").append("" + locData[i].displayLoc());
}
for (var i = 0; i < restData.length; i++) {
    $("#restaurant").append("" + restData[i].displayRest());
}
for (var i = 0; i < evenData.length; i++) {
    $("#performance").append("" + evenData[i].displayEven());
}
