
import '../../index.css'
import Button from '../Elements/Button'
import Card from '../Elements/Card'
function App() {

  return (
      <div className=" flex-col h-screen bg-blue-300 text-4xl font-semibold px-4 py-6" >
          <div className="flex justify-center items-center">Hello World</div>
          <div className="flex justify-start items-center">
            <Button >Click Me</Button>
            <Button textSize="lg">Hit me</Button  >
          </div>
          <div className="flex flex-wrap justify-baseline items-center">
            <Card />
            <Card title="Amiya tralalala hoshimachiossdsd" description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. fsdfsfsdfsfwfewsasasasas" />
            <Card />
          </div>
    </div>
  )
}

export default App
