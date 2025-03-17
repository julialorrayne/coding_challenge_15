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

    riskCard.addEventListener("click", function (event) {
        event.stopPropagation(); //task 6
        console.log(`You clicked on the ${riskName} risk card`);
    });

    resolveButton.addEventListener("click", function (event) {
        event.stopPropagation(); //task 6
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

//Task 5: Implementing Bulk Updates
document.getElementById("increaseRisks").addEventListener("click", function () {

    const all_risks = document.querySelectorAll(".riskCard"); // this function is selectiong all the risk cards

    all_risks.forEach((riskCard) => {
        const levelRisk = riskCard.querySelector("p:nth-child(2)"); // this function is selecting the risk level paragraph

        if (levelRisk) {
            let currentLevel = levelRisk.textContent.replace("Risk Level: ", "").trim(); // it will get the current risk level 
            let newLevel = currentLevel;
            if(currentLevel === "Low") {
                newLevel = "Medium";
                riskCard.classList.remove("low-risk");
                riskCard.classList.add("medium-risk");
            } else if(currentLevel === "Medium") {
                newLevel = "High";
                riskCard.classList.remove("medium-risk");
                riskCard.classList.add("high-risk");
            }
            levelRisk.textContent = `Risk Level: ${newLevel}`;
        }
    });
});

// tests: 
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");

addRiskItem("Market Fluctuations", "High", "Finance");
// Clicking "Resolve" should remove this risk from the dashboard.

addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");

addRiskItem("Employee Retention", "Low", "HR");
// Clicking "Increase Risk Levels" should change it to "Medium".
