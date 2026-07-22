
import '../index.css'
import Button from '../components/Button'
import Card from '../components/Card'
function App() {

  return (
      <div className=" flex-col h-screen bg-blue-300 text-4xl font-semibold px-4 py-6" >
          <div className="flex justify-center items-center">Hello World</div>
          <div className="flex justify-start items-center">
            <Button >Click Me</Button>
            <Button textSize="lg">Hit me</Button  >
          </div>
          <div className="flex justify-start items-center">
            <Card title="Amiya" description="Dokutah marah" />
            <Card />
          </div>
    </div>
  )
}

export default App
