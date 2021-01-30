module.exports = function toReadable(number) {
    let string = String(number);
    let word = "";
    switch (number) {
        case 0:
            return "zero";
    }
    if (string.length == 3) {
        if (number % 10 == 0 && number % 100 != 0 && number % 100 != 10) {
            word =
                stringNumber(Math.floor(number / 100)) +
                " hundred " +
                stringSecondNumber(((number % 100) - (number % 10)) / 10) +
                "" +
                stringNumber(
                    Math.floor(number - 100 * Math.floor(number / 100)) % 10
                );

            return word;
            // } else if ((number % 100) - (number % 10) == 0) {
            //     word =
            //         stringNumber(Math.floor(number / 100)) +
            //         " hundred " +
            //         stringSecondNumber(((number % 100) - (number % 10)) / 10) +
            //         "" +
            //         stringNumber(
            //             Math.floor(number - 100 * Math.floor(number / 100)) % 10
            //         );

            //     return word;
        } else if (number % 100 <= 20 && number % 100 >= 1) {
            word =
                stringNumber(Math.floor(number / 100)) +
                " hundred" +
                " " +
                stringNumber(number % 100);
            return word;
        } else if (number % 100 == 0) {
            word = stringNumber(Math.floor(number / 100)) + " hundred";
            return word;
        } else if (number % 100 == 10) {
            word =
                stringNumber(Math.floor(number / 100)) +
                " hundred " +
                stringNumber(number % 100);
        } else {
            word =
                stringNumber(Math.floor(number / 100)) +
                " hundred " +
                stringSecondNumber(((number % 100) - (number % 10)) / 10) +
                " " +
                stringNumber(
                    Math.floor(number - 100 * Math.floor(number / 100)) % 10
                );
            return word;
        }
    }
    if (string.length == 1) {
        return stringNumber(number);
    }
    if (string.length == 2) {
        if (number >= 20 && number % 10 != 0) {
            return (
                stringSecondNumber(((number % 100) - (number % 10)) / 10) +
                " " +
                stringNumber(
                    Math.floor(number - 100 * Math.floor(number / 100)) % 10
                )
            );
        } else return stringNumber(number);
    }
};

function stringNumber(number) {
    switch (number) {
        case 0:
            return "";
            break;
        case 1:
            return "one";
            break;
        case 2:
            return "two";
            break;
        case 3:
            return "three";
            break;
        case 4:
            return "four";
            break;
        case 5:
            return "five";
            break;
        case 6:
            return "six";
            break;
        case 7:
            return "seven";
            break;
        case 8:
            return "eight";
            break;
        case 9:
            return "nine";
            break;
        case 10:
            return "ten";
            break;
        case 11:
            return "eleven";
            break;
        case 12:
            return "twelve";
            break;
        case 13:
            return "thirteen";
            break;
        case 14:
            return "fourteen";
            break;
        case 15:
            return "fifteen";
            break;
        case 16:
            return "sixteen";
            break;
        case 17:
            return "seventeen";
            break;
        case 18:
            return "eighteen";
            break;
        case 19:
            return "nineteen";
            break;
        case 20:
            return "twenty";
            break;
        case 30:
            return "thirty";
            break;
        case 40:
            return "forty";
            break;
        case 50:
            return "fifty";
            break;
        case 60:
            return "sixty";
            break;
        case 70:
            return "seventy";
            break;
        case 80:
            return "eighty";
            break;
        case 90:
            return "ninety";
            break;
        default:
            return "errorsyntax";
    }
}

function stringSecondNumber(number) {
    switch (number) {
        case 0:
            return "";
            break;
        case 2:
            return "twenty";
            break;
        case 3:
            return "thirty";
            break;
        case 4:
            return "forty";
            break;
        case 5:
            return "fifty";
            break;
        case 6:
            return "sixty";
            break;
        case 7:
            return "seventy";
            break;
        case 8:
            return "eighty";
            break;
        case 9:
            return "ninety";
            break;
        default:
            return "errorsyntax";
    }
}
