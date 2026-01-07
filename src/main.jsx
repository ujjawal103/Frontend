import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter  } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import AdminContext from './context/AdminContext.jsx'
import 'remixicon/fonts/remixicon.css'
import SocketProvider from './context/SocketContext.jsx' 
import StoreContext from './context/StoreContext.jsx'


createRoot(document.getElementById('root')).render(
            <SocketProvider> 
              <StoreContext>
                <AdminContext>
                  <HelmetProvider>
                    <BrowserRouter>
                      <App />
                  </BrowserRouter>
                  </HelmetProvider>
                </AdminContext>
              </StoreContext>
           </SocketProvider>
);
