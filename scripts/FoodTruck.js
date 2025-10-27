// Imports
import { SalesHistory } from "./Sales.js"

// Function to create the main layout of the food truck page
export const FoodTruck = async () => {
    const salesHTML = await SalesHistory()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathry's House of Hummus</h1>
        </header>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
