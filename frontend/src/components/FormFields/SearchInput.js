import React, { useState, useEffect } from 'react';

const SearchInput = ({props}) => {
    const { placeholder, onChange, value, type } = props;
    
    return (
        <input className='input-search-field m-2' autoComplete='off' placeholder={placeholder} type={type} value={value} onChange={onChange} />
    )
}

export default SearchInput;