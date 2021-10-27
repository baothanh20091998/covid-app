import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getListCountryAction } from '../../../../store/actions/country.action'
import Descriptrion from '../../components/description/description.component'
import Header from '../../components/header/header.component'
import ResultCovid from '../../components/result-covid/result-covid.component'
import SearchCountry from '../../components/search_country/search-country.component'
import "./home.style.scss"

export default function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListCountryAction())
    }, [])
    const { listCountry } = useSelector(state => state.country)
    const { result } = useSelector(state => state.result)
    const [loading, setLoading] = useState(0)
    console.log(loading);
    return (
        <>
            <Header></Header>
            <main className="covid__app">
                <Descriptrion />
                <SearchCountry loading={loading} setLoading={setLoading} listCountry={listCountry} />
                <ResultCovid loading={loading} result={result} />
            </main>
        </>
    )
}
