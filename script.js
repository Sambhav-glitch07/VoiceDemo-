const join = document.getElementById("join");
const status = document.getElementById("status");

join.onclick = async () => {
    try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        status.textContent = "Microphone Ready";
    } catch (err) {
        status.textContent = "Permission Denied";
    }
};
