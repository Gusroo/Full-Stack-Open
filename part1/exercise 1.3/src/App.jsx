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
    <p>{content.part1.name}: {content.part1.exercises} exercises</p>
    <p>{content.part2.name}: {content.part2.exercises} exercises</p>
    <p>{content.part3.name}: {content.part3.exercises} exercises</p>
    <p>{content.part4.name}: {content.part4.exercises} exercises</p>
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
  const part1 = {
    name: 'Introduction to React',
    exercises: 2
  }
  const part2 = {
    name: 'JavaScript',
    exercises: 3
  }
  const part3 = {
    name: 'Component state, event handlers',
    exercises: 0
  }
  const part4 = {
    name: 'A more complex state, debugging React apps',
    exercises: 9
  }
  const total = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} part4={part4} />
      <Total total={total} />
    </div>
  )
}

export default App