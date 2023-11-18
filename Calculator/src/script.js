let a;
let b;
let state;

document.getElementById('one').onclick = () => {
    document.getElementById('result').innerHTML = + document.getElementById('one').value
}

document.getElementById('two').onclick = () => {
    document.getElementById('result').innerHTML = + document.getElementById('two').value
}

document.getElementById('three').onclick = () => {
    document.getElementById('result').innerHTML = + document.getElementById('three').value
}

document.getElementById('four').onclick = () => {
    document.getElementById('result').innerHTML = + document.getElementById('four').value
}

document.getElementById('five').onclick = () => {
    document.getElementById('result').innerHTML = + document.getElementById('five').value
}

document.getElementById('six').onclick = () => {
    document.getElementById('result').innerHTML = + document.getElementById('six').value
}

document.getElementById('seven').onclick = () => {
    document.getElementById('result').innerHTML = + document.getElementById('seven').value
}

document.getElementById('eight').onclick = () => {
    document.getElementById('result').innerHTML = + document.getElementById('eight').value
}

document.getElementById('nine').onclick = () => {
    document.getElementById('result').innerHTML = + document.getElementById('nine').value
}

document.getElementById('zero').onclick = () => {
    document.getElementById('result').innerHTML = + document.getElementById('zero').value
}

document.getElementById('plus').onclick = () => {
    state = "plus";
}

document.getElementById('minus').onclick = () => {
    state = "minus";
}

document.getElementById('multiply').onclick = () => {
    state = "multiply";
}

document.getElementById('divide').onclick = () => {
    state = "divide";
}

document.getElementById('percent').onclick = () => {
    state = "percent";
}


document.getElementById('submit').onclick = () => {
    switch (state) {
        case "plus":
            break;
        case "minus":
            break;
        case "multiply":
            break;
        case "divide":
            break;
    }
}

document.getElementById('clear').onclick = () => {
    document.getElementById('result').innerHTML = document.getElementById('zero').value
}

