// Danh sách máy và tình trạng ban đầu
const computers = [
    { id: "PC001", name: "Máy 1", status: "OK" },
    { id: "PC002", name: "Máy 2", status: "Kết nối yếu" },
    { id: "PC003", name: "Máy 3", status: "Treo máy" },
    { id: "PC004", name: "Máy 4", status: "OK" },
];

// Hiển thị danh sách máy trong bảng
function renderTable(data) {
    const tableBody = document.querySelector("#monitor-table tbody");
    tableBody.innerHTML = ""; // Xóa nội dung cũ

    data.forEach((computer) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${computer.id}</td>
            <td>${computer.name}</td>
            <td class="${getStatusClass(computer.status)}">${computer.status}</td>
        `;

        tableBody.appendChild(row);
    });
}

// Lấy class CSS theo trạng thái
function getStatusClass(status) {
    if (status === "OK") return "status-ok";
    if (status === "Kết nối yếu") return "status-warning";
    if (status === "Treo máy") return "status-error";
    return "";
}

// Tự động cảnh báo khi máy gặp lỗi
function checkForErrors() {
    const alertBox = document.getElementById("alert");
    const hasError = computers.some(
        (computer) => computer.status === "Treo máy" || computer.status === "Kết nối yếu"
    );

    if (hasError) {
        alertBox.style.display = "block";
        alertBox.textContent = "Cảnh báo: Một hoặc nhiều máy gặp sự cố!";
    } else {
        alertBox.style.display = "none";
    }
}

// Mô phỏng thay đổi trạng thái máy (tự động cập nhật sau mỗi 5 giây)
function simulateStatusChange() {
    const statuses = ["OK", "Kết nối yếu", "Treo máy"];
    computers.forEach((computer) => {
        const randomIndex = Math.floor(Math.random() * statuses.length);
        computer.status = statuses[randomIndex];
    });
    renderTable(computers);
    checkForErrors();
}

// Khởi tạo bảng và bắt đầu theo dõi
renderTable(computers);
checkForErrors();
setInterval(simulateStatusChange, 5000); // Mô phỏng thay đổi trạng thái mỗi 5 giây
