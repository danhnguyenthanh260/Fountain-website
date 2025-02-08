function signup() {
    // 1. Lấy dữ liệu từ form đăng ký
    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
  
    // 2. Kiểm tra dữ liệu đầu vào (ví dụ: email có hợp lệ không, mật khẩu có đủ mạnh không,...)
    // Ở đây, chúng ta chỉ kiểm tra xem các trường có bị bỏ trống hay không
    if (username === "" || email === "" || password === "") {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }
  
    // 3. Lưu trữ dữ liệu vào localStorage
    // Tạo một đối tượng chứa thông tin người dùng
    const user = {
      username: username,
      email: email,
      password: password,
    };
  
    // Chuyển đối tượng thành chuỗi JSON để lưu vào localStorage
    localStorage.setItem(email, JSON.stringify(user));
  
    // 4. Hiển thị thông báo thành công và reset form
    alert("Đăng ký thành công!");
    document.getElementById("signupForm").reset();
  }
  
