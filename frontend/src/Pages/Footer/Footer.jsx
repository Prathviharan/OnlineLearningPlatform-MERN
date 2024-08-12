import React from 'react'
import '../Home/Landing/Landing.css'  // import css file

// Footer component
function Footer() {
  return (
    <div className="footer">
        <div className="leftPart">
          <div className="title">
            <img src="https://www.figma.com/file/6b4R8evBkii6mI53IA4vSS/image/53619c42501fb7619406ed947b38c5fa4f07597c" width={60} alt="" />
            <h2>Learnify</h2>
          </div>
          <p>Copyright  © S1-SE-WD-04</p>
          <p>Learn the world with us !</p>
        </div>
        <div className="rightPart">
          <div className="links">
            <div className="link">
              <hr />
              <p>Privacy Policy</p>
            </div>
            <div className="link">
              <hr />
              <p>Courses</p>
            </div>
            <div className="link">
              <hr />
              <p>About us</p>
            </div>
            <div className="link">
              <hr />
              <p>Programmes</p>
            </div>
            <div className="link">
              <hr />
              <p>Support</p>
            </div>
            <div className="link">
              <hr />
              <p>Resources</p>
            </div>
          </div>
          <hr className="hr"/>
          <div className="icons">
                <img src="https://www.figma.com/file/6b4R8evBkii6mI53IA4vSS/image/ecc888c1307cf0749389002f82f9871d6988c809" width={50} alt="Facebook" />
                <img src="https://www.figma.com/file/6b4R8evBkii6mI53IA4vSS/image/698567c8ecd3b39bb1b6ac6c68e44bb80ac15d62" width={50} alt="linked in" />
                <img src="https://www.figma.com/file/6b4R8evBkii6mI53IA4vSS/image/c3fb00857c69eb46b393dba8d759e426171ef02f" width={50} alt="Github" />            
                <img src="https://www.figma.com/file/6b4R8evBkii6mI53IA4vSS/image/04e756fd5877045a0932d92fb8410e1b6b560854" width={50} alt="Twiter" /> 
          </div>
        </div>
      </div>
  )
}

// Export Footer component
export default Footer