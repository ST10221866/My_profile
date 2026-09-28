const message = document.getElementById("message");
const commentInput = document.getElementById("commentinput");
const commentForm = document.getElementById("commentForm");

commentForm.addEventListener("submit", function (event) {
    //Prevevt the form
    event.preventDefault();
    if (commentInput.value === "") {
        message.textContent = "Please enter a comment.";
        message.style.color = "red";
        return;
    }else{
        // Display the comment
        message.textContent = "Thank you for your comment!";
        message.style.color = "green";
    }

    // // Clear the input field
    // commentInput.value = "";
})
let lastScrollTop = 0;
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {

        let currentScroll = window.pageYOffset ||
                            document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Scrolling down
            navbar.classList.add("nav-hidden");
        } else {
            // Scrolling up
            navbar.classList.remove("nav-hidden");
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });