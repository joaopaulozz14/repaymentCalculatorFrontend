import './styles.css'
const Calculator = () => {
    return <div className="container-calculator">
        <div className='title'>
            <h2>Mortgage Calculator</h2>
            <p>Clear All</p>
        </div>
        <div>
            <p>Mortgage Amount</p>
            <div className='input-amount'>
                <p>&pound;</p> <input type="text" placeholder="$3000" />
            </div>
        </div>
        <div className='input-term-and-rate'>
            <div>
                <p>Mortgage Term</p>
                <div className='input-term'>
                    <input type="text" placeholder="25" />
                    <p>years</p>
                </div>
            </div>
            <div>
                <p>Interest Rate</p>
                <div className='input-rate'>

                    <input type="text" placeholder="5.25" />
                    <p>%</p>
                </div>

            </div>
        </div>

  {/*       <div className='input-repayment-and-interest'>
            <p>Mortgage Type</p>
            <div className='wrap-input'>
                <input type="radio" id="repayment" value="repayment" className='input-repayment' />
                <label for="repayment">Repayment</label>
            </div>
            <div className='wrap-input'>
                <input type="radio" id='interest' value="Interest Only" />
                <label for="interest">Interest Only</label>
            </div>

        </div> */}
        <button>Calculate Repayments</button>
    </div>
}

export default Calculator