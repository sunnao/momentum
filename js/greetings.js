const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 대문자 변수명 : string만 담는 변수, 중요한 정보가 아닌 변수, 하지만 반복입력되는 변수
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function loginSubmit(event) {
    // form이 입력에 편리해서 html에서 사용하긴 했지만 디폴트값인 새로고침은 하고싶지 않다
    event.preventDefault();

    // 입력창 숨기는CSS 적용
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    // 로컬저장소에 username이라는 항목으로 저장
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);

    // 입력받은 이름 붙이고 인사. 인삿말구역 숨기는CSS 제거
    paintingGreetings(username);
}

// 반복되서 함수처리. 입력받은 이름 붙인 인사말. 인삿말구역 숨기는CSS 제거
function paintingGreetings(username) {
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

// 로컬저장소에 username이 null이면
if (savedUsername === null){
    // form 보여줌 -> 입력한 이름으로 인사(함수)
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit);
}else {
    // greeting 보여줌 -> 저장된 이름 붙여서 인사
    paintingGreetings(savedUsername);
    
}