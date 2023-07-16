import './DisplayDate.css'


function DisplayDate(prop) {

    const month = prop.DateString.toLocaleString('en-US', { month: 'long' });
    const day = prop.DateString.toLocaleString('en-US', { day: '2-digit' });
    const year = prop.DateString.getFullYear();

    return (
        <div className="DateBox">
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>
    )
}

export default DisplayDate;