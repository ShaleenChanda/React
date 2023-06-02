// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Dropdown
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Action</a>
//                     <a className="dropdown-item" href="#">Another action</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="#">Disabled</a>
//                 </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }










// ReactDOM.render(
//     <Navbar />,
//     document.getElementById("root")
// )



//creating simple h1 element saying this the imperative way of working with vanilla javascript

// const h1 = document.createElement("h1");
// h1.textContent = "This the imperative way of working with vanilla javascript";
// h1.className = "header";
// document.getElementById("root").append(h1);

// const staticPage = (
    // <div>
    //     <img src = "React-icon.svg.png"  width = "80px"/>
    //     <h1>FUN FACTS ABOUT React</h1>
    //     <ul>
    //         <li>Was first released in 2013</li>
    //         <li>Was orinally created by Jordan Walke</li>
    //         <li>has well over 100k stars on Github</li>
    //         <li>Is maintain by facebook</li>
    //         <li>Powers thousands of enterprise apps, including mobile apps</li>
    //         </ul>
            
    // </div>
// );


// ReactDOM.render(staticPage, document.getElementById("root"));


// function HeaderElement(){
//     return(
//         <div>
//         <header>
//         <nav className = "nav">
//             <img src = "React-icon.svg.png"  className = "headimage"/>
//             <ul className = "headerlist">
//                 <li>Pricing</li>
//                 <li>About</li>
//                 <li>Contact</li>
//             </ul>
//         </nav>
//         </header>
//         </div>
//     )
// }

// function FooterComp(){
//     return(            
//     <div className = "footer">
//         <small className = "footerelement">©shaleen kumar chanda enterprises</small>
//     </div>);
// }

// function MainComponent(){
//     return(    
//         <div>

//             <h1> Reasons why I want to learn react</h1>
//             <ol>
//                 <li>
//                     React uses virtual DOM rather than DOM to render changes in webpags
//                 </li>
//                 <li>
//                     React help us to develop composable code
//                 </li>
//             </ol>

//         </div>
//         );


// };


import FooterComp from "./FooterComp";
import HeaderElement from "./HeaderElement";
import MainComponent from "./MainComponent";




function Page(){
    return(    
    <div>
        <HeaderElement/>
        <MainComponent/>
        <FooterComp/>
    </div>)
};




ReactDOM.render(<Page/>, document.getElementById("root"));
