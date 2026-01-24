function Product(id, name, price, quantity, category, isAvailable) 
{
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

var product = [
    new Product(1, "Điện thoại Samsung", 4200000, 20, "Điện thoại", true),
    new Product(2, "Điện thoại iPhone 17", 14990000, 12, "Điện thoại", true),
    new Product(3, "Laptop Acer Nitro 5", 13500000, 8, "Laptop", true),
    new Product(4, "Laptop Lenovo ThinkPad", 18900000, 5, "Laptop", false),
    new Product(5, "Tai nghe Sony", 1290000, 30, "Thiết bị âm thanh", true),
    new Product(6, "Loa JBL", 990000, 18, "Thiết bị âm thanh", true)
];