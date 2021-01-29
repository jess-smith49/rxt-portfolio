function Nav(props){

    const tabs = ['About', 'Projects', 'Contact', 'Resume']
    return(
        <header>
          <ul>
      {tabs.map(tab => (
        <li key={tab}>
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