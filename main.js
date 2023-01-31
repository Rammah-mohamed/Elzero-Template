//Start Scroll Top Button
let upBtn = document.querySelector(".up-btn");
window.addEventListener("scroll", e => {
    if (window.scrollY > 0) {
        upBtn.style.display = "block";
    } else {
        upBtn.style.display = "none";
    }
})
upBtn.onclick = () => {
    window.scrollTo(0, 0);
}

//Nav Links Scroll To Section
let links = document.querySelectorAll(".header .main-nav a");
scrollToSection(links);
//Nav Mega-menu
let specialLink = document.querySelector(".header .main-nav .special"),
    megaMenu = document.querySelector(".header .main-nav .mega-menu");
specialLink.onclick = (e) => {
    e.preventDefault();
    megaMenu.classList.toggle("show");
}

//Start Progress
let skillSection = document.querySelector(".our-skills"),
    progress = document.querySelectorAll(".our-skills .progress span");
window.addEventListener("scroll", e => {
    if (window.scrollY >= skillSection.offsetTop - 150) {
        progress.forEach(p => {
            p.style.width = p.dataset.progress;
        })
    }
})

// Event CountDown
let countDownDate = new Date("Jun 12, 2023 23:59:59").getTime();

let count = setInterval(() => {
    let dateNow = new Date().getTime(),
        dateDiff = countDownDate - dateNow,
        days = Math.floor(dateDiff / (1000 * 60 * 60 * 24)),
        hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
        minuts = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60)),
        seconds = Math.floor(dateDiff % (1000 * 60) / 1000);

    document.querySelector(".days").innerHTML = dateDiff < 100 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minuts").innerHTML = minuts < 10 ? `0${minuts}` : minuts;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    if (dateDiff < 0) {
        clearInterval(count);
    }
}
    , 1000)

//Start Video Preview Change
let img = document.querySelector(".video .preview img"),
    previewLinks = document.querySelectorAll(".video .links li"),
    previewInfo = document.querySelector(".video .preview .info");
activator(previewLinks);
previewLinks.forEach(link => {
    link.addEventListener("click", e => {
        img.src = link.dataset.img;
        previewInfo.textContent = link.firstElementChild.textContent;
    })
})

//Start stats counter
let stats = document.querySelectorAll(".stats .box .number"),
    statSection = document.querySelector(".stats"),
    started = false;
window.addEventListener("scroll", e => {
    if (window.scrollY >= statSection.offsetTop - 250) {
        if (!started) {
            stats.forEach(stat => counter(stat));
        }
        started = true;
    }
})
//function
function scrollToSection(elements) {
    elements.forEach(ele => {
        ele.addEventListener("click", e => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
};

function activator(elements) {
    elements.forEach(el => {
        el.addEventListener("click", e => {
            e.preventDefault();
            elements.forEach(el => {
                el.classList.remove("active");
            })
            el.classList.add("active");
        })
    })
}

function counter(el) {
    let countInterval,
        goal = el.dataset.goal;
    countInterval = setInterval(() => {
        el.textContent++;
        if (el.textContent === goal) {
            clearInterval(countInterval);
        }
    }, 3000 / goal)


}