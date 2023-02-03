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
                    <table className='table'>
                      <tr>
                        <th key={key} className='profile-name'>{list.profileList}</th><td key={key} className='profile-text'>{list.profileItem}</td>
                      </tr>
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