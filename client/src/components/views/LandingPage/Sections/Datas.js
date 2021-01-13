const continents = [
    {
        "_id": 1,
        "name": "North Indian"
    },
    {
        "_id": 2,
        "name": "South Indian"
    },
    {
        "_id": 3,
        "name": "Soups"
    },
    {
        "_id": 4,
        "name": "Salads"
    },
    {
        "_id": 5,
        "name": "Rice"
    },
    {
        "_id": 6,
        "name": "Starters"
    },
    {
        "_id": 7,
        "name": "Deserts"
    }

]

const price = [
    {
        "_id": 0,
        "name": "Any",
        "array": []
    },
    {
        "_id": 1,
        "name": "Rs 0 to Rs 199",
        "array": [0, 199]
    },
    {
        "_id": 2,
        "name": "Rs 200 to Rs 249",
        "array": [200, 249]
    },
    {
        "_id": 3,
        "name": "Rs 250 to Rs 299",
        "array": [250, 299]
    },
    {
        "_id": 4,
        "name": "Rs 300 to Rs 350",
        "array": [300, 350]
    },
    {
        "_id": 5,
        "name": "More than Rs 350",
        "array": [350, 1500000]
    }
]




export {
    continents,
    price
}
