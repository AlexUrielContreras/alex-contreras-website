function Header({ setCurrentTab, currentTab }) {
   return (
      <div className='page-tabs'>
         <ul>
            <li onClick={() => setCurrentTab('Home')} className={currentTab === 'Home' ? 'active' : null}>HOME</li>
            <li onClick={() => setCurrentTab('Skills')} className={currentTab === 'Skills' ? 'active' : null}>SKILLS</li>
            <li onClick={() => setCurrentTab('Projects')} className={currentTab === 'Projects' ? 'active' : null}>PROJECTS</li>
            <li onClick={() => setCurrentTab('Contacts')} className={currentTab === 'Contacts' ? 'active' : null}>CONTACTS</li>
         </ul>
      </div>
   )
};

export default Header;