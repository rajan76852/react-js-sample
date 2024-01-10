import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../components/Dropdown";
import { updateState } from "../store";
import { useLodash } from "../Utils/useLodash";
import { useCurrencyMasking } from "../Utils/useCurrencyMasking";
function CurrencyMaskPage() {
  const dispatch = useDispatch();
  const { checkIsEmpty } = useLodash();
  const { maskNumber, unMaskNumber } = useCurrencyMasking();
  const [inputText, setInputText] = useState("");
  const [formatedInput, setFormatedInput] = useState("");
  const [unFormatedInput, setUnFormatedInput] = useState("");
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

  const handleSelect = (option) => {
    dispatch(updateState({ value: option, key: "currencyCodeMask" }));
  };
  const doCurrencyFormat = () => {
    setFormatedInput(maskNumber(inputText));
    setUnFormatedInput(unMaskNumber(maskNumber(inputText)));
  };

  return (
    <div>
      <div className="flex">
        <Dropdown
          options={currencyList}
          value={currencyCodeMask}
          onChange={handleSelect}
        />
        {currencyCodeMask && (
          <input
            class="input mr-3 ml-3 w-100"
            type="text"
            placeholder="Type your amount here"
            onChange={(e) => setInputText(e.target.value)}
          />
        )}
        <button
          class="button mt-3 button is-success mb-3"
          onClick={doCurrencyFormat}
        >
          Format
        </button>
      </div>

      <div>Formated Amount: ${formatedInput}</div>
      <div>UnFormated Amount: ${unFormatedInput}</div>
    </div>
  );
}

export default CurrencyMaskPage;
