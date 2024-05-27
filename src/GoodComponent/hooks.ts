import { useState, useEffect, useRef } from 'react'
import { fetchData as fetchDataClient, UserData } from '../utils/fakeClient'

export const useUserDataApi = () => {
    const [fetchedUser, setFetchedUser] = useState<UserData>()
    const cancel = useRef(false)

    const cancelFetch = () => {
        cancel.current = true
    }

    const fetchData = async () => {
        if(cancel.current) return

        const data = await fetchDataClient()
        if(cancel.current) return
        else setFetchedUser(data)
    }

    useEffect(() => {
        cancel.current = false
        return () => {
            cancelFetch()
        }
    }, [])

    return { fetchedUser, cancelFetch, fetchData }
}