
import photoAlt from './assets/profilepicturealt.png'


function ProfilePicture({ photoUrl }) {
    if(photoUrl)
        return <img src={photoUrl}/>
    return <img src={photoAlt}/>
}

export default ProfilePicture;