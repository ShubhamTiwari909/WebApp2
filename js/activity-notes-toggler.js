import {activityToggler,activityBox,notesToggler,notesBox} from './dom-loader'


activityToggler.addEventListener("click",function(e) {
    e.preventDefault();
    if(activityBox.classList.contains("hidden")){
        activityBox.classList.add("block")
        activityBox.classList.remove("hidden")
        notesBox.classList.add("hidden")
        notesBox.classList.remove("block")
        notesToggler.classList.add("text-gray-400")
        activityToggler.classList.remove("text-gray-400")
    }
})

notesToggler.addEventListener("click",function(e) {
    e.preventDefault();
    if(notesBox.classList.contains("hidden")){
        activityBox.classList.add("hidden")
        activityBox.classList.remove("block")
        notesBox.classList.add("block")
        notesBox.classList.remove("hidden")
        activityToggler.classList.add("text-gray-400")
        notesToggler.classList.remove("text-gray-400")
    }
})