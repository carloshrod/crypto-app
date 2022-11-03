import React from 'react'

function TableRows({ coin, index, setCoinId }) {
    const { id, name, symbol, price_usd, percent_change_24h } = coin;

    return (
        <>
            <tr>
                <th>{index}</th>
                <td>{name}</td>
                <td>{symbol}</td>
                <td>{price_usd}</td>
                <td>{percent_change_24h}</td>
                <td>
                    <i 
                    className="fa-solid fa-eye" 
                    data-bs-toggle="modal" 
                    data-bs-target="#exampleModal" 
                    onClick={() => setCoinId(id)}
                    />
                </td>
            </tr>
        </>
    )
}

export default TableRows;