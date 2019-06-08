import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './homepage.css'

const HomePage =()=>{
    const [title,setTitle] = useState('Guest');
    const [background,setBackground] = useState('skyblue')
    const [color,setColor] = useState('white')
        return(
        <>
        <div className="navbar" style={{background,color}}>
            <div className="nav-item"><Link to='/home' className="nav-item">Home</Link></div>
            <div className="nav-item"><Link to='/about' className="nav-item">About</Link></div>
            <div className="nav-item"><Link to='/projects' className="nav-item">Projects</Link></div>
        </div>
        <div className="container" >
            <div className="content-wrapper" style={{background,color}}>
                    content1
            </div>
            <div className="content-wrapper" style={{background,color}}>
                    <div>
                    content2
                    <input value={background} onChange={(e)=>setBackground(e.target.value)}/></div>
            </div>
        </div>
        <div className="container2">
            <div className="third-wrapper" style={{background,color}}>
                    content3
                
            </div>
        </div>
        <div className="container3">
            <div className="fourth-wrapper" style={{background,color}}>
                    content4
            </div>
        </div>
        </>
    )
}

export default HomePage;