const productlist = [
  {
    id: 1,
    name: "Panasonic Lumix S5 Mark II X",
    price: "43.000.000 VNĐ",
    image: "../Assets/Images/lumixs52x.jpg",
    productLink: "product-detail.html",
    desc: "Chiếc máy ảnh full-frame chuyên nghiệp sở hữu thiết kế đen nhám sang trọng. Được trang bị hệ thống lấy nét theo pha (PDAF) tiên tiến, máy cung cấp khả năng quay video RAW 6K ấn tượng và tính năng ghi trực tiếp vào ổ cứng SSD qua cổng USB-C, phù hợp cho các nhà làm phim chuyên nghiệp."
  },
  {
    id: 2,
    name: "Panasonic Lumix S5 MARK I",
    price: "20.000.000 VNĐ",
    image: "../Assets/Images/lumixs5.jpg",
    productLink: "product-detail.html",
    desc: "Lựa chọn hoàn hảo trong phân khúc máy ảnh không gương lật tầm trung. Với cảm biến CMOS 24.2MP, máy mang lại chất lượng hình ảnh sắc nét và dải tương phản động rộng. Đây là công cụ đắc lực cho những người sáng tạo nội dung mới bắt đầu, cân bằng tốt giữa khả năng chụp ảnh tĩnh và quay video."
  },
  {
    id: 3,
    name: "Panasonic Lumix S5 MARK II",
    price: "27.000.000 VNĐ",
    image: "../Assets/Images/lumixs52.jpg",
    productLink: "product-detail.html",
    desc: "Bước đột phá với công nghệ lấy nét Hybrid tân tiến, khắc phục hoàn toàn nhược điểm về lấy nét của các thế hệ trước. Hệ thống chống rung Active I.S mạnh mẽ giúp bạn dễ dàng ghi lại những thước phim cầm tay mượt mà, biến sản phẩm trở thành một trong những chiếc máy ảnh đa năng nhất hiện nay."
  },
  {
    id: 4,
    name: "Panasonic Lumix S 24-105mm F4 Macro O.I.S",
    price: "13.000.000 VNĐ",
    image: "../Assets/Images/lumix24105.jpg",
    productLink: "product-detail.html",
    desc: "Ống kính zoom tiêu chuẩn ngàm L với dải tiêu cự linh hoạt từ góc rộng đến trung xa. Khả năng lấy nét cận cảnh (macro 0.5x) cùng hệ thống chống rung quang học ổn định giúp ống kính này trở thành người bạn đồng hành lý tưởng cho mọi thể loại từ chụp ảnh phong cảnh, sự kiện đến chân dung."
  },
  {
    id: 5,
    name: "Panasonic Lumix S 14-28mm f/4-5.6 Macro",
    price: "13.000.000 VNĐ",
    image: "../Assets/Images/lumixs1428.jpg",
    productLink: "product-detail.html",
    desc: "Ống kính góc siêu rộng cực kỳ nhỏ gọn dành cho những người yêu thích du lịch và vlogging. Thiết kế tối ưu cho việc sử dụng trên gimbal cùng khả năng lấy nét tĩnh lặng, mượt mà giúp tái hiện không gian rộng lớn của thiên nhiên hoặc kiến trúc một cách sống động và chân thực nhất."
  }
];


function addproduct(id, name, price, image, hyperlink) {
    // Khung item
    const productItem = document.createElement("div");
    productItem.setAttribute("class", "product-item col");

    // Khung ảnh
    const productImage = document.createElement("div");
    productImage.setAttribute("class", "product-image ratio ratio-1x1 overflow-hidden");

    const img = document.createElement("img");
    img.setAttribute("src", image);
    img.setAttribute("alt", name);
    img.setAttribute("class", "img-fluid object-fit-cover h-100");

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
    productLink.setAttribute("href", hyperlink +"?id=" + id);
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