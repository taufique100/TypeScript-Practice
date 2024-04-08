abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
    
    getRealTime():number{
        return 8;
    }
}

// we cannot create object of abstract class
// const taufique = new TakePhoto("test", 'test')  

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("sepia");
        
    }
}