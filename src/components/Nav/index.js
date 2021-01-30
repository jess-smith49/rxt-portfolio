function Nav(props){

    const tabs = ['About', 'Projects', 'Contact', 'Resume']
    return(
      
        <header>
          <div className = "name">
            JESSICA SMITH
          </div>
          <ul className = "nav nav-tabs py-3">
      {tabs.map(tab => (
        <li className = "nav-item px-2" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            
            onClick={() => props.handlePageChange(tab)}
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
        </header>
    )
}


export default Nav;