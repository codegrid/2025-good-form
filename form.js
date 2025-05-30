document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault(); // フォームの送信を防止
  const form = e.target;
  const formData = new FormData(form);
  let output = "フォームの内容:\n";
  for (const [key, value] of formData.entries()) {
    output += `${key}: ${value}\n`;
  }
  alert(output);
});