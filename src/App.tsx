import Card from './components/Card'
import './index.css'

const App = () => {

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Card heading="Star Wars"/>
      <Card heading="Dune" />
    </div>

  )
}

export default App
