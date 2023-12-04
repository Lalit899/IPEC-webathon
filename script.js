function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var commentError = document.getElementById("commentError");
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    commentError.innerHTML = "";
    if (name.trim() === "") {
        nameError.innerHTML = "Name is required";
        return false;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.innerHTML = "Enter a valid email address";
        return false;
    }
    if (comment.trim() === "") {
        commentError.innerHTML = "Comment is required";
        return false;
    }
    return true;
}