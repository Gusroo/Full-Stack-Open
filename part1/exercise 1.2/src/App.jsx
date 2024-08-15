const Header = (course) => {
  return (
    <div>
      <h1>
        {course.course}
      </h1>
    </div>
  )
}

const Content = () => {
  return (
    <>
    <Part part={'Introduction to React'} exercise={2} />
    <Part part={'JavaScript'} exercise={3} />
    <Part part={'Component state, event handlers'} exercise={0} />
    <Part part={'A more complex state, debugging React apps'} exercise={9} />
    </>
  )
}

const Part = (data) => {
  return (
    <p>
      {data.part}: {data.exercise}
    </p>
  )
}

const Total = (res) => {
  return (
    <div>
      <p>
        Total of exercises: {res.total}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Full Stack Open'
  const total = 14

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total total={total} />
    </div>
  )
}

export default App