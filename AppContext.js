import React, { useContext, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const AppContext = React.createContext();

export const useGlobalContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
      // Sidebar
      const [open, setOpen] = useState(false);
      // Project
      const [productIds, setProductIds] = useState([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);
      const [primaryProduct, setPrimaryProduct] = useState(1);
      // Contact
      const [message, setMessage] = useState(false);
      const [displayMsg, setDisplayMsg] = useState('');
      const form = useRef();

      // Sidebar
      const isOpen = () => {
            setOpen(prevOpen => !prevOpen);
      }

      // Project
      const primaryImage = (id) => {
            const currentImageId = primaryProduct;
            const newImageIds = [
                  ...productIds.filter((x) => x !== id),
                  currentImageId
            ]; 
            setPrimaryProduct(id);
            setProductIds(newImageIds);
      }

      // Contact
      const sendEmail = async (e) => {
            e.preventDefault();
            
            await emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, process.env.PUBLIC_KEY)
              .then(() => {
                setMessage(true);
                setDisplayMsg('Message Sent Successfully🙂!');
              }, () => {
                  setMessage(true);
                  setDisplayMsg('Failed to send message, please try again😦!');
              });
        
          }

          if (message) {
            setTimeout(() => {
              window.location.reload(false);
            }, 5000);
        }
            
       
      return <AppContext.Provider value={{ 
            open,
            isOpen,
            productIds,
            primaryProduct,
            primaryImage,
            form,
            sendEmail,
            message,
            displayMsg,
            sendEmail,
            }}>
            {children}
      </AppContext.Provider>
}