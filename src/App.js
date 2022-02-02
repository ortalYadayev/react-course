import React, {useState} from 'react'

const Header = (props) => (
    <h1>{props.title}</h1>
)

const Part = ({part, exercise}) => (
    <p>
        {part} {exercise}
    </p>
)

const Content = ({part1, exercise1, part2, exercise2, part3, exercise3}) => {
    if (exercise1 + exercise2 + exercise3 === 0) {
        return (
            <div>
                No feedback given
            </div>
        )
    }

    return (
        <div>
            <Part part={part1} exercise={exercise1} />
            <Part part={part2} exercise={exercise2} />
            <Part part={part3} exercise={exercise3} />
        </div>
    )
}

const Button = ({name, click}) => (
    <button onClick={click}>{name}</button>
)

const Total = ({exercise1, exercise2, exercise3}) => (
    <p>all {exercise1 + exercise2 + exercise3}</p>
)

const Average = ({exercise1, exercise2, exercise3}) => (
    <p>average {(exercise1 - exercise3) / (exercise1 + exercise2 + exercise3)}</p>
)

const Positive = ({exercise1, exercise2, exercise3}) => (
    <p>positive {(exercise1 / (exercise1 + exercise2 + exercise3))*100} %</p>
)

const StatisticLine = (props) => (
    <p>{props.text} {props.value}</p>
)

const Statistics = (props) => {
    const all = props.good + props.neutral + props.bad
    if (all === 0) {
        return (
            <div></div>
        )
    }

    const average = (props.good + props.bad) / all
    const good = (props.good / all) * 100
    const neutral = props.neutral / all
    const bad = props.bad / all

    return (
        <div>
            <StatisticLine text="all" value ={all} />
            <StatisticLine text="average" value ={average} />
            <StatisticLine text="positive" value ={good + " %"} />
        </div>
    )
}

const Anecdote = (props) => (
    <p>{props.anecdote}</p>
)

const GetAnecdote = (props) => (
    <p>has {props.selected} votes</p>
)

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ]

    const [selected, setSelected] = useState(0)
    const selectClick = () =>  setSelected(selected + 1)

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const goodClick = () =>  setGood(good + 1)
    const neutralClick = () =>  setNeutral(neutral + 1)
    const badClick = () =>  setBad(bad + 1)

  const title1 = 'Give Feedback'
  const title2 = 'Statistics'
  const goodButton = 'good'
  const neutralButton = 'natural'
  const badButton = 'bad'

  return (
      <div>
          <Anecdote anecdote={anecdotes[selected]} ></Anecdote>
          <GetAnecdote selected={selected} />
          <Button name="next anecdote" click={selectClick} />
        <Header title={title1} />
        <Button name={goodButton} click={goodClick} />
        <Button name={neutralButton} click={neutralClick} />
        <Button name={badButton} click={badClick} />
        <Header title={title2} />
        <Content part1="good" exercise1={good} part2="neutral" exercise2={neutral} part3="bad" exercise3={bad} />
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
  )
}

export default App