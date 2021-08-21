// targetting the elements 
const basePrice = document.getElementById("base-price")
const totalPrice = document.getElementById("total-price")
const finalPrice = document.getElementById("final-price")
const memory = document.getElementById("extra-memory")
const storage = document.getElementById("extra-storage")
const charge = document.getElementById("extra-charge")

// updating total 
function total(name, price) {
    name.innerText = price
    totalPrice.innerText = parseInt(basePrice.innerText) + parseInt(memory.innerText) + parseInt(storage.innerText) + parseInt(charge.innerText)
    finalPrice.innerText = parseInt(basePrice.innerText) + parseInt(memory.innerText) + parseInt(storage.innerText) + parseInt(charge.innerText)
}

// apply promo code
function promoUpdate() {
    const promoInput = document.getElementById("promo-input")
    const totalPrice = document.getElementById("total-price")
    const promoCode = promoInput.value.toLowerCase()
    if (promoCode == "stevekaku") {
        document.getElementById("final-price").innerText = parseFloat(totalPrice.innerText) - (parseFloat(totalPrice.innerText) * 0.2)
    }
    promoInput.value = ""
}

// update memory config 
document.getElementById("8gb-memory").addEventListener("click", function () {
    total(memory, 0)
})
document.getElementById("16gb-memory").addEventListener("click", function () {
    total(memory, 180)
})

// update storage config
document.getElementById("256gb-storage").addEventListener("click", function () {
    total(storage, 0)
})
document.getElementById("512gb-storage").addEventListener("click", function () {
    total(storage, 100)
})
document.getElementById("1tb-storage").addEventListener("click", function () {
    total(storage, 180)
})

// update charge config
document.getElementById("free-delivery").addEventListener("click", function () {
    total(charge, 0)
})
document.getElementById("charged-delivery").addEventListener("click", function () {
    total(charge, 20)
})

// apply promo handler
document.getElementById("promo-btn").addEventListener("click", promoUpdate)