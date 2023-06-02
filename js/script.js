var form = document.getElementById("form");
form.addEventListener("submit", formSubmit);
const successAlert = document.getElementById("success");
const errorAlert = document.getElementById("error");

function formSubmit(e) {
  e.preventDefault();

  const formData = new FormData();
  formData.append("name", document.querySelector('input[name="name"]').value);
  formData.append("email", document.querySelector('input[name="email"]').value);
  formData.append(
    "subject",
    document.querySelector('input[name="subject"]').value
  );

  formData.append(
    "message",
    document.querySelector('textarea[name="message"]').value
  );

  fetch("https://getform.io/f/56c7d68b-3c76-48fe-9910-16b8cf3a61be", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        successAlert.classList.add("show");
      } else {
        errorAlert.classList.add("show");
      }
      form.reset();
    })
    .catch((error) => {
      console.log(error);
      errorAlert.classList.add("show");
      form.reset();
    });
}
