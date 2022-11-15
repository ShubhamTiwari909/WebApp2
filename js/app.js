require('../sass/index.scss')
require("./tailwind.config")
require("./image-bundler.js");
require("./side-navbar.js");
require("./message-box.js");
require("./activity.js");
require("./notes.js");
require("./activity-notes-toggler.js");
require("./activity-notes.js");
require("./curver-chart.js")
require("./users-responds.js")

import { settingsButton, settingsBox } from './dom-loader'

document.addEventListener('click', function (event) {

    let usersSettingsToggler = document.getElementsByClassName("users-stats-settings-toggler");
    let usersSettings = document.getElementsByClassName("users-stats-settings")

    if (!settingsButton.contains(event.target)) {
        settingsBox.classList.add("hidden")
        settingsBox.classList.remove("block")
    }
    for (let i = 0; i < usersSettingsToggler.length; i++) {
        if (!usersSettingsToggler[i].contains(event.target)) {
            usersSettings[i].classList.add("hidden")
            usersSettings[i].classList.remove("block")
        }
    }
});


