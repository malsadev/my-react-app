import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './checkout.css';


const Checkout = () => {

  const location = useLocation();
  const { product } = location.state;


  let priceString = product.price.replace('$', '');
  let price = parseFloat(priceString);

  let tax = price * 0.13;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    startDate: '',
    address: '',
    address2: '',
    country: '',
    province: '',
    zip: '',
    paymentMethod: 'credit',
    ccName: '',
    ccNumber: '',
    ccExpiration: '',
    ccCVV: ''
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    startDate: false,
    address: false,
    country: false,
    province: false,
    zip: false,
    ccName: false,
    ccNumber: false,
    ccExpiration: false,
    ccCVV: false
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      alert("Thank you for your payment! We'll be in touch soon!");
      // Clear form data
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        startDate: '',
        address: '',
        address2: '',
        country: '',
        province: '',
        zip: '',
        paymentMethod: 'credit',
        ccName: '',
        ccNumber: '',
        ccExpiration: '',
        ccCVV: ''
      });

      // Clear form errors
      setFormErrors(errors);
      // Replace with actual form submission logic
    } else {
      // Update errors state to show validation errors
      setFormErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};

    // Validate first name
    if (!formData.firstName.trim()) {
      errors.firstName = true;
    }

    // Validate last name
    if (!formData.lastName.trim()) {
      errors.lastName = true;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.match(emailPattern)) {
      errors.email = true;
    }

    // Validate start date
    if (!formData.startDate) {
      errors.startDate = true;
    }

    // Validate address
    if (!formData.address.trim()) {
      errors.address = true;
    }

    // Validate country
    if (!formData.country) {
      errors.country = true;
    }

    // Validate province
    if (!formData.province) {
      errors.province = true;
    }

    // Validate zip code
    if (!formData.zip.trim()) {
      errors.zip = true;
    }

    // Validate credit card name
    if (!formData.ccName.trim()) {
      errors.ccName = true;
    }

    // Validate credit card number
    const creditCardPattern = /^[0-9]{16}$/;
    if (!formData.ccNumber.match(creditCardPattern)) {
      errors.ccNumber = true;
    }

    // Validate credit card expiration
    const expirationPattern = /^(0[1-9]|1[0-2])\/[0-9]{4}$/;
    if (!formData.ccExpiration.match(expirationPattern)) {
      errors.ccExpiration = true;
    }

    // Validate CVV
    const cvvPattern = /^[0-9]{3,4}$/;
    if (!formData.ccCVV.match(cvvPattern)) {
      errors.ccCVV = true;
    }

    return errors;
  };

  const getCurrentDate = () => {
    const today = new Date();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    const year = today.getFullYear();

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  };

  // Function to get max date for validation (e.g., allow booking in future)
  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30); // Allow booking up to 30 days in future

    let month = maxDate.getMonth() + 1;
    let day = maxDate.getDate();
    const year = maxDate.getFullYear();

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  };

  return (
    <div className="container">
      <main>
        <div className="py-5 text-center">
          <h2>Checkout</h2>
        </div>

        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">1</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">{product.name}</h6>
                  {/* <small className="text-body-secondary">Brief description</small> */}
                </div>
                <span className="text-body-secondary">{product.price}</span>
              </li>

              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">HST/GST</h6>
                  {/* <small className="text-body-secondary">Brief description</small> */}
                </div>
                <span className="text-body-secondary">${(tax).toFixed(2)}</span>

              </li>

              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>${price + tax}</strong>
              </li>
            </ul>

            {/* <form className="card p-2">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Promo code" />
                <button type="submit" className="btn btn-secondary">Redeem</button>
              </div>
            </form> */}
          </div>

          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" onSubmit={handleSubmit} noValidate>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">First name</label>
                  <input type="text" className={`form-control ${formErrors.firstName ? 'is-invalid' : ''}`} id="firstName" placeholder="" value={formData.firstName} onChange={handleInputChange} required />
                  {formErrors.firstName && <div className="invalid-feedback">First name is required.</div>}
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">Last name</label>
                  <input type="text" className={`form-control ${formErrors.lastName ? 'is-invalid' : ''}`} id="lastName" placeholder="" value={formData.lastName} onChange={handleInputChange} required />
                  {formErrors.lastName && <div className="invalid-feedback">Last name is required.</div>}
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className={`form-control ${formErrors.email ? 'is-invalid' : ''}`} id="email" placeholder="you@example.com" value={formData.email} onChange={handleInputChange} required />
                  {formErrors.email && <div className="invalid-feedback">Please enter a valid email address.</div>}
                </div>

                <div className="col-12">
                  <label htmlFor="startDate" className="form-label">Date of Service</label>
                  <input type="date" className={`form-control ${formErrors.startDate ? 'is-invalid' : ''}`} id="startDate" min={getCurrentDate()} max={getMaxDate()} value={formData.startDate} onChange={handleInputChange} required />
                  {formErrors.startDate && <div className="invalid-feedback">Please enter a valid start date (within the next 30 days).</div>}
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input type="text" className={`form-control ${formErrors.address ? 'is-invalid' : ''}`} id="address" placeholder="1234 Main St" value={formData.address} onChange={handleInputChange} required />
                  {formErrors.address && <div className="invalid-feedback">Please enter your shipping address.</div>}
                </div>

                <div className="col-12">
                  <label htmlFor="address2" className="form-label">Address 2 <span className="text-body-secondary">(Optional)</span></label>
                  <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" value={formData.address2} onChange={handleInputChange} />
                </div>

                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">Country</label>
                  <select className={`form-select ${formErrors.country ? 'is-invalid' : ''}`} id="country" value={formData.country} onChange={handleInputChange} required>
                    <option value="">Choose...</option>
                    <option>United States</option>
                    <option>Canada</option>
                  </select>
                  {formErrors.country && <div className="invalid-feedback">Please select a valid country.</div>}
                </div>

                <div className="col-md-4">
                  <label htmlFor="province" className="form-label">Province</label>
                  <select className={`form-select ${formErrors.province ? 'is-invalid' : ''}`} id="province" value={formData.province} onChange={handleInputChange} required>
                    <option value="">Choose...</option>
                    <option>Alberta</option>
                    <option>British Columbia</option>
                    <option>Manitoba</option>
                    <option>New Brunswick</option>
                    <option>Newfoundland and Labrador</option>
                    <option>Nova Scotia</option>
                    <option>Ontario</option>
                    <option>Prince Edward Island</option>
                    <option>Quebec</option>
                    <option>Saskatchewan</option>
                    <option>Northwest Territories</option>
                    <option>Nunavut</option>
                    <option>Yukon</option>
                  </select>
                  {formErrors.province && <div className="invalid-feedback">Please provide a valid province.</div>}
                </div>

                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">Postal Code</label>
                  <input type="text" className={`form-control ${formErrors.zip ? 'is-invalid' : ''}`} id="zip" placeholder="" value={formData.zip} onChange={handleInputChange} required />
                  {formErrors.zip && <div className="invalid-feedback">Postal code required.</div>}
                </div>
              </div>


              <hr className="my-4" />

              <h4 className="mb-3">Payment</h4>


              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label">Name on card</label>
                  <input type="text" className={`form-control ${formErrors.ccName ? 'is-invalid' : ''}`} id="ccName" placeholder="" value={formData.ccName} onChange={handleInputChange} required />
                  {formErrors.ccName && <div className="invalid-feedback">Name on card is required.</div>}
                </div>

                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">Credit card number</label>
                  <input type="text" className={`form-control ${formErrors.ccNumber ? 'is-invalid' : ''}`} id="ccNumber" placeholder="" value={formData.ccNumber} onChange={handleInputChange} required />
                  {formErrors.ccNumber && <div className="invalid-feedback">Credit card number is required.</div>}
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                  <input type="text" className={`form-control ${formErrors.ccExpiration ? 'is-invalid' : ''}`} id="ccExpiration" placeholder="MM/YYYY" value={formData.ccExpiration} onChange={handleInputChange} required />
                  {formErrors.ccExpiration && <div className="invalid-feedback">Expiration date required (MM/YYYY format).</div>}
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">CVV</label>
                  <input type="text" className={`form-control ${formErrors.ccCVV ? 'is-invalid' : ''}`} id="ccCVV" placeholder="" value={formData.ccCVV} onChange={handleInputChange} required />
                  {formErrors.ccCVV && <div className="invalid-feedback">Security code is required.</div>}
                </div>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;

