const form = document.getElementById("marksForm");
const resultBox = document.getElementById("result");
const subjectIds = ["maths", "science", "english", "computer", "social"];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("studentName").value.trim();
  const marks = subjectIds.map((id) => Number(document.getElementById(id).value));

  if (!name) {
    alert("Please enter the student's name.");
    return;
  }

  if (marks.some((mark) => !Number.isFinite(mark) || mark < 0 || mark > 100)) {
    alert("Please enter marks from 0 to 100 for every subject.");
    return;
  }

  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const average = total / marks.length;
  const percentage = (total / 500) * 100;
  const passed = marks.every((mark) => mark >= 35);

  let grade;
  if (percentage >= 90) grade = "A+";
  else if (percentage >= 80) grade = "A";
  else if (percentage >= 70) grade = "B";
  else if (percentage >= 60) grade = "C";
  else if (percentage >= 50) grade = "D";
  else if (percentage >= 35) grade = "E";
  else grade = "F";

  document.getElementById("outName").textContent = name;
  document.getElementById("outTotal").textContent = total;
  document.getElementById("outAverage").textContent = average.toFixed(2);
  document.getElementById("outPercentage").textContent = percentage.toFixed(2);
  document.getElementById("outGrade").textContent = grade;
  document.getElementById("outResult").textContent = passed ? "Pass" : "Fail";
  document.getElementById("outResult").style.color = passed ? "#147d42" : "#b42318";

  resultBox.classList.remove("hidden");
});

form.addEventListener("reset", function () {
  resultBox.classList.add("hidden");
});
