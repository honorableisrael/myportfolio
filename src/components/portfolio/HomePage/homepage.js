import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './homepage.css'
import vetivauser from '../../../asset/vetivauser.mp4'
import Img1 from '../../../asset/images.png'
import Img2 from '../../../asset/images.jpg';
import Img3 from '../../../asset/image.jpg';
import Switch from '@material-ui/core/Switch';

import Typography from '@material-ui/core/Typography';
import { isAbsolute } from 'path';





const HomePage =()=>{
    const [title,setTitle] = useState('Guest');
    const [background,setBackground] = useState('#021d44');
        const [contactus,setContactUs] = useState(false)
        const [color,setColor] = useState('white');
        const [state, setState] = React.useState({
        gilad: false,
        background1:'#021d44',
        background2:'#303030',
        background3:'#2196f3',
        background4:'#D4D4D4',
        background5:'white',
        background6:'#030106',
        color4:'rgb(4,4,4)',
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
            <div className="nav-item" onClick={()=>{setContactUs(false)}}>About</div>
                <div className="nav-item" onClick={()=>{setContactUs(true)}}>Contact</div>
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
                    <span className="content-header" >{!contactus? 'Software Engineer':'Contact Information'}</span><br/> 
        {contactus?` Email:israel.hilary7@yahoo.com,vigohilsss007@gmail.com      Phone:09067151040,09058516091` : 'I’m Oba Hilary Israel, a software developer based in Lagos, Nigeria. I develop web and mobile applications. I work well with a team as well as independently ,I have built incredible web and mobile apps with exceptional user experience.'}
                    </p>
                </div>
            </div>
        </div>
        <div className="container"style={{background:!gilad?background4:background2,color:!gilad?color4:background5}} >
            <div className="content-wrapper" style={{background:!gilad?background5:background6,color:!gilad?color4:background5}}> 
                <h2 className="content-header"><img src={Img1} className='image0' /></h2>
                <p className="content-body">With over two years  in software developement ,i have successfully developed web and mobile applications, company management software,SPA including chat applications </p>
            </div>
            <div className="content-wrapper" style={{background:!gilad?background5:background6,color:!gilad?color4:background5}}>
                <h2  className="content-header"><img src={Img2} className='image1' /></h2>
                <p className="content-body">My Developement tools are Html , CSS , Javascript , React js , Bootstrap , Material-ui , React native, Node js, Mongo db</p>
            </div>
            <div className="content-wrapper" style={{background:!gilad?background5:background6,color:!gilad?color4:background5}}>
                <h2  className="content-header"><img src={Img3} className='image0' /></h2>
                <p className="content-body">I’m always up for new challenges.Take a look at some of my works.Let’s discuss your next project and create something awesome together.</p>
            </div>
        </div>
        {/* projects */}
        
        <div className="container2" style={{background:!gilad?background4:background2}}>
            <div className="duo-wrapper"    style={{background:!gilad?background5:background6,color:!gilad?color4:background5}}>
            <p className="content-body"><b>Finance Management System</b></p>
            <p className="content-body"><i>WEB APP</i></p>
            <p className="content-body">Vetiva is a Pan-African Financial Services Company incorporated in Nigeria;The App is used in managing company shares for Vetiva, MTN and dealing members of the Nigerian Stock Exchange);through this platform stakeholders can buy and sell shares.</p>
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
                        <p><i className="fa footer-icon" >&#xf09a;</i><a className='link' href="https://facebook.com/oba.hilary" target="blank" >Follow on facebook</a></p>
                        <p><i className="fa footer-icon">&#xf16d;</i><a className='link' href="https://instagram.com/honorable.israel" target="blank" title='instagram profile' >Follow on Instagram</a></p>
                        <p><i className="fa footer-icon">&#xf0e1;</i><a target='blank' className='link' href="https://www.linkedin.com/in/hilary-oba-095384118" title='linkedln profile' className="anchor-item">LinkedIn profile</a></p>
                        <p><i className="fa fa-github footer-icon" aria-hidden="true"></i><a className='link' href="https://github.com/honorableisrael" target="blank" >GitHub </a></p>
                        </div>
                        <div className="f1">
                        <h6 className="content-body">CONTACT</h6>
                        <p className="content-body">Send a general message</p>
                        <p className="content-body">israel.hilary7@yahoo.com</p>
                            <p className="content-body">Hire now call 09067151040</p>
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
