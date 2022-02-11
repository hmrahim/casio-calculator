

function property(value) {
    const display = document.getElementById("display")
    const name = document.getElementById(value)
    display.value = display.value + name.value

}

function methods(remover) {
    const c = document.getElementById(remover)
    const display = document.getElementById("display")
    if (c.value == "C") {
        display.value = display.value.slice(0,-1)
    } else if (c.value == "CE") {
        display.value = ""
    }
   

}

function equal(f) {
    const sum = document.getElementById(f)
    const display = document.getElementById("display")
    

    if (sum.value == "=") {
        display.value = eval(display.value)
    } else if(sum.value == "√"){
        display.value = Math.sqrt(display.value)
    }
}

document.getElementById("one").addEventListener("click", function () {
    property("one")
})

document.getElementById("two").addEventListener("click", function () {
    property("two")
})

document.getElementById("three").addEventListener("click", function () {
    property("three")
})

document.getElementById("four").addEventListener("click", function () {
    property("four")
})

document.getElementById("five").addEventListener("click", function () {
    property("five")
})

document.getElementById("six").addEventListener("click", function () {
    property("six")
})

document.getElementById("saven").addEventListener("click", function () {
    property("saven")
})

document.getElementById("eight").addEventListener("click", function () {
    property("eight")
})

document.getElementById("nine").addEventListener("click", function () {
    property("nine")
})

document.getElementById("zero").addEventListener("click", function () {
    property("zero")
})
document.getElementById("dot").addEventListener("click", function () {
    property("dot")
})
document.getElementById("plus").addEventListener("click", function () {
    property("plus")
})
document.getElementById("minus").addEventListener("click", function () {
    property("minus")
})
document.getElementById("multi").addEventListener("click", function () {
    property("multi")
})
document.getElementById("slesh").addEventListener("click", function () {
    property("slesh")
})
document.getElementById("c").addEventListener("click", function () {
    methods("c")
})
document.getElementById("ce").addEventListener("click", function () {
    methods("ce")
})
document.getElementById("equal").addEventListener("click", function () {
    equal("equal")
}