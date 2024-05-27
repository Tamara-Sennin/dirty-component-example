import { render, screen } from '@testing-library/react'
import { UserData } from '../utils/fakeClient'
import GoodComponent from './GoodComponent'
import { useUserDataApi } from './hooks'

const userData: UserData = {
    isClient: true,
    name: 'John',
    age: 25,
    gender: 'male',
    country: 'DEU'
}

const useUserDataApiMock = useUserDataApi as jest.Mock
jest.mock('./hooks')

const setMockData = (data?: UserData) => {
    useUserDataApiMock.mockClear()
    useUserDataApiMock.mockReturnValue({ fetchedUser: data, fetchData: jest.fn() })
}

describe('GoodComponent', () => {
    beforeEach(() => {
        setMockData(userData)
    })

    describe('user section', () => {
        it('should not render user section if user is not fetched', () => {
            setMockData(undefined)
            render(<GoodComponent />)
            const userSection = screen.queryByTestId('user-section')
            expect(userSection).not.toBeInTheDocument()
        })

        it('should render user section if user is fetched', () => {
            render(<GoodComponent />)
            const userSection = screen.queryByTestId('user-section')
            expect(userSection).toBeInTheDocument()
        })
    })
})