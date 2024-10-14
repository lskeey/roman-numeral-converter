const inputNumberElement = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputElement = document.getElementById("output");

const handleConversion = () => {
  const inputValue = parseInt(inputNumberElement.value, 10);
  const isError = false;

  if (isNaN(inputValue)) {
    display("Please enter a valid number");
    isError = true;
  }

  if (inputValue < 1) {
    display("Please enter a number greater than or equal to 1");
    isError = true;
  }

  if (inputValue > 3999) {
    display("Please enter a number less than or equal to 3999");
    isError = true;
  }

  if (isError) outputElement.classList.add("bg-danger");

  outputElement.classList.remove("bg-danger");
  const romanNumeral = convertToRoman(inputValue);
  display(romanNumeral);
};

const convertToRoman = (number) => {
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";
  for (const { value, symbol } of romanNumerals) {
    while (number >= value) {
      result += symbol;
      number -= value;
    }
  }

  return result;
};

const display = (text) => {
  outputElement.innerHTML = `<span>${text}</span>`;
  outputElement.classList.remove("hidden");
};

inputNumberElement.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleConversion();
  }
});

convertBtn.addEventListener("click", handleConversion);
