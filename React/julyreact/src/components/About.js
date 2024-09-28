import Contact from "./Contact"

function About({fname,lname,x}){
    console.log("About props")
    return (
        <div>
            <Contact x={x}/>
            <h1>About</h1>
           <h1> i am {fname} and my last name is {lname}</h1>

        </div>
    )
}

export {About}