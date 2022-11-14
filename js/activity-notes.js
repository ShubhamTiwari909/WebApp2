import { mainContentBox } from './dom-loader'

export let wrapData = (wrapperContainer, inputMessage, sendBtn, textType, form, formToggler) => {

  let data = [];
  let dataId = 0;


  const mapData = () => {
    let showActivity =  data.map(item => {
      return (
        `
    <div class="flex justify-between items-center bg-white p-6">
    <div class="flex gap-8 items-center flex-1 text-sm">
     <svg class="icon w-10 h-10">
      <use xlink:href="#move"></use>
     </svg>
    <p class="relative ml-3">
    <span class="inline-block w-2 h-2 rounded-full border-1 border-white absolute inset-y-1.5 -left-6 ${displayNoteColor(item.texttype)}"></span>
    ${item.text}</p>
    <p class="px-4 py-2 rounded-md ${displayNoteLabelColor(item.texttype)}">${item.texttype}</p>
    </div>
    <button id="${item.id}" class="ml-5">
     <svg class="icon" width="18" height="18">
      <use xlink:href="#3682063881582863582"></use>
     </svg>
    </button>
    </div>
    `
      )
    }).join("")


    let showNotes = data.map(item => {
      return (
        `
    <div class="flex flex-col justify-between items-center bg-white p-4 relative">
    <p class="ml-3 h-32 overflow-auto px-2">
    <span class="inline-block w-2 h-2 rounded-full border-1 border-white absolute inset-y-6 left-4 ${displayNoteColor(item.texttype)}"></span>
    ${item.text}</p>
    <div class="flex gap-5 items-center text-sm">
    <p class="px-4 py-2 rounded-md ${displayNoteLabelColor(item.texttype)}">${item.texttype}</p>
    <button id="btn-${item.id}" class="ml-5">
     <svg class="icon" width="18" height="18">
      <use xlink:href="#3682063881582863582"></use>
     </svg>
    </button>
    </div>
    </div>
    `
      )
    }).join("")

    wrapperContainer.innerHTML = wrapperContainer.id === "activities" ? showActivity : showNotes;
    for (let i = 0; i < wrapperContainer.children.length; i++) {
      wrapperContainer.children[i].children[1].addEventListener("click", () => {
        deleteItem(i)
      })
    }
  }

  let deleteItem = (id) => {
    let deleteData = data.findIndex(item => item.id === id)
    data.splice(deleteData, 1);
    mapData()
  }

  let displayNoteColor = (value) => {
    if (value === "call" || value === "important") {
      return "bg-blue-400"
    }
    else if (value === "appointment") {
      return "bg-green-400"
    }
    else {
      return "bg-gray-400"
    }
  }


  let displayNoteLabelColor = (value) => {
    if (value === "call") {
      return "bg-blue-400/10 text-blue-500"
    }
    else if (value === "appointment") {
      return "bg-green-400/10 text-green-500"
    }
    else {
      return "bg-gray-400/10 text-gray-500"
    }
  }
  sendBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (inputMessage.value === "") {
      alert("Please enter some text")
    }
    else {
      let selectedNote = ""
      for (let i = 0; i < textType.length; i++) {
        if (textType[i].checked) {
          selectedNote = textType[i].value
        }
      }
      data.push({ id: dataId, text: inputMessage.value, texttype: selectedNote });
      mapData()
      dataId++;
    }

  })

  formToggler.addEventListener("click", function () {
    if (form.classList.contains("hidden")) {
      form.classList.remove("hidden");
      form.classList.add("block")
    }
    else {
      form.classList.add("hidden");
      form.classList.remove("block")
    }
    mainContentBox.scrollTo(0, mainContentBox.scrollHeight)
  })


  mapData()
}

