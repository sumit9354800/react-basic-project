function Con3(){

    let date = new Date();
    return <div>
        <p className="lead">This the current time: {date.toLocaleDateString()} - {date.toLocaleTimeString()}</p>
    </div>
    
    }
    
    export default Con3;