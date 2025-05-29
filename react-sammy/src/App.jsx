function App() {
    let arr = [
        {
            title: "coding",
            subject: "javaScript",
            class: "united tech era",
        },
        {
            title: "E-Accounting",
            subject: "Excel",
            class: "united tech era",
        }
    ]


    return <>

        {arr.map((names,index) => (
            <div key={index}>{names.title}</div>
            
            ))} 
        {arr.map((names,index) => (
            <div key={index}>{names.subject}</div>
            
            ))} 
        {arr.map((names,index) => (
            <div key={index}>{names.class}</div>  
            ))} 

    </>
}

export default App;