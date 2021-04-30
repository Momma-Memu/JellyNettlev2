import { useSelector } from 'react-redux';

const Current = ({setting}) => {
    const privacy = useSelector(state => state.privacy);
    const user = useSelector(state => state.session.user);


    if(setting === 'general' && user){
        return (
            <div className='current-settings-panel-general'>
                <div className='current-settings-header'>Current general settings</div>
                <div className='current-settings-item-container'>
                    <div className='current-settings-item'>username: {user.username}</div>
                    <div className='current-settings-item'>email: {user.email}</div>
                </div>
            </div>
        )
    } else if (setting === 'privacy'){
        const { displayRealName, displayGroups, displayFriends, dob, gender, whoCanFindMe } = privacy;
        return (
            <div className='current-settings-panel'>
                <div className='current-settings-header'>Current privacy settings</div>
                <div className='current-settings-item-container'>
                    <div className='current-settings-item'>Display Date of Birth: {dob ? 'yes' : 'no'}</div>
                    <div className='current-settings-item'>Display Friends: {displayFriends ? 'yes' : 'no'}</div>
                    <div className='current-settings-item'>Display Gender: {gender ? 'yes' : 'no'}</div>
                    <div className='current-settings-item'>Display Groups: {displayGroups ? 'yes' : 'no'}</div>
                    <div className='current-settings-item'>Display Name: {displayRealName ? 'real name' : 'username'}</div>
                    <div className='current-settings-item'>Who Can Friend You: {whoCanFindMe}</div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default Current;