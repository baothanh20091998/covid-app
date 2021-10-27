import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from 'react-redux';
import { getResultCovidAction } from '../../../../store/actions/result.action';
import "./search-country.style.scss"
import dateFormat from "dateformat"

export default function SearchCountry(props) {
    const { listCountry, loading, setLoading } = props

    const [country, setCountry] = useState("")
    const [startDate, setStartDate] = useState(new Date("2021/10/25"));
    const [endDate, setEndDate] = useState(new Date("2021/10/26"));
    const renderListCountry = listCountry.map(country => (
        <option key={Math.random()} value={country.Slug}>{country.Country} - {country.ISO2}</option>
    ))

    const dispatch = useDispatch()
    const handleSubmitForm = (event) => {
        event.preventDefault()
        const start = dateFormat(startDate, "yyyy-mm-dd")
        const end = dateFormat(endDate, "yyyy-mm-dd")
        if (new Date(end) > new Date()) {
            return alert("Out of day. Please chosse the day before " + dateFormat(new Date(), "dd/mm/yyyy"))
        }
        return dispatch(getResultCovidAction(country, start, end, loading, setLoading))
    }
    return (
        <section className="search__country mt-5">
            <form onSubmit={handleSubmitForm}>
                <div className="row">
                    <div className="form__group col-12">
                        <select name="select__country" id="select__country" value={country} onChange={(event) => setCountry(event.target.value)}>
                            <option disabled hidden value="">Select country....</option>
                            {renderListCountry}
                        </select>
                    </div>
                    <div className="form__group col-md-6 col-12">
                        <p className="date__title">From...</p>
                        <ReactDatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                        />
                    </div>
                    <div className="form__group col-md-6 col-12">
                        <p className="date__title">To...</p>
                        <ReactDatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                        />
                    </div>
                </div>
                <div className="form__submit text-center mt-4">
                    {
                        country === "" ? (
                            <button disabled type="submit" className="button__submit">Submit</button>
                        )
                            :
                            <button type="submit" className="button__submit">Submit</button>
                    }
                </div>
            </form>
        </section >
    )
}
