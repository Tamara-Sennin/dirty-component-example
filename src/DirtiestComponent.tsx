import React, { useState } from 'react'
import { fetchData, UserData } from './utils/fakeClient'

const DirtiestComponent = () => {
    const [fetchedUser, setFetchedUser] = useState<UserData>()

    const fetchAndSetData = async () => {
        const fetchedData = await fetchData()
        setFetchedUser(fetchedData)
    }

    return (
        <section data-testid='my-component'>
            <h3>Dirtiest Component</h3>
            <button onClick={fetchAndSetData}>Fetch Data</button>
            <span>{JSON.stringify(fetchedUser)}</span>
            {fetchedUser &&
                <section data-testid='user-section'>
                    <h5>{
                        fetchedUser.isClient && fetchedUser.country === 'DEU' ? 'Hallo' :
                            fetchedUser.isClient && fetchedUser.country !== 'DEU' ? 'Hello' :
                                fetchedUser.country === 'DEU' ? 'Willkommen' : 'Welcome'}
                        {} {fetchedUser.name}!
                    </h5>
                    {fetchedUser.age < 18 ?
                        fetchedUser.gender === 'male'
                            ?   <a href={'https://www.someboysurl.com'} target='_blank' rel='noreferrer'>Go to boy's section</a>
                            : <a href={'https://www.somegirlsurl.com'} target='_blank' rel='noreferrer'>Go to girl's section</a>
                        : fetchedUser.gender === 'female'
                            ? <a href={'https://www.somewomensurl.com'} target='_blank' rel='noreferrer'>Go to women's section</a>
                            : <a href={'https://www.somemensurl.com'} target='_blank' rel='noreferrer'>Go to men's section</a>
                    }
                </section>
            }
        </section>
    )
}

export default DirtiestComponent