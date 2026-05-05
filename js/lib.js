const productlist = [
{
    id: "01",
    name: "Panasonic Lumix S5 Mark II",
    price: "43.000.000 VNĐ",
    image: "../Assets/Images/lumixs52x.jpg",
    productLink: "product-detail.html"
},
{    id: "02",
    name: "Panasonic Lumix S5",
    price: "20.000.000 VNĐ",
    image: "../Assets/Images/lumixs5.jpg",
    productLink: "product-detail.html"

}
];

function addproduct(id, name, price, image, hyperlink) {
    // Khung item
    const productItem = document.createElement("div");
    productItem.setAttribute("class", "product-item");

    // Khung ảnh
    const productImage = document.createElement("div");
    productImage.setAttribute("class", "product-image");

    const img = document.createElement("img");
    img.setAttribute("src", image);
    img.setAttribute("alt", name);
    img.setAttribute("class", "img-fluid");

    productImage.appendChild(img);

    // Khung info
    const productInfor = document.createElement("div");
    productInfor.setAttribute("class", "product-infor");

    // Tên
    const productName = document.createElement("p");
    productName.textContent = name;

    // Giá
    const productPrice = document.createElement("p");
    productPrice.textContent = price;

    // Link
    const productLink = document.createElement("a");
    productLink.textContent = "Xem chi tiết";
    productLink.setAttribute("href", hyperlink);
    productLink.setAttribute("class", "btn btn-info");

    // Gán vào info
    productInfor.appendChild(productName);
    productInfor.appendChild(productPrice);
    productInfor.appendChild(productLink);

    // Gán vào item
    productItem.appendChild(productImage);
    productItem.appendChild(productInfor);

    // Thêm vào danh sách
    document.getElementById("product-list").appendChild(productItem);
}