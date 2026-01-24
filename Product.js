function Product(id, name, price, quantity, category, isAvailable) 
{
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

var product1 = [
    new Product(1, "Điện thoại Samsung", 4200000, 20, "Điện thoại", true),
    new Product(2, "Điện thoại iPhone 17", 14990000, 12, "Điện thoại", true),
    new Product(3, "Laptop Acer Nitro 5", 13500000, 8, "Laptop", true),
    new Product(4, "Laptop Lenovo ThinkPad", 18900000, 5, "Laptop", false),
    new Product(5, "Tai nghe Sony", 1290000, 30, "Thiết bị âm thanh", true),
    new Product(6, "Loa JBL", 990000, 18, "Thiết bị âm thanh", true)
];

var product2 = [
    { name: "Điện thoại Samsung", price: 4200000 },
    { name: "Điện thoại iPhone 17", price: 14990000 },
    { name: "Laptop Acer Nitro 5", price: 13500000 },
    { name: "Laptop Lenovo ThinkPad", price: 18900000 },
    { name: "Tai nghe Sony", price: 1290000 },
    { name: "Loa JBL", price: 990000 }
];

const productInStock = product1.filter(function (p) {return p.quantity > 0;});

const hasPriceOver30m = product1.some(function (p) {return p.price > 30000000;});

const AvailableProducts = product1.every(function (p) {
    return p.category !== "Điện thoại" || p.isAvailable;
});

const totalInventoryValue = product1.reduce(function (sum, p) {
    return sum + p.price * p.quantity;
}, 0);


