const validPin = 1234;

document.getElementById("add-money").addEventListener("click", function (e) {
  e.preventDefault();
  const bankName = document.getElementById("addbank").value;
  const accountNumber = document.getElementById("add-accountnumber").value;
  const addAmmount = parseInt(document.getElementById("add-ammount").value);
  const pinNumber = parseInt(document.getElementById("pin-number").value);

  if (accountNumber.length < 11) {
    alert("Invalid account Number");
    return;
  }

  if (pinNumber !== validPin) {
    alert("Invalid pin Number");
    return;
  }
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );
  const total = addAmmount + availableBalance;

  document.getElementById("available-balance").innerText = total;
});

// toggle
document.getElementById("addmoney-tog").addEventListener("click", function () {
  document.getElementById("money").style.display = "block";
  document.getElementById("paybill").style.display = "none";
  document.getElementById("bonus").style.display = "none";
  document.getElementById("transfer").style.display = "none";
  document.getElementById("cashout").style.display = "none";
});
document.getElementById("cashOut-tog").addEventListener("click", function () {
  document.getElementById("money").style.display = "none";
  document.getElementById("paybill").style.display = "none";
  document.getElementById("bonus").style.display = "none";
  document.getElementById("transfer").style.display = "none";
  document.getElementById("cashout").style.display = "block";
});
document.getElementById("transfer-tog").addEventListener("click", function () {
  document.getElementById("money").style.display = "none";
  document.getElementById("cashout").style.display = "none";
  document.getElementById("paybill").style.display = "none";
  document.getElementById("bonus").style.display = "none";
  document.getElementById("transfer").style.display = "block";
});
document.getElementById("bonus-tog").addEventListener("click", function () {
  document.getElementById("money").style.display = "none";
  document.getElementById("cashout").style.display = "none";
  document.getElementById("transfer").style.display = "none";
  document.getElementById("paybill").style.display = "none";
  document.getElementById("bonus").style.display = "block";
});
document.getElementById("Paybill-tog").addEventListener("click", function () {
  document.getElementById("money").style.display = "none";
  document.getElementById("cashout").style.display = "none";
  document.getElementById("transfer").style.display = "none";
  document.getElementById("bonus").style.display = "none";
  document.getElementById("paybill").style.display = "block";
});
