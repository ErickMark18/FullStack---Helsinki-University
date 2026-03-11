import { useState } from 'react'

const Header = ({text}) => {
  return(
    <h1>{text}</h1>
  )
}

const Button = ({eventHandler, text}) => {
    return(
      <button onClick={eventHandler}>
        {text}
      </button>
    )
  
}

const StatisticLine = ({text, value, total}) => {
  if(total > 0){
    return(
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    )
  }
}

const Statistics = ({total}) => {
  if(total === 0){
    return(
      <p>No statistics yet</p>
    ) 
  }
}

const App = () => {
  const [total, setTotal] = useState(0)
  const [numGood, setGood] = useState(0)
  const [numNeut, setNeut] = useState(0)
  const [numBad, setBad] = useState(0)
  const [numAvg, avg] = useState(0)
  const [numPos, pos] = useState(0)

  const goodHandler = () => {
    setGood(numGood + 1)
    const newGood = numGood + 1
    setTotal(total + 1)
    avgHandler(newGood, numNeut, numBad)
    posHandler(newGood, numNeut, numBad)
  }

  const neutHandler = () => {
    setNeut(numNeut + 1)
    const newNeut = numNeut + 1
    setTotal(total + 1)
    avgHandler(numGood, newNeut, numBad)
    posHandler(numGood, newNeut, numBad)
  }

  const badHandler = () => {
    setBad(numBad + 1)
    const newBad = numBad + 1
    setTotal(total + 1)
    avgHandler(numGood, numNeut, newBad)
    posHandler(numGood, numNeut, newBad)
  }

  const avgHandler = (good,neut,bad) => {
    avg((good + bad * (-1)) / (good + bad + neut))
  }

  const posHandler = (good,neut,bad) => {
    pos(good * 100 / (good + neut + bad))
  }

  return(
    <div>
      <Header text={'Give Feedback'}/>
      <div>
        <Button eventHandler={goodHandler} text={'good'}/>
        <Button eventHandler={neutHandler} text={'neutral'}/>
        <Button eventHandler={badHandler} text={'bad'}/>
      </div>
      <Header text={'Statistics'}/>
      <Statistics total={total}/>
      <table>
        <tbody>
          <StatisticLine total={total} text={'good'} value={numGood}/>
          <StatisticLine total={total} text={'neut'} value={numNeut}/>
          <StatisticLine total={total} text={'bad'} value={numBad}/>
          <StatisticLine total={total} text={'average'} value={numAvg}/>
          <StatisticLine total={total} text={'positive'} value={numPos + '%'}/>
          <StatisticLine total={total} text={'total'} value={total}/>
        </tbody>
      </table>
    </div>
  )
}

export default App