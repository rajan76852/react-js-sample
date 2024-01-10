import { isEmpty, isNumber } from "lodash";
export function useLodash() {
  let checkIsEmpty = function (data) {
    return isEmpty(data);
  };
  let checkIsNumber = function (data) {
    return isNumber(data);
  };
  return { checkIsEmpty, checkIsNumber };
}
