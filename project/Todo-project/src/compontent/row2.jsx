function Row2({name,date}){

    return ( <div>
        <div className="row justify-content-center mt-3">
        <div className="col-sm-12 col-md-3 col-lg-2">
         <span id="font" className="float-l">{name}</span>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2">
          <span id="font" className="float-l">{date}</span>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-1">
            <button  className="btn btn-danger w-100">Delete</button>
        </div>
    </div>
    </div> )
}

export default Row2;