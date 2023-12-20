import React, { useContext, useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useTime, useTransform } from 'framer-motion';
import Loader from 'react-loaders';

export const AppContext = React.createContext();

export const useGlobalContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
      // Sidebar
      const [open, setOpen] = useState(false);
      const [mode, setMode] = useState('L');
      // Introduction
      const [transition, setTransition] = useState(false);
      const [control, setControl] = useState(true);
      const time = useTime();
      const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
      // Project
      const [productIds, setProductIds] = useState([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]);
      const [primaryProduct, setPrimaryProduct] = useState(1);
      // Contact
      const [message, setMessage] = useState(false);
      const [displayMsg, setDisplayMsg] = useState('');
      const form = useRef();


      // Sidebar
      const isOpen = () => {
            setOpen(prevOpen => !prevOpen);
      }

      const toggleMode = () => {
            if (mode === 'L') {
                  setMode('D');
                  document.body.style.background = "linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)";
            } else {
                  setMode('L');
                  document.body.style.background = "linear-gradient(to right, #f2994a, #f2c94c)";
            }
      }
      

      // Introduction
      useEffect(() => {
            const timer = setTimeout(() => {
               setTransition(true);
             }, 4200);
            return () => clearTimeout(timer);
          }, []);

      const toggleControl = () => {
            setControl(prevControl => !prevControl);
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
            mode,
            toggleMode,
            control,
            transition,
            toggleControl,
            rotate,
            motion,
            productIds,
            primaryProduct,
            primaryImage,
            form,
            Loader,
            sendEmail,
            message,
            displayMsg,
            sendEmail,
            }}>
            {children}
      </AppContext.Provider>
}
