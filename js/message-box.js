import { messageContainer, messageInput, typing } from './dom-loader'
import userImage from '../Images/mask.png'



// The main container for the entire message section
messageContainer.addEventListener("click", (e) => {
    e.preventDefault()
    let target = e.target

    // Accessing the message box window where the messages are present
    let mainContainer = target.closest("#message-box")
    
    // Accessing the input type of file where we can select documents and other files
    let fileInput = target.closest("#chat-file-input")

    // Accessing the button through which we can send the message
    let sendBtnMessage = mainContainer.querySelector("#send-button")

    if (fileInput) {
      /* If we click on file input of type file (has a clip icon in the UI)
         then stop the outer elements clicks and attach a change event Listener
         to the file input and inside it check whether the name of the file we 
         selected from our directory is empty/undefined or not 
         If it has a value , then enable the send message button and make
         it's bg-color to blue and clear the text input field of message box
      */
        fileInput.addEventListener("click", (e) => {
            e.stopPropagation()
            fileInput.addEventListener("change", (e) => {
                e.preventDefault()
                if (fileInput.files[0].name !== "" || fileInput.files[0].name !== undefined) {
                    sendBtnMessage.disabled = false;
                    sendBtnMessage.classList.add("bg-blue-400")
                    sendBtnMessage.classList.remove("bg-gray-400")
                    messageInput.value = fileInput.files[0].name;
                }
                else {
                    sendBtnMessage.disabled = true;
                    sendBtnMessage.classList.add("bg-gray-400")
                    sendBtnMessage.classList.remove("bg-blue-400")
                    messageInput.value = ""

                }
            })
        })

    }

    /* If we encounted an element with the class name send-button, 
    then only execute this block of code
    */
    if (target.closest('.send-button')) {

        if (messageInput.value === "") {
            alert("Please fill all the input fields");
        }
        else {

            // Used to extract the time from the Date method
            const d = new Date();
            let h = d.getHours();
            let m = d.getMinutes();
            let time = `${h}:${m < 10 ? "0" + m : m} ${h < 12 ? " AM" : " PM"}`;

            const msgInput = messageInput.value;

            // Accessing the container where the messages sent by the user is present
            let selfMessageContainer = target.closest("#message-box").querySelector(".self-messages");

            /* Creating a new message with the div and attaching the class attribute
            to it with some tailwind classess to style it
            */
            let newMessage = document.createElement('div')
            newMessage.setAttribute("class", "flex gap-5 justify-end mt-2");

            /* Setting the Html template for the message with dynamic content 
            and then append to the self message container where all the other 
            messages are present
            */
            newMessage.innerHTML = `
        <div class="bg-white p-4 w-80 break-words rounded-xl">
        <p class="text-black text-sm ${msgInput.includes(".") ? "bg-blue-300/10 border-2 border-blue-300 p-2 rounded-lg cursor-pointer text-blue-500" : ""}">
         ${msgInput}
        </p>
        <p class="text-right mt-3 text-gray-500 text-xs">
         ${time}
          <i
            class="fa-solid fa-check-double text-blue-500 ml-2"
          ></i>
        </p>
      </div>
      <img src=${userImage} class="img-fluid mt-1 self-start" />
        `
            selfMessageContainer.appendChild(newMessage)

            // It will slide the view port of the message box to the last item (the latest message)
            let viewPort = target.closest("#message-box").querySelector("#message-box-content")
            viewPort.scrollTo(0, viewPort.scrollHeight)

            messageInput.value = ""
        }

    }


    /* Finding the text input of the message box and manipulating the typing function with
    every keydown event.
    Also making the button bg-color change based on the input length, either is empty or
    has some text inside it
     */
    if (target.closest("#message-input")) {
        target.closest("#message-input").addEventListener("keydown", () => {
            if (e.target.value.length === 1 || e.target.value.length === 0) {
                typing.forEach(element => {
                    element.classList.remove("inline-block")
                    element.classList.add("hidden")
                });
                sendBtnMessage.classList.add("bg-gray-400")
                sendBtnMessage.classList.remove("bg-blue-400")
            }
            else {
                typing.forEach(element => {
                    element.classList.add("inline-block")
                    element.classList.remove("hidden")
                });
                sendBtnMessage.classList.add("bg-blue-400")
                sendBtnMessage.classList.remove("bg-gray-400")
            }
        })
    }

    // It is for the settings of the message box and toggling it using toggle method 
    if (target.closest("#settings-button")) {
        target.closest("#settings-container").querySelector("#setting-box").classList.toggle("hidden")
    }

    let viewPort = target.closest("#message-box").querySelector("#message-box-content")
    viewPort.scrollTo(0, viewPort.scrollHeight)
})







