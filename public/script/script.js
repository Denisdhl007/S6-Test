const questionnaire1_1 = document.getElementById("questionnaire1_1");
function questionnaire1() {
    questionnaire1_1.innerHTML = "Comment appelez vous votre Guerrier ?";
}


let submitButton = document.getElementById("mySubmit");

submitButton.addEventListener("click", function() {
  let inputValue = document.getElementById("questionnaire2_1").value;
  console.log(inputValue);
  alert(inputValue);
});
