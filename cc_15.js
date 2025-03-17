//Task 1
//select the riskDashboard container
const riskDashboard = document.getElementById("riskDashboard");

// Print "Risk Dashboard Loaded" to the console.
console.log("Risk Dashboard Loaded");

//Task 2 and task 3
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div");
    riskCard.classList.add("riskCard");

    const nameRisk = document.createElement("p");
    nameRisk.textContent = `Risk Name: ${riskName}`;

    const levelRisk = document.createElement("p");
    levelRisk.textContent = `Risk Level: ${riskLevel}`;

    const nameDepartment = document.createElement("p");
    nameDepartment.textContent = `Department: ${department}`;

    const resolveButton = document.createElement("button"); // task 3:added resolve button
    resolveButton.textContent = "Resolve";
    resolveButton.addEventListener("click", function () {
        riskCard.remove();
    });
//task 4
    if (riskLevel === "Low") {
        riskCard.classList.add("low-risk"); // Green
    } else if (riskLevel === "Medium") {
        riskCard.classList.add("medium-risk"); // Yellow
    } else if (riskLevel === "High") {
        riskCard.classList.add("high-risk"); // Red
    } // changes the color of the card according to the risk level

    riskCard.appendChild(nameRisk);
    riskCard.appendChild(levelRisk);
    riskCard.appendChild(nameDepartment);
    riskCard.appendChild(resolveButton);

    document.getElementById("riskDashboard").appendChild(riskCard);
};

addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");

