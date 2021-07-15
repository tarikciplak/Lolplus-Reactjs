import React from 'react'
import { useEffect, useState } from 'react'
import AccountObjectServices from '../services/accountObjectServices'


const FreeChampions = () => {
    const [champions, setChampions] = useState()
    const [loading, setloading] = useState(true)

    useEffect(() => {
        
        let accountObjectService = new AccountObjectServices()
        accountObjectService.getFreeChampions().then(result => {
            setChampions(result.freeChampionIds)
            setloading(false)
        })
    }, [])

    if (loading) { return (<div> </div>) }

    return (
        <div  className="flex border">
            {
                React.Children.toArray(
                    champions.map(hero => {
                        return <div><img alt="freechRotation"src={`https://cdn.communitydragon.org/11.12.1/champion/${hero}/tile`}></img></div>
                    })
                )
            }
        </div>
    )
}

export default FreeChampions
