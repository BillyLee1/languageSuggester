function handleSurvey(event) {
  event.preventDefault()
  const q1 = document.querySelector("input[name='bool']:checked").value;
  const q2 = document.querySelector("input[name='interests']:checked").value;
  const q4 = document.querySelector("input[name='mobileDevice']:checked").value;

  surveyOutput(q1, q2, q4);
}

document.addEventListener("DOMContentLoaded", function(){
  const submit = document.getElementById("btn");
  submit.addEventListener("click", handleSurvey);
})

function surveyOutput(q1, q2, q4) {
  let ans = document.querySelector(".langChoice");
  if (q1 === "true") {
    if (q2 === "automate") {
      ans.innerText = "Python";
    } else if (q2 === "websites") {
      ans.innerText = "JavaScript, HTML, CSS";
    } else if (q2 === "games") {
      ans.innerText = "C#";
    } else {
      if (q4 === "apple") {
        ans.innerText = "Swift";
      } else {
        ans.innerText = "Java";
      }
    }
  } else {
    ans.innerText = "Probably shouldn't code then. :(";
  }
}
