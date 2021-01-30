function Nav(props){

    const tabs = ['About', 'Projects', 'Contact', 'Resume']
    return(
      
        <header>
          <div className = "name d-flex justify-content-center">
            <h1>JESSICA SMITH</h1>
          </div>
          <ul className = "d-flex justify-content-center nav nav-tabs py-5">
      {tabs.map(tab => (
        <li className = "information-box nav-item px-2" key={tab}>
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