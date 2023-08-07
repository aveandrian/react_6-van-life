import '../../styles/HostIncome.css'

export default function Income() {
    const options = { month: "long" };
    const today = new Date();
    console.log("today", today)
    const currentMonth = new Date().getMonth()
    const currentDay = new Date().getDate()
    const lastThirtyDays = new Intl.DateTimeFormat("en-US", options).format(new Date().setDate(currentDay - 30))
    
    const currentMonthName = new Intl.DateTimeFormat("en-US", options).format(today)
    
    console.log(lastThirtyDays)
    console.log(currentMonthName)

    const amountData = [ "5k", "4k", "3k", "2k", "1k", "0"]
    const incomeData = [
        {
            month: new Intl.DateTimeFormat("en-US", options).format(today.setMonth(currentMonth-5)),
            amount: 4000
        },
        {
            month: new Intl.DateTimeFormat("en-US", options).format(today.setMonth(currentMonth-4)),
            amount: 1500
        },
        {
            month: new Intl.DateTimeFormat("en-US", options).format(today.setMonth(currentMonth-3)),
            amount: 3000
        },
        {
            month: new Intl.DateTimeFormat("en-US", options).format(today.setMonth(currentMonth-2)),
            amount: 2800
        },
        {
            month: new Intl.DateTimeFormat("en-US", options).format(today.setMonth(currentMonth-1)),
            amount: 1500
        },
        {
            month: new Intl.DateTimeFormat("en-US", options).format(today.setMonth(currentMonth)),
            amount: 500
        }
    ]
    const transactionsData = [
        { amount: 720, date: "Jan 3, '23", id: "1" },
        { amount: 560, date: "Dec 12, '22", id: "2" },
        { amount: 980, date: "Dec 3, '22", id: "3" },
    ]
    
    return (
        <div className="host-income">
            <h1 className='host-income--title'>Income</h1>
            <p className='host-income--filter'>
                Last <span>30 days</span>
            </p>
            <h2 className='host-income--value'>$2,260</h2>
            <div className='host-income--graph'>
                <div className='host-income-graph-amounts'>
                    {amountData.map((amount, i) => 
                        <div key={i} className='graph-amount-item'>
                            <p className='graph-amount-title'>${amount}</p>
                            <div className='graph-amount-row'></div>
                        </div>
                    )}
                </div>
                <div className='host-income-graph-values'>
                    {incomeData.map(incomeMonth => (
                        <div className='column'>
                            <div 
                                className={`graph-column ${incomeMonth.month == currentMonthName || incomeMonth.month == lastThirtyDays ? "highlight" : ""}`}
                                style={{height: `${incomeMonth.amount/5000*100}%`}}
                            >
                            </div>
                            <p className='column-month'>
                                {incomeMonth.month.slice(0, 3)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="info-header">
                <h3 className="info-header--title">Your transactions (3)</h3>
                <p className="info-header--filter">
                    Last <span>30 days</span>
                </p>
            </div>
            <div className="transactions">
                {transactionsData.map((item) => (
                    <div key={item.id} className="transaction">
                        <h3 className="transaction-amount">${item.amount}</h3>
                        <p className="transaction-date">{item.date}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}