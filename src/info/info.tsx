"use client"

import { useEffect, useState } from "react"
import { useCart } from "../cartContext"
import { HomeIcon, BuildingIcon, MapPinIcon, CreditCardIcon, CheckIcon } from 'lucide-react'

interface InfoProps {
  handleNextPage: () => void
  setName: (name: string) => void
  setPhone: (phone: string) => void
  setPageName: (pageName: string) => void
}

export function CheckoutInfo({ handleNextPage, setName, setPhone, setPageName }: InfoProps) {
  const { total, cartItems } = useCart() as any
  const [paymentType, setPaymentType] = useState<"full" | "partial">("full")
  const [paymentMethod, setPaymentMethod] = useState<"card" | "benefit">("card")
  const [locationType, setLocationType] = useState<"home" | "work" | "other">("home")
  const [showBenefitModal, setShowBenefitModal] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (paymentMethod === "benefit") {
      setShowBenefitModal(true)
    } else {
      handleNextPage()
    }
  }

  const handleBenefitPayment = () => {
    setPageName("benefit")
    setShowBenefitModal(false)
    handleNextPage()
  }

  const paymentAmount = paymentType === "full" ? total : 0.5

  return (
    <div className="min-h-screen bg-black" dir="rtl">
      <div className="mx-auto max-w-md bg-white">
        <form onSubmit={handleSubmit} className="space-y-6 p-6">
          {/* Delivery Address Section */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-gray-900">موقع التوصيل</h2>
            <div className="space-y-4">
              <input
                name="name"
                type="text"
                placeholder="الاسم"
                required
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-right focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
              />
              
              <input
                name="address"
                type="text"
                placeholder="العنوان"
                required
                className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-right focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
              />
              
              <input
                name="apartment"
                type="text"
                placeholder="الشقة/البناية السكنية"
                required
                className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-right focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
              />
              
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">رقم الهاتف</label>
                <input
                  name="phone"
                  type="tel"
                  maxLength={12}
                  defaultValue="+973"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-left focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                />
              </div>
              
              <textarea
                name="notes"
                placeholder="ضع تعليمات توصيل للسائق"
                maxLength={200}
                rows={3}
                className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-right focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
              />
            </div>
          </section>

          {/* Location Type Selection */}
          <section>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">حدد موقعك</h3>
            <div className="grid grid-cols-3 gap-2">
              <LocationButton
                type="home"
                icon={<HomeIcon className="h-5 w-5" />}
                label="البيت"
                isSelected={locationType === "home"}
                onClick={() => setLocationType("home")}
              />
              <LocationButton
                type="work"
                icon={<BuildingIcon className="h-5 w-5" />}
                label="العمل"
                isSelected={locationType === "work"}
                onClick={() => setLocationType("work")}
              />
              <LocationButton
                type="other"
                icon={<MapPinIcon className="h-5 w-5" />}
                label="العميل"
                isSelected={locationType === "other"}
                onClick={() => setLocationType("other")}
              />
            </div>
          </section>

          {/* Payment Method Selection */}
          <section>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">طريقة الدفع</h3>
            <div className="space-y-3">
              <PaymentMethodCard
                method="card"
                isSelected={paymentMethod === "card"}
                onClick={() => setPaymentMethod("card")}
                icon={
                  <div className="flex space-x-1 space-x-reverse">
                    <img src="/master.svg" alt="Mastercard" className="h-5 w-8 object-contain" />
                    <img src="/vite.svg" alt="Visa" className="h-5 w-8 object-contain" />
                  </div>
                }
                label="بطاقة السحب الآلي"
              />
              
              <PaymentMethodCard
                method="benefit"
                isSelected={paymentMethod === "benefit"}
                onClick={() => setPaymentMethod("benefit")}
                icon={<img src="/logo.webp" alt="Benefit" className="h-6 w-6 object-contain" />}
                label="الدفع عبر بينفت"
              />
            </div>
          </section>

          {/* Order Summary */}
          <section className="rounded-lg bg-gray-50 p-4">
            <h4 className="mb-3 font-semibold text-gray-900">سلة لحوم ألمواشي</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>المنتجات ({cartItems.length})</span>
                <span>{total.toFixed(2)} د.ب</span>
              </div>
              <div className="flex justify-between">
                <span>قيمة التوصيل</span>
                <span>0 د.ب</span>
              </div>
            </div>
          </section>

          {/* Payment Type Selection */}
          <section>
            <div className="space-y-3">
              <PaymentTypeCard
                type="full"
                isSelected={paymentType === "full"}
                onClick={() => setPaymentType("full")}
                title="دفع قيمة الطلب كاملة"
                description={`سدد اجمالي قيمة الطلب الآن وادفع من خلال ${paymentMethod === "benefit" ? "بينفت" : "بطاقة السحب الآلي"} - واحصل على توصيل مجاني`}
              />
              
              <PaymentTypeCard
                type="partial"
                isSelected={paymentType === "partial"}
                onClick={() => setPaymentType("partial")}
                title="دفع مبلغ 0.5 د.ب فقط لتأكيد طلبك"
                description="يخصم من قيمة الطلب وادفع الباقي عند الاستلام مع دفع مصاريف توصيل بقيمة 1 د.ب"
              />
            </div>
          </section>

          {/* Total and Submit */}
          <section className="border-t pt-4">
            <div className="mb-4 flex justify-between text-lg font-bold">
              <span>المجموع الكلي</span>
              <span>{paymentAmount.toFixed(2)} د.ب</span>
            </div>
            
            <button
              type="submit"
              className="w-full rounded-lg bg-green-600 py-4 text-white font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <div className="text-center">
                <div>متابعة الدفع ({paymentAmount.toFixed(2)} د.ب)</div>
                {paymentMethod === "benefit" && <div className="text-sm">عبر بينفت</div>}
              </div>
            </button>
          </section>
        </form>
      </div>

      {/* Benefit Payment Modal */}
      {showBenefitModal && (
        <BenefitPaymentModal
          amount={paymentAmount}
          onCancel={() => {
            setShowBenefitModal(false)
            setPaymentMethod("card")
          }}
          onConfirm={handleBenefitPayment}
        />
      )}
    </div>
  )
}

