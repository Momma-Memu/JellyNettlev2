import React, { useState, useEffect } from 'react';
import SearchInput from '../FormFields/SearchInput';
import { findUsers } from '../../store/friends';
import { useDispatch, useSelector } from 'react-redux';
import Person from './Person';

const FindPeople = ({props}) => {
    const { childRef } = props;
    const [username, setUsername] = useState('');
    const [spinner, setSpinner] = useState(false);
    const dispatch = useDispatch();
    const users = useSelector((state) => state.friends.userResults) || [];

    useEffect(() => {
        let delayDebounceFn;
        if (username) {
            setSpinner(true);
            delayDebounceFn = setTimeout(() => {
                setSpinner(false);
                dispatch(findUsers(username));
            }, 2000)
        }

    
        return () => clearTimeout(delayDebounceFn)
    }, [username])

    useEffect(() => {
        // maintains consistent positioning in the center of the innerWidth values of the window.
        childRef.current.style.left = `calc(50% - 250px)`;
    }, [childRef])

    const updateUsername = ($event) => setUsername($event.target.value)

    return (
        <div ref={childRef} className='modal-container radius-5 overflow-hidden'>
            <div className='modal-header fsize-5 fcol-white p-2 text-align-center'>Add Friends</div>
            <SearchInput props={
                { 
                    placeholder: 'Search by username or ID...', 
                    type: 'text', 
                    value: username, 
                    onChange: updateUsername 
                }
            } />
            <div className='flex-horizon flex-full-center'>
                { spinner ? <div className='spin'></div> : null}
            </div>
            <div className='flex-vert'>
                { users.map((user, index) => (
                    <Person key={index} props={{user}} />
                )) }
            </div>
        </div>
    )
}

export default FindPeople;