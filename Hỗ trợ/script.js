// Xử lý form gửi yêu cầu
const form = document.getElementById('support-form');
const requestStatus = document.getElementById('request-status');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn hành vi gửi form mặc định

    const requestType = document.getElementById('request-type').value;
    const details = document.getElementById('details').value;

    if (!requestType) {
        alert("Vui lòng chọn loại yêu cầu!");
        return;
    }

    // Hiển thị trạng thái xử lý
    requestStatus.style.display = 'block';
    requestStatus.textContent = 'Đang xử lý yêu cầu của bạn...';
    requestStatus.classList.remove('resolved');
    requestStatus.classList.add('pending');

    // Giả lập xử lý yêu cầu
    setTimeout(() => {
        requestStatus.textContent = 'Yêu cầu của bạn đã được nhận!';
        requestStatus.classList.remove('pending');
        requestStatus.classList.add('resolved');
    }, 3000); // Xử lý trong 3 giây
});