// Location Button Component
function LocationButton({
  type,
  icon,
  label,
  isSelected,
  onClick,
}: {
  type: string
  icon: React.ReactNode
  label: string
  isSelected: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center justify-center rounded-full p-3 text-sm transition-colors ${
        isSelected
          ? "bg-black text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {icon}
      <span className="mt-1">{label}</span>
    </button>
  )
}

// Payment Method Card Component
function PaymentMethodCard({
  method,
  isSelected,
  onClick,
  icon,
  label,
}: {
  method: string
  isSelected: boolean
  onClick: () => void
  icon: React.ReactNode
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center justify-between rounded-lg border p-4 text-right transition-colors ${
        isSelected
          ? "border-blue-500 bg-blue-50"
          : "border-gray-200 bg-gray-50 hover:bg-gray-100"
      }`}
    >
      <div className="flex items-center space-x-3 space-x-reverse">
        {icon}
        <span className="font-medium">{label}</span>
      </div>
      {isSelected && <CheckIcon className="h-5 w-5 text-blue-600" />}
    </button>
  )
}

// Payment Type Card Component
function PaymentTypeCard({
  type,
  isSelected,
  onClick,
  title,
  description,
}: {
  type: string
  isSelected: boolean
  onClick: () => void
  title: string
  description: string
}) {
  return (
    <label className="block cursor-pointer">
      <div
        className={`rounded-lg border p-4 transition-colors ${
          isSelected
            ? "border-green-500 bg-green-50"
            : "border-gray-200 bg-gray-50 hover:bg-gray-100"
        }`}
      >
        <div className="flex items-start space-x-3 space-x-reverse">
          <input
            type="radio"
            name="paymentType"
            checked={isSelected}
            onChange={onClick}
            className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500"
          />
          <div className="flex-1">
            <h4 className="font-medium text-gray-900">{title}</h4>
            <p className="mt-1 text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </label>
  )
}

// Benefit Payment Modal Component
function BenefitPaymentModal({
  amount,
  onCancel,
  onConfirm,
}: {
  amount: number
  onCancel: () => void
  onConfirm: () => void
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="mx-4 w-full max-w-sm rounded-lg bg-white p-6 text-center" dir="rtl">
        <h2 className="mb-4 text-xl font-bold text-green-600">الدفع عبر بينفت</h2>
        
        <div className="mb-4 flex justify-center">
          <img src="/logo.webp" alt="بينفت" className="h-16 w-16 object-contain" />
        </div>
        
        <p className="mb-4 text-gray-600">
          سيتم تحويلك إلى صفحة الدفع الآمنة الخاصة ببينفت لإتمام عملية الدفع
        </p>
        
        <div className="mb-6">
          <p className="font-bold text-gray-900">المبلغ: {amount.toFixed(2)} د.ب</p>
        </div>
        
        <div className="flex space-x-3 space-x-reverse">
          <button
            onClick={onCancel}
            className="flex-1 rounded-md bg-gray-100 py-2 px-4 text-gray-700 hover:bg-gray-200"
          >
            إلغاء
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 rounded-md bg-green-600 py-2 px-4 text-white hover:bg-green-700"
          >
            متابعة
          </button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutInfo
