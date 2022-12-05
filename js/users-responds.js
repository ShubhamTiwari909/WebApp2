import { statsContainer } from "./dom-loader";



// Attaching the event listener to the stats main container having all the stats boxes
statsContainer.addEventListener("click", (e) => {
    const target = e.target;

    /* Accessing the dropdown button which has the timestamp buttons
     to change the timestamp from week,month and year and see the stats 
    */
    let btn = target.closest(".users-responded-box").querySelector(".users-stats-settings-toggler");

    let validTimePeriod = target.classList.contains("time-period");

    // toggling the time stamp container between hidden and showing using toggle method
    if (btn) {
        // Selecting the time stamp buttons container having all the buttons 
        let container = target.closest(".users-responded-box").querySelector(".users-stats-settings")
        container.classList.toggle("hidden")
    }


    // Checking if the element we have clicked has the time-period class name or not
    if (validTimePeriod) {

        // Data related to the users who have answered
        let answeredTimeObject = {
            week: 12,
            month: 55,
            year: 310
        }

        // Data related to the users who haan't answered
        let unansweredTimeObject = {
            week: 8,
            month: 25,
            year: 120
        }

        // Accessing the answered and unanswered text separately
        let answeredUsersText = target.closest(".users-responded-box").querySelector(".answered-user-count")
        let unansweredUsersText = target.closest(".users-responded-box").querySelector(".unanswered-user-count")


        // manipulating the answered users data (user count and time stamp)
        if (answeredUsersText) {
            target.closest(".users-responded-box").querySelector(".answered-user-count").innerText = answeredTimeObject[target.innerText]
            target.closest(".users-responded-box").querySelector(".answered-stats-timestamp").innerText = target.innerText
        }

        // manipulating the unanswered users data (user count and time stamp)
        if (unansweredUsersText) {
            target.closest(".users-responded-box").querySelector(".unanswered-user-count").innerText = unansweredTimeObject[target.innerText]
            target.closest(".users-responded-box").querySelector(".unanswered-stats-timestamp").innerText = target.innerText
        }
    }
})