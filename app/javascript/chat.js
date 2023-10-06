const chat = document.getElementById("chat")
const msgbox = document.getElementById("msgBox")

const responses = {
    "signup": "To signup click here: <a href= 'http://127.0.0.1:3000/signup'>Signup</a>",
    "login": "To login click here: <a href= 'http://127.0.0.1:3000/login'>Login</a> ",
    "upload": "To Upload Hostel you have to be Hostel owner and click here to upload hostel :  <a href= 'http://127.0.0.1:3000/upload'>Upload</a>",
    "hostel":"Click here : <a href= 'http://127.0.0.1:3000/hostels'>All Hostels</a> to view all hostels",
    "hi":"Hi ! how can i help you ?"

}
const appendMsg = (msg, opt) => {
    const chatDiv = document.createElement("div")
    chatDiv.innerHTML = `<p class="text-${opt} d-block p-2"><strong>${msg}</strong></p>`;
    chat.appendChild(chatDiv)
}
msgbox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const msgbody = msgbox.value.toLowerCase()
        appendMsg("You: " + msgbody, "primary")
        msgbox.value="";
        if (msgbody.includes("signup")) {
            setTimeout(() => {
                const chatResponse = "Bot: " + responses["signup"]
                appendMsg(chatResponse, "success")
            }, 500)


        }
        else if (msgbody.includes("upload")) {
            setTimeout(() => {
                const chatResponse = "Bot: " + responses["upload"]
                appendMsg(chatResponse, "success")
            }, 500)


        }
        else if (msgbody.includes("hostel")) {
            setTimeout(() => {
                const chatResponse = "Bot: " + responses["hostel"]
                appendMsg(chatResponse, "success")
            }, 500)


        }
        else if (msgbody.includes("login")) {
            setTimeout(() => {
                const chatResponse = "Bot: " + responses["login"]
                appendMsg(chatResponse, "success")
            }, 500)


        }else if (msgbody.includes("hi")) {
            setTimeout(() => {
                const chatResponse = "Bot: " + responses["hi"]
                appendMsg(chatResponse, "success")
            }, 500)


        }
        else {
            setTimeout(() => {
                const chatResponse = "Bot: " + "Sorry ! i dont know that"
                appendMsg(chatResponse, "danger")
            }, 500)
        }
    }
})