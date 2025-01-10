// Danh sách máy tính trong tiệm
const computers = [
    { id: "PC001", name: "Máy 1", status: "Hoạt động" },
    { id: "PC002", name: "Máy 2", status: "Bảo trì" },
    { id: "PC003", name: "Máy 3", status: "Chưa sử dụng" },
    { id: "PC004", name: "Máy 4", status: "Hoạt động" },
];

// Hiển thị danh sách máy trong bảng
function renderTable(data) {
    const tableBody = document.querySelector("#resources-table tbody");
    tableBody.innerHTML = ""; // Xóa nội dung cũ

    data.forEach((computer) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${computer.id}</td>
            <td>${computer.name}</td>
            <td class="${getStatusClass(computer.status)}">${computer.status}</td>
            <td>
                <select class="status-select" data-id="${computer.id}">
                    <option value="Hoạt động" ${computer.status === "Hoạt động" ? "selected" : ""}>Hoạt động</option>
                    <option value="Bảo trì" ${computer.status === "Bảo trì" ? "selected" : ""}>Bảo trì</option>
                    <option value="Chưa sử dụng" ${computer.status === "Chưa sử dụng" ? "selected" : ""}>Chưa sử dụng</option>
                </select>
            </td>
        `;

        tableBody.appendChild(row);
    });

    // Gắn sự kiện cho dropdown trạng thái
    document.querySelectorAll(".status-select").forEach((select) => {
        select.addEventListener("change", (event) => {
            const computerId = event.target.getAttribute("data-id");
            const newStatus = event.target.value;
            updateStatus(computerId, newStatus);
        });
    });
}

// Lấy class CSS theo trạng thái
function getStatusClass(status) {
    if (status === "Hoạt động") return "status-active";
    if (status === "Bảo trì") return "status-maintenance";
    return "status-unused";
}

// Cập nhật trạng thái máy
function updateStatus(id, newStatus) {
    const computer = computers.find((comp) => comp.id === id);
    if (computer) {
        computer.status = newStatus;
        renderTable(computers); // Cập nhật bảng
    }
}

// Tìm kiếm máy theo ID hoặc trạng thái
document.getElementById("search-btn").addEventListener("click", () => {
    const searchValue = document.getElementById("search-input").value.toLowerCase();
    const filteredComputers = computers.filter(
        (comp) =>
            comp.id.toLowerCase().includes(searchValue) ||
            comp.status.toLowerCase().includes(searchValue)
    );
    renderTable(filteredComputers);
});

// Khởi tạo bảng
renderTable(computers);
