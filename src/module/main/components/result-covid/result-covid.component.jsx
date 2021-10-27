import dateFormat from 'dateformat'
import React from 'react'
import "./result-covid.style.scss"

export default function ResultCovid(props) {
    const { result, loading } = props
    const renderResult = result.map((date, index) => (
        <div className="card" key={Math.random()}>
            <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                        {dateFormat(date.Date, "dd/mm/yyyy")} - {date.CountryCode}
                    </button>
                </h2>
            </div>
            <div id={`collapse${index}`} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body">
                    <p>Total Confirmed: {date.Confirmed}</p>
                    <p>Total Deaths: {date.Deaths}</p>
                    <p>Total Recovered: {date.Recovered}</p>
                </div>
            </div>
        </div>
    ))
    return (
        <section className="result__covid">
            <h1>Result</h1>
            <div className="result__covid--info">
                {
                    loading === 1 ?
                        (
                            <div className="result__covid--infoLoading">
                                <div className="loading__background"></div>
                                <div className="loading__title">
                                    <p>Loading...</p>
                                </div>
                            </div>
                        )
                        :
                        (
                            renderResult.length === 0 ? (
                                <p style={{ fontWeight: "600" }}>0 result founded</p>
                            )
                                :
                                <div className="accordion" id="accordionExample">
                                    {renderResult}
                                </div>
                        )
                }
            </div>
        </section>
    )
}
