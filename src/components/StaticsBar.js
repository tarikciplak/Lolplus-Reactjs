import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FreshBloodIcon, NotFreshBIcon } from '../icons/Icons'
import RingLoader from "react-spinners/RingLoader";
import AccountObjectServices from '../services/accountObjectServices';
import { ScrollDownIcon } from '../icons/Icons';
import FreeChampions from './FreeChampions';
import SummonerNotFound from './SummonerNotFound';




function StaticsBar({ nickname }) {
    const [offsetY, setOffsetY] = useState(0)
    const [loading, setLoading] = useState(true)
    const [bgTheme, setBgTheme] = useState()
    const [mastery, setMastery] = useState([])
    const [error, setError] = useState()
    const [leagueInfo, setLeagueInfo] = useState({
        soloq: '',
        mastery: ''
    })
    const handleScroll = () => setOffsetY(window.pageYOffset)
    useEffect(() => {
        let accountObjectService = new AccountObjectServices()
        accountObjectService.getDetailSummoner(nickname).then(infos => {
            setLeagueInfo(infos)
            setBgTheme(infos.soloq.tier)
            setMastery(infos.mastery)
    
        }).catch(err => { setError({ error: err }) }).finally(() => setLoading(false))
        
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)

    }, [nickname])

    if (error) {
        return (<SummonerNotFound />)
    }

    return (

        <div >

            {loading ? <div className="flex items-center justify-center h-screen"> <RingLoader color={'#FCD34D'} loading={loading} size={180} /></div> :
                <div>
                    <div className=" flex items-center justify-center h-screen ">
                        <div style={{ transform: `translateY(${offsetY * 0.32}px)` }} className={`bg-gradient-to-r from-transparent via-${bgTheme}  border-2 shadow-2xl overflow-hidden rounded-xl w-3/6 h-96 flex justify-between`}>
                            <div>
                                <div className="flex relative items-center justify-center w-56 h-56">
                                    <img alt="levelFrame" className="z-10" src={'/images/Level_150_Summoner_Icon_Border.png'}></img>
                                    <img alt="" className="z-0 absolute rounded-full w-32 h-32" src={`https://cdn.communitydragon.org/11.12.1/profile-icon/${leagueInfo.profileIconId}`}></img>
                                    <span className="z-20 absolute text-white mt-32 font-sans">{leagueInfo.summonerLevel}</span>
                                </div>
                                <div className="flex justify-center my-10">
                                    <button className="h-7 w-32 bg-amber300 text-purple rounded-2xl hover:bg-purple hover:text-amber300 transition delay-75">
                                        <Link to={`/summoner/${nickname}/matches`}>match details</Link></button>
                                </div>
                            </div>



                            <div className="font-bold my-11">


                                <div>
                                    <div className="flex space-x-1">
                                        <h3 className="text-6xl -ml-4 text-amber300">{leagueInfo.soloq.summonerName}</h3>
                                        {leagueInfo.soloq.freshBlood ? <FreshBloodIcon /> : <NotFreshBIcon />}</div>

                                    <h5 className="text-3xl text-violetlight">{leagueInfo.soloq.tier} {leagueInfo.soloq.rank}</h5>
                                    <p className="text-amber200 text-2xl ml-2">{leagueInfo.soloq.leaguePoints} LP</p>
                                </div>

                                <div className="flex space-x-3 my-10 ">
                                    <div id="second" className="group">
                                        <img alt="" className="rounded-full w-16 h-16 border-2" src={`https://cdn.communitydragon.org/11.12.1/champion/${mastery[1].championId}/tile`}></img>
                                        <p className="text-center text-transparent group-hover:text-amber300 transition delay-150">{mastery[1].championPoints}</p>
                                    </div>
                                    <div id="first" className="group">
                                        <img alt="" className="rounded-full w-20 h-20 border-2" src={`https://cdn.communitydragon.org/11.12.1/champion/${mastery[0].championId}/tile`}></img>
                                        <p className=" text-center text-transparent group-hover:text-amber300 transition delay-150">{mastery[0].championPoints}</p>
                                    </div>
                                    <div id="third" className="group">
                                        <img alt="" className="rounded-full w-16 h-16 border-2 " src={`https://cdn.communitydragon.org/11.12.1/champion/${mastery[2].championId}/tile`}></img>
                                        <p className="text-center text-transparent group-hover:text-amber300 transition delay-150">{mastery[2].championPoints}</p>
                                    </div>
                                </div>

                            </div>

                            <div>
                                <img alt="tier" className="w-80 h-80 object-contain" src={`/images/Emblem_${leagueInfo.soloq.tier}.png`}></img>
                                <span className="text-amber300 ml-14 text-2xl">{leagueInfo.soloq.wins}W </span>
                                <span className="text-violetlight text-xl">{leagueInfo.soloq.losses}L </span>
                                <span className="text-violet text-6xl font-bold">{Math.round(leagueInfo.soloq.wins / (leagueInfo.soloq.losses + leagueInfo.soloq.wins) * 100)}%</span>

                            </div>
                        </div>

                    </div>


                    <div style={{ visibility: `${offsetY >= 143 ? 'hidden' : ''}` }} className="absolute -my-11 flex ml-5 space-x-2 transition delay-150"> <ScrollDownIcon />
                        <p className="text-xl text-white">Weekly free champions</p>
                    </div>
                    <div><FreeChampions /></div>

                </div>


            }




        </div>



    )
}

StaticsBar.propTypes = {
    nickname: PropTypes.string.isRequired
}

export default StaticsBar
