import TableRows from "./TableRows";

function Table({ coins, setCoinId }) {
    const tableHeaders = ["#", "Coin", "Symbol", "Price (USD)", "24h %", "Details"]

    return (
        <div className="card container mt-2 mb-3">
            <table className="table">
                <thead>
                    <tr>
                        {tableHeaders.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {
                        coins.map((coin, index) => (
                            <TableRows
                                key={coin.id}
                                index={index + 1}
                                coin={coin}
                                setCoinId={setCoinId}
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;
