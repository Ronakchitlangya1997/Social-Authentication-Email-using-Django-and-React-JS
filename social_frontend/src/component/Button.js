import Button from 'react-bootstrap/Button';

function TypesExample() {
  return (
    <div>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
    </div>
  );
}

// const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    // const submit = async e => {
    //     e.preventDefault();

    //     const user = {
    //         username: username,
    //         password: password
    //       };

    //     const {data} = await axios.post('http://localhost:8000/token/', user ,{headers: {
    //         'Content-Type': 'application/json'
    //     }}, {withCredentials: true});

    //     console.log(data)
    //     localStorage.clear();
    //     localStorage.setItem('access_token', data.access);
    //     localStorage.setItem('refresh_token', data.refresh);
    //     axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
    //     window.location.href = '/'

    // }

    // useEffect(() => {
    //     const initClient = () => {
    //           gapi.client.init({
    //           clientId: clientId,
    //           scope: ''
    //         });
    //      };
    //      gapi.load('client:auth2', initClient);
    //   },[]);
      
      //   const user = {
      //     "grant_type":"convert_token",
      //     "client_id":"ZFzyVY5BnfQw0ah7mSrRHjh4mRUc8fZbs5Zu8ud5",
      //     "client_secret":"mpUXkb9vbt6X57Gs7UU5dJsm0XFYwieluP9gG1tDqjkrRAie99LSQ32hBLNqfHzQwQ2blyXrE7x69htJaYhD8X51dS9gO45CfxpfLqKFiAndWtqrJXfpzM0DAvbjqJ3T",
      //     "backend":"google-oauth2",
      //     "token": res.accessToken
      //   };
      //   console.log(user)
      //   // const {data} = axios.post('http://localhost:8000/api-auth/convert-token/', user ,{headers: {
      //   //     'Content-Type': 'application/json'
      //   // }});

      //   // console.log('data', data)
      //   axios.post('http://localhost:8000/api-auth/convert-token/', user)
      //   .then(response => console.log(response.data))
      //   .catch(error => {
      //       console.error('There was an error!', error);
      //   });

      // };

export default TypesExample;