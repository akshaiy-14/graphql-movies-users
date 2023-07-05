const usersList = [
    {
        id: 1,
        name: "Akshaiy",
        age: 25,
        nationality: "INDIA",
        friends: [
            {
                id: 2,
                name: "Dad",
                age: 52,
                nationality: "INDIA"
            }
        ]
    },
    {
        id: 2,
        name: "Dad",
        age: 52,
        nationality: "INDIA",
        friends: [
            {
                id: 3,
                name: "Mom",
                age: 46,
                nationality: "INDIA"
            }
        ]
    },
    {
        id: 3,
        name: "Mom",
        age: 46,
        nationality: "INDIA",
        friends: [
            {
                id: 2,
                name: "Dad",
                age: 52,
                nationality: "INDIA"
            }
        ]     
    },
    {
        id: 4,
        name: "Bro",
        age: 12,
        nationality: "RUSSIA",
        friends: [
            {
                id: 5,
                name: "Gran",
                age: 71,
                nationality: "UK"
            }
        ]
    },
    {
        id: 5,
        name: "Gran",
        age: 71,
        nationality: "UK",
        friends: [
            {
                id: 3,
                name: "Mom",
                age: 46,
                nationality: "INDIA"
            }
        ]
    }

];

const moviesList = [
    {
        id:1,
        name:"Interstellar",
        year:2007,
        screeningNow: false
    },
    {
        id:2,
        name:"Jailer",
        year:2023,
        screeningNow: true
    },
    {
        id:3,
        name:"VIP",
        year:2012,
        screeningNow: false
    },
    {
        id:4,
        name:"Nanban",
        year:2015,
        screeningNow: false
    }
]

module.exports = { usersList, moviesList }