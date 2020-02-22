import React, { useState, useEffect } from 'react'
import './App.css'
import { getUrl } from './services/pokemon';
import { Navbar } from './components/Navbar/Navbar';
import { Deck } from './components/Deck/Deck';
import { BtnNav } from './components/BtnNav/BtnNav';
import { Loading } from './components/Loading/Loading';
import TypesColor from './helpers/TypesColor';
import { DeckTypes } from './components/Deck/DeckType';




const App = () => {

    const [pokemonData, setPokemonData] = useState([])
    const [typesData, setTypesData] = useState([])

    const [pokemonByType, setPokemonByType] = useState([])

    const [nextUrl, setNextUrl] = useState('')
    const [prevUrl, setPrevUrl] = useState('')
    const [loading, setLoading] = useState(true)

    const [showType, setShowType] = useState(false)
    
    
    const initialUrl = 'https://pokeapi.co/api/v2/pokemon/'
    const initialUrlTypes = 'https://pokeapi.co/api/v2/type/'

    useEffect(() => {
        const fetchData = async () => {
            let response = await getUrl(initialUrl)
            setNextUrl(response.next)
            setPrevUrl(response.previous)
            await loadingPokemon(response.results)
            setLoading(false)
        }

        const fetchTypes = async () => {
            let response = await getUrl(initialUrlTypes)
            await loadingTypes(response.results)
            setLoading(false)
        }
        fetchData()
        fetchTypes()
    }, [])
    
    const loadingPokemon = async (data) => {
        let _pokemonData = await Promise.all(data.map(async (pokemon) => {
            let pokemonRecord = await getUrl(pokemon.url)
            return pokemonRecord
        }))
        setPokemonData(_pokemonData)
    }
    const next = async () => {
        setLoading(true)
        let data = await getUrl(nextUrl)
        await loadingPokemon(data.results)
        setNextUrl(data.next)
        setPrevUrl(data.previous)
        setLoading(false)
    }
    const prev = async () => {
        if (!prevUrl) return
        setLoading(true)
        let data = await getUrl(prevUrl)
        await loadingPokemon(data.results)
        setNextUrl(data.next)
        setPrevUrl(data.previous)
        setLoading(false)
    }



    const loadingTypes = async (results) => {
        let _typesData = await Promise.all(results.map(async type => {
            let typesRecord = await getUrl(type.url)
            return typesRecord
        }))
        setTypesData(_typesData)
    }

    const loadingParTypes = async (type) => {
        let _ParTypesData = await Promise.all(type.pokemon.map(async pokemonParType => {
            let ParTypesData = await getUrl(pokemonParType.pokemon.url)
            return ParTypesData
        }))
        setPokemonByType(_ParTypesData)
    }
    const handleShowType = async (e) => {
        setShowType(true)
        setLoading(true)
        let id = e.currentTarget.value
        let type = typesData[id]
        await loadingParTypes(type)
        setLoading(false)
    }

    const handleAll = () => {
        setShowType(false)
    }

    return (
        <div className='container-page'>
                    <Navbar />

                    {loading ? <Loading /> : (
                        <>
                            <div className='filter'>
                                <span>Filtrer par :</span>
                                <button value='all' onClick={handleAll}>all</button>
                                <button style={{backgroundColor: TypesColor['normal']}} className="card-type" value='0' onClick={handleShowType}>normal</button>
                                <button style={{backgroundColor: TypesColor['fighting']}} className="card-type" value='1' onClick={handleShowType}>fighting</button>
                                <button style={{backgroundColor: TypesColor['flying']}} className="card-type" value='2' onClick={handleShowType}>flying</button>
                                <button style={{backgroundColor: TypesColor['poison']}} className="card-type" value='3' onClick={handleShowType}>poison</button>
                                <button style={{backgroundColor: TypesColor['ground']}} className="card-type" value='4' onClick={handleShowType}>ground</button>
                                <button style={{backgroundColor: TypesColor['rock']}} className="card-type" value='5' onClick={handleShowType}>rock</button>
                                <button style={{backgroundColor: TypesColor['bug']}} className="card-type" value='6' onClick={handleShowType}>bug</button>
                                <button style={{backgroundColor: TypesColor['ghost']}} className="card-type" value='7' onClick={handleShowType}>ghost</button>
                                <button style={{backgroundColor: TypesColor['steel']}} className="card-type" value='8' onClick={handleShowType}>steel</button>
                                <button style={{backgroundColor: TypesColor['fire']}} className="card-type" value='9' onClick={handleShowType}>fire</button>
                                <button style={{backgroundColor: TypesColor['water']}} className="card-type" value='10' onClick={handleShowType}>water</button>
                                <button style={{backgroundColor: TypesColor['grass']}} className="card-type" value='11' onClick={handleShowType}>grass</button>
                                <button style={{backgroundColor: TypesColor['electric']}} className="card-type" value='12' onClick={handleShowType}>electric</button>
                                <button style={{backgroundColor: TypesColor['psychic']}} className="card-type" value='13' onClick={handleShowType}>psychic</button>
                                <button style={{backgroundColor: TypesColor['ice']}} className="card-type" value='14' onClick={handleShowType}>ice</button>
                                <button style={{backgroundColor: TypesColor['dragon']}} className="card-type" value='15' onClick={handleShowType}>dragon</button>
                                <button style={{backgroundColor: TypesColor['dark']}} className="card-type" value='16' onClick={handleShowType}>dark</button>
                                <button style={{backgroundColor: TypesColor['fairy']}} className="card-type" value='17' onClick={handleShowType}>fairy</button>
                            </div>

                            { showType ? null : <BtnNav prevUrl={prevUrl} nextUrl={nextUrl} prev={prev} next={next} /> }
                                { showType ? <DeckTypes pokemonByType={pokemonByType} /> : <Deck pokemonData={pokemonData} /> }
                            { showType ? null : <BtnNav prevUrl={prevUrl} nextUrl={nextUrl} prev={prev} next={next} /> }
                        </>
                    )}          
            
        </div>
    )
}

export default App
