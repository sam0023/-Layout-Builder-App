// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      console.log(!showContent ? 'hide' : 'no')
      console.log(showContent)
      return (
        <div>
          <div className={`left-navbar ${!showLeftNavbar ? 'hide' : ''} `}>
            <h1>Left Navbar Menu</h1>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          </div>
          <div className={`content ${!showContent ? 'hide' : ''} `}>
            <h1>Context</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adippiscing elit,sed to
            </p>
          </div>
          <div className={`rights-navbar ${!showRightNavbar ? 'hide' : ''} `}>
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
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
