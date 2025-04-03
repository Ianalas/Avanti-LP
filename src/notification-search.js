const input = document.querySelector("#search");
const btnInput = document.querySelector("#search-btn");

async function showNotification(newValue) {
  const notification = document.querySelector(".notification");
  const notificationValue = document.querySelector(".notification p");
  notificationValue.innerText = `Você buscou por: '${newValue.trim()}'`;

  notification.classList.add("show");

  btnInput.disabled = true;
  setTimeout(() => {
    notification.classList.add("hide");

    setTimeout(() => {
      // Remove do DOM após a animação
      notification.classList.remove("show", "hide");

      btnInput.disabled = false;
    }, 500);
  }, 5000);
}

btnInput.addEventListener("click", () => {
  if (!btnInput.disabled && input.value.trim() != "") {
    showNotification(input.value);
    input.value = "";
  }
});
