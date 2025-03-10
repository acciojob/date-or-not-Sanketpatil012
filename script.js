var isDate = function (input) {
  if (input instanceof Date && !isNaN(input)) {
        return true;
    }

    // Check if the input is a string or number and can be converted to a valid date
    if (typeof input === "string" || typeof input === "number") {
        const date = new Date(input);
        return !isNaN(date);
    }

    return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
