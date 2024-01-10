import { useLodash } from "./useLodash";
import { useSelector } from "react-redux";
export function useCurrencyMasking() {
  const { checkIsEmpty } = useLodash();
  const {
    defaultCurrencyCode,
    defaultCurrencyMask,
    currencyCode,
    currencyCodeMask,
    currencyList,
  } = useSelector((state) => {
    return {
      defaultCurrencyCode: state.utils.defaultCurrencyCode,
      defaultCurrencyMask: state.utils.defaultCurrencyMask,
      currencyCode: state.utils.currencyCode,
      currencyCodeMask: state.utils.currencyCodeMask,
      currencyList: state.utils.currencyList,
    };
  });
  let maskNumber = function (data) {
    let maskedValue = "";
    let config = {
      dot: ".",
      empty: "",
      regxNumberPattern: /[0-9]/g,
      hashValue: "###############",
    };

    if (checkIsEmpty(data)) {
      maskedValue = "0";
    } else {
      let currencyMaskFormat = checkIsEmpty(currencyCodeMask)
        ? defaultCurrencyMask
        : currencyCodeMask?.value;
      console.log("Data", data, currencyMaskFormat);
      let formatVal = currencyMaskFormat;
      let inputVal = typeof data != "string" ? data.toString() : data;

      let formatReg = formatVal.split(config.dot);
      let inputReg = inputVal.split(config.dot);
      let formatArr = formatReg[0].split(config.empty);
      let inputArr = inputReg[0].split(config.empty);
      let inputLen = inputArr.length;

      let formatNum = formatReg[0].match(config.regxNumberPattern);
      let inputNum = inputReg[0].match(config.regxNumberPattern);

      let resArr = [];
      let j = inputLen - 1;
      if (!checkIsEmpty(inputNum)) {
        if (formatNum.length < inputNum.length) {
          maskedValue = config.regxNumberPattern;
        } else {
          for (let i = formatArr.length - 1; i >= 0; i--) {
            if (j >= 0) {
              let str = formatArr[i];
              let res = str.match(config.regxNumberPattern);

              if (res == null && formatArr[i] !== inputArr[j]) {
                resArr.push(formatArr[i]);
              } else {
                resArr.push(inputArr[j]);
                j--;
              }
            }
          }

          for (let i = resArr.length - 1; i >= 0; i--) {
            maskedValue = maskedValue + resArr[i];
          }
          if (inputReg.length > 1) {
            maskedValue = maskedValue + "." + inputReg[1];
          }
        }
      }
    }
    return maskedValue;
  };

  let unMaskNumber = function (value) {
    if (!checkIsEmpty(value)) {
      value = typeof value != "string" ? value.toString() : value;
      let formattedValue = value.replace(/,/g, "");
      return parseFloat(formattedValue);
    } else {
      return value;
    }
  };
  return { maskNumber, unMaskNumber };
}
