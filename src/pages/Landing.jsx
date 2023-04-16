import Resume from '../assets/resume/Alex_Contreras_V2_Resume_Website.pdf';
import IconLinks from '../conponents/IconLinks';

function Landing() {
   return (
      <div>
         <div className='titles'>
            <h1 className='name'>Alex Contreras</h1>
            <h2>Full-Stack Developer</h2>
         </div>

         <div className='landing-cta'>
            <a href={Resume} download className='resume-download'>Download Resume</a>
            <IconLinks />
         </div>
      </div>
   )
};

export default Landing;