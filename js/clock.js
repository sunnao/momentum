const clock = document.querySelector("#clock");

function getClock() {
    const hours = String(new Date().getHours()).padStart(2,"0");
    const minutes = String(new Date().getMinutes()).padStart(2,"0");
    const seconds = String(new Date().getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 1초 후에 시계 나타나는것 방지. 바로 현재시간 호출
getClock()
setInterval(getClock, 1000);