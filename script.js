const display = document.getElementsByClassName('display')[0]
let data = [], cod = 0

function printar() {
    if (data.length) {
        return display.innerHTML = data.join('')
    }
    display.innerHTML = 0
}
function result() {
        if (cod % 2 == 1 && typeof (data[data.length - 1]) == 'number') { data.push(')') }
        data = [parseFloat(eval(data.join('')))]
        if (data[0] == 0) {
            data = []
        }
        cod = 0
        printar()
}
function num(num) {
    data.push(num)
    printar()
}
function del() {
    if (cod != 0 && data[data.length - 1] == ')'|| data[data.length - 1] == '(') { cod-- }
    data.pop()
    printar()
}
function ac() {
    data = [], cod = 0
    printar()
}

function operador(op) {
    if (!data.length && op == '.') {
        data.push(0, op)
        return printar()
    }

    if (op == 'cod' && data[data.length - 1] != '.') {
        op = cod % 2 == 0 ? '(' : ')'
        if (typeof (data[data.length - 1]) == 'number' && cod % 2 == 0 || data[data.length - 1] == ')') {
            data.push('*', op)
        } else if (cod % 2 == 1) {
            if (typeof (data[data.length - 1]) == 'number') {
                data.push(op)
            } else {
                return
            }
        } else {
            data.push(op)
        }
        cod++
        return printar()
    }

    //operadores
    if (typeof (data[data.length - 1]) == 'number' || (data[data.length - 1] == ')' && op != '.')) {
        data.push(op)
        return printar()
    }
}

// darkMode
const calc = document.getElementsByClassName('calculator')[0]
const body = document.getElementsByTagName('body')[0]
const btn = document.querySelectorAll('.num')
const btnMod = document.getElementById('darkmode')
let mod = 0
function modo() {
    mod = mod == 1 ? 0 : 1

    if (mod == 1) {
        body.style.backgroundColor = 'white'
        calc.style.backgroundColor = 'white'
        calc.style.color = '#222'
        btn.forEach(btn => {
            btn.style.color = '#333'
        });
        btnMod.style.backgroundColor = '#444'
    } else {
        body.style.backgroundColor = '#112'
        calc.style.backgroundColor = '#112'
        calc.style.color = 'white'
        btn.forEach(btn => {
            btn.style.color = 'white'
        });
        btnMod.style.backgroundColor = '#eee'
    }
}