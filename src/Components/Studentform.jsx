
import React, { useState } from 'react'

export function Studentform() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [check, setCheck] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()

    console.log("Email:", email)
    console.log("Password:", password)
    console.log("Check:", check)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={check}
            onChange={(e) => setCheck(e.target.checked)}
          />
          <label className="form-check-label">Check me out</label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}
