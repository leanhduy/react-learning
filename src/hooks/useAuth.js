import { useContext } from 'react'
import { AuthContext } from '../components/todo/utils/context'

export const useAuth = () => {
    return useContext(AuthContext)
}
