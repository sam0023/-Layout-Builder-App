// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => {
  const showContext = e => {
    if (e) {
      return (
        <div className="content">
          <h1>Content</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adippiscing elit,sed to</p>
        </div>
      )
    }
    return null
  }

  const showLeft = e => {
    if (e) {
      return (
        <div className="left-navbar">
          <h1>Left Navbar Menu</h1>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
      )
    }
    return null
  }

  const showRight = e => {
    if (e) {
      return (
        <div className="rights-navbar">
          <h1>Right Navbar</h1>
          <div>
            <div>
              <h1>Ad 1</h1>
            </div>
            <div>
              <h1>Ad 2</h1>
            </div>
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        console.log(!showContent ? 'hide' : 'no')
        console.log(showContent)
        return (
          <div className="body">
            {showContext(showContent)}
            {showLeft(showLeftNavbar)}
            {showRight(showRightNavbar)}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}
export default Body
