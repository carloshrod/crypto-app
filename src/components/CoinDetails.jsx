import React from 'react'

function CoinDetails({ coin }) {
    if (!coin) return null;

    const coinProps = [
        {
            label: "Coin",
            data: coin.name
        },
        {
            label: "Symbol",
            data: coin.symbol
        },
        {
            label: "Price (BTC)",
            data: coin.price_btc
        },
        {
            label: "Price (USD)",
            data: coin.price_usd
        },
        {
            label: "24h %",
            data: coin.percent_change_24h
        },
        {
            label: "1h %",
            data: coin.percent_change_1h
        },
        {
            label: "7d %",
            data: coin.percent_change_7d
        },
        {
            label: "Rank",
            data: coin.rank
        },
        {
            label: "Volume 24",
            data: coin.volume24
        },
    ]

    return (
        <div className="details d-flex row g-3">
            <h3>Details</h3>
            {coinProps.map((item, index) => (
                <div key={index} className="col-6 col-lg-4 p-3">
                    <div className="details__label blue-label">{item.label}</div>
                    <div className="details__data mt-2">{item.data}</div>
                </div>
            ))}
        </div>
    )
}

export default CoinDetails;