export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
  }

  return (
    <div className="inner-page">
      <section id="booking">
        <div className="container">
          <div className="section-header">
            <h3>
              For meeting us, getting services, set an appointment date and we will respond
              as soon as possible.
            </h3>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="booking-form">
                <form onSubmit={onSubmit}>
                  <div className="form-row">
                    <div className="control-group col-sm-6">
                      <label>First Name</label>
                      <input type="text" className="form-control" placeholder="E.g. John Sina" required />
                    </div>
                    <div className="control-group col-sm-6">
                      <label>Email</label>
                      <input type="email" className="form-control" placeholder="E.g. email@example.com" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="control-group col-sm-6">
                      <label>Mobile</label>
                      <input type="text" className="form-control" placeholder="E.g. +1 234 567 8900" required />
                    </div>
                    <div className="control-group col-sm-6"></div>
                  </div>
                  <div className="form-row">
                    <div className="control-group col-sm-6">
                      <label>Appointment Date</label>
                      <input type="date" className="form-control" required />
                    </div>
                    <div className="control-group col-sm-6">
                      <label>Appointment Time</label>
                      <input type="time" className="form-control" required />
                    </div>
                  </div>
                  <div className="control-group">
                    <label>Special Request</label>
                    <input type="text" className="form-control" placeholder="E.g. Special Request" />
                  </div>
                  <div className="button">
                    <button type="submit">Book Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
