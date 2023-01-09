import React, {useEffect, useState} from 'react'
import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'

function ListFavorit() {
    const [dataFavorit, setDataFavorit] = useState([])
    const [loading, setLoading] =useState(false)
    const [detail, setDetail] = useState(false) 
    const [select , setSelect] = useState({})
    const [suka, setSuka] = useState(false)
    useEffect(() => {
        const stored_datas = JSON.parse(localStorage.getItem("datas"));
        stored_datas.length < 1 ?setLoading(true) :  setDataFavorit(stored_datas) 
    }, [])
    const pilihPokemon = (data) => {
        const stored_datas = JSON.parse(localStorage["datas"]);
        const cekSuka = stored_datas.map(x => x.id)
        if (cekSuka.includes(data.id)){
            setSelect(data)
            setDetail(true)
            setSuka(true)
        } else{
            setSuka(false)
            setSelect(data)
            setDetail(true)
        }
    }
    const masukFavorit = () => {
        const remove = dataFavorit.filter(hapus => hapus.id !== select.id)
        console.log(remove)
        setDetail(false)
        localStorage["datas"] = JSON.stringify(remove);
        setDataFavorit(remove)
        
        if (dataFavorit.length === 1) {
            setLoading(true)
        }
    }
  return (
    <div className='flex container'>
    {
        detail ?
        <div className='w-1/2 h-screen fixed flex top-[20%] gap-5'>
            <img src={select.images.large} alt='img-pokemon-detail' className=' w-72 h-96' />
            <div>
                <div className='flex'>
                    <div>Nama : </div>
                    <h2> {select.name}</h2>
                </div>
                <div className='flex'>
                    <div>SuperType : </div>
                    <h2> {select.supertype}</h2>
                </div>
                <div className='flex'>
                    <div>Types : </div>
                    <ul>
                        {
                            select.types.map((type)=> {
                                return(
                                    <li> {type}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                { select.abilities ? 
                <div>
                    <h5>Abilities : </h5>
                    <ul>
                        {
                            select.abilities.map((type)=> {
                                return(
                                    <li>
                                        <div className='flex'>
                                            <div>Name :</div>
                                            <h2>{type.name}</h2>
                                        </div>
                                        <div className='flex'>
                                            <div>Desc:</div>
                                            <h2>{type.text}</h2>
                                        </div>
                                        <div className='flex'>
                                            <div>Type :</div>
                                            <h2>{type.type}</h2>
                                        </div>
                                    </li>
                                )
                            })
                        } 
                    </ul>
                </div> :
                <div className='flex'>
                    <h5>Abilities : </h5>
                    <div>kosong</div> 
                </div>    }
                <div className='flex'>
                    Suka <img src={suka ? like : dislike} alt='suka-pokemon' onClick={()=>masukFavorit()} className='cursor-pointer' />
                </div>
            </div>
        </div> : 
        <div className='w-1/2 flex justify-center '>
            <div className='fixed top-1/2'>List Favorit</div>
        </div> 
    }
    
    <div className={`w-1/2 flex flex-wrap gap-5 mt-28 ${detail ? 'ml-[53%]' : ''}`}>
        {
            loading ? <h1>List Favorit kosong</h1> :
            <>
            {
                dataFavorit.map((pokemon) => {
                return(
                    <div className='bg-[#9EDEF9] rounded-lg shadow-lg  w-44 h-auto p-4 box-border'>
                        <img src={pokemon.images.small} alt='img-pokemon-list' className='w-32 h-44 m-auto cursor-pointer' onClick={()=>pilihPokemon(pokemon)} />
                        <div className=' text-left pl-2'>
                            <h5 className=' text-lg font-semibold cursor-pointer' onClick={()=>pilihPokemon(pokemon)}>{pokemon.name}</h5>
                            <h6>{pokemon.supertype}</h6>
                            {
                                pokemon.types.map((type) =>{
                                    return(<p className=' text-sm'>{type}</p>)
                                })
                            }
                        </div>
                    </div>)
                })
            }
            </>
        }
    </div>
</div>
  )
}

export default ListFavorit