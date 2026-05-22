/**
 * HỆ THỐNG XỬ LÝ GIAO DỊCH - TECHBANK
 * Dữ liệu đầu vào: Mảng các giao dịch trong ngày (Đơn vị: USD)
 * Giao dịch âm: Tiền rút ra/Chuyển đi. Giao dịch dương: Tiền nhận vào.
 * Giao dịch lớn hơn 10000 là giao dịch đáng ngờ cần cờ báo động.
 */
const transactions = [
    [150, -50, 200, -10, 500, 15000, -200, 300],
    [100, 200, -50, 300],
    [100, 200, 300, 15001],
    [-100, -200, -500],
    [0, 100, -50, 0],
    [10000],
    [100, "200", null, undefined, NaN],
    [],
    [Infinity, 999999999]
];
const testCase = transactions[6];
// NHIỆM VỤ 1: Tính tổng tiền nhận vào (chỉ tính số dương).
// CODE CŨ (Đang tính tay thủ công, nếu mảng có 1000 phần tử sẽ bất khả thi)
let totalIncome = 0;
for (let i=0;i<testCase.length;i++){
    if (!Number.isFinite(testCase[i])) {
        console.log("Dữ liệu không hợp lệ");
        break;
    }
    if(testCase[i]>0) {
        totalIncome += testCase[i];
    }
}
console.log(totalIncome);
// NHIỆM VỤ 2: Tìm giao dịch đáng ngờ đầu tiên (Giá trị > 10000) và DỪNG LẠI ngay lập tức.
// CODE CŨ (Đang duyệt hết mảng gây lãng phí tài nguyên)
let hasFraud = false;
let i=0;
while (i<testCase.length) {
    if (testCase[i]>10000) {
        hasFraud = true;
        break;
    }
    i++
}
console.log(hasFraud);
// -> YÊU CẦU: Dùng vòng lặp WHILE để duyệt, tìm thấy số > 10000 thì đổi hasFraud = true và ngắt vòng lặp.

// NHIỆM VỤ 3: Gửi báo cáo lên Server. Nếu lỗi, thử lại tối đa 3 lần.
let attempts = 0;
let isSuccess = false;
do {
    if(Math.random()>0.8) {
        isSuccess = true;
        console.log("Đăng nhập thành công");
    } else {
        console.log("Đăng nhập thất bại. Vui lòng thử lại");
    }
    attempts++;
} while (isSuccess===false && attempts<3);
// -> YÊU CẦU: Dùng vòng lặp DO-WHILE. Trong vòng lặp, tăng attempts lên 1. 
// Giả lập isSuccess = (Math.random() > 0.8) (Tỉ lệ thành công 20%). 
// Lặp lại nếu chưa thành công VÀ số lần thử < 3.
