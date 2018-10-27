import React, { Component } from 'react'
import ImgPNF from '../IMG/404-reaper.jpg'
 
class PageNF extends Component{
    render(){
        return(
            <div>
                <h1>Page Not Foud</h1>
                <img src={ImgPNF} alt="Not found"/>
            </div>
        )
    }
}

export default PageNF;