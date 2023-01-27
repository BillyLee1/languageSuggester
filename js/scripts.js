function handleSurvey(event) {
  event.preventDefault()
  const selectionOne = document.querySelector("input[name='bool']:checked").value;
}

document.addEventListener("DOMContentLoaded", function(){
  const submit = document.getElementById("btn");
  submit.addEventListener("click", handleSurvey);
})
