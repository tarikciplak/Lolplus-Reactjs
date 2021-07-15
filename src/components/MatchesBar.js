import React, { useState, useEffect } from 'react'
import { CoinIcon, TurretIcon } from '../icons/Icons'
import AccountObjectServices from '../services/accountObjectServices'
import Loading from '../utility/Loading'
import bg from '../image/bg.jpg'


export const MatchesBar = ({ nickname }) => {
    const [matchesData, setMatchesData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const accountObjectService = new AccountObjectServices()
        accountObjectService.getMatchesList(nickname).then(data => {
            let sortData = data.sort((x, y) => parseInt(y.gameId) - parseInt(x.gameId))
            setMatchesData(sortData)
            setLoading(false)
        })


    }, [nickname])

    return (
        <div style={{ backgroundImage: `url(${bg})` }} className="flex justify-center items-center h-screen">
            {loading ?
                <div><Loading loading={loading} /></div> :
                <div className="border-2 rounded-xl w-1/2 max-w-screen-lg min-w-min">
                    {matchesData.map((data) => {
                        return (

                            <div key={data.gameId} className={`flex border-2 shadow-2xl overflow-hidden rounded-xl bg-opacity-75 justify-between bg-${data.participants[data.index].stats.win}`}>

                                <div className="flex space-x-5">
                                    <div>
                                        <div id="heroImg" className="w-24 h-24 border overflow-hidden rounded-xl"><img src={`https://cdn.communitydragon.org/11.12.1/champion/${data.participants[data.index].championId}/tile`}></img></div>
                                        <div id="spells-perk" className="flex h-8 w-8">
                                            <img alt="perk" src={`/perks/${data.participants[data.index].stats.perk0}.png`}></img>
                                            <img alt="spell1" src={`/spells/${data.participants[data.index].spell1Id}.png`}></img>
                                            <img alt="spell2" className="rounded-r-md" src={`/spells/${data.participants[data.index].spell2Id}.png`}></img>
                                        </div>
                                    </div>

                                    <div >
                                        {data.participants[data.index].stats.win ? <span className="text-win text-3xl">Win</span> : <span className="text-lose text-3xl">Lose</span>}
                                        <p className="text-sm text-amber300">{data.gameMode}</p>
                                        <p className="text-lg border-b-2">
                                            {data.participants[data.index].stats.kills}/{data.participants[data.index].stats.deaths}/{data.participants[data.index].stats.assists}
                                        </p>
                                        <p className="text-sm text-white">
                                            {Math.floor((data.gameDuration) / 60)} mn
                                        </p>


                                    </div>

                                </div>


                                <div className="flex-col flex items-center justify-center">

                                    <div id="items" className="flex border rounded-xl overflow-hidden">
                                        <img alt="item0" src={`/items/${data.participants[data.index].stats.item0}.png`}></img>
                                        <img alt="item1" src={`/items/${data.participants[data.index].stats.item1}.png`}></img>
                                        <img alt="item2" src={`/items/${data.participants[data.index].stats.item2}.png`}></img>
                                        <img alt="item3" src={`/items/${data.participants[data.index].stats.item3}.png`}></img>
                                        <img alt="item4" src={`/items/${data.participants[data.index].stats.item4}.png`}></img>
                                        <img alt="item5" src={`/items/${data.participants[data.index].stats.item5}.png`}></img>

                                        <div id="vision" className="relative">
                                            <img alt="itemVision" src={`/items/${data.participants[data.index].stats.item6}.png`}></img>
                                            <span className="text-lg text-white absolute right-0 -my-6">{data.participants[data.index].stats.visionScore}</span>
                                        </div>
                                    </div>
                                    <div className="flex mt-2 space-x-2">
                                        <span className="w-16 h-5 rounded-xl flex bg-CHALLANGER justify-center text-center">{data.participants[data.index].stats.goldEarned}<CoinIcon /></span>
                                        <span className="w-12 h-5 rounded-xl flex bg-DIAMOND justify-center text-white">{data.participants[data.index].stats.totalMinionsKilled}cs</span>
                                        <span className="w-9 h-5 rounded-xl flex bg-amber200 justify-center text-center">{data.participants[data.index].stats.turretKills}<TurretIcon /></span>
                                    </div>


                                </div>


                                <div className="flex space-x-4 mr-1">
                                    <div id="teams1" className="flex ">
                                        <div>
                                            {data.participants.slice(0, 5).map(result => <img key={result.participantId} className="w-6 h-6" src={`https://cdn.communitydragon.org/11.12.1/champion/${result.championId}/tile`} />)}
                                        </div>
                                        <div className="flex flex-col">
                                            {data.participantIdentities.slice(0, 5).map(player => <p className="ml-2" key={player.participantId}>{player.player.summonerName}</p>)}
                                        </div>
                                    </div>
                                    <div id="teams2" className="flex ">

                                        <div className="flex flex-col">
                                            {data.participantIdentities.slice(5, 10).map(player => <p className="text-amber200 text-right mr-2" key={player.participantId}>{player.player.summonerName}</p>)}
                                        </div>
                                        <div>
                                            {data.participants.slice(5, 10).map(result => <img key={result.participantId} className="w-6 h-6" src={`https://cdn.communitydragon.org/11.12.1/champion/${result.championId}/tile`} />)}
                                        </div>
                                    </div>
                                </div>

                            </div>)

                    })
                    }</div>}



        </div>)


}
