import { useState } from 'react'

const Header = ({text}) => {
  return(
    <h1>{text}</h1>
  )
}


const Button = ({text,eventHandler}) => {
  return(
    <button onClick={eventHandler}>{text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [mostVoted, setMostVoted] = useState(7)
  const [votes, setVotes] = useState([1, 4, 6, 3, 9, 8, 5, 10])

  const handleClick = () => {
    handleMostVoted();
    handleVotes();
  }

  const getRandom = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  const handleMostVoted = () => {
    const maxVal = Math.max(...votes)
    setMostVoted(votes.indexOf(maxVal))
  }

  const handleVotes = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  return (
    <div>
      <Header text={'Anecdote of the day'}/>
      <div>{anecdotes[selected]}</div>
      <div><Button text={'next anecdote'} eventHandler={getRandom}/></div>
      <div><p>Has {votes[selected]} votes</p></div>
      <div><Button text={'vote'} eventHandler={handleClick}/></div>
      <Header text={'Anecdote with most votes'}/>
      <div>{anecdotes[mostVoted]}</div>
      <div><p>Has {votes[mostVoted]} votes</p></div>
    </div>
  )
}

export default App