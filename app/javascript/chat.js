const chat = document.getElementById("chatarea")
const msgbox = document.getElementById("msgBox")
console.log("Hiii")
const responses = {
    "signup": "To signup click here: <a href= 'http://127.0.0.1:3000/signup'>Signup</a>",
    "login": "To login click here: <a href= 'http://127.0.0.1:3000/login'>Login</a> ",
    "upload": "To Upload Hostel you have to be Hostel owner and click here to upload hostel :  <a href= 'http://127.0.0.1:3000/upload'>Upload</a>",
    "hostel":"Click here : <a href= 'http://127.0.0.1:3000/hostels'>All Hostels</a> to view all hostels",
    "hi":"Hi ! tell me your queries"

}
const appendMsg = (msg, opt) => {
    const chatDiv = document.createElement("div")
    chatDiv.classList.add("chatBubble")
    chatDiv.innerHTML = `<p class="text-${opt} d-block p-2">${msg}</p>`;
    chat.appendChild(chatDiv)
}
msgbox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const msgbody = msgbox.value.toLowerCase()
        appendMsg(" <i class='fa-solid fa-user' style='color: #000000;'></i> You: " + msgbody, "primary")
        msgbox.value="";
        if (msgbody.includes("signup")) {
            setTimeout(() => {
                const chatResponse = "<i class='fa-solid fa-robot' style='color: #000000;'></i> Bot: " + responses["signup"]
                appendMsg(chatResponse, "success")
            }, 500)


        }
        else if (msgbody.includes("upload")) {
            setTimeout(() => {
                const chatResponse = "<i class='fa-solid fa-robot' style='color: #000000;'></i> Bot: " + responses["upload"]
                appendMsg(chatResponse, "success")
            }, 500)


        }
        else if (msgbody.includes("hostel")) {
            setTimeout(() => {
                const chatResponse = "<i class='fa-solid fa-robot' style='color: #000000;'></i> Bot: " + responses["hostel"]
                appendMsg(chatResponse, "success")
            }, 500)


        }
        else if (msgbody.includes("login")) {
            setTimeout(() => {
                const chatResponse = "<i class='fa-solid fa-robot' style='color: #000000;'></i> Bot: " + responses["login"]
                appendMsg(chatResponse, "success")
            }, 500)


        }else if (msgbody.includes("hi")) {
            setTimeout(() => {
                const chatResponse = "<i class='fa-solid fa-robot' style='color: #000000;'></i> Bot: " + responses["hi"]
                appendMsg(chatResponse, "success")
            }, 500)


        }
        else {
            setTimeout(() => {
                const chatResponse = "<i class='fa-solid fa-robot' style='color: #000000;'></i> Bot: " + "Sorry ! i dont know that"
                appendMsg(chatResponse, "danger")
            }, 500)
        }
    }
})