function Hello(){
    let fullName = "Sumit"; 
    let lastName = "srivastav"
    let code = ()=> {
        return 'hello coder'
    }
    return (
        <h3>
            Hello this is futur , i am your master {fullName} {code()}
        </h3>
    )
}

export default Hello;