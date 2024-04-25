const unReadMessage = document.querySelectorAll(".unread");
const undread = document.getElementById("notifes");
const markAll = document.getElementById("mark_all");

undread.innerHTML = unReadMessage.length;

unReadMessage.forEach((message) => {
    message,addEventListener("click", () => {
        message.classList.remove("unread");
        const newUnreadMessages = document.querySelectorAll(".unread")
        undread.innerHTML = newUnreadMessages.length; 
    })
})

markAll.addEventListener("click", () =>{
    unReadMessage.forEach((message) => {
        message.classList.remove("unread")
    })
    const newUnreadMessages = document.querySelectorAll(".unread")
    undread.innerHTML = newUnreadMessages.length;
})