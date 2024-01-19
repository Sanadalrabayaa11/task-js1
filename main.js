document
  .querySelector(".registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var amount = document.querySelector('input[name="amount"]').value;
    var exchange = document.querySelector('select[name="exchange"]').value;

    var result;
    switch (exchange) {
      case "dollar":
        result = amount * 1.5;
        break;
      case "dinar":
        result = amount * 2;
        break;
      case "nis":
        result = amount * 0.5;
        break;
    }

    document.querySelector(".result").textContent =
      "The converted amount is: " + result;
  });
