let elist =[]
let interval

b = document.getElementsByClassName("but")
for (let i = 0; i < b.length; i++) { b[i].addEventListener('click', crush(b[i], (i + 1) * 1000)) }

function crush(b, time) {
    return function () {
        let e = setTimeout(function () { b.style.visibility = "hidden" }, time)
        elist.push(e)
    }
}

function tick() {
    return function () {
        if (interval==undefined)
        {interval = setInterval(() => { if (b10.style.visibility == "hidden") { b10.style.visibility = "visible" } else { b10.style.visibility = "hidden" } }, 1000)}
    }
}

function reset(){
    for (let i = 0;i<elist.length;i++){clearTimeout(elist[i])}
    for (let i = 0; i < b.length; i++){b[i].style.visibility = "visible"}
    clearInterval(interval)
    b10.style.visibility == "visible"
}

const tickbtn = document.getElementById("b10")
tickbtn.addEventListener('click', tick())

const b_reset = document.getElementById("b_reset")
b_reset.addEventListener("click",reset)
