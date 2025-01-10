// Giá tính theo giờ
const pricePerHour = 5000;

// Hàm tính số giờ sử dụng
document.getElementById("calculate-btn").addEventListener("click", () => {
    const startTime = new Date(document.getElementById("start-time").value);
    const endTime = new Date(document.getElementById("end-time").value);

    // Kiểm tra xem thời gian hợp lệ không
    if (!startTime || !endTime) {
        alert("Vui lòng nhập đầy đủ thời gian bắt đầu và kết thúc!");
        return;
    }

    if (endTime <= startTime) {
        alert("Thời gian kết thúc phải lớn hơn thời gian bắt đầu!");
        return;
    }

    // Tính số giờ sử dụng
    const hoursUsed = Math.ceil((endTime - startTime) / (1000 * 60 * 60)); // Chuyển mili giây sang giờ
    const totalAmount = hoursUsed * pricePerHour;

    // Hiển thị kết quả
    document.getElementById("used-time").textContent = `${hoursUsed} giờ`;
    document.getElementById("total-amount").textContent = `${totalAmount.toLocaleString()}đ`;
});

// Xử lý thanh toán
document.getElementById("cash-btn").addEventListener("click", () => {
    alert("Thanh toán bằng tiền mặt thành công!");
});

document.getElementById("momo-btn").addEventListener("click", () => {
    alert("Mở ứng dụng Momo để thanh toán.");
});

document.getElementById("zalopay-btn").addEventListener("click", () => {
    alert("Mở ứng dụng ZaloPay để thanh toán.");
});
