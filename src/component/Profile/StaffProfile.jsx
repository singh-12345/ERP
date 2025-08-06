
const StaffProfile = () => {
  return (
    <>
      <div className="card staff-card p-4 mb-4">
        <div className="row align-items-center">
          <div className="col-md-3 d-flex align-items-center">
            <img
              src="/images/erp-profile-images.webp"
              alt="Staff"
              className="rounded-circle me-3 staff-image"
              width="60"
              height="60"
            />
            <div>
              <h5 className="mb-0">Aman Kumar Singh</h5>
              <span className="text-primary fw-semibold">Frontend Developer</span>
            </div>
          </div>
          <div className="col-md-9 mt-3 mt-md-0">
            <div className="row">
              <div className="col-md-3"><strong>Staff ID:</strong> SJ53862</div>
              <div className="col-md-3"><strong>Staff Account:</strong> hangntm1</div>
              <div className="col-md-3"><strong>Phone number:</strong> 0913 854 235</div>
              <div className="col-md-3"><strong>Email:</strong> hangntm@sjlabel.com</div>
            </div>
          </div>
        </div>
      </div>

      <div className="row gy-4">
        {/* Personal Info */}
        <div className="col-md-6">
          <div className="card p-3 h-100">
            <h5 className="card-title">Personal Information</h5>
            <ul className="list-unstyled mb-0">
              <li><strong>Gender:</strong> Male</li>
              <li><strong>Date of Birth:</strong> 10th Jan, 1995</li>
              <li><strong>Nationality:</strong> Indian</li>
              <li><strong>Marital Status:</strong> Single</li>
              <li><strong>Permanent Address:</strong> Delhi, India</li>
            </ul>
          </div>
        </div>

        {/* Education Info */}
        <div className="col-md-6">
          <div className="card p-3 h-100">
            <h5 className="card-title">Education Information</h5>
            <ul className="list-unstyled mb-0">
              <li><strong>B.Tech in Computer Science</strong></li>
              <li>Delhi Technological University (2012-2016)</li>
              <li><strong>Certification:</strong> UI/UX Design, 2020</li>
            </ul>
          </div>
        </div>

        {/* Account Info */}
        <div className="col-md-6">
          <div className="card p-3 h-100">
            <h5 className="card-title">Account Information</h5>
            <ul className="list-unstyled mb-0">
              <li><strong>Bank:</strong> State Bank of India</li>
              <li><strong>Account Number:</strong> 12345678901</li>
              <li><strong>Account Name:</strong> Aman Singh</li>
              <li><strong>IFSC Code:</strong> SBIN0000001</li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-md-6">
          <div className="card p-3 h-100">
            <h5 className="card-title">Contact</h5>
            <ul className="list-unstyled mb-0">
              <li><strong>Phone:</strong> +91 9876543210</li>
              <li><strong>Email:</strong> aman@erpadmin.com</li>
              <li><strong>ERP ID:</strong> ADM-0001</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffProfile;
