function openTab(evt, tabName) {
    // 1. Ẩn tất cả nội dung tab
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }

    // 2. Bỏ class active ở tất cả các nút tab (để nó mất màu sáng đi)
    tablinks = document.getElementsByClassName("tab-item");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // 3. Hiển thị tab hiện tại
    document.getElementById(tabName).style.display = "block";
    
    // Thêm timeout nhỏ để animation CSS hoạt động mượt mà
    setTimeout(() => {
         document.getElementById(tabName).classList.add("active");
    }, 10);
   
    // 4. Thêm class active vào nút vừa nhấn (để nó sáng lên)
    evt.currentTarget.classList.add("active");
}