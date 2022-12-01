import { mainContentBox } from './dom-loader'

export let wrapData = (wrapperContainer, inputMessage, textType, form, formToggler) => {
  var selectedRow = null;
  let idCount = 1

  // clear all fields
  const clearFields = () => {
    inputMessage.value = '';
  }

  // add data
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const msgInput = inputMessage.value;

    if (msgInput === "") {
      alert("Please fill all the input fields");
    }
    else {
      if (selectedRow === null) {
        const list = wrapperContainer;
        const row = document.createElement("div");
        let selectedNote = ""
        for (let i = 0; i < textType.length; i++) {
          if (textType[i].checked) {
            selectedNote = textType[i].value
          }
        }

        row.setAttribute("class", "flex justify-between items-center bg-white p-6 mt-4");

        row.innerHTML = ` 
        <div class="flex gap-8 items-center flex-1 text-sm">
        <svg class="icon w-10 h-10">
         <use xlink:href="#move"></use>
        </svg>
       <p class="relative ml-3">
       <span class="inline-block w-2 h-2 rounded-full border-1 border-white absolute inset-y-1.5 -left-6 ${displayNoteColor(selectedNote)}"></span>
       ${msgInput}</p>
       <p class="px-4 py-2 rounded-md ${displayNoteLabelColor(selectedNote)}">${selectedNote}</p>
       </div>
       <button class="ml-5 edit">
        <svg class="icon" width="18" height="18">
         <use xlink:href="#3682063881582863582"></use>
        </svg>
       </button>
       <button class="ml-5 delete">
        <svg class="icon" width="18" height="18">
         <use xlink:href="#3682063881582863582"></use>
        </svg>
       </button>
            `;

        list.appendChild(row);
        selectedRow = null;
        if (list.children.length === 0) {
          list.classList.add("hidden");
          list.classList.remove("block")
        }
        else {
          list.classList.remove("hidden");
          list.classList.add("block")
        }
      }
      else {
        selectedRow.children[0].children[1].textContent = inputMessage.value;
        selectedRow = null;
      }
      clearFields()
    }
    wrapperContainer.scrollTo(0, wrapperContainer.scrollHeight)
    idCount++;
  })


  // edit method
  wrapperContainer.addEventListener("click", (e) => {
    e.preventDefault()
    let target = e.target;
    let editButton = target.parentElement.parentElement;
    let itemToEdit = target.parentElement.parentElement.parentElement
    if (editButton.classList.contains("edit")) {
      selectedRow = itemToEdit;
      inputMessage.value = selectedRow.children[0].children[1].textContent.trim();
    }
  })


  // delete method
  wrapperContainer.addEventListener("click", (e) => {
    let target = e.target;
    let deleteButton = target.parentElement.parentElement;
    let itemToDelete = target.parentElement.parentElement.parentElement
    let mainContainer = target.parentElement.parentElement.parentElement.parentElement;
    if (deleteButton.classList.contains("delete")) {
      mainContainer.removeChild(itemToDelete);
    }
  })


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

}

