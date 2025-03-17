//Task 1
//select the riskDashboard container
const riskDashboard = document.getElementById("riskDashboard");

// Print "Risk Dashboard Loaded" to the console.
console.log("Risk Dashboard Loaded");

//Task 2
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div");
    riskCard.classList.add("riskCard");

    const nameRisk = document.createElement("p");
    nameRisk.textContent = `Risk Name: ${riskName}`;

    const levelRisk = document.createElement("p");
    levelRisk.textContent = `Risk Level: ${riskLevel}`;

    const nameDepartment = document.createElement("p");
    nameDepartment.textContent = `Department: ${department}`;

    riskCard.appendChild(nameRisk);
    riskCard.appendChild(levelRisk);
    riskCard.appendChild(nameDepartment);

    document.getElementById("riskDashboard").appendChild(riskCard);
};


