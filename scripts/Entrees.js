//Build the Entrees radio button selection

export const EntreeOptions = async() => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json() //converts to JS array

    //build radio input options for entrees
    let html = `
         <div id='entrees-list'>
            <h2>Entrees</h2>`
    
    const entreesHTML = entrees.map(
        (entree) => {
            return `<input type='radio' name='entree' value='${entree.id}' /> ${entree.name}`
        })
        .join("")
    
    html += entreesHTML
    html += `</div>`
    return html
}
    