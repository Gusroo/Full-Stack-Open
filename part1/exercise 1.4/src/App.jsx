const Header = (course) => {
  return (
    <div>
        <h1>{course.course}</h1>
    </div>
  )
}

const Content = (content) => {
  return (
    <>
    <p>{content.parts[0].name}: {content.parts[0].exercises} exercises</p>
    <p>{content.parts[1].name}: {content.parts[1].exercises} exercises</p>
    <p>{content.parts[2].name}: {content.parts[2].exercises} exercises</p>
    <p>{content.parts[3].name}: {content.parts[3].exercises} exercises</p>
    </>
  )
}

const Total = (res) => {
  return (
    <>
    <p>{res.total[4].name} {res.total[4].exercises} exercises</p>
    </>
  )
}

const App = () => {
  const course = 'Full Stack Open'
  const parts = [
    {name: 'Introduction to React', exercises: 2},
    {name: 'JavaScript', exercises: 3},
    {name: 'Component state, event handlers', exercises: 0},
    {name: 'A more complex state, debugging React apps', exercises: 9},
    {name: 'Total of exercises:', exercises: 14}
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={parts} />
    </div>
  )
}

export default App