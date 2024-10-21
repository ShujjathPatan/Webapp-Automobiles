

// NAVBAR 

const navbar = document.getElementById("navbar")





window.addEventListener("scroll", (nb) => {


    nb.preventDefault()

    const scrolled = window.scrollY
    if (scrolled >= 200) {
        navbar.classList.add("navSticky")
    }
    else {
        navbar.classList.remove("navSticky")


    }




})

if(!window.location.href.includes('/en/')){
    var elems = document.querySelectorAll(["h1", "h4","h5","p",'span']);
    
elems.forEach(ele=>{
     ele.style.lineHeight =  + 4 + parseFloat(getComputedStyle(ele).lineHeight.split('px')[0]) +"px"
}) 
}
// SIDEBAR 

const sidebar = document.getElementById("sidebar")



function sidebarOpen() {
    sidebar.classList.toggle("opacity")

}


// LOTTIE 

function scrollDownn() {
    window.scrollTo(0, window.innerHeight)
}

// HAMBURGER JS 


var menu = document.querySelector(".menu").children[0]
var spantwo = document.querySelector(".line-2")
var spanone = document.querySelector(".line-1")
var spanthree = document.querySelector(".line-3")




menu.onclick = () => {
    spantwo.classList.toggle("li2ne")
    spanone.classList.toggle("l1ine")
    spanthree.classList.toggle("lin3e")
    document.querySelector('.langFixer').classList.toggle('text-white')


}


// CONTACT JS 


const btns = document.querySelectorAll('.dropdown-btn')
const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach(dropdown => {

    dropdown.querySelectorAll('li').forEach(listItem => {
        listItem.addEventListener('click', () => handleDropdownValue(listItem))

    })
})

btns.forEach(btn => {
    btn.addEventListener('click', () => toggleDropdown(btn))
})
const handleSubmit = (e) => {
    e.preventDefault()
    let inputs = document.querySelectorAll(['input.required', 'textarea.required'])

    let btns = document.querySelectorAll('.dropdown-btn')
    let firstErrorIndex = null

    btns.forEach((btn, index) => {
        if (btn.querySelector('span').innerText == "Select Inquiry Type") {
            if (!firstErrorIndex) {
                firstErrorIndex = index + 1
            }
            btn.parentElement.parentElement.classList.add('error')
            setTimeout(() => {
                btn.parentElement.parentElement.classList.remove('error')
            }, 8000)
        }

    })

    inputs.forEach((input, index) => {

        if (!input.value) {
            if (!firstErrorIndex) {
                firstErrorIndex = index + 2
            }

            input.parentElement.classList.add('error')
            setTimeout(() => {
                input.parentElement.classList.remove('error')
            }, 8000)

        }

    })

    let els = [btns[0], inputs[0], inputs[1], inputs[2], inputs[3], inputs[4]]

    if (firstErrorIndex) {


        // this causes error so i commented it

        // $('html, body').animate({
        //     scrollTop: $(els[firstErrorIndex - 1]).offset().top - 150
        // }, 500);
    } 
    // form submission 
    else {
        
        // grab form
        var form = document.getElementById("myForm");

        // show loader
        var loader = document.createElement("div");
        // loader.innerHTML = "Loading...";
        loader.classList.add("loader-style");
        form.parentNode.insertBefore(loader, form);
        form.style.display = "none";

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`mail.php?message_subject=${inputs[0].value}&name=${inputs[1].value}&email=${inputs[2].value}&message=${inputs[3].value}`, requestOptions)
            .then(response => response.text())
            .then((result) => {

                // hide loader 
                loader.style.display = "none";
                
                // show message
                var message = document.createElement("div");
                message.innerHTML = result;
                message.classList.add("thanks-message");
                form.parentNode.insertBefore(message, form);
            })
            .catch((error) => {
                  
                // Show form again 
                form.style.display = "block";

                // hide loader 
                loader.style.display = "none";

            });
    }

}
document.querySelector('form').addEventListener('submit', handleSubmit)


const toggleDropdown = (btn) => {
    let dropdown = btn.parentElement.querySelector('.dropdown')
    let dropdownHeight = dropdown.querySelectorAll('li').length * 75
    dropdown.classList.toggle('max-h-0')
    dropdown.classList.toggle(`max-h-[${dropdownHeight}px]`)
    btn.classList.toggle('active')
}

const handleDropdownValue = (listItem) => {
    const dropdownBtn = listItem.parentElement.parentElement.querySelector('.dropdown-btn')
    console.log(dropdownBtn)
    const btnSpan = dropdownBtn.querySelector('span')
    btnSpan.innerHTML = listItem.innerText
    btnSpan.classList.remove('opacity-[0.56]')
    toggleDropdown(dropdownBtn)
}


document.querySelectorAll(".sidebar .links li").forEach((item, index) => {


    item.addEventListener('click', () => {
        sidebarOpen()
        spantwo.classList.toggle("li2ne")
        spanone.classList.toggle("l1ine")
        spanthree.classList.toggle("lin3e")
    })
})



const list = document.querySelectorAll(".main-nav .links li a")
for (var i = 0; i < list.length; i++) {


    list[i].onclick = function () {
        for (let j = 0; j < list.length; j++) {

            list[j].classList.remove("active")

        }
        this.classList.add("active")
    }
}

// Sidbar 

const Sidebarlist = document.querySelectorAll(".main-side .links li a")
for (var i = 0; i < Sidebarlist.length; i++) {


    Sidebarlist[i].onclick = function () {
        for (let c = 0; c < Sidebarlist.length; c++) {

            Sidebarlist[c].classList.remove("active")

        }
        this.classList.add("active")
    }
}



