document
  .querySelector("#add-money-primary-btn")
  .addEventListener("click", () => {
    document.querySelector("#add-money-section").classList.remove("hidden");
    document.querySelector("#cashout-section").classList.add("hidden");
  });
document.querySelector("#cashout-primary-btn").addEventListener("click", () => {
  document.querySelector("#add-money-section").classList.add("hidden");
  document.querySelector("#cashout-section").classList.remove("hidden");
});

document.querySelector("#add-money-btn").addEventListener("click", (e) => {
  e.preventDefault();
  if (document.querySelector("#pin-number").value === "1234") {
    let addMoneyAmmount = parseInt(
      document.querySelector("#add-money-ammount").value
    );
    let currentBalance = parseInt(
      document.querySelector("#current-balance").textContent
    );
    document.querySelector(
      "#current-balance"
    ).textContent = `${(currentBalance += addMoneyAmmount)}`;

    document.querySelector("#add-money-ammount").value = "";
    document.querySelector("#pin-number").value = "";
    document.querySelector("#message").textContent =
      "Your Ammount is successfully Added!!";
  } else if (
    document.querySelector("#pin-number").value === "" ||
    document.querySelector("#add-money-ammount").value === ""
  ) {
    document.querySelector("#message").textContent =
      "Give an ammount and Pin!!";
  } else {
    document.querySelector("#message").textContent = "Wrong Pin!!";
  }
});
document.querySelector("#cash-out-btn").addEventListener("click", (e) => {
  e.preventDefault();
  if (document.querySelector("#pin-number2").value === "1234") {
    let cashOutAmmount = parseInt(
      document.querySelector("#cashout-ammount").value
    );
    let currentBalance = parseInt(
      document.querySelector("#current-balance").textContent
    );
    if (currentBalance < cashOutAmmount) {
      document.querySelector("#message2").textContent =
        "Sorry!! You don't have sufficient balance!!";
      document.querySelector("#cashout-ammount").value = "";
      document.querySelector("#pin-number2").value = "";
    } else if (currentBalance >= cashOutAmmount) {
      document.querySelector(
        "#current-balance"
      ).textContent = `${(currentBalance -= cashOutAmmount)}`;
      document.querySelector("#cashout-ammount").value = "";
      document.querySelector("#pin-number2").value = "";
      document.querySelector("#message2").textContent =
        "Your Ammount is successfully Cash Out!!";
    }
  } else if (
    document.querySelector("#pin-number2").value === "" &&
    document.querySelector("#cashout-ammount").value === ""
  ) {
    document.querySelector("#message2").textContent =
      "Give an ammount and Pin!!";
  } else {
    document.querySelector("#message2").textContent = "Wrong Pin!!";
  }
});
