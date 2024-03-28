export const createButton = (className) =>{
    let button = document.createElement("button")
    button.classList.add(className)
    button.classList.add('btn')
    button.innerText = className

    return button
}

export const formatNumber = (number) =>{
    return number.toString().padStart(2, '0');
}