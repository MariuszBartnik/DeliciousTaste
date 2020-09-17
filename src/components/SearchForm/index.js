import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import './styles.scss';

const SearchForm = () => {
    const [cityName, setCityName] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const handleChange = (event) => {
        setCityName(event.target.value)
    }

    const handleValidation = () => {
        setErrors([]);
        let errorsArray = [];
        let formValid = true;

        if(cityName.length < 3) errorsArray.push({msg: 'City name must be at least 3 chars long'});  
        if(!/^[a-z\s]+$/i.test(cityName)) errorsArray.push({msg: 'City name must contain only letters'});

        if(errorsArray.length > 0){ 
            setErrors(errorsArray);
            formValid = false
        }
    
        return formValid;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!handleValidation()) return;

        history.push(`/city-list/${cityName}`);
    }

    const showErrors = () => {
        const messages = errors.map(err => (
            <div 
                className="errorMsg" 
                key={err.msg}
                data-test="ErrorMsg"
            >
                {err.msg}
            </div>
        ))

        return messages;
    }

    return (
        <form className="form" onSubmit={handleSubmit} data-test="SearchForm">
            <input 
                className="input" 
                placeholder="Enter city name..."
                value={cityName} 
                onChange={handleChange}
                data-test="SearchInput"
                required 
            />

            {(errors.length > 0) && showErrors()}

            <button 
                className="submit-button" 
                type="submit"
            >
                Search
            </button>
        </form>
    )
}

export default SearchForm;
