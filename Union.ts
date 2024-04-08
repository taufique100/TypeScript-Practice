// let score:number |  string = 33
// score = 44
// score= '44'


type User = {
    name: string
    id : number
}

type Admin = {
    userName: string
    id : number
}

let taufique: User | Admin={name:'Taufique',id:334}

taufique={userName:'hc', id: 334}

// function getDbId(id: number|string){
//     console.log(`DB id is: ${id}`);
    
// }

// getDbId("2")
// getDbId(3)


function getDbId(id: number|string){
    if(typeof id === "string"){
        id.toLowerCase()
    }    

}


//array 

const data: number[] = [1,2,3]
const data2: string[] = ["1","2","3"]
const data3: (string | number)[] = ["1","2",3]