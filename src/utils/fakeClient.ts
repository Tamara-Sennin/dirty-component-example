export type UserData = {
    isClient: boolean
    gender: string,
    name: string
    age: number
    country: string
}

const mockedData: UserData[] = [
    {
        isClient: true,
        gender: 'male',
        name: 'John Doe',
        age: 18,
        country: 'DEU',
    },
    {
        isClient: false,
        gender: 'male',
        name: 'John Doe Jr',
        age: 14,
        country: 'USA',
    },
    {
        isClient: true,
        gender: 'female',
        name: 'Jane Doe',
        age: 25,
        country: 'DEU',
    },
    {
        isClient: false,
        gender: 'female',
        name: 'Jane Doe Jr',
        age: 12,
        country: 'USA',
    },
]

let iteration = -1
export const fetchData = async (): Promise<UserData> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            iteration++
            if(iteration === mockedData.length) iteration = 0
            resolve(mockedData[iteration])
        }, 200)
    })
}