const chatBtn = document.getElementById("chatIcon")
const chatBox = document.getElementById("chatBoxContainer")
let toggle = false;
const chatToggleHandler = () => {

    if (toggle) {
        chatBox.classList.remove("hideMe")
    } else {
        chatBox.classList.add("hideMe")
    }
    toggle = !toggle;
}

chatBtn.addEventListener("click", chatToggleHandler)
