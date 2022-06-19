import './App.css'
import Banner from './stories/Banner'

function App() {
  return (
    <div className='App'>
      <Banner variant='info'>
        <p>
          This is an example of how we can use our components from Storybook in
          a NextJS application. JSX components that are defined in Storybook can
          be imported/exported like regular JSX components. If you need to
          import components from Storybook in external applications then you
          should explore publishing a NPM package that contains the relevant
          components.
        </p>
      </Banner>
    </div>
  )
}

export default App
