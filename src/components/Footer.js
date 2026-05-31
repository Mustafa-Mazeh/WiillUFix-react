import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div id="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p>
              &copy; Copyright <Link to="/">Will U Fix</Link>. All Rights Reserved
            </p>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  )
}
