import { messageBox, sendBtnMessage, messageInput, messageBoxContainer, settingsButton, settingsBox, chatFileInput, typing } from './dom-loader'
import userImage from '../Images/mask.png'


let messageId = 2;
let selfMessages = [
    {
        id: 0,
        text: 'This is a demo text for this Web App This is a demo text for this Web App'
    },
    {
        id: 1,
        text: 'This is a demo text for this Web App This is a demo text for this Web App'
    }
];


const typingAnimation = () => {

    chatFileInput.addEventListener("change", () => {
        let showFileName = document.getElementById("show-file-name")
        if (chatFileInput.files[0].name !== "" || chatFileInput.files[0].name !== undefined) {
            sendBtnMessage.disabled = false;
            sendBtnMessage.classList.add("bg-blue-400")
            sendBtnMessage.classList.remove("bg-gray-400")
            messageInput.value = chatFileInput.files[0].name;
        }
        else {
            sendBtnMessage.disabled = true;
            sendBtnMessage.classList.add("bg-gray-400")
            sendBtnMessage.classList.remove("bg-blue-400")
            messageInput.value = ""
           
        }
    })
    messageInput.addEventListener("mouseout", function () {
        if (messageInput.value !== "") {
            sendBtnMessage.disabled = false;
            sendBtnMessage.classList.add("bg-blue-400")
            sendBtnMessage.classList.remove("bg-gray-400")
        }
        else {
            sendBtnMessage.disabled = true;
            sendBtnMessage.classList.add("bg-gray-400")
            sendBtnMessage.classList.remove("bg-blue-400")
        }
    })

    messageInput.addEventListener("focus", function () {
        typing.forEach(element => {
            element.classList.add("inline-block")
            element.classList.remove("hidden")
        });
        sendBtnMessage.classList.add("bg-blue-400")
        sendBtnMessage.classList.remove("bg-gray-400")
    })

    messageInput.addEventListener("focusout", function () {
        typing.forEach(element => {
            element.classList.remove("inline-block")
            element.classList.add("hidden")
        });
        sendBtnMessage.classList.add("bg-gray-400")
        sendBtnMessage.classList.remove("bg-blue-400")
    })
}

const displaySelfMessages = () => {
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let time = `${h}:${m < 10 ? "0" + m : m} ${h < 12 ? " AM" : " PM"}`;

    const messages = selfMessages.map(message => {
        return (
            `<div class="flex gap-5 justify-end mt-2">
        <div class="bg-white p-4 w-80 break-words rounded-xl">
          <p class="text-black text-sm ${message.text.includes(".") ? "bg-blue-300/10 border-2 border-blue-300 p-2 rounded-lg cursor-pointer text-blue-500" : ""}">
           ${message.text}
          </p>
          <p class="text-right mt-3 text-gray-500 text-xs">
           ${time}
            <i
              class="fa-solid fa-check-double text-blue-500 ml-2"
            ></i>
          </p>
        </div>
        <img src=${userImage} class="img-fluid mt-1 self-start" />
      </div>`
        )
    }).join("")

    messageBox.innerHTML = messages;
}


displaySelfMessages()


sendBtnMessage.addEventListener("click", function (e) {
    e.preventDefault();
    selfMessages.push({ id: messageId, text: messageInput.value || chatFileInput.files[0].name });
    displaySelfMessages()
    messageBoxContainer.scrollTo(0, messageBoxContainer.scrollHeight)
    messageId++;
    messageInput.value = ""
    sendBtnMessage.classList.add("bg-gray-400")
    sendBtnMessage.classList.remove("bg-blue-400")
    changeImage(2)
})


// toggling chat settings

settingsButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (settingsBox.classList.contains("hidden")) {
        settingsBox.classList.add("block")
        settingsBox.classList.remove("hidden")
    }
    else {
        settingsBox.classList.add("hidden")
        settingsBox.classList.remove("block")
    }
})

messageBoxContainer.scrollTo(0, messageBoxContainer.scrollHeight)


typingAnimation()
