// Handle dynamic recommendation addition
const recommendationForm = document.getElementById("recommendationForm");
const recName = document.getElementById("recName");
const recMessage = document.getElementById("recMessage");
const recommendationList = document.getElementById("recommendationList");

recommendationForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = recName.value.trim();
  const message = recMessage.value.trim();

  if (name && message) {
    // Create recommendation card with two blocks
    const newRec = document.createElement("div");
    newRec.classList.add("col-md-4");
    newRec.innerHTML = `
      <div class="p-4 bg-white shadow-sm rounded h-100">
        <p class="text-dark">${message}</p>
        <div class="recommendator-block">
          <footer class="blockquote-footer m-0">${name}</footer>
        </div>
      </div>
    `;

    // Append to recommendation list
    recommendationList.appendChild(newRec);

    // Clear form fields
    recName.value = "";
    recMessage.value = "";

    // Show confirmation modal
    const confirmationModal = new bootstrap.Modal(document.getElementById("confirmationModal"));
    confirmationModal.show();
  }
});