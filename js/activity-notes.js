import { mainContentBox } from './dom-loader'

// Used for setting the current row as selected row
var selectedRow = null;

export let wrapData = (wrapperContainer, inputMessage, textType, form, formToggler) => {

  // add data
  addNewRow(wrapperContainer,form,inputMessage,textType)

  // edit and delete method
  editAndDelete(wrapperContainer,inputMessage)

  // Form toggle
  formToggling(form,formToggler)

}



// Create new row with data
const addNewRow = (wrapperContainer,form,inputMessage,textType) => {
  // clear all fields
  const clearFields = () => {
    inputMessage.value = '';
  }

  // Attaching a click event listener to form to get the input values and radio button values
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    // setting the msgInput value to input value of the input box
    const msgInput = inputMessage.value;

    // if the input is empty, show an alert box
    if (msgInput === "") {
      alert("Please fill all the input fields");
    }

    else {
      if (selectedRow === null) {
        // setting the list value to wrapperContainer which contains all the rows
        const list = wrapperContainer;
        // Creating a div element for the new row
        const row = document.createElement("div");

        /* This loops through all the radio buttons and set the texttype value
         to the one which is checked */
        let selectedNote = ""
        for (let i = 0; i < textType.length; i++) {
          if (textType[i].checked) {
            selectedNote = textType[i].value
          }
        }

        // setting the class attribute which some tailwind classnames
        row.setAttribute("class", "flex justify-between items-center bg-white p-6 mt-4 row-data");


        // creating the row structure using innerHTML
        row.innerHTML = ` 
        <div class="flex gap-8 items-center flex-1 text-sm">
        <svg class="icon w-10 h-10">
         <use xlink:href="#move"></use>
        </svg>
       <p class="relative ml-3">
       <span class="inline-block w-2 h-2 rounded-full border-1 border-white absolute inset-y-1.5 -left-6 ${displayNoteColor(selectedNote)}"></span>
       <span>${msgInput}<span></p>
       <p class="px-4 py-2 rounded-md ${displayNoteLabelColor(selectedNote)}">${selectedNote}</p>
       </div>
       <button class="ml-5 edit">
       <svg class="icon text-gray-400" width="18" height="18">
        <use xlink:href="#383148_edit_icon"></use>
       </svg>
       </button>
       <button class="ml-5 delete">
        <svg class="icon" width="18" height="18">
         <use xlink:href="#3682063881582863582"></use>
        </svg>
       </button>
            `;


        // Appending the new row to the list
        list.appendChild(row);
        selectedRow = null;

        /*This is checking if the list length is 0 or not,if it is zero
         hide the list else show it*/
        if (list.children.length === 0) {
          list.classList.add("hidden");
          list.classList.remove("block")
        }
        else {
          list.classList.remove("hidden");
          list.classList.add("block")
        }
      }

       /*This part deals with the edit feature, if the selected row is not null
       then set the input value as the selected row text value*/
      else {
        selectedRow.children[0].children[1].children[1].textContent = inputMessage.value;
        selectedRow = null;
      }
      clearFields()
    }

    /* It scrolls down the view to the last row 
    which is the latest one added in the list */
    wrapperContainer.scrollTo(0, wrapperContainer.scrollHeight)
  })
}




const editAndDelete = (wrapperContainer, inputMessage) => {
  // wrapper container here is the main container which all the rows
  wrapperContainer.addEventListener("click", (e) => {
    e.preventDefault()
    let target = e.target;
    let itemToInteract = target.closest(".row-data");

    /* edit method - find the closest button having the .edit class and then
    assigning the selected row as the row which is selected by 
    closes row which have the .row-data class */
    if (target.closest(".edit")) {
      selectedRow = itemToInteract;
      // setting the input value same as the selected row text value
      inputMessage.value = selectedRow.children[0].children[1].children[1].textContent.trim();
    }

    /* delete method - if checks the closes button with .delete class and then
       check for the closest element which have the .rows-container class which is
       the main container having all the rows and then remove this row from it
       the row here is the one which is closest to that particular delete button */
    if (target.closest(".delete")) {
      target.closest(".rows-container").removeChild(itemToInteract);
    }

    // If the main container having all the rows is empty, make it hidden
    if (wrapperContainer.children.length === 0) {
      wrapperContainer.classList.add("hidden")
    }
  })
}





// Display dot background color
const displayNoteColor = (value) => {
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



// Display label color
const displayNoteLabelColor = (value) => {
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


// Toggling the form 

const formToggling = (form,formToggler) => {
  // Toggle the form based on the class it contains between hidden and block
  formToggler.addEventListener("click", function () {
    form.classList.toggle("hidden");
    mainContentBox.scrollTo(0, mainContentBox.scrollHeight)
  })
}




