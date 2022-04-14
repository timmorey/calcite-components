/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
'use strict';

function isActivationKey(key) {
  return key === "Enter" || key === " ";
}
const numberKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function isValidNumber(numberString) {
  return !(!numberString || isNaN(Number(numberString)));
}
function parseNumberString(numberString) {
  if (!numberString || !stringContainsNumbers(numberString)) {
    return "";
  }
  return sanitizeExponentialNumberString(numberString, (nonExpoNumString) => {
    let containsDecimal = false;
    const result = nonExpoNumString
      .split("")
      .filter((value, i) => {
      if (value.match(/\./g) && !containsDecimal) {
        containsDecimal = true;
        return true;
      }
      if (value.match(/\-/g) && i === 0) {
        return true;
      }
      return numberKeys.includes(value);
    })
      .reduce((string, part) => string + part);
    return isValidNumber(result) ? Number(result).toString() : "";
  });
}
function sanitizeDecimalString(decimalString) {
  const decimalAtEndOfStringButNotStart = /(?!^\.)\.$/;
  return decimalString.replace(decimalAtEndOfStringButNotStart, "");
}
function sanitizeNegativeString(negativeString) {
  const allHyphensExceptTheStart = /(?!^-)-/g;
  return negativeString.replace(allHyphensExceptTheStart, "");
}
function sanitizeLeadingZeroString(zeroString) {
  const allLeadingZerosOptionallyNegative = /^([-0])0+(?=\d)/;
  return zeroString.replace(allLeadingZerosOptionallyNegative, "$1");
}
function sanitizeNumberString(numberString) {
  return sanitizeExponentialNumberString(numberString, (nonExpoNumString) => {
    const sanitizedValue = sanitizeNegativeString(sanitizeDecimalString(sanitizeLeadingZeroString(nonExpoNumString)));
    const isNegativeDecimalOnlyZeros = /^-\b0\b\.?0*$/;
    return isValidNumber(sanitizedValue)
      ? isNegativeDecimalOnlyZeros.test(sanitizedValue)
        ? sanitizedValue
        : Number(sanitizedValue).toString()
      : nonExpoNumString;
  });
}
function sanitizeExponentialNumberString(numberString, func) {
  if (!numberString) {
    return numberString;
  }
  const firstE = numberString.toLowerCase().indexOf("e") + 1;
  return numberString
    .replace(/[eE]*$/g, "")
    .substring(0, firstE)
    .concat(numberString.slice(firstE).replace(/[eE]/g, ""))
    .split(/[eE]/)
    .map((section, i) => (i === 1 ? func(section.replace(/\./g, "")) : func(section)))
    .join("e")
    .replace(/^e/, "1e");
}
function stringContainsNumbers(string) {
  return numberKeys.some((number) => string.includes(number));
}

exports.isActivationKey = isActivationKey;
exports.isValidNumber = isValidNumber;
exports.numberKeys = numberKeys;
exports.parseNumberString = parseNumberString;
exports.sanitizeDecimalString = sanitizeDecimalString;
exports.sanitizeExponentialNumberString = sanitizeExponentialNumberString;
exports.sanitizeNumberString = sanitizeNumberString;
