document.getElementById("add-money").addEventListener("click", function (e) {
  e.preventDefault();
  const bankName = document.getElementById("addbank").value;
  const accountNumber = document.getElementById("add-accountnumber").value;
  const addAmmount = parseInt(document.getElementById("add-ammount").value);
  const pinNumber = document.getElementById("pin-number").value;
  //   console.log(bankName, accountNumber, addAmmount, pinNumber);
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );
  const total = addAmmount + availableBalance;

  document.getElementById("available-balance").innerText = total;
});
