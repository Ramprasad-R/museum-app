function submitComment() {
    const getName = document.getElementById("name");
    const name = getName.value;
    const getMessage = document.getElementById("message");
    const message = getMessage.value;
    
    const messageValidation = (name, message) => {
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
        if (message.length > 280) {
            alert("Your comment is too long!");
            return null;
        }
        alert("Name and message cannot be empty!")
        return null;
    }
    messageValidation(name,message);
}