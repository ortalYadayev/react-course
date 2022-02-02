import React, {useState} from 'react'

const All = (props) => {
    return (
        <div>
            {props.courses.map(course =>
              <div>
                <Course key={course.id} course={course} />
              </div>
            )}
        </div>
    )
}

const Course = (props) => {
    return (
        <div>
            <Header title={props.course.name} />
            <Content parts={props.course.parts} />
            <Total course={props.course} />
        </div>
    )
}

const Header = (props) => (
    <h1>{props.title}</h1>
)

const Part = ({name, exercises}) => (
    <p>
        {name} {exercises}
    </p>
)

const Content = (props) => {
    return (
        <div>
            {props.parts.map(part =>
                 <Part key={part.name + part.id} name={part.name} exercises={part.exercises} />
             )}
        </div>
    )
}

const Total = (props) => {
    const total = props.course.parts.reduce((s, p) => {
        return (s.exercises | s) + p.exercises;
    })

    return (
        <div>
            <h3>total of {total} exercises</h3>
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0);
    const goodClick = () =>  setGood(good + 1)

    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]

    const title = "Web development curriculum"

  return (
      <div>
          <Header title={title} />
          <All courses={courses} />
      </div>
  )
}

export default App