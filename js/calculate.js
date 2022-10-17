//# Common Function:
function getTextItem(elementId) {
  const inputFieldId = document.getElementById(elementId);
  const inputFieldString = inputFieldId.value;
  const inputFielValue = parseInt(inputFieldString);
  if (!isNaN(inputFielValue)) {
    return inputFielValue;
  } else {
    alert("Please, Input proper value");
  }
}

//# getListItem Function:
function getListItem() {
  const totalOl = document.getElementsByClassName("listIteam");
  const totalOlLength = totalOl.length;
  return totalOlLength;
}
//# getPlayerName Function:
function getPlayerName(elementId) {
  const playerName = document.getElementById(elementId).innerText;
  const olELement = document.getElementById("ol");
  const createLi = document.createElement("li");
  createLi.classList.add("listIteam");
  createLi.innerText = playerName;
  olELement.appendChild(createLi);
  const listItems = getListItem();

  if (listItems > 5) {
    alert("Sorry, You can't add more player");
  } else {
    return;
  }
}

//# buttonEnableAndDisable Function:
function buttonEnableAndDisable(elementId) {
  const btn = document.getElementById(elementId);
  btn.setAttribute("disabled");

  btn.removeAttribute("disabled");
}

//# Button Called 1:
document
  .getElementById("button-added-1")
  .addEventListener("click", function () {
    getPlayerName("player-name-1");
  });

//# Button Called 2:
document
  .getElementById("button-added-2")
  .addEventListener("click", function () {
    getPlayerName("player-name-2");
  });

//# Button Called 3:
document
  .getElementById("button-added-3")
  .addEventListener("click", function () {
    getPlayerName("player-name-3");
  });

//# Button Called 4:
document
  .getElementById("button-added-4")
  .addEventListener("click", function () {
    getPlayerName("player-name-4");
  });

//# Button Called 5:
document
  .getElementById("button-added-5")
  .addEventListener("click", function () {
    getPlayerName("player-name-5");
  });

//# Button Called 6:
document
  .getElementById("button-added-6")
  .addEventListener("click", function () {
    getPlayerName("player-name-6");
  });

//# Calculate Total ( Base On Player ):
document.getElementById("calculate").addEventListener("click", function () {
  const playerField = getTextItem("player-filed");
  const listItems = getListItem();
  const calculation = playerField * listItems;
  const playerExpenses = document.getElementById("player-expenses");
  playerExpenses.innerText = calculation;
});

//# Total Calculation ( Based On Player, Manager & Coach ):
document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    const coachCost = getTextItem("coach");
    const managerCost = getTextItem("manager");
    const managerAndCoachCost = coachCost + managerCost;

    const totalCostId = document.getElementById("total-cost");
    totalCostId.innerText = managerAndCoachCost;

    const playerExpensesValue = parseInt(
      document.getElementById("player-expenses").innerText
    );
    const totalCost = document.getElementById("total-cost");
    const totalCostAmount = managerAndCoachCost + playerExpensesValue;
    console.log(playerExpensesValue);
    console.log(managerAndCoachCost);

    totalCost.innerText = totalCostAmount;
  });
