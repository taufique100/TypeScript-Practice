interface User {
    readonly dbid: number
    email: string,
    userId: number,
    googleId?: string,
    // startTrail:()=> string
    startTrail():string,
    getCoupon(couponame:string):number
}


const taufique: User = {
    dbid:22,
    email: 't@gamil.com',
    userId: 123,
    startTrail:()=> {
        return 'taril started'
    },
    getCoupon: (name:'taufique')=>{
        return 10
    }
}

interface Admin extends User{
    role: "Admin" | "ta" | "learner"
}

const admin: Admin={
    role: 'Admin',
    dbid:22,
    email: 't@gamil.com',
    userId: 123,
    startTrail:()=> {
        return 'taril started'
    },
    getCoupon: (name:'taufique')=>{
        return 10
    }
}