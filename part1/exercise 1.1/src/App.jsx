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
    <p>{content.parts[0]}: {content.exercises[0]} exercises</p>
    <p>{content.parts[1]}: {content.exercises[1]} exercises</p>
    <p>{content.parts[2]}: {content.exercises[2]} exercises</p>
    <p>{content.parts[3]}: {content.exercises[3]} exercises</p>
    </>
  )
}

const Total = (res) => {
  return (
    <>
    <p>Total of exercises: {res.total} exercises</p>
    </>
  )
}

const App = () => {
  const course = 'Full Stack Open'
  const parts = ['Introduction to React', 'JavaScript', 'Component state, event handlers', 'A more complex state, debugging React apps']
  const exercises = [2, 3, 0, 9]
  const total = 14

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total total={total} />
    </div>
  )
}

export default App