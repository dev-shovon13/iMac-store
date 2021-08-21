function memoryUpdate(ExtraMemoryPrice) {
    const basePrice = document.getElementById("base-price")
    const totalPrice = document.getElementById("total-price")
    const finalPrice = document.getElementById("final-price")
    const memory = document.getElementById("extra-memory")
    const storage = document.getElementById("extra-storage")
    const charge = document.getElementById("extra-charge")
    memory.innerText = ExtraMemoryPrice
    totalPrice.innerText = parseInt(basePrice.innerText) + parseInt(memory.innerText) + parseInt(storage.innerText) + parseInt(charge.innerText)
    finalPrice.innerText = parseInt(basePrice.innerText) + parseInt(memory.innerText) + parseInt(storage.innerText) + parseInt(charge.innerText)
}
function storageUpdate(ExtraStoragePrice) {
    const basePrice = document.getElementById("base-price")
    const totalPrice = document.getElementById("total-price")
    const finalPrice = document.getElementById("final-price")
    const memory = document.getElementById("extra-memory")
    const storage = document.getElementById("extra-storage")
    const charge = document.getElementById("extra-charge")
    storage.innerText = ExtraStoragePrice
    totalPrice.innerText = parseInt(basePrice.innerText) + parseInt(memory.innerText) + parseInt(storage.innerText) + parseInt(charge.innerText)
    finalPrice.innerText = parseInt(basePrice.innerText) + parseInt(memory.innerText) + parseInt(storage.innerText) + parseInt(charge.innerText)
}
function chargeUpdate(ExtraChargePrice) {
    const basePrice = document.getElementById("base-price")
    const totalPrice = document.getElementById("total-price")
    const finalPrice = document.getElementById("final-price")
    const memory = document.getElementById("extra-memory")
    const storage = document.getElementById("extra-storage")
    const charge = document.getElementById("extra-charge")
    charge.innerText = ExtraChargePrice
    totalPrice.innerText = parseInt(basePrice.innerText) + parseInt(memory.innerText) + parseInt(storage.innerText) + parseInt(charge.innerText)
    finalPrice.innerText = parseInt(basePrice.innerText) + parseInt(memory.innerText) + parseInt(storage.innerText) + parseInt(charge.innerText)
}
function promoUpdate() {
    const promoInput = document.getElementById("promo-input")
    const promoCode = promoInput.value
    if (promoCode.toLowerCase() == "stevekaku") {
        const finalPrice = document.getElementById("final-price")
        const finalPriceValue = parseFloat(finalPrice.innerText)
        finalPrice.innerText = finalPriceValue - (finalPriceValue * 0.2)
    }
    promoInput.value = ""
}

document.getElementById("8gb-memory").addEventListener("click", function () {
    memoryUpdate(0)
})
document.getElementById("16gb-memory").addEventListener("click", function () {
    memoryUpdate(180)
})
document.getElementById("256gb-storage").addEventListener("click", function () {
    storageUpdate(0)
})
document.getElementById("512gb-storage").addEventListener("click", function () {
    storageUpdate(100)
})
document.getElementById("1tb-storage").addEventListener("click", function () {
    storageUpdate(180)
})
document.getElementById("free-delivery").addEventListener("click", function () {
    chargeUpdate(0)
})
document.getElementById("charged-delivery").addEventListener("click", function () {
    chargeUpdate(20)
})
document.getElementById("promo-btn").addEventListener("click", promoUpdate)