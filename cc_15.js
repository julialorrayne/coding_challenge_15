//Task 1
//select the riskDashboard container
const riskDashboard = document.getElementById("riskDashboard");

// Print "Risk Dashboard Loaded" to the console.
console.log("Risk Dashboard Loaded");

//Task 2 and task 
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

    riskCard.appendChild(nameRisk);
    riskCard.appendChild(levelRisk);
    riskCard.appendChild(nameDepartment);
    riskCard.appendChild(resolveButton);

    document.getElementById("riskDashboard").appendChild(riskCard);
};
