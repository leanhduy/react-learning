import { screen, render } from '@testing-library/react'
import { beforeEach, describe, expect, vi } from 'vitest'
import FollowersList from '../FollowersList'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

vi.mock('axios')

describe('FollowersList', () => {
    it('should return at least one div with `follow-item` class', async () => {
        axios.get.mockResolvedValue({ data: { results: mockUsers } })
        render(<MockFollowersList />)
        const divEl = await screen.findByTestId('follower-item-0')
        expect(divEl).toBeInTheDocument()
    })

    it('should return 5 `follower-item` div when fetching users', async () => {
        axios.get.mockResolvedValue({ data: { results: mockUsers } })
        render(<MockFollowersList />)
        const divEls = await screen.findAllByTestId(/follower-item/i)
        expect(divEls.length).toBe(2)
    })
})

const mockUsers = [
    {
        gender: 'female',
        name: { title: 'Ms', first: 'Chloe', last: 'Wood' },
        location: {
            street: { number: 6382, name: 'Victoria Road' },
            city: 'Nelson',
            state: 'Bay of Plenty',
            country: 'New Zealand',
            postcode: 40720,
            coordinates: { latitude: '52.9653', longitude: '104.6328' },
            timezone: {
                offset: '+11:00',
                description: 'Magadan, Solomon Islands, New Caledonia',
            },
        },
        email: 'chloe.wood@example.com',
        login: {
            uuid: '3fbfae81-54a7-4fe9-9cc3-ce2e307d2e93',
            username: 'bluesnake903',
            password: 'rivers',
            salt: 'rOC73KZV',
            md5: 'c02f1018caaaf7a5c6595c3e0df6cbd4',
            sha1: '68c3dac8d7ca4c90f373a71929df1fc79ca35161',
            sha256: '56dcebae957d827e8294827c2a2871da0828339baaf03d983b8bced094420480',
        },
        dob: { date: '1954-07-14T17:44:15.032Z', age: 69 },
        registered: { date: '2019-12-22T14:46:56.675Z', age: 4 },
        phone: '(048)-185-1525',
        cell: '(749)-943-4730',
        id: { name: '', value: null },
        picture: {
            large: 'https://randomuser.me/api/portraits/women/20.jpg',
            medium: 'https://randomuser.me/api/portraits/med/women/20.jpg',
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/20.jpg',
        },
        nat: 'NZ',
    },
    {
        gender: 'female',
        name: { title: 'Mrs', first: 'Alicia', last: 'Porter' },
        location: {
            street: { number: 7428, name: 'Mcgowen St' },
            city: 'Geraldton',
            state: 'Tasmania',
            country: 'Australia',
            postcode: 4440,
            coordinates: { latitude: '1.4340', longitude: '-91.3181' },
            timezone: {
                offset: '-5:00',
                description: 'Eastern Time (US & Canada), Bogota, Lima',
            },
        },
        email: 'alicia.porter@example.com',
        login: {
            uuid: '8b7ff757-c500-4c0b-84b8-6b3e098ce5ea',
            username: 'yellowpeacock150',
            password: 'nick',
            salt: '5bLHV7t5',
            md5: '3c443464f29899383f2ebe97fe105bb8',
            sha1: '56470e8df7124d1f3c546fd37b66797841c73422',
            sha256: 'bef19ad9a5be6c06bfb8804eb04208d97ba1ec82621daacf92d71fe41c9be2ff',
        },
        dob: { date: '1970-08-09T23:19:52.670Z', age: 53 },
        registered: { date: '2002-04-19T12:14:32.898Z', age: 22 },
        phone: '05-0139-0363',
        cell: '0495-805-818',
        id: { name: 'TFN', value: '371696151' },
        picture: {
            large: 'https://randomuser.me/api/portraits/women/60.jpg',
            medium: 'https://randomuser.me/api/portraits/med/women/60.jpg',
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/60.jpg',
        },
        nat: 'AU',
    },
]
