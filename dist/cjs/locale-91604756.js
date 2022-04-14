/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-next.441
 */
'use strict';

const number = require('./number-d3ea17c4.js');

const locales = [
  "ar",
  "bg",
  "bs",
  "ca",
  "cs",
  "da",
  "de",
  "de-CH",
  "el",
  "en",
  "en-AU",
  "en-CA",
  "en-GB",
  "es",
  "es-MX",
  "et",
  "fi",
  "fr",
  "fr-CH",
  "he",
  "hi",
  "hr",
  "hu",
  "id",
  "it",
  "it-CH",
  "ja",
  "ko",
  "lt",
  "lv",
  "mk",
  "nb",
  "nl",
  "pl",
  "pt",
  "pt-PT",
  "ro",
  "ru",
  "sk",
  "sl",
  "sr",
  "sv",
  "th",
  "tr",
  "uk",
  "vi",
  "zh-CN",
  "zh-HK",
  "zh-TW"
];
function createLocaleNumberFormatter(locale) {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 20
  });
}
function delocalizeNumberString(numberString, locale) {
  return number.sanitizeExponentialNumberString(numberString, (nonExpoNumString) => {
    if (nonExpoNumString) {
      const groupSeparator = getGroupSeparator(locale);
      const decimalSeparator = getDecimalSeparator(locale);
      const minusSign = getMinusSign(locale);
      const splitNumberString = nonExpoNumString.split("");
      const decimalIndex = splitNumberString.lastIndexOf(decimalSeparator);
      const delocalizedNumberString = splitNumberString
        .map((value, index) => {
        if (value === groupSeparator || (value === decimalSeparator && index !== decimalIndex)) {
          return "";
        }
        return value;
      })
        .reduce((string, part) => string + part)
        .replace(decimalSeparator, ".")
        .replace(minusSign, "-")
        .replace(/[^0-9\-\.]/g, ""); // remove everything except numbers, "-", and "."
      return isNaN(Number(delocalizedNumberString)) ? nonExpoNumString : delocalizedNumberString;
    }
    return nonExpoNumString;
  });
}
function getGroupSeparator(locale) {
  const formatter = createLocaleNumberFormatter(locale);
  const parts = formatter.formatToParts(1234567.8);
  const value = parts.find((part) => part.type === "group").value;
  return value.trim().length === 0 ? " " : value;
}
function getDecimalSeparator(locale) {
  const formatter = createLocaleNumberFormatter(locale);
  const parts = formatter.formatToParts(1234567.8);
  const value = parts.find((part) => part.type === "decimal").value;
  return value.trim().length === 0 ? " " : value;
}
function getMinusSign(locale) {
  const formatter = createLocaleNumberFormatter(locale);
  const parts = formatter.formatToParts(-1234567.8);
  const value = parts.find((part) => part.type === "minusSign").value;
  return value.trim().length === 0 ? "-" : value;
}
function localizeNumberString(numberString, locale, displayGroupSeparator = false) {
  return number.sanitizeExponentialNumberString(numberString, (nonExpoNumString) => {
    if (nonExpoNumString) {
      const number$1 = Number(number.sanitizeDecimalString(nonExpoNumString));
      if (!isNaN(number$1)) {
        const formatter = createLocaleNumberFormatter(locale);
        const parts = formatter.formatToParts(number$1);
        const localizedNumberString = parts
          .map(({ type, value }) => {
          switch (type) {
            case "group":
              return displayGroupSeparator ? getGroupSeparator(locale) : "";
            case "decimal":
              return getDecimalSeparator(locale);
            default:
              return value;
          }
        })
          .reduce((string, part) => string + part);
        return localizedNumberString;
      }
      return nonExpoNumString;
    }
  });
}

exports.delocalizeNumberString = delocalizeNumberString;
exports.getDecimalSeparator = getDecimalSeparator;
exports.locales = locales;
exports.localizeNumberString = localizeNumberString;
