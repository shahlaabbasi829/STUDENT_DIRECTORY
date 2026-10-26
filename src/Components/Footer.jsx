import React from 'react'

export function Footer(){
  return (
    <div>
     <footer className="bg-dark text-white mt-5 p-4">
      <div className="container">
        <div className="row">

          <div className="col-md-6">
            <h5>Links</h5>
            <p className="mb-1">Home</p>
            <p className="mb-1">Computer Science</p>
            <p className="mb-1">Courses</p>
            <p className="mb-1">Reports</p>
          </div>

          <div className="col-md-6">
            <h5>Contact Info</h5>
            <p className="mb-1">Contact Us</p>
            <p className="mb-1">+1: 123 456 7890</p>
            <p>trm@studentportal.com</p>
          </div>

        </div>

        <hr />

        <p className="text-center mb-0">
          © 2024 StudentPortal. All rights reserved.
        </p>
      </div>
    </footer>
</div>
  )
}
