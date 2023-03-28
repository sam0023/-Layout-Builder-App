// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

// const options=[
//     {
//         id:'Content',
//         value:'Context'
//     },
//     {
//         id:'LeftNavbar',
//         value:'Left Navbar'
//     },
//     {
//         id:'RightNavbar',
//         value:'Left Navbar'

//     }

// }
// ]

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      console.log(showContent)
      console.log(showLeftNavbar)
      const onRequestToggleShowContent = () => onToggleShowContent()

      const onRequestToggleShowLeftNavbar = () => onToggleShowLeftNavbar()

      const onRequestToggleShowRightNavbar = () => onToggleShowRightNavbar()

      return (
        <div>
          <h1>Layout</h1>
          <div>
            <div>
              <input
                type="checkbox"
                id="content"
                checked={showContent}
                onChange={onRequestToggleShowContent}
              />
              <label htmlFor="content">Content</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="content"
                checked={showLeftNavbar}
                onChange={onRequestToggleShowLeftNavbar}
              />
              <label htmlFor="content">Left Navbar</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="content"
                checked={showRightNavbar}
                onChange={onRequestToggleShowRightNavbar}
              />

              <label htmlFor="content">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
