import React from 'react'
import { useUserDataApi } from './hooks'
import { getTexts } from './texts'

const GoodComponent = () => {
    const { fetchedUser, fetchData } = useUserDataApi()
    const texts = getTexts(fetchedUser)

    return (
        <section data-testid='my-component'>
            <h3>Clean Component</h3>
            <button onClick={fetchData}>Fetch Data</button>
            {JSON.stringify(fetchedUser)}
            {fetchedUser &&
                <section data-testid='user-section'>
                    <h5>{texts?.greeting}</h5>
                    {<a href={texts?.navigationLink?.url} target='_blank' rel='noreferrer'>{texts?.navigationLink?.desc}</a>}
                </section>
            }
        </section>
    )
}

export default GoodComponent