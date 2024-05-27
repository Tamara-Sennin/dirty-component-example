import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DirtiestComponent from './DirtiestComponent'
import { fetchData, UserData } from './utils/fakeClient'

const userData: UserData = {
    isClient: true,
    name: 'John',
    gender: 'male',
    age: 25,
    country: 'DEU',
}

const mockFetchData = fetchData as jest.Mock
jest.mock('./utils/fakeClient')

describe('DirtiestComponent', () => {
    describe('user section', () => {
        it.each([
            ['Hallo', 'DEU', true],
            ['Hello', 'USA', true],
            ['Willkommen', 'DEU', false],
            ['Welcome', 'USA', false],
        ])('should render %s greeting if user is from %s and is client = %s', async (greeting, country, isClient) => {
            mockFetchData.mockResolvedValue({
                ...userData,
                country,
                isClient,
            })
            render(<DirtiestComponent />)
            userEvent.click(screen.getByRole('button'))
            const greetingText = await screen.findByText(`${greeting} ${userData.name}!`)
            expect(greetingText).toBeInTheDocument()
        })

        it.each([
            [17, 'female', 'https://www.somegirlsurl.com', 'Go to girl\'s section'],
            [18, 'female', 'https://www.somewomensurl.com', 'Go to women\'s section'],
            [17, 'male', 'https://www.someboysurl.com', 'Go to boy\'s section'],
            [18, 'male', 'https://www.somemensurl.com', 'Go to men\'s section'],
        ])(`should render proper link for %s age %s`, async (age, gender, url, desc) => {
            mockFetchData.mockResolvedValue({
                ...userData,
                age,
                gender
            })
            render(<DirtiestComponent />)
            userEvent.click(screen.getByRole('button'))
            const link = await screen.findByText(desc)
            expect(link).toBeInTheDocument()
            expect(link).toHaveAttribute('href', url)
        })
    })
})