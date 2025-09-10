import React, {useState}from 'react'
import { Link } from 'react-router-dom'
import allStates from '../../Statecities.json'
const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal"
];

const stateCities = {
  "Tamil Nadu": ["Chennai", "Coimbatore","Chengalpattu", "Madurai", "Tiruchirappalli", "Salem", "Erode", "Tirunelveli", "Vellore", "Thanjavur", "Dindigul", "Kanyakumari", "Tiruppur", "Theni", "Karur", "Sivaganga", "Virudhunagar", "Namakkal", "Ramanathapuram", "Nagapattinam", "Pudukkottai", "Thiruvarur", "Tenkasi", "Thoothukudi", "Kanniyakumari", "Ariyalur", "Perambalur", "Krishnagiri", "Dharmapuri", "Nilgiris"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Nainital", "Rudrapur", "Roorkee", "Haldwani", "Kashipur", "Pithoragarh", "Mussoorie", "Rishikesh"],
  "Sikkim": ["Gangtok", "Namchi", "Mangan", "Gyalshing", "Jorethang"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Ajmer", "Bikaner"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
  "Andhra Pradesh": ["Adoni",
      "Amalapuram",
      "Anakapalle",
      "Anantapur",
      "Bapatla",
      "Bheemunipatnam",
      "Bhimavaram",
      "Bobbili",
      "Chilakaluripet",
      "Chirala",
      "Chittoor",
      "Dharmavaram",
      "Eluru",
      "Gooty",
      "Gudivada",
      "Gudur",
      "Guntakal",
      "Guntur",
      "Hindupur",
      "Jaggaiahpet",
      "Jammalamadugu",
      "Kadapa",
      "Kadiri",
      "Kakinada",
      "Kandukur",
      "Kavali",
      "Kovvur",
      "Kurnool",
      "Macherla",
      "Machilipatnam",
      "Madanapalle",
      "Mandapeta",
      "Markapur",
      "Nagari",
      "Naidupet",
      "Nandyal",
      "Narasapuram",
      "Narasaraopet",
      "Narsipatnam",
      "Nellore",
      "Nidadavole",
      "Nuzvid",
      "Ongole",
      "Palacole",
      "Palasa Kasibugga",
      "Parvathipuram",
      "Pedana",
      "Peddapuram",
      "Pithapuram",
      "Ponnur",
      "Proddatur",
      "Punganur",
      "Puttur",
      "Rajahmundry",
      "Rajam",
      "Rajampet",
      "Ramachandrapuram",
      "Rayachoti",
      "Rayadurg",
      "Renigunta",
      "Repalle",
      "Salur",
      "Samalkot",
      "Sattenapalle",
      "Srikakulam",
      "Srikalahasti",
      "Srisailam Project (Right Flank Colony) Township",
      "Sullurpeta",
      "Tadepalligudem",
      "Tadpatri",
      "Tanuku",
      "Tenali",
      "Tirupati",
      "Tiruvuru",
      "Tuni",
      "Uravakonda",
      "Venkatagiri",
      "Vijayawada",
      "Vinukonda",
      "Visakhapatnam",
      "Vizianagaram",
      "Yemmiganur",
      "Yerraguntla"],
  "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kollam", "Thrissur"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane"],
  "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Belagavi"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi"],
  "Arunachal Pradesh":["Naharlagun","Pasighat"],
  "Assam":["Barpeta",
      "Bongaigaon City",
      "Dhubri",
      "Dibrugarh",
      "Diphu",
      "Goalpara",
      "Guwahati",
      "Jorhat",
      "Karimganj",
      "Lanka",
      "Lumding",
      "Mangaldoi",
      "Mankachar",
      "Margherita",
      "Mariani",
      "Marigaon",
      "Nagaon",
      "Nalbari",
      "North Lakhimpur",
      "Rangia",
      "Sibsagar",
      "Silapathar",
      "Silchar",
      "Tezpur",
      "Tinsukia"],
      "Bihar": ["Araria",
      "Arrah",
      "Arwal",
      "Asarganj",
      "Aurangabad",
      "Bagaha",
      "Barh",
      "Begusarai",
      "Bettiah",
      "Bhabua",
      "Bhagalpur",
      "Buxar",
      "Chhapra",
      "Darbhanga",
      "Dehri-on-Sone",
      "Dumraon",
      "Forbesganj",
      "Gaya",
      "Gopalganj",
      "Hajipur",
      "Jamalpur",
      "Jamui",
      "Jehanabad",
      "Katihar",
      "Kishanganj",
      "Lakhisarai",
      "Lalganj",
      "Madhepura",
      "Madhubani",
      "Maharajganj",
      "Mahnar Bazar",
      "Makhdumpur",
      "Maner",
      "Manihari",
      "Marhaura",
      "Masaurhi",
      "Mirganj",
      "Mokameh",
      "Motihari",
      "Motipur",
      "Munger",
      "Murliganj",
      "Muzaffarpur",
      "Narkatiaganj",
      "Naugachhia",
      "Nawada",
      "Nokha",
      "Patna*",
      "Piro",
      "Purnia",
      "Rafiganj",
      "Rajgir",
      "Ramnagar",
      "Raxaul Bazar",
      "Revelganj",
      "Rosera",
      "Saharsa",
      "Samastipur",
      "Sasaram",
      "Sheikhpura",
      "Sheohar",
      "Sherghati",
      "Silao",
      "Sitamarhi",
      "Siwan",
      "Sonepur",
      "Sugauli",
      "Sultanganj",
      "Supaul",
      "Warisaliganj"],
      "Chandigarh": ["Chandigarh"],
      "Chhattisgarh":[ "Ambikapur",
      "Bhatapara",
      "Bhilai Nagar",
      "Bilaspur",
      "Chirmiri",
      "Dalli-Rajhara",
      "Dhamtari",
      "Durg",
      "Jagdalpur",
      "Korba",
      "Mahasamund",
      "Manendragarh",
      "Mungeli",
      "Naila Janjgir",
      "Raigarh",
      "Raipur*",
      "Rajnandgaon",
      "Sakti",
      "Tilda Newra"],
      "Goa": ["Mapusa",
      "Margao",
      "Marmagao",
      "Panaji*"],
      "Gujarat": ["Adalaj",
      "Ahmedabad",
      "Amreli",
      "Anand",
      "Anjar",
      "Ankleshwar",
      "Bharuch",
      "Bhavnagar",
      "Bhuj",
      "Chhapra",
      "Deesa",
      "Dhoraji",
      "Godhra",
      "Jamnagar",
      "Kadi",
      "Kapadvanj",
      "Keshod",
      "Khambhat",
      "Lathi",
      "Limbdi",
      "Lunawada",
      "Mahesana",
      "Mahuva",
      "Manavadar",
      "Mandvi",
      "Mangrol",
      "Mansa",
      "Mahemdabad",
      "Modasa",
      "Morvi",
      "Nadiad",
      "Navsari",
      "Padra",
      "Palanpur",
      "Palitana",
      "Pardi",
      "Patan",
      "Petlad",
      "Porbandar",
      "Radhanpur",
      "Rajkot",
      "Rajpipla",
      "Rajula",
      "Ranavav",
      "Rapar",
      "Salaya",
      "Sanand",
      "Savarkundla",
      "Sidhpur",
      "Sihor",
      "Songadh",
      "Surat",
      "Talaja",
      "Thangadh",
      "Tharad",
      "Umbergaon",
      "Umreth",
      "Una",
      "Unjha",
      "Upleta",
      "Vadnagar",
      "Vadodara",
      "Valsad",
      "Vapi",
      "Vapi",
      "Veraval",
      "Vijapur",
      "Viramgam",
      "Visnagar",
      "Vyara",
      "Wadhwan",
      "Wankaner"]

};
const SignUp = () => {
    const [selectedState, setSelectedState] = useState("");
  const Cities = stateCities[selectedState] || [];
    return (
      
        <div className="container mt-5">
          <div className='text-center mb-4'>
          <h1>Welcome To Fishkart !</h1>
          </div>
         
          <form class="row g-3">
             <div class="row g-3">
            <div class="col">
              <input type="text" class="form-control" placeholder="First name" aria-label="First name" required />
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" required />
            </div>
          </div>
            <div class="col-md-6">
            <br />
    {/* <label for="inputEmail4" class="form-label">Email</label> */}
    <input type="email" class="form-control" id="inputEmail4" placeholder='Your Email' required />
  </div>
  <div class="col-md-6">
    <br />
    {/* <label for="inputPassword4" class="form-label">Password</label> */}
    <input type="password" class="form-control" id="inputPassword4" placeholder='Your Password'  required/>
  </div>
  
  <div class="col-6">
    
    {/* <label for="inputAddress" class="form-label">Address</label> */}
    <input type="text" class="form-control" id="inputAddress" placeholder="Address 1"  required/>
  </div>
  <div class="col-6">
    {/* <label for="inputAddress2" class="form-label">Address 2</label> */}
    <input type="text" class="form-control" id="inputAddress2" placeholder="Address 2" required/>
  </div>
  <div class=" col-md-6">
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" required />
  {/* <span class="input-group-text">@</span> */}
  {/* <input type="text" class="form-control" placeholder="Server" aria-label="Server"> */}
 </div>
  <div class="col-6">
    {/* <label for="inputPassword4" class="form-label">Password</label> */}
    <input type="tel" class="form-control" id="inputMobile" placeholder='Your Contact Number' pattern="[0-9]{10}" maxLength={10}  required/>
  </div>
  <div class="col-md-6">
    <select id="inputCity" className="form-select" placeholder="City" disabled={!selectedState} required>
            <option value="">City</option>
            {Cities.map(city => (
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
            ))} required
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
    <input type="text" class="form-control" id="inputZip" placeholder='Pincode' required />
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