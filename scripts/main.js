// Imports
import { FoodTruck } from "./FoodTruck.js"
import { EntreeOptions } from "./Entrees.js"
import { SideOptions } from "./SideDishes.js"
import { VegetableOptions } from "./Vegetables.js"
import { setEntree, setSide, setVegetable } from "./TransientState.js"
import { addNewSale } from "./Sales.js";


// Store the main container element
const mainContainer = document.querySelector("#container")

// Function to render all HTML components? (╥﹏╥)
export const renderAllHTML = async() => {
    const entreesRenderedHTML = await EntreeOptions()
    const sidesRenderedHTML = await SideOptions()
    const vegetablesRenderedHTML = await VegetableOptions()
    const foodTruckHTML = await FoodTruck()

    mainContainer.innerHTML = `
        ${entreesRenderedHTML}
        ${sidesRenderedHTML}
        ${vegetablesRenderedHTML}
        ${foodTruckHTML}
    `
};

// Listen for radio button changes and update transient state
document.addEventListener("change", (event) => {
    if (event.target.name === "entree") {
        setEntree(parseInt(event.target.value))
    }
    if (event.target.name === "side") {
        setSide(parseInt(event.target.value))
    }
    if (event.target.name === "vegetable") {
        setVegetable(parseInt(event.target.value))
    }
});


// Listen for the purchase button click
document.addEventListener("click", (event) => {
    if (event.target.id === "purchase") {
        addNewSale()
    }
})

// Initial render of the page
renderAllHTML()

