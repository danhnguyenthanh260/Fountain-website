function login() {
    // 1. Lấy dữ liệu từ form đăng nhập
    const usernameOrEmail = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
  
    // 2. Kiểm tra dữ liệu với dữ liệu đã lưu trong localStorage
    const storedUser = JSON.parse(localStorage.getItem(usernameOrEmail));
  
    // 3. Kiểm tra xem người dùng có tồn tại và mật khẩu có khớp không
    if (storedUser && storedUser.password === password) {
      // Nếu thành công, chuyển hướng đến trang web (ví dụ: index.html)
      alert("Đăng nhập thành công!");
      window.location.href = "index.html"; // Thay đổi đường dẫn nếu cần
    } else {
      alert("Tên người dùng/Email hoặc mật khẩu không đúng.");
    }
  }