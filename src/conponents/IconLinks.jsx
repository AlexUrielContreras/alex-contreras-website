import linkedinIcon from '../assets/icons/linkedin.ico'
import githubIcon from '../assets/icons/github.ico'

function IconLinks() {
   const socialMediaInfo = [ 
      {
         site: "Linkedin",
         profileUrl: 'https://linkedin.com/in/auc29',
         icon: linkedinIcon
      },
      {
         site: "Github",
         profileUrl: 'https://github.com/AlexUrielContreras',
         icon: githubIcon
      }
   ]

   return (
      <div className='social-links-container'>
        {socialMediaInfo.map(element => {
            return <a href={element.profileUrl} key={element.site} className='social-links'>
               <img src={element.icon} alt={`${element.site} icon`}/>                
            </a>
         })}
      </div>
   )
};

export default IconLinks;