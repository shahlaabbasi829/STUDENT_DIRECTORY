
export function Studentcards() {
  const students = [
    { id: 104, name: "Amm Doe", major: "Computer Science", year: 2, gpa: 3.8 },
    { id: 105, name: "Ali Abbas", major: "Software Engineering", year: 3, gpa: 3.6 },
    { id: 106, name: "Sara Khan", major: "Computer Science", year: 1, gpa: 3.9 }
  ]

  return (
    <div className="container mt-3">
      <div className="row">
        {students.map((student) => (
          <div className="col-md-4 mb-3" key={student.id}>
            <section className="card">
              <div className="text-center bg-light p-3">
                <i
                  className="bi bi-person-fill"
                  style={{ fontSize: "80px", color: "gray" }}
                ></i>
              </div>

              <div className="card-body">
                <h4 className="card-title">{student.name}</h4>
                <p className="card-text mb-1">ID: {student.id}</p>
                <p className="card-text mb-1">Major: {student.major}</p>
                <p className="card-text mb-1">Year: {student.year}</p>
                <p className="card-text">GPA: {student.gpa.toFixed(1)}</p>

                <button className="btn btn-outline-success my-2 my-sm-0">
                  View Profile
                </button>
                <button className="btn btn-outline-danger btn-sm ms-2">
                  Delete
                </button>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  )
}
