function Telephone(name, price, color) {
	this.name = name;
	this.price = price;
	this.color = color;
}
Telephone.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.name + ", kolor to " + this.color + "cena to " + this.price + ".");
}
var iPhones6s = new Telephone("Apple", 2250, "srebrny");
var samsungGalaxyS6 = new Telephone("Samsung Galaxy 6s", 2000, "niebieski");
var onePlusOne = new Telephone("One Plus One", 1500, "żólty");

iPhones6s.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();