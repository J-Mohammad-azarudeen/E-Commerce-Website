import React, {useState}from 'react'
import { Link } from 'react-router-dom'

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal"
];

const stateCities = {
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Erode", "Tirunelveli", "Vellore", "Thanjavur", "Dindigul", "Kanyakumari", "Tiruppur", "Theni", "Karur", "Sivaganga", "Virudhunagar", "Namakkal", "Ramanathapuram", "Nagapattinam", "Pudukkottai", "Thiruvarur", "Tenkasi", "Thoothukudi", "Kanniyakumari", "Ariyalur", "Perambalur", "Krishnagiri", "Dharmapuri", "Nilgiris"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Nainital", "Rudrapur", "Roorkee", "Haldwani", "Kashipur", "Pithoragarh", "Mussoorie", "Rishikesh"],
  "Sikkim": ["Gangtok", "Namchi", "Mangan", "Gyalshing", "Jorethang"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Ajmer", "Bikaner"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Tirupati"],
  "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kollam", "Thrissur"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane"],
  "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Belagavi"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi"],
};
const SignUp = () => {
    const [selectedState, setSelectedState] = useState("");
  const cities = stateCities[selectedState] || [];
    return (
        <div className="container mt-5">
            <div class="row g-3">
                <div class="col">
                    <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                </div>
            </div>
            <form class="row g-3">
  <div class="col-md-6">
    <br />
    {/* <label for="inputEmail4" class="form-label">Email</label> */}
    <input type="email" class="form-control" id="inputEmail4" placeholder='Your Email' />
  </div>
  <div class="col-md-6">
    <br />
    {/* <label for="inputPassword4" class="form-label">Password</label> */}
    <input type="password" class="form-control" id="inputPassword4" placeholder='Your Password' />
  </div>
  
  <div class="col-6">
    
    {/* <label for="inputAddress" class="form-label">Address</label> */}
    <input type="text" class="form-control" id="inputAddress" placeholder="Address 1" />
  </div>
  <div class="col-6">
    {/* <label for="inputAddress2" class="form-label">Address 2</label> */}
    <input type="text" class="form-control" id="inputAddress2" placeholder="Address 2" />
  </div>
  <div class="col-12">
    {/* <label for="inputPassword4" class="form-label">Password</label> */}
    <input type="tel" class="form-control" id="inputMobile" placeholder='Your Contact Number' pattern="[0-9]{10}" maxLength={10} />
  </div>
  <div class="col-md-6">
    <select id="inputCity" className="form-select" placeholder="City" disabled={!selectedState}>
            <option value="">City</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
  </div>
  
  <div class="col-md-4">
    {/* <label for="inputState" class="form-label">State</label> */}
    <select
            id="inputState"
            className="form-select"
            placeholder="State"
            value={selectedState}
            onChange={e => setSelectedState(e.target.value)}
          >
            <option value="">State</option>
            {states.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
      {/* <option>State</option>
      <option>Andhra Pradesh</option>
      <option>Arunachal Pradesh</option>
      <option>Assam</option>
      <option>Bihar</option>
      <option>Chhattisgarh</option>
      <option>Goa</option>
      <option>Gujarat</option>
      <option>Haryana</option>
      <option>Himachal Pradesh</option>
      <option>Jharkhand</option>
      <option>Karnataka</option>
      <option>Kerala</option>
      <option>Madhya Pradesh</option>
      <option>Manipur</option>
      <option>Meghalaya</option>
      <option>Mizoram</option>
      <option>Nagaland</option>
      <option>Odisha</option>
      <option>Punjab</option>
      <option>Rajasthan</option>
      <option>Sikkim</option>
      <option>Tamil Nadu</option>
      <option>Telangana</option>
      <option>Tripura</option>
      <option>Uttarakhand</option>
      <option>Uttar Pradesh</option>
      <option>West Bengal</option> */}
  </div>
  <div class="col-md-2">
    {/* <label for="inputZip" class="form-label">Zip</label> */}
    <input type="text" class="form-control" id="inputZip" placeholder='Pincode' />
  </div>
  {/* <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div> */}
  <div class="col-12 text-center">
    <button type="submit" class="btn btn-primary">Sign in</button>
    <p>Already You have a Account? Click <Link to="/Login">Log in..</Link></p>
  </div>
  
</form>
        </div>
    )
}

export default SignUp