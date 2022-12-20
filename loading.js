$(".loader").delay(1000).fadeOut("fast");
function openlink(url) {
window.open(url, "_blank").focus();
}
function copytext(str) {
const el = document.createElement("textarea");
el.value = str;
document.body.appendChild(el);
el.select();
document.execCommand("copy");
Swal.fire("Message", "Success Copy", "berhasil");
}