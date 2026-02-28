document.addEventListener("DOMContentLoaded", function () {

  // ================= LOGIN PAGE =================
  const loginBtn = document.getElementById("loginBtn");

  if (loginBtn) {
    loginBtn.addEventListener("click", function () {

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (!username || !password) {
        alert("Please fill all fields");
        return;
      }

      // Save user
      localStorage.setItem("user", username);

      // Go to confession page
      window.location.href = "Confessions.html";
    });
  }


  // ================= CONFESSIONS PAGE =================
  const postBtn = document.getElementById("postBtn");

  if (postBtn) {

    const user = localStorage.getItem("user");

    // If not logged in → go back
    if (!user) {
      window.location.href = "SignIn.html";
      return;
    }

    // Show username
    const welcome = document.getElementById("welcomeText");
    if (welcome) {
      welcome.innerText = "Logged in as " + user;
    }

    postBtn.addEventListener("click", function () {

      const text = document.getElementById("confessionInput").value.trim();

      if (!text) {
        alert("Write something first!");
        return;
      }

      const confessionList = document.getElementById("confessionList");

      const newPost = document.createElement("div");
      newPost.classList.add("confessionItem");

      newPost.innerHTML = `
        <strong>${user}</strong>
        <p>${text}</p>
      `;

      confessionList.prepend(newPost);

      document.getElementById("confessionInput").value = "";
    });
  }

});


// ================= LOGOUT =================
function logout() {
  localStorage.removeItem("user");
  window.location.href = "SignIn.html";
}