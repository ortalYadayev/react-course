import React from 'react'

const Header = (props) => (
    <h1>{props.course}</h1>
)

const Part = ({part, exercise}) => (
    <p>
        {part} {exercise}
    </p>
)

const Content = ({part1, exercise1, part2, exercise2, part3, exercise3}) => {
    return (
        <div>
            <Part part={part1} exercise={exercise1} />
            <Part part={part2} exercise={exercise2} />
            <Part part={part3} exercise={exercise3} />
        </div>
    )
}

const Total = ({exercise1, exercise2, exercise3}) => (
    <p>Number of exercises {exercise1 + exercise2 + exercise3}</p>
  )

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
      <div>
        <Header course={course} />
        <Content part1={part1} exercise1={exercises1} part2={part2} exercise2={exercises2} part3={part3} exercise3={exercises3} />
        <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3}  />
      </div>
  )
}

export default App