// For toggle button
let toggleBtn = document.querySelector(".menu-toggle");

toggleBtn.addEventListener("click", function() {
    let navLinks = document.querySelector('.nav-links');
    let connect = document.querySelector('.connect');

    navLinks.classList.toggle('open');
    connect.classList.toggle('open');
    toggleBtn.classList.toggle('open');

    if (toggleBtn.classList.contains('open')) {
        toggleBtn.innerHTML = "&times;";
    } else {
        toggleBtn.innerHTML = "☰";
    }
});


//sending form to email
// let sendMail = (event) => {
//     event.preventDefault();

//     let parms = {
//         first_name: document.getElementById('fname').value,
//         last_name: document.getElementById('lname').value,
//         email: document.getElementById('email').value,
//         // subject: document.getElementById('subject').value,
//         message: document.getElementById('message').value
//     };

//     emailjs.send('service_j3ru07l', 'template_bfa9jcy', parms)
//     .then((response) => {
//         console.log('Email sent successfully!', response.status, response.text);
//     })
//     .catch((error) => {
//         console.error('Error sending email:', error);
//     });
// };

// document.querySelector('.contact-form').addEventListener('submit', sendMail);



//scroll trigger animations
let cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", function(dets) {
    cursor.style.left = dets.clientX - 30 + "px";
    cursor.style.top = dets.clientY - 20 + "px";
});

// gsap.registerPlugin(ScrollTrigger);

gsap.from("#about", {
    opacity: 0.1,
    scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        start: "top 55%",  
        end: "top 100%",    
        scrub: 4          
    }
});

// Animate "Me" div
gsap.from("#me", {
    opacity: 0.1,
    scrollTrigger: {
        trigger: "#me",
        scroller: "body",
        start: "top 45%", 
        end: "top 100%",  
        scrub: 4          
    }
});

//skills animate
gsap.from("#skill", {
    opacity: 0.1,
    scrollTrigger: {
        trigger: "#skill",
        scroller: "body",
        start: "top 55%", 
        end: "top 100%",  
        marker: true,
        scrub: 4          
    }
});

//work animate
gsap.from("#work", {
    opacity: 0.1,
    scrollTrigger: {
        trigger: "#work",
        scroller: "body",
        start: "top 55%", 
        end: "top 100%",  
        scrub: 4          
    }
});

//contact animate
gsap.from("#contact", {
    opacity: 0.1,
    scrollTrigger: {
        trigger: "#contact",
        scroller: "body",
        start: "top 55%", 
        end: "top 100%",  
        scrub: 4          
    }
});

gsap.from("#mee", {
    opacity: 0.1,
    scrollTrigger: {
        trigger: "#mee",
        scroller: "body",
        start: "top 45%", 
        end: "top 100%",  
        scrub: 4          
    }
});
