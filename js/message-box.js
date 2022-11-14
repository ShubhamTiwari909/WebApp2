const messageBox = document.getElementById('self-messages');
const sendBtn = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');
const messageBoxContainer = document.getElementById('message-box-content')
const settingsButton = document.getElementById('settings-button');
const settingsBox = document.getElementById('setting-box');
const typing = document.querySelectorAll(".bounce")
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

    messageInput.addEventListener("focus", function () {
        typing.forEach(element => {
            element.classList.add("inline-block")
            element.classList.remove("hidden")
        });
    })
    messageInput.addEventListener("mouseout", function () {
        typing.forEach(element => {
            element.classList.remove("inline-block")
            element.classList.add("hidden")
        });
    })
}

const displaySelfMessages = () => {
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let time = `${h}:${m < 10 ? "0"+m : m} ${h < 12 ? " AM" : " PM"}`;

    const messages = selfMessages.map(message => {
        return (
            `<div class="flex gap-5 justify-end mt-2" >
        <div class="bg-white p-4 w-80 break-words rounded-xl">
          <p class="text-black text-sm">
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
    })

    messageBox.innerHTML = messages;
}


displaySelfMessages()

sendBtn.addEventListener("click", function (e) {
    e.preventDefault();
    selfMessages.push({ id: messageId, text: messageInput.value });
    displaySelfMessages()
    messageBoxContainer.scrollTo(0, messageBoxContainer.scrollHeight)
    messageId++;
    messageInput.value = ""
})

settingsButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (settingsBox.classList.contains("hidden")) {
        settingsBox.classList.add("block")
        settingsBox.classList.remove("hidden")
    }
    else {
        settingsBox.classList.add("hidden")
        settingsBox.classList.remo("block")
    }
})

messageBoxContainer.scrollTo(0, messageBoxContainer.scrollHeight)


typingAnimation()
