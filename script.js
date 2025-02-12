// قائمة أرقام السر لكل مستخدم
const users = {
    "1234": "user1",
    "5678": "user2",
    "1111": "user3",
    "2222": "user4",
    "3333": "user5",
    "4444": "user6",
    "5555": "user7",
    "6666": "user8",
    "7777": "user9",
    "8888": "user10",
    "9999": "user11",
    "0000": "user12"
};

// التحقق من رقم السر
function login() {
    const password = document.getElementById("password").value;
    if (users[password]) {
        localStorage.setItem("loggedUser", users[password]);
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerText = "رقم السر غير صحيح!";
    }
}

// إضافة فقاعات متحركة
function createBubbles() {
    for (let i = 0; i < 20; i++) {
        let bubble = document.createElement("div");
        bubble.className = "bubbles";
        bubble.style.left = Math.random() * 100 + "vw";
        bubble.style.width = Math.random() * 20 + "px";
        bubble.style.height = bubble.style.width;
        bubble.style.animationDuration = Math.random() * 5 + 3 + "s";
        document.body.appendChild(bubble);
    }
}
createBubbles();
