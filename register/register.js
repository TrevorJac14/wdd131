document.addEventListener("DOMContentLoaded", function () {
    let participantCount = 1;
  
    document.getElementById("add").addEventListener("click", function () {
      participantCount++;
      const newParticipant = document.createElement("section");
      newParticipant.classList.add("participant");
      newParticipant.innerHTML = `
        <p>Participant ${participantCount}</p>
        <div class="item">
          <label for="fname${participantCount}"> First Name<span>*</span></label>
          <input id="fname${participantCount}" type="text" name="fname${participantCount}" required />
        </div>
        <div class="item activities">
          <label for="activity${participantCount}">Activity #<span>*</span></label>
          <input id="activity${participantCount}" type="text" name="activity${participantCount}" required />
        </div>
        <div class="item">
          <label for="fee${participantCount}">Fee ($)<span>*</span></label>
          <input id="fee${participantCount}" type="number" name="fee${participantCount}" required />
        </div>
        <div class="item">
          <label for="date${participantCount}">Desired Date <span>*</span></label>
          <input id="date${participantCount}" type="date" name="date${participantCount}" required />
        </div>
        <div class="item">
          <p>Grade</p>
          <select name="grade${participantCount}" required>
            <option value="" disabled selected>Select Grade</option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
            <option value="5">5th</option>
            <option value="6">6th</option>
            <option value="7">7th</option>
            <option value="8">8th</option>
            <option value="9">9th</option>
            <option value="10">10th</option>
            <option value="11">11th</option>
            <option value="12">12th</option>
          </select>
        </div>
      `;
      document.querySelector(".participants").appendChild(newParticipant);
    });
  
    document.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault();
      let summary = "<h2>Registration Summary</h2>";
      document.querySelectorAll(".participant").forEach((participant, index) => {
        summary += `<p><strong>Participant ${index + 1}</strong></p>`;
        summary += `<p>Name: ${participant.querySelector("input[name^='fname']").value}</p>`;
        summary += `<p>Activity #: ${participant.querySelector("input[name^='activity']").value}</p>`;
        summary += `<p>Fee: $${participant.querySelector("input[name^='fee']").value}</p>`;
        summary += `<p>Date: ${participant.querySelector("input[name^='date']").value}</p>`;
        summary += `<p>Grade: ${participant.querySelector("select").value}</p>`;
      });
      document.getElementById("summary").innerHTML = summary;
    });
});
  