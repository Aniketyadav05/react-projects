import React, { useState } from 'react'
import { InputBox,Footer } from './Components'
import useCurrencyInfo from './Hooks/UseCurrencyInfo'
const App = () => {
    const [Amount,setAmount] = useState(0);
    const [From, setFrom] = useState("usd")
    const [To, setTo] = useState("INR");
    const [ConvertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(From)

    const options = Object.keys(currencyInfo)

    const swap = ()=>{
        setFrom(To)
        setTo(From)
        setConvertedAmount(Amount)
        setAmount(ConvertedAmount)
    }

const converter = ()=>{
    setConvertedAmount(Amount * currencyInfo[To])
}

return (
    <div
        className="w-full min-h-[100vh] h-screen flex flex-col flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('${'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGY2MGJqNHlnbHQzYTd2YTI0OGo5MmRvOWg0MGtoMXVybW1tZXQ4dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XIqCQx02E1U9W/giphy.gif'}')`,
            backgroundSize: "100% 100%"
        }}
    >
        <div className=" w-full flex flex-1 justify-center items-center">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-xl p-5 backdrop-blur-sm bg-black/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        converter();
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            Amount={Amount}
                            CurrencyOptions={options}
                            onCurrencyChange={(pese)=>setFrom(pese)}
                            selectCurrency={From}
                            onAmountChange={(Amount)=>setAmount(Amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={ConvertedAmount}
                            CurrencyOptions={options}
                            onCurrencyChange={(pese)=>setTo(pese)}
                            selectCurrency={To}
                            amountDisabled
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {From.toUpperCase()} to {To.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
        <Footer/>
    </div>
);
}

export default App