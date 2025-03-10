var isDate = function (input) {
 if (Object.prototype.toString.call(input) === "[object Date]" && !isNaN(input.getTime())) {
        return true;
    }

    // Check if input is a string or number and can be converted into a valid date
    if (typeof input === "string" || typeof input === "number") {
        const date = new Date(input);
        return date instanceof Date && !isNaN(date.getTime());
    }

    return false
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
