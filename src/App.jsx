import './App.css'
import Body from './Components/BodyComponent/BodyComponent'
import LogSignComponent from './Components/HeaderComponent/AccountComponent/LoginSignupComponenet/LogSignComponent'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorComponent from './Components/ErrorComponent/ErrorComponent'
import AboutUsComponent from './Components/AboutUsPageComponent/AboutUsComponent'
import ContactUs from './Components/HeaderComponent/AccountComponent/Account'
import FooterComponent from './Components/FooterComponent/FooterComponent'
import Services from './Components/ServicePageComponent/Services'
const router = createBrowserRouter([
  {path: "/", element: <Body />, errorElement: <ErrorComponent />},
  {path: "/account", element: <LogSignComponent />, errorElement: <ErrorComponent />},
  {path: "/services", element: <Services/> , errorElement: <ErrorComponent />},
  {path: "/about-us", element: <AboutUsComponent/>, errorElement: <ErrorComponent />},
  {path: "/contact-us", element: <Body/>, errorElement: <ErrorComponent />},
])

function App() {

  return (
    <div className='AppClass flex flex-col w-screen h-fit min-h-[100vh] bg-[url(./assets/images/background.jpg)] bg-cover bg-no-repeat bg-center bg-scroll backdrop-brightness-40'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
