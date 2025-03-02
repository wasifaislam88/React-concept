
import './App.css'
import Todo from './Todo'

function App() {


  return (
    <>

      <h1>Vite + React</h1>
      <Todo task="Learn React"
        isDone={true}></Todo>

      <Todo task="Explore core concepts"
        isDone={false}></Todo>
        
      <Todo task="Try jsx"
        isDone={true}></Todo>
      {/* <Device name="Laptop" price="55"></Device>
      <Device name="mobail" price="17"></Device>
      <Device name="watch" price="3"></Device>
      <Person></Person>
      <Student grade="7" score = "99"></Student>
      <Student grade={12} score="80"></Student>
      <Student></Student>
      <Developer></Developer> */}


    </>
  )
}

function Device(props) {
  console.log(props)
  return <h2>This device:{props.name} price:{props.price}</h2>
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: 'wasifa', age: 12 }
  return <h3>I am {person.name} a Person with age :{age + money}</h3>
}

// const {grade,score} = {grade:'7', score:'99'};

function Student({ grade = 1, score = 0 }) {
  console.log(grade, score);
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Class: {grade}</p>
      <p>score: {score}</p>

    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px'
  }
  return (
    <div style={developerStyle}>
      <h5>Hello world</h5>
      <p>Coding:</p>
    </div>
  )
}

export default App
