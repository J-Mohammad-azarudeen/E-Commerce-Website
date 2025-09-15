import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../Pages/firebase";


const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal"
];

const stateCities = {
  "Tamil Nadu": ["Chennai", "Coimbatore", "Chengalpattu", "Madurai", "Tiruchirappalli", "Salem", "Erode", "Tirunelveli", "Vellore", "Thanjavur", "Dindigul", "Kanyakumari", "Tiruppur", "Theni", "Karur", "Sivaganga", "Virudhunagar", "Namakkal", "Ramanathapuram", "Nagapattinam", "Pudukkottai", "Thiruvarur", "Tenkasi", "Thoothukudi", "Kanniyakumari", "Ariyalur", "Perambalur", "Krishnagiri", "Dharmapuri", "Nilgiris"],
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

  // Validation function
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

  async function handleSignUp(e) {
    e.preventDefault();

    if (!validate()) return; // stop if errors exist

    try {
      // 1. Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 3. Immediately sign out so user won’t stay logged in
      // await signOut(auth);

      // 2. Save user details in Firestore
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



      // 4. Redirect to login

      navigate("/");

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
        </div>
        <div className="col">
          <input type="text"
            className="form-control"
            placeholder="Last name"
            aria-label="Last name"
            onChange={(e) => setLname(e.target.value)}
          />
          {errors.lname && <p className="text-danger">{errors.lname}</p>}
        </div>

        <div className="row g-3" >
          <div className="col-md-6">
            <br />
            {/* <label for="inputEmail4" class="form-label">Email</label> */}
            <input type="email"
              className="form-control"
              id="inputEmail4"
              placeholder='Your Email'
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>
          <div className="col-md-6">
            <br />
            {/* <label for="inputPassword4" class="form-label">Password</label> */}
            <input type="password"
              className="form-control"
              id="inputPassword4"
              placeholder='Your Password'
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-danger">{errors.password}</p>}
          </div>

          <div className="col-6">

            {/* <label for="inputAddress" class="form-label">Address</label> */}
            <input type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Address 1"
              onChange={(e) => setAddress1(e.target.value)}
            />
            {errors.address1 && <p className="text-danger">{errors.address1}</p>}
          </div>
          <div className="col-6">
            {/* <label for="inputAddress2" class="form-label">Address 2</label> */}
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
            {/* <span class="input-group-text">@</span> */}
            {/* <input type="text" class="form-control" placeholder="Server" aria-label="Server"> */}
          </div>
          <div className="col-6">
            {/* <label for="inputPassword4" class="form-label">Password</label> */}
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
              onChange={e => setSelectedCity(e.target.value)}
              disabled={!selectedState}>

              <option value="">City</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            {errors.city && <p className="text-danger">{errors.city}</p>}
          </div>

          <div className="col-md-4">
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
            {errors.state && <p className="text-danger">{errors.state}</p>}
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
          <div className="col-md-2">
            {/* <label for="inputZip" class="form-label">Zip</label> */}
            <input type="text"
              className="form-control"
              id="inputZip"
              placeholder='Pincode'
              onChange={(e) => setPincode(e.target.value)}
            />
            {errors.pinCode && <p className="text-danger">{errors.pinCode}</p>}
          </div>
          {/* <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div> */}
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary">Sign Up</button>
            <p>Already You have a Account? Click <Link to="/login">Log in..</Link></p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUp