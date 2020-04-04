import React from 'react'
import AppleComputers from './AppleComputers/AppleComputers'
import Phones from './Cellphones/CellPhones'
import Computers from './Computers/Computers'
import Laptops from './Laptops/Laptops'
import {Route} from 'react-router-dom'

const ShowProducts = (props) => {
  return (
      <div>
        <Route path='/appleComputers' component={AppleComputers}/>
        <Route path='/Phones' component={Phones}/>
        <Route path='/computers' component={Computers}/>
        <Route path='/laptops' component={Laptops}/>
      </div>
  )
}
export default ShowProducts
