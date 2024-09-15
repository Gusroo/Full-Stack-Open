import { useState } from 'react'

const Anecdote = (data) => {
  return (
    <>
      <p>{data.anecdotes}</p>
      <p>Has {data.points} votes.</p>
    </>
  )
}

const Famous = ({mostFamous}) => {
  if (mostFamous.points === 0) {
    return (

      <>
        <p>Nothing impressive.</p>
      </>

    )
  }

  return (
    <>
      <p>{mostFamous.anecdote}</p>
      <p>Has {mostFamous.points} votes.</p>
    </>
  )
}

const Button = (button) => {
  return (
    <div>
        <button onClick={button.onClickVote}>Vote</button>
        <button onClick={button.onClick}>Next</button>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([ 0, 0, 0, 0, 0, 0, 0, 0 ])
  const [randomNumber, setRandomNumber] = useState(0)
  const [mostFamous, setMostFamous] = useState({anecdote: "", points: 0})

  const randomAnecdote = () => {
    const number = Math.floor(Math.random() * (anecdotes.length - 0) + 0)
    setRandomNumber(number)
    setSelected(number)
  }

  const addVote = () => {
    const copy = [...points]
    // increment the value in position 2 by one
    copy[randomNumber] += 1
    setPoints(copy)

    if (copy[randomNumber] > mostFamous.points) {
      setMostFamous({anecdote: anecdotes[selected], points: copy[randomNumber]})
    }
  }
  
  return (
    <div>
      <h2>Anecdotes:</h2>
      <Anecdote anecdotes={anecdotes[selected]} points={points[randomNumber]} />
      <Button onClick={randomAnecdote} onClickVote={addVote} />
      <h2>Most Famous:</h2>
      <Famous mostFamous={mostFamous} />
    </div>
  )
}

export default App
