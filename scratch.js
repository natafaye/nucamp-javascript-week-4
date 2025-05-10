// Tic Tac Toe

// get the messages container
const messagesContainer = document.querySelector("#messages-container")

function createMessage() {
    // make the paragraph
    const messageP = document.createElement("p")

    messageP.className = "bg-primary-subtle p-3 rounded"
    messageP.style.color = "white"
    messageP.textContent = "Goodbye!"

    // put a button inside the paragraph
    const babyButton = document.createElement("button") // made the soul

    babyButton.textContent = "X"
    babyButton.className = "btn btn-primary btn-sm float-end"

    babyButton.addEventListener("click", () => {
        // remove the paragraph
        messageP.remove()
    })

    messageP.appendChild(babyButton) // moved it to earth (the page)

    // add the messageP to messagesContainer
    messagesContainer.appendChild(messageP)

    const clonedMessageTrue = messageP.cloneNode(true)
    const clonedMessageFalse = messageP.cloneNode()

    //console.log("true", clonedMessageTrue)
    //console.log("false", clonedMessageFalse)
    // Two options
    // cloneNode(true)
    // cloneNode()
}

function clearMessages() {
    // get rid of any messages inside of the messages-container

    // 3rd Place
    // while(messagesContainer.lastChild) {
    //     messagesContainer.removeChild(messagesContainer.lastChild)
    // }

    // 2nd Place
    messagesContainer.innerHTML = ""

    // 1st Place
    // something.replaceChildren()
}

// Add click event listener to clear button that calls clearMessage function
// .addEventListener(event, functionToCall)
const clearButton = document.querySelector("#clear-button")
clearButton.addEventListener("click", clearMessages)

// the difference between

// sending someone the phone number for them to call = clearMessages
// give them the function itself

// calling that contact and sending them what the contact said = clearMessages()
// give them what the function returns


function showSparkles(event) {
    const div = document.createElement("div")
    div.textContent = "✨"
    div.className = "position-absolute"

    // I would like left and right to be where you are clicking
    div.style.top = event.pageY + "px"
    div.style.left = event.pageX + "px"

    document.body.appendChild(div)
}