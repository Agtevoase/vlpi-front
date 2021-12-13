import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import ProfileContainer from 'containers/profile'

import { getProfile } from 'store/auth/actions'

const ProfilePage: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfile())
  }, [])

  return <ProfileContainer />
}

export default ProfilePage
