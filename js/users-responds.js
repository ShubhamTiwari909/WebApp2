import { answeredUsers, unansweredUsers } from './dom-loader';


let answeredUsersData = [
    {
        users: '5',
        timestamp: "week"
    },
    {
        users: '12',
        timestamp: "month"
    },
    {
        users: '170',
        timestamp: "year"
    },
]
let unansweredUsersData = [
    {
        users: '10',
        timestamp: "week"
    },
    {
        users: '20',
        timestamp: "month"
    },
    {
        users: '250',
        timestamp: "year"
    },
]


let wrapperStats1 = (data, userReponseType) => {

    let dynamicTimestampAnswered = "week"

    const toggleSettings = () => {
        mapUsersStat()
        userReponseType.children[1].addEventListener("click", function () {
            if (userReponseType.children[2].classList.contains("hidden")) {
                userReponseType.children[2].classList.add("flex")
                userReponseType.children[2].classList.remove("hidden")
            }
            else {
                userReponseType.children[2].classList.remove("flex")
                userReponseType.children[2].classList.add("hidden")
            }
        })
    }

    const mapUsersStat = () => {
        const showUsers = data.filter(item => {
            return item.timestamp === dynamicTimestampAnswered
        }).map(item => {
            return (
                ` 
            <div>
            <p class="text-sm text-black">Users who ${userReponseType.id === "answered-users" ? "" : "hasn't"} chose you</p>
            <p class="text-2xl ${userReponseType.id === "answered-users" ? "text-blue-500" : "text-red-500"} mt-5">
              ${item.users} <span class="text-sm text-gray-400">This ${item.timestamp}</span>
            </p>
          </div>
          <a href="javascript:void(0)" class="users-stats-settings-toggler">
            <svg class="icon w-10 h-10">
              <use xlink:href="#options"></use>
            </svg>
          </a>

           <ul class="bg-white p-3 absolute top-8 right-2 hidden flex-col gap-3 users-stats-settings" id="users-stats-settings">
            <li><a href="javascript:void(0)" id="${userReponseType.id === "answered-users" ? "ans-week" : "unans-week"}">week</a></li>
            <li><a href="javascript:void(0)" id="${userReponseType.id === "answered-users" ? "ans-month" : "unans-month"}">month</a></li>
            <li><a href="javascript:void(0)" id="${userReponseType.id === "answered-users" ? "ans-year" : "unans-year"}">year</a></li>
           </ul>
          </div>`
            )
        }).join("")

        userReponseType.innerHTML = showUsers;

        if (userReponseType.id === "answered-users") {
            let week = document.getElementById("ans-week")
            let month = document.getElementById("ans-month")
            let year = document.getElementById("ans-year")

            const timeArray = [week, month, year]
            timeArray.forEach(element => {
                element.addEventListener("click", (e) => {
                    e.preventDefault();
                    dynamicTimestampAnswered = element.innerText;
                    toggleSettings()
                })
            });
        }
        else {
            let unans_week = document.getElementById("unans-week")
            let unans_month = document.getElementById("unans-month")
            let unans_year = document.getElementById("unans-year")

            const timeArray = [unans_week, unans_month, unans_year]
            timeArray.forEach(element => {
                element.addEventListener("click", (e) => {
                    e.preventDefault();
                    dynamicTimestampAnswered = element.innerText;
                    toggleSettings()
                })
            });
        }

    }


    mapUsersStat()
    toggleSettings()

}



wrapperStats1(answeredUsersData, answeredUsers)
wrapperStats1(unansweredUsersData, unansweredUsers)

