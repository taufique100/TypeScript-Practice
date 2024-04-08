// let score:number |  string = 33
// score = 44
// score= '44'
var taufique = { name: 'Taufique', id: 334 };
taufique = { userName: 'hc', id: 334 };
// function getDbId(id: number|string){
//     console.log(`DB id is: ${id}`);
// }
// getDbId("2")
// getDbId(3)
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//array 
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", 3];
