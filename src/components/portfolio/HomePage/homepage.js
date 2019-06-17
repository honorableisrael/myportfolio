import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './homepage.css'
import vetivauser from '../../../asset/vetivauser.mp4'
import Img1 from '../../../asset/images.png'
import Img2 from '../../../asset/images.jpg';
import Img3 from '../../../asset/image.jpg';
import Switch from '@material-ui/core/Switch';
//toltip
import Tooltip from '@material-ui/core/Tooltip';
import { isAbsolute } from 'path';





const HomePage =()=>{

    const [title,setTitle] = useState('Guest');
    const [background,setBackground] = useState('#021d44');
    const [color,setColor] = useState('white');
    const [state, setState] = React.useState({
        gilad: false,
        background1:'#021d44',
        background2:'#303030',
        background3:'#2196f3',
        background4:'#D4D4D4',
        background5:'white',
        background6:'#030106',
        color4:'#9ea2a8'
      });
      //date
      const date=()=>{
        let today = new Date()
        return today.getFullYear()
    }
      const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
        setBackground(state.gilad?state.background1:state.background6) //background color is updated here
      };
      const {gilad,background1,background2,background3,background4,background5,background6,color4} = state
        return(
        <>
        <div className="navbar" style={{background,color}}>
            <div className="nav-item"><Link to='/home' className="nav-item">About</Link></div>
                <div className="nav-item"><Link to='/contact' className="nav-item">Contact</Link></div>
            <div className="nav-item"><Link to='/projects' className="nav-item">Projects</Link></div>
        </div>
        <div className="navbar1" style={{background,color}}>
            <div className="nav-item-switch"><Switch checked={state.gilad} onChange={handleChange('gilad')} value="gilad" />
            </div>
        </div>
        <div className="container1">
            <div className="third-wrapper"  style={{background:!gilad?background4:background2,color:color4}}>
                <div className="container-aboutme">
                    <p className="aboutme-text" style={{background:!gilad?background5:background6,color:!gilad?color4:background5}}>
                    <span className="content-header" >Software Engineer</span><br/>I’m Oba Hilary israel, a software developer based in Lagos, Nigeria.
                        I develop web and mobile applications.
                       I have built incredible web and mobile apps with exceptional user experience.
                    </p>
                </div>
            </div>
        </div>
        <div className="container"style={{background:!gilad?background5:background2,color:!gilad?color4:background5}} >
            <div className="content-wrapper" style={{background:!gilad?background5:background6,color:!gilad?color4:background5}}>
                
                <h2 className="content-header"><img src={Img1} className='image0' /></h2>
                <p className="content-body">With over 3years experience in software developement , I have successfully built web and mobile applications, company management softwares, school management softwares including chat applications </p>
            </div>
            <div className="content-wrapper" style={{background:!gilad?background5:background6,color:!gilad?color4:background5}}>
                <h2  className="content-header"><img src={Img2} className='image1' /></h2>
                <p className="content-body"> Html , Css , Javascript , React js , Bootstrap , Material-ui , React native, Node js, Mongo db</p>
            </div>
            <div className="content-wrapper" style={{background:!gilad?background5:background6,color:!gilad?color4:background5}}>
                <h2  className="content-header"><img src={Img3} className='image0' /></h2>
                <p className="content-body">I’m always up for new challenges. Let’s discuss your next project and create something awesome together.</p>
            </div>
        </div>
        {/* projects */}
        <div className="container2" style={{background:!gilad?background4:background2}}>
            <div className="duo-wrapper"    style={{background:!gilad?background5:background6,color:!gilad?color4:background5}}>
                <p className="content-body"><b>Finance Management System</b></p>
                <p className="content-body"><i>WEB APP</i></p>
                <p className="content-body">Vetiva is a Pan-African Financial Services Company incorporated in Nigeria; duly regulated and registered by the Securities & Exchange Commission. Our wholly-owned subsidiaries Vetiva Securities Limited (a dealing member of the Nigerian Stock Exchange); Vetiva Fund Managers Limited and Vetiva Trustees Limited act as Broker/Dealers, Fund/Portfolio Managers and Corporate Trustees respectively.</p>
                <p className="content-body"> <button className="project-btn"><a target='blank' href="https://www.vtlschemesportal.com" title='vts portal' className="anchor-item">View Project</a></button></p>
            </div>
            <div className="duo-wrapper1" style={{background:background5,color:color4}}>
            <p><img src={require('../../../asset/vetiva.gif')} className="imageClass" alt="gif company demo" /></p>
            </div>
        </div>
        {/* project2 */}
        <div className="container2"style={{background:background4}}>
            <div className="duo-wrapper" style={{background:!gilad?background5:background6,color:!gilad?color4:background5}}>
                <p className="content-body"><b>Smart Fuel Software</b></p>
                <p className="content-body"><i>WEB APP</i></p><p className="content-body">Interswitch , the company behind the digital fuel purchase product expand its network of fuel-redeeming petrol stations and payment channels.
                This app is a platform for  downstream oil marketing firms like, OVH Energy Marketing, Forte Oil & RainOil. The SmartFuel expand its product footprint as well as it’s services to more retailers.</p>
                <p className="content-body"> <button className="project-btn"><a target='blank' href="https://smartfuel.interswitchng.com" title="smart fuel" className="anchor-item">View Project</a></button></p>
            </div>
            <div className="duo-wrapper1" style={{background:background5,color:color4}}>
            <p><img src={require('../../../asset/smartfuel.jpeg')} className="imageClass" alt="gif company demo" /></p>
            </div>
        </div>
        <div className="container3">
            <div className="fourth-wrapper" style={{background:background,color}}>
                   <div className="footer">
                    <div className="f1">
                        <h4 className="content-body FOOTER-HEADING">SUMMARY</h4>
                        <p className="content-body">
                        Front-end Developer, and graduate of Delta State University. I create high-quality web applicatons and designs websites for SMEs.
                        Available for Hire Now
                        </p>
                        </div>
                        <div className="f1">
                        <p><i className="fa footer-icon" style={{marginight:'13px'}}>&#xf09a;</i>Follow on facebook</p>
                        <p><i className="fa footer-icon">&#xf16d;</i>Follow on Instagram</p>
                        <p><i className="fa footer-icon">&#xf0e1;</i>LinkedIn profile</p>
                        <p><i className="fa fa-github footer-icon" aria-hidden="true"></i>GitHub </p>
                        </div>
                        <div className="f1">
                        <h4>CONTACT</h4>
                        <p>Send a general message</p>
                        <p>israel.hilary7@yahoo.com</p>
                        <h4>HIRE NOW</h4>
                            <p>Enquire about hiring Israel</p>
                        </div>
                   </div>
                   <div className="footer">
                    <div className="f2">Copyright {date()} by Hilary Israel.</div>
                   </div>
            </div>
        </div>
        </>
    )
}

export default HomePage;