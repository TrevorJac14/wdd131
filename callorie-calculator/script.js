document.getElementById("calcForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const age = parseInt(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  const weightLbs = parseFloat(document.getElementById("weight").value);

  // Get height in feet and inches
  const heightFt = parseInt(document.getElementById("heightFt").value);
  const heightIn = parseInt(document.getElementById("heightIn").value);

  // Convert height to total inches then cm
  const totalInches = (heightFt * 12) + heightIn;
  const heightCm = totalInches * 2.54;

  const weightKg = weightLbs / 2.20462;

  const activity = parseFloat(document.getElementById("activity").value);
  const goal = document.getElementById("goal").value;

  let bmr;

  // Calculate BMR using Mifflin-St Jeor
  if (gender === "male") {
    bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5;
  } else {
    bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
  }

  // Calculate TDEE
  const tdee = bmr * activity;

  let calories;

  // Adjust calories for goal
  if (goal === "cut") {
    calories = tdee - (tdee * 0.2);
  } else if (goal === "bulk") {
    calories = tdee + (tdee * 0.15);
  } else if (goal === "maintain") {
    calories = tdee;
  } else if (goal === "recomp") {
    calories = tdee;
  }

  // Calculate protein recommendation
  let protein;
  if (goal === "cut" || goal === "recomp") {
    protein = weightLbs * 1.2; // grams per lb
  } else {
    protein = weightLbs * 1; // grams per lb
  }

  document.getElementById("results").innerHTML = `
    <h3>Results</h3>
    <p><strong>Calories needed:</strong> ${calories.toFixed(0)} kcal/day</p>
    <p><strong>Protein needed:</strong> ${protein.toFixed(0)} grams/day</p>
  `;
});
