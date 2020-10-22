import React, {useState} from 'react';

export const Edit = (props) => {
    const [formData, setFormData] = useState(props.song);
    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleSubmit(formData);
        props.history.push('/');
    }
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };
	return (
		<form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
            /> 
            <br />
            <label>Artist</label>
            <input
                type="text"
                name="artist"
                value={formData.artist}
                onChange={handleChange}
            />
            <br />
            <label>Time</label>
            <input
                type="text"
                name="time"
                value={formData.time}
                onChange={handleChange}
            />
            <br />
            <input type='submit' value={props.label} />
        </form>
	);
};
