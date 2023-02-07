import React from 'react'
import Menu from './Menu'
import { profileDate } from './Date'


function Profile() {
  return (
    <>
      <div className='header'>
          <div className="container">
              <div className="title">Profile</div>
              <div className="profile-containar">
                {profileDate.map((list, key) => {
                  return (
                    <table className='table' key={key}>
                      <tbody>
                        <tr>
                          <th className='profile-name'>{list.profileList}</th><td className='profile-text'>{list.profileItem}</td>
                        </tr>
                      </tbody>
                    </table>
                  )
                })}
              </div>
          </div>
        <Menu />
      </div>
    </>
  )
}

export default Profile