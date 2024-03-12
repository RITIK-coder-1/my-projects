document.addEventListener("click", (event) => {
    const clientX = event.clientX
    const clientY = event.clientY

    const div = document.createElement("div");
    div.className = "draggable"; // Applying the class for styling
    div.style.left = `${clientX}px`
    div.style.top = `${clientY}px`
    document.body.append(div)

    // Dragging functionality
    div.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', 'Dragged circle')
        event.target.style.opacity = '0.5'; // Adjust the opacity while dragging
    })

    div.setAttribute("draggable", "true")

    // Prevent the default action for these events to allow dropping
    div.addEventListener('dragover', (event) => {
        event.preventDefault()
    })

    div.addEventListener('dragenter', (event) => {
        event.preventDefault()
        event.target.style.border = '2px dashed white'; // Visual indication of drop target
    })

    div.addEventListener('dragleave', (event) => {
        event.preventDefault()
        event.target.style.border = '1px solid white'; // Revert style when leaving drop target
    })

    div.addEventListener('drop', (event) => {
        event.preventDefault()
        // Handle the drop event if needed
        event.target.style.border = '1px solid white'; // Revert style when dropping
    })
})