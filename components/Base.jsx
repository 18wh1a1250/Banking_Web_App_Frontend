import Navbar from "./NavbarElements";

const Base=({title="Welcome to our website",children})=>{

    return (
            <div className="container-fluid p-0 m-0">
                
                <Navbar/>

                { children }

                
            </div>
    )
}

export default Base;