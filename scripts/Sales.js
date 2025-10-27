// Imports
import { getTransientState, setEntree, setSide, setVegetable } from "./TransientState.js";
import { renderAllHTML } from "./main.js";


// Function to fetch sales and generate HTML for the sales log
export const SalesHistory = async () => {
    const response = await fetch("http://localhost:8088/purchases"); 
    const sales = await response.json();

    const salesHTML = sales.map((sale) => {
        const totalPrice = sale.totalPrice
        return `<div>Receipt #${sale.id} = $${totalPrice.toFixed(2)}</div>`;
    }).join("");

    return salesHTML;
}

// Function to post a new sale to the database
export const addNewSale = async () => {
    const state = getTransientState();

    if (state.entreeId && state.sideId && state.vegetableId) {
    
        
        // Fetch details for each selected item
        const entreeResponse = await fetch(`http://localhost:8088/entrees/${state.entreeId}`);
        const entree = await entreeResponse.json();
        
        const sideResponse = await fetch(`http://localhost:8088/sides/${state.sideId}`);
        const side = await sideResponse.json();

        const vegResponse = await fetch(`http://localhost:8088/vegetables/${state.vegetableId}`);
        const vegetable = await vegResponse.json();

        const totalPrice = entree.price + side.price + vegetable.price;

        const newSale = {
            totalPrice: totalPrice
        }

        // Post the new sale object to the database
        const response = await fetch("http://localhost:8088/purchases", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSale)
        });

        // Reset transient state
        setEntree(0);
        setSide(0);
        setVegetable(0);

        // Re-render the HTML to show the new sale and clear selections
        renderAllHTML();
    }
}
