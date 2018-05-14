import React from 'react';
import { Menu ,Icon,Container,Grid,Dropdown} from 'semantic-ui-react';
import SearchBar from '../../containers/searchBarContainer'
import './mainBar.css'
const MainBar =()=>(
	  <div>
	    <Menu attached={true} borderless >
	   <Container>
        <Menu.Item >
         <Icon size='big'  name='openid' />
          <span  className='_A1'>REXtube</span>
        </Menu.Item>

       	<SearchBar />
      
      	<Menu.Item position='right'>
      	<span className='_A2'>
         <Icon size='large'  name='spinner' />
         </span>
         <span className='_A2' >
         <Icon  size='large'  name='heart outline' />
         </span>
         <span className='_A2'>
         <Icon  size='large'  name='user outline' />
         </span>
        </Menu.Item>
    </Container>

      </Menu>
      </div>
)
export default MainBar 