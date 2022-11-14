import userImage1 from '../Images/user1.png'
import userImage2 from '../Images/user2.png'
import userImage3 from '../Images/user3.png'
import userImage4 from '../Images/user4.png'
import userImage5 from '../Images/user5.png'
import userImage6 from '../Images/user6.png'
import userImage7 from '../Images/user7.png'
const sideNavbarUsers = document.getElementById('side-navbar-users');
const sideNavbarSettings = document.getElementById('side-navbar-settings');



let userLinks = [
    {
        id: 0,
        ImageSrc: userImage1,
        online: true
    },
    {
        id: 1,
        ImageSrc: userImage2,
        online: true
    },
    {
        id: 2,
        ImageSrc: userImage3,
        online: false
    },
    {
        id: 3,
        ImageSrc: userImage4,
        online: false
    },
    {
        id: 4,
        ImageSrc: userImage5,
        online: true
    },
    {
        id: 5,
        ImageSrc: userImage6,
        online: false
    },
    {
        id: 6,
        ImageSrc: userImage7,
        online: false
    },

]

const showNavigationUsers = userLinks.map(link => {
    return (
        `<div class="relative">
        <a href="javascript:void(0)">
        <img src="${link.ImageSrc}" class="img-fluid" />
        <span class="w-2 h-2 rounded-full bg-green-400 border-1 border-white absolute inset-y-1 right-5 ${link.online ? 'inline-block' : 'hidden'}"></span>
        </a>
        </div>
        `
    )
}).join("")


sideNavbarUsers.innerHTML = showNavigationUsers
sideNavbarSettings.innerHTML =
    `<div class="flex flex-col gap-10">
<a href="javascript:void(0)"><svg class="icon w-7 h-7">
<use xlink:href="#2"></use>
</svg>
</a>
<a href="javascript:void(0)"><svg class="icon w-7 h-7">
<use xlink:href="#1"></use>
</svg>
</a>
<a href="javascript:void(0)"><svg class="icon w-7 h-7">
<use xlink:href="#notification"></use>
</svg>
</a>
<a href="javascript:void(0)"><svg class="icon w-7 h-7">
<use xlink:href="#3"></use>
</svg>
</a>
</div>
`
