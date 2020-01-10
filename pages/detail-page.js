const getUrl = window.location.href
const url = new URL(getUrl);
const detailsImageUrl = url.searchParams.get("detailsImageUrl");
const imageTitle = url.searchParams.get("imageTitle");
const imageTitleHeading = document.getElementById("details-title");
const imageSrc = document.getElementById("details-image");
imageTitleHeading.innerText = imageTitle;
imageSrc.setAttribute("src",detailsImageUrl);
imageSrc.setAttribute("alt", imageTitle);

function submitComment() {
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
    const getName = document.getElementById("name");
    const name = capitalizeFirstLetter(getName.value);
    const getMessage = document.getElementById("message");
    const message = getMessage.value;

    const messageValidation = (name, message) => {
        if (!name) {
            alert("Enter your Name!")
            return null
        }
        if (!message) {
            alert("Comment cannot be empty!")
            return null
        }
        if (message.length > 280) {
            alert("Your comment is too long!");
            return null;
        }
        if (name && message) {
            const commentDiv = document.createElement("div");
            const commentH2 = document.createElement("h4");
            const commentP = document.createElement("p");
            commentH2.innerText = `${name} said:`;
            commentP.innerText = message;
            commentDiv.classList.add("section");
            commentDiv.appendChild(commentH2);
            commentDiv.appendChild(commentP);
            const commentSection = document.getElementById("comment");
            commentSection.appendChild(commentDiv);
            getName.value = "";
            getMessage.value = "";
            return true;
        }
        alert("Name and message cannot be empty!")
        return null;
    }
    messageValidation(name, message);
}