//Build the Veg radio button selection

export const VegetableOptions = async() => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json() //converts to JS array

    //build radio input options for vegetables
        let html = `
         <div id='vegetables-list'>
            <h2>Vegetables</h2>`
    
    const vegetablesHTML = vegetables.map(
        (vegetable) => {
            return `<input type='radio' name='vegetable' value='${vegetable.id}' /> ${vegetable.type}`
        })
        .join("")
    
    html += vegetablesHTML
    html += `</div>`
    return html
}
    

/*
export const VegetableOptions = async() => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json() //converts to JS array

    //build radio input options for vegetables
        let html = `
         <h1 id='vegetables-list'>
            <h2>Vegetables</h2>`
    
    const vegetablesHTML = vegetables.map(
        (vegetable) => {
            
        .join("")
    
    html += vegetablesHTML
    html += `</div>`
    return html
}
*/