//Build the Sides radio button selection

export const SideOptions = async() => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json() //not working. Array must die.

    //build radio input options for side dishes
    let html = `
         <div id='side-list'>
            <h2>Sides</h2>`
    
    const sidesHTML = sides.map(
        (side) => {
            return `<input type='radio' name='side' value='${side.id}' /> ${side.title}`
        })
        .join("")
    
    html += sidesHTML
    html += `</div>`
    return html
}
