const Header = (course) => {
  return (
    <div>
        <h1>{course.course.name}</h1>
    </div>
  )
}

const Content = (content) => {
  return (
    <>
    <p>{content.parts.parts[0].name}: {content.parts.parts[0].exercises} exercises</p>
    <p>{content.parts.parts[1].name}: {content.parts.parts[1].exercises} exercises</p>
    <p>{content.parts.parts[2].name}: {content.parts.parts[2].exercises} exercises</p>
    <p>{content.parts.parts[3].name}: {content.parts.parts[3].exercises} exercises</p>
    </>
  )
}

const Total = (res) => {
  return (
    <>
    <p>{res.total.parts[4].name} {res.total.parts[4].exercises} exercises</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Full Stack Open',
    parts: [
      {name: 'Introduction to React', exercises: 2},
      {name: 'JavaScript', exercises: 3},
      {name: 'Component state, event handlers', exercises: 0},
      {name: 'A more complex state, debugging React apps', exercises: 9},
      {name: 'Total of exercises:', exercises: 14}
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total total={course} />
    </div>
  )
}

export default App