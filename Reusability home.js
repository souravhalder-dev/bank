const validPin = 1234;
// parseInt
function parsin(numvale) {
  const bankName = parseInt(document.getElementById(numvale).value);
  return bankName;
}
function avBlance(id) {
  const availableBalance = parseInt(document.getElementById(id).innerText);
  return availableBalance;
}

// funaction -tog
function grtitem(val) {
  const sd = document.getElementsByClassName("am");
  for (const s of sd) {
    s.style.display = "none";
  }
  document.getElementById(val).style.display = "block";
}

// funaction -tog-c0ller
// function grtitem(coller) {
//   const sd1 = document.getElementsByClassName("am1");
//   for (const sl of sd1) {
//     sl.
//   } vull aca
//   document.getElementById(coller).style.display = "block";
// }

// function grtitem(co) {
//   const sd = document.getElementsByClassName("am1");
//   for (const s of sd) {
//     s.style.classList.remove = "border-gray-500";
//   }
//   document.getElementById(co).style.border = "border-blue-500";
// }

// document.getElementById("am1").addEventListener("click", function () {
//   grtitem("am1");
// });
// collor
function handleButtonToggle(idn) {
  const cards = document.getElementsByClassName("am1");

  for (const card of cards) {
    card.classList.remove("border-blue-500");
    card.classList.remove("text-[#0874f2]", "font-bold");
    card.classList.add("border-gray-500");
  }

  const selectedCard = document.getElementById(idn);
  selectedCard.classList.remove("border-gray-500");
  selectedCard.classList.add("border-blue-500");
  selectedCard.classList.add("text-[#0874f2]", "font-bold");
}

document.getElementById("add-money").addEventListener("click", function (e) {
  e.preventDefault();
  const bankName = document.getElementById("addbank").value;
  const accountNumber = document.getElementById("add-accountnumber").value;
  // const addAmmount = parseInt(document.getElementById("add-ammount").value);
  const addAmmount = parsin("add-ammount");
  const pinNumber = parsin("pin-number");

  if (accountNumber.length < 11) {
    alert("Invalid account Number");
    return;
  }

  if (pinNumber !== validPin) {
    alert("Invalid pin Number");
    return;
  }
  const availableBalance = avBlance("available-balance");

  const total = addAmmount + availableBalance;

  document.getElementById("available-balance").innerText = total;
});

// cash out
//  availableBalance
//   document.getElementById("add-money").addEventListener("click", function (d)){
//   d.preventDefault();
//     const ammont = parseInt(document.getElementById("amount").value);
//   const casut = ammont - availableBalance;
//   }
// document.getElementsByClassName("am1").addEventListener("click", function () {
//   console.log("h");
// });

// toggle
document.getElementById("addmoney-tog").addEventListener("click", function () {
  grtitem("money");
  handleButtonToggle("addmoney-tog");
});
document.getElementById("cashOut-tog").addEventListener("click", function () {
  grtitem("cashout");

  handleButtonToggle("cashOut-tog");
});
document.getElementById("transfer-tog").addEventListener("click", function () {
  grtitem("transfer");

  handleButtonToggle("transfer-tog");
});
document.getElementById("bonus-tog").addEventListener("click", function () {
  grtitem("bonus");

  handleButtonToggle("bonus-tog");
});
document.getElementById("Paybill-tog").addEventListener("click", function () {
  grtitem("paybill");

  handleButtonToggle("Paybill-tog");
});

document.getElementById("wMoney").addEventListener("click", function (d) {
  d.preventDefault();
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );
  const ammont2 = parseInt(document.getElementById("amount-tk").value);
  const catsu = availableBalance - ammont2;
  document.getElementById("available-balance").innerText = catsu;
  //   console.log(availableBalance, ammont2);
});
