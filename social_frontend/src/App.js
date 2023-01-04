// import GoogleLogin from "react-google-login";
// import axios from "axios";
// import {gapi} from "gapi-script";
// import {useEffect} from "react";
// // get env vars
// const clientId = "767468533766-pthjukioqsqc86fi2rihqfr8aq0suk5h.apps.googleusercontent.com";
// // const drfClientId = process.env.REACT_APP_DRF_CLIENT_ID;
// // const drfClientSecret = process.env.REACT_APP_DRF_CLIENT_SECRET;
// const baseURL = "http://localhost:8000";


// // const handleGoogleLogin = (response) => {
// //   console.log(response)
// //   // axios
// //   //   .post(`${baseURL}/auth/convert-token`, {
// //   //     token: response.accessToken,
// //   //     backend: "google-oauth2",
// //   //     grant_type: "convert_token",
// //   //     client_id: 'drfClientId',
// //   //     client_secret: 'drfClientSecret',
// //   //   })
// //   //   .then((res) => {
// //   //     const { access_token, refresh_token } = res.data;
// //   //     console.log({ access_token, refresh_token });
// //   //     localStorage.setItem("access_token", access_token);
// //   //     localStorage.setItem("refresh_token", refresh_token);
// //   //   })
// //   //   .catch((err) => {
// //   //     console.log("Error Google login", err);
// //   //   });
// // };

// const App = () => {

  
// useEffect(() => {
//   const initClient = () => {
//         gapi.client.init({
//         clientId: clientId,
//         scope: ''
//       });
//    };
//    gapi.load('client:auth2', initClient);
// });

// const onSuccess = (res) => {
//   console.log('success:', res);
// };
// const onFailure = (err) => {
//   console.log('failed:', err);
// };
//   return (
//     <div className="App">
//      <GoogleLogin
//           clientId={clientId}
//           buttonText="Sign in with Google"
//           onSuccess={onSuccess}
//           onFailure={onFailure}
//           cookiePolicy={'single_host_origin'}
//           isSignedIn={true}
//       />
//     </div>
//   );
// };

// export default App;

import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Login} from "./component/login";
import {Home} from "./component/Home";
import {Navigation} from './component/navigation';
import {Logout} from './component/logout';
function App() {
    return <BrowserRouter>
    <Navigation></Navigation>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>
        </Routes>
    </BrowserRouter>;
}

export default App;
