import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../Pages/firebase";

// List of states
const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal"
];

// Cities by state
const stateCities = {
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Erode"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Nainital"],
  "Sikkim": ["Gangtok", "Namchi"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur"],
  "Telangana": ["Hyderabad", "Warangal"],
  "Andhra Pradesh": ["Vijayawada", "Visakhapatnam", "Guntur", "Tirupati"],
  "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
  "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"],
  "Assam": ["Guwahati", "Silchar", "Dibrugarh"],
  "Bihar": ["Patna", "Gaya", "Bhagalpur"],
  "Chhattisgarh": ["Raipur", "Bilaspur", "Durg"],
  "Goa": ["Panaji", "Margao"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot"]
};

const SignUp = () => {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState("");
  const cities = stateCities[selectedState] || [];

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [userName, setUserName] = useState("");
  const [cNumber, setCNumber] = useState("");
  const [pinCode, setPincode] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [errors, setErrors] = useState({});

  // Validation
  const validate = () => {
    let newErrors = {};
    if (!fname.trim()) newErrors.fname = "First name is required";
    if (!lname.trim()) newErrors.lname = "Last name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email format";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (!address1) newErrors.address1 = "Address 1 is required";
    if (!address2) newErrors.address2 = "Address 2 is required";
    if (!userName) newErrors.userName = "Username is required";
    if (!cNumber) newErrors.cNumber = "Contact number is required";
    else if (!/^\d{10}$/.test(cNumber)) newErrors.cNumber = "Enter a valid 10-digit number";
    if (!selectedState) newErrors.state = "State is required";
    if (!selectedCity) newErrors.city = "City is required";
    if (!pinCode) newErrors.pinCode = "Pincode is required";
    else if (!/^\d{6}$/.test(pinCode)) newErrors.pinCode = "Enter a valid 6-digit pincode";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // SignUp handler
  async function handleSignUp(e) {
    e.preventDefault();
    if (!validate()) return;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        fname,
        lname,
        email,
        address1,
        address2,
        userName,
        cNumber,
        pinCode,
        state: selectedState,
        city: selectedCity,
      });

      navigate("/"); // redirect after signup
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="container mt-5">
      <div className='text-center mb-4'>
        <h1>Welcome To Fishkart !</h1>
      </div>
      <form className="row g-3" onSubmit={handleSignUp} noValidate>
        <div className="col">
          <input type="text"
            className="form-control"
            placeholder="First name"
            aria-label="First name"
            onChange={(e) => setFname(e.target.value)}
          />
          {errors.fname && <p className="text-danger">{errors.fname}</p>}

        </div> <div className="col">
          <input type="text"
            className="form-control"
            placeholder="Last name"
            aria-label="Last name"
            onChange={(e) => setLname(e.target.value)} />
          {errors.lname && <p className="text-danger">{errors.lname}</p>}

        </div> <div className="row g-3" >
          <div className="col-md-6"> <br />
            {/* <label for="inputEmail4" className="form-label">Email</label> */}
            <input type="email"
              className="form-control"
              id="inputEmail4"
              placeholder='Your Email'
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}

          </div> <div className="col-md-6"> <br />

            <input type="password"
              className="form-control"
              id="inputPassword4"
              placeholder='Your Password'
              onChange={(e) => setPassword(e.target.value)}
            /> {errors.password && <p className="text-danger">{errors.password}</p>}

          </div> <div className="col-6">

            <input type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Address 1"
              onChange={(e) => setAddress1(e.target.value)}
            />
            {errors.address1 && <p className="text-danger">{errors.address1}</p>}

          </div> <div className="col-6">

            <input type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Address 2"
              onChange={(e) => setAddress2(e.target.value)}
            />
            {errors.address2 && <p className="text-danger">{errors.address2}</p>}
          </div>

          <div className=" col-md-6">
            <input type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
            {errors.userName && <p className="text-danger">{errors.userName}</p>}

          </div>

          <div className="col-6">

            <input type="tel"
              className="form-control"
              id="inputMobile"
              placeholder='Your Contact Number'
              pattern="[0-9]{10}"
              maxLength={10}
              onChange={(e) => setCNumber(e.target.value)}
            />
            {errors.cNumber && <p className="text-danger">{errors.cNumber}</p>}
          </div>

          <div className="col-md-6">
            <select id="inputCity"
              className="form-select"
              placeholder="City"
              value={selectedCity}
              onChange={e => setSelectedCity(e.target.value)} disabled={!selectedState}>
              <option value="">City</option>
              {cities.map(city => (<option key={city} value={city}>{city}</option>))}
            </select>
            {errors.city && <p className="text-danger">{errors.city}</p>}
          </div>
          <div className="col-md-4">

            <select id="inputState"
              className="form-select"
              placeholder="State"
              value={selectedState}
              onChange={e => setSelectedState(e.target.value)} >
              <option value="">State</option>
              {states.map(state => (<option key={state} value={state}>{state}</option>))}
            </select>
            {errors.state && <p className="text-danger">{errors.state}</p>}

          </div>
          <div className="col-md-2">
            {/* <label for="inputZip" crossorigin="form-label">Zip</label> */}
            <input type="text"
              className="form-control"
              id="inputZip"
              placeholder='Pincode'
              onChange={(e) => setPincode(e.target.value)} />
            {errors.pinCode && <p className="text-danger">{errors.pinCode}</p>}
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary">
              <Link to="/login"></Link>Sign Up</button>
            <p>Already You have a Account? Click <Link to="/login">Log in..</Link></p>
          </div>
        </div>
      </form>
    </div>
  )
}
export default SignUp
