import React from "react";
import { useId } from "react"; // used to assign unique id that can be passed as accessible atrributes


function InputBox({
    label,
    amount,
    onAmoutChange,
    onCurrencyChange,
    CurrencyOptions = [],
    selectCurrency = "usd",
    //amountDisable = false,
    //currencyDisable = false,
    className = "",
}) {

    const amountInputId = useId();
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm text-black flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    //disabled = {amountDisable}
                    value={amount}
                    onChange={(e)=>onAmoutChange && onAmoutChange(Number(e.target.value))} // JS gets value in String on events
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)} // checking if any value in first attribute  
                    disabled = {currencyDisable}   
                >
                    
                    //{CurrencyOptions.map((currency)=>{  // we can also pass index with currency in key but this is better approach
                        <option key={currency} value='usd'>
                            usd
                        </option>
                    })}
                </select>
            </div>
        </div>
    );
}

export default InputBox;

