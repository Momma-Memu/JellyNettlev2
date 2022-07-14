const Person = ({props}) => {
    console.log(props)
    const { user } = props;
    return (
        <div className="flex-horizon flex-align-center mt-2">
            { user.Profile ? <img src={user.Profile.photoUrl} alt='profile picture' className='profile-picture-result ml-5 mr-2' /> : 
            <i className="fa fa-user default-user-icon ml-5 mr-2" aria-hidden="true"></i> }
            <div>{user.username}</div>
        </div>
    )
}

export default Person;