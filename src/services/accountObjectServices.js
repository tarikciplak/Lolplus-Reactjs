
export default class AccountObjectServices {

    getDetailSummoner(nickname) {
       return fetch(`http://localhost:3636/api/lol/mundo/${nickname}`).then(response => response.json())
            .then(data => { return data })
            .catch((err) => {
                console.error(err)
            })

    }

    getFreeChampions(){
        return fetch('http://localhost:3636/api/lol/freechampionslist').then(result =>result.json())
        .then(data=>{return data}).catch((err)=>console.log(err))

    }

    getMatchesList(nickname){
        return fetch(`http://localhost:3636/api/lol/matches/${nickname}`).then(result =>result.json())
        .then(data=>{return data}).catch((err)=>console.log(err))
    }

}


