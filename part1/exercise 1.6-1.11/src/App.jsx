import { useState } from "react"

const Buttons = (data) => <button onClick={data.onClick}>{data.text}</button>

const Statistics = ({statistics}) => {
  if (statistics.total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  
  return (
    <div>
      <StatisticLine text="Good" value={statistics.good} />
      <StatisticLine text="Neutral" value={statistics.neutral} />
      <StatisticLine text="Bad" value={statistics.bad} />
      <StatisticLine text="Total of feedback" value={statistics.total} />
      <StatisticLine text="Average" value={statistics.average} />
      <StatisticLine text="Positive" value={statistics.percentage + " %"} />
    </div>
  )
}

const StatisticLine = (data) => {
  return (
    <>
      <table>
        <tr>
          <td>{data.text}: {data.value}</td>
        </tr>
      </table>
    </>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [percentage, setPercentage] = useState(0)

  const clickGood = () => {
    const newGood = good + 1
    const totalFeedback = newGood+neutral+bad
    const result = newGood*100/totalFeedback
    setGood(newGood)
    setTotal(totalFeedback)
    setAverage((newGood-bad)/totalFeedback)
    setPercentage(result)
  }

  const clickNeutral = () => {
    const newNeutral = neutral + 1
    const totalFeedback = good+newNeutral+bad
    const result = good*100/totalFeedback
    setNeutral(newNeutral)
    setTotal(totalFeedback)
    setAverage((good-bad)/totalFeedback)
    setPercentage(result)
  }

  const clickBad = () => {
    const newBad = bad + 1
    const totalFeedback = good+neutral+newBad
    const result = good*100/totalFeedback
    setBad(newBad)
    setTotal(totalFeedback)
    setAverage((good-newBad)/totalFeedback)
    setPercentage(result)
  }

  const statistics = {
    good: good,
    neutral: neutral,
    bad: bad,
    total: total,
    average: average,
    percentage: percentage
  }
  
  return (
    <div>
      <h2>Feedback: </h2>
      <Buttons onClick={clickGood} text='good' />
      <Buttons onClick={clickNeutral} text='neutral' />
      <Buttons onClick={clickBad} text='bad' />
      <h2>Statistics: </h2>
      <Statistics statistics={statistics} />
    </div>
  )
}

export default App