var arr = [];
for(let i = 0; i < 10; i++) {
    arr[i] = i.toString();
}
arr.push("+");
arr.push("-");
arr.push("×");
arr.push("÷");
for(let i = 0; i < arr.length; i++) {
    var input = document.getElementById(arr[i].toString());
    document.addEventListener("keydown", function(event) {
        if(event.key === arr[i]) {
            event.preventDefault();
            document.getElementById(arr[i]).click();
        }
    });
}
document.addEventListener("keydown", function(event) {
    if(event.key === "*") {
        event.preventDefault();
        document.getElementById("×").click();
    }
    else if(event.key === "/") {
        event.preventDefault();
        document.getElementById("÷").click();
    }
    else if(event.key === "Enter") {
        event.preventDefault();
        document.getElementById("=").click(); 
    }
    else if(event.key === ".") {
        event.preventDefault();
        document.getElementById(".").click(); 
    }
    else if(event.key === "Backspace") {
        document.getElementById("backspace").click();
    }
});

