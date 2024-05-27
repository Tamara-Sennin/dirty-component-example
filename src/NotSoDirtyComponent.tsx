import React, { useEffect, useState } from 'react'
import { fetchData, UserData } from './utils/fakeClient'

type Link = { url: string, desc: string }

const NotSoDirtyComponent = () => {
    const [fetchedUser, setFetchedUser] = useState<UserData>()
    const [userGreeting, setUserGreeting] = useState<string>('')
    const [navigationLink, setNavigationLink] = useState<Link>()

    const fetchAndSetData = async () => {
        const fetchedData = await fetchData()
        if(fetchedData) setFetchedUser(fetchedData)
    }

    useEffect(() => {
        if (fetchedUser) {
            setUserGreetingText(fetchedUser)
            setNavigationLinkObject(fetchedUser)
        }
    }, [fetchedUser])

    const setUserGreetingText = (user: UserData) => {
        let userGreeting = ''
        if (user.isClient) {
            userGreeting = user.country === 'DEU' ? 'Hallo' : 'Hello'
        } else {
            userGreeting = user.country === 'DEU' ? 'Willkommen' : 'Welcome'
        }
        setUserGreeting(userGreeting)
    }

    const setNavigationLinkObject = (user: UserData) => {
        if (user.age < 18) {
            return user.gender === 'female'
            ? setNavigationLink({url: 'https://www.somegirlsurl.com', desc: 'Go to girl\'s section'})
            : setNavigationLink({url: 'https://www.someboysurl.com', desc: 'Go to boy\'s section'})
        }

        return user.gender === 'female'
            ? setNavigationLink({url: 'https://www.somewomensurl.com', desc: 'Go to women\'s section'})
            : setNavigationLink({url: 'https://www.somemensurl.com', desc: 'Go to men\'s section'})
    }

    return (
        <section>
            <h3>Not so dirty Component</h3>
            <button onClick={fetchAndSetData}>Fetch Data</button>
            {JSON.stringify(fetchedUser)}
            {fetchedUser &&
                <section>
                    <h5>{userGreeting} {fetchedUser.name}!</h5>
                    {<a href={navigationLink?.url} target='_blank' rel='noreferrer'>{navigationLink?.desc}</a>}
                </section>
            }
        </section>
    )
}

export default NotSoDirtyComponent