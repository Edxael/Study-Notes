import React from 'react';

    // when to use classes
    // 01- THIS
    // 02- LifeCycle Methods

    // In all other cases try to use Stateless Components

class Header1 extends React.Component {
  render() {

    let myStyle ={
      backgroundColor: "black",
      color: "white",
      textAlign: "center",
      padding: "5px"
    }

    return(
      <div className="myHeader">
        <h3 style={ myStyle } >This is a class Component</h3>
        <a href="http://blog.mycode.website/" target="_blank">MyBlog</a>
      </div>
    )
  }
}

export default Header1;
