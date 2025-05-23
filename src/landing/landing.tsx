"use client"

import { useCart } from "../cartContext"
import { ShoppingCartIcon, SearchIcon, ChevronDownIcon, ChevronLeftIcon, MenuIcon } from "lucide-react"
import toast from "react-hot-toast"

export function Landing(props: { handleNextPage: any }) {
  const { total, cartItems, addToCart } = useCart() as any

  const handleAddtoCart = (item: any) => {
    addToCart(item)
    toast.success("تم اضافة المنتج")
  }

  return (
    <div className="font-sans text-right" dir="rtl">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 space-x-reverse">
              <a href="#" className="relative h-10 w-32">
                <img src="/logo.png" alt="لحوم ألمواشي" className="h-full w-auto object-contain" />
              </a>
              <button className="flex items-center rounded-md bg-gray-100 px-3 py-2 text-sm">
                <MenuIcon className="ml-2 h-4 w-4" />
                <span>القائمة</span>
              </button>
            </div>

            <div className="relative mx-4 hidden flex-1 md:block">
              <div className="flex items-center rounded-md border border-gray-200">
                <div className="flex items-center border-l px-3 py-2">
                  <span className="text-sm">جميع الأقسام</span>
                  <ChevronDownIcon className="mr-2 h-4 w-4 text-gray-500" />
                </div>
                <input type="text" placeholder="ابحث عن منتجات..." className="w-full px-4 py-2 outline-none" />
                <button className="bg-green-600 p-2 text-white">
                  <SearchIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            <button
              className="flex items-center rounded-md bg-green-600 px-2 py-2 text-white"
              onClick={() => (window.location.href = "#cart")}
            >
              <ShoppingCartIcon className="ml-2 h-5 w-5" />
              <span>{total.toFixed(2)} د.ب</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-24">
        {/* Hero Section */}
        <section className="py-6">
          <h1 className="mb-2 text-3xl font-bold">لحوم ألمواشي</h1>
          <p className="mb-6 text-gray-600">
            اكتشف منتجاتنا عالية الجودة من اللحوم الطازجة والمستوردة والدواجن المميزة، اطلب الآن مع أفضل وأسرع خدمة
            توصيل اونلاين.
          </p>

          {/* Categories */}
          <div className="mb-6 overflow-x-auto">
            <div className="flex space-x-4 space-x-reverse">
              <CategoryCard image="/1.png" title="عروض" />
              <CategoryCard image="/3.png" title="لحم بقري" />
              <CategoryCard image="/2.png" title="دجاج طازج" />
              <CategoryCard image="/4.png" title="لحم غنم" />
            </div>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-wrap gap-2">
            <FilterBadge icon="/free_delivery.33e8a802.svg" text="توصيل مجاني" active />
            <FilterBadge text="خلال 40 دقيقة" />
            <FilterBadge text="نقل مخصص" />
          </div>
        </section>

        {/* Store Info */}
        <section className="mb-6 overflow-hidden rounded-t-3xl bg-white shadow">
          <div className="relative h-48">
            <div className="absolute top-0 left-0 flex items-center space-x-2 space-x-reverse bg-black/50 px-3 py-1 text-white">
              <span className="text-xs">خصم %30</span>
            </div>
            <div className="absolute top-0 right-0 flex items-center space-x-2 space-x-reverse bg-green-600/80 px-3 py-1 text-white">
              <span className="text-xs">ادعم المحلي</span>
            </div>
            <img src="/24.png" alt="قائمة لحوم ألمواشي" className="h-full w-full object-cover" />
            <div className="absolute bottom-2 right-2 flex items-center rounded bg-black/70 px-2 py-1 text-white">
              <span className="text-sm">40 دقيقة</span>
            </div>
          </div>

          <div className="p-4">
            <h2 className="text-2xl font-bold">قائمة لحوم ألمواشي</h2>
            <div className="mt-2 flex items-center text-sm text-gray-600">
              <div className="flex items-center">
                <img src="/star_yellow.3109f807.svg" alt="rating" className="mr-1 h-4 w-4" />
                <span>4.7</span>
              </div>
              <span className="mx-2">•</span>
              <span>اللحوم الطازجة والمستوردة والدواجن المميزة</span>
            </div>
          </div>

          <div className="grid grid-cols-4 divide-x divide-x-reverse border-t border-gray-200 text-center">
            <div className="p-3">
              <p className="text-xs text-gray-500">وقت التوصيل</p>
              <p className="font-medium">40 دقيقة</p>
            </div>
            <div className="p-3">
              <p className="text-xs text-gray-500">التقييم</p>
              <p className="font-medium">4.7</p>
            </div>
            <div className="p-3">
              <p className="text-xs text-gray-500">المسافة</p>
              <p className="font-medium">15 كيلو</p>
            </div>
            <div className="p-3">
              <p className="text-xs text-gray-500">ساعات العمل</p>
              <p className="font-medium">
                <span className="text-green-600">مفتوح</span>
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 p-4">
            <p className="text-sm text-gray-600">أطلب الآن عبر موقعنا واحصل على خدمة توصيل سريعة في غضون 28 دقيقة.</p>
          </div>
        </section>

        {/* Featured Products */}
        <section id="cart" className="mb-6">
          <h2 className="mb-4 text-2xl font-bold">عروض اليوم</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <ProductCard
              id="eid-sheep-naimi"
              image="/ais.jpg"
              description="(الوزن من 12 الى 14 كيلو)"
              name="ذبائح العيد - خاروف نعيمي"
              price="45.00"
              onAddToCart={() =>
                handleAddtoCart({
                  id: 1,
                  name: "ذبائح العيد - خاروف نعيمي",
                  price: "45.00",
                  img: "/ais.jpg",
                })
              }
            />

            <ProductCard
              id="eid-sheep-somali"
              image="/5859495368377616247.jpg"
              name="ذبائح العيد - خروف صومالي"
              price="30.00"
              description="(الوزن من 12 الى 14 كيلو)"
              onAddToCart={() =>
                handleAddtoCart({
                  id: 2,
                  name: "ذبائح العيد - خروف صومالي",
                  price: "30.00",
                  img: "/5859495368377616247.jpg",
                })
              }
            />

            <ProductCard
              id="beef-premium-10kg"
              image="https://cdn.salla.sa/XYzRj/xiyM7mdnGrPa1OsDrg7qSR1HDxHN3pLBD56YBeJI.png"
              name="10 كيلو لحم بقري ممتاز طازج"
              price="7.00"
              onAddToCart={() =>
                handleAddtoCart({
                  id: 3,
                  name: "10 كيلو لحم بقري ممتاز طازج",
                  price: "7.00",
                  img: "https://cdn.salla.sa/XYzRj/xiyM7mdnGrPa1OsDrg7qSR1HDxHN3pLBD56YBeJI.png",
                })
              }
            />

            <ProductCard
              id="chicken-breast-6kg"
              image="https://cdn.salla.sa/XRVjV/7c4401c0-ec89-4dd2-af3c-82f31bac4262-1000x1000-4XAOOzl8EA3wmJi0iNFjClPvor7yQf7WMiDZItAS.png"
              name="6 كيلو صدور دجاج طازجة"
              price="1.00"
              onAddToCart={() =>
                handleAddtoCart({
                  id: 4,
                  name: "6 كيلو صدور دجاج طازجة",
                  price: "1.00",
                  img: "https://cdn.salla.sa/XRVjV/7c4401c0-ec89-4dd2-af3c-82f31bac4262-1000x1000-4XAOOzl8EA3wmJi0iNFjClPvor7yQf7WMiDZItAS.png",
                })
              }
            />
          </div>
        </section>

        {/* Regular Products */}
        <section className="mb-6">
          <h2 className="mb-4 text-2xl font-bold">منتجاتنا</h2>
          <div className="space-y-4">
            <HorizontalProductCard
              id="bahraini-beef-premium-10kg"
              image="https://cdn.salla.sa/XYzRj/xiyM7mdnGrPa1OsDrg7qSR1HDxHN3pLBD56YBeJI.png"
              name="عرض كل البحرين"
              description="10 كيلو لحم بقري بحريني ممتاز طازج."
              price="7.000"
              onAddToCart={() =>
                handleAddtoCart({
                  id: 5,
                  name: "10 كيلو لحم بقري بحريني ممتاز طازج",
                  price: "7.00",
                  img: "https://cdn.salla.sa/XYzRj/xiyM7mdnGrPa1OsDrg7qSR1HDxHN3pLBD56YBeJI.png",
                })
              }
            />

            <HorizontalProductCard
              id="lamb-meat-1kg"
              image="https://cdn.salla.sa/XYzRj/laSFQqoW46mEVlZqYxeSbs7vu2zcDqMTS81DPuRG.jpg"
              name="عرض المواشي"
              description="1 كيلو لحم غنم طازج مع التنظيف."
              price="1.000"
              onAddToCart={() =>
                handleAddtoCart({
                  id: 6,
                  name: "1 كيلو لحم غنم طازج مع التنظيف",
                  price: "1.00",
                  img: "https://cdn.salla.sa/XYzRj/laSFQqoW46mEVlZqYxeSbs7vu2zcDqMTS81DPuRG.jpg",
                })
              }
            />

            <HorizontalProductCard
              id="chicken-breast-4kg"
              image="https://cdn.salla.sa/XRVjV/7c4401c0-ec89-4dd2-af3c-82f31bac4262-1000x1000-4XAOOzl8EA3wmJi0iNFjClPvor7yQf7WMiDZItAS.png"
              name="عرض اليوم"
              description="4 كيلو صدور دجاج طازجة مقطعة."
              price="2.50"
              onAddToCart={() =>
                handleAddtoCart({
                  id: 7,
                  name: "4 كيلو صدور دجاج طازجة مقطعة",
                  price: "2.50",
                  img: "https://cdn.salla.sa/XRVjV/7c4401c0-ec89-4dd2-af3c-82f31bac4262-1000x1000-4XAOOzl8EA3wmJi0iNFjClPvor7yQf7WMiDZItAS.png",
                })
              }
            />

            <HorizontalProductCard
              id="australian-beef-box"
              image="https://ozostore.net/wp-content/uploads/2024/09/1000150127.jpg"
              name="كرتون لحم بقري"
              description="كرتون لحم بقري أسترالي ممتاز"
              price="4.50"
              onAddToCart={() =>
                handleAddtoCart({
                  id: 8,
                  name: "كرتون لحم بقري أسترالي ممتاز",
                  price: "4.50",
                  img: "https://ozostore.net/wp-content/uploads/2024/09/1000150127.jpg",
                })
              }
            />

            <HorizontalProductCard
              id="bahraini-lamb-1kg"
              image="https://aloolahma.com/2023/02/20/63f365c64eaaf.png"
              name="لحم غنم بحريني"
              description="1 كيلو لحم غنم بحريني طازج."
              price="2.00"
              onAddToCart={() =>
                handleAddtoCart({
                  id: 9,
                  name: "1 كيلو لحم غنم بحريني طازج",
                  price: "2.00",
                  img: "https://aloolahma.com/2023/02/20/63f365c64eaaf.png",
                })
              }
            />

            <HorizontalProductCard
              id="whole-chicken-1.5kg"
              image="https://cdn.salla.sa/alpwW/p4PWkDMkUUU4bAZLAY04Zr7LJJIu1fg0V14J9TIg.png"
              name="دجاج كامل طازج"
              description="دجاج كامل طازج - 1.5 كيلو."
              price="5.70"
              onAddToCart={() =>
                handleAddtoCart({
                  id: 10,
                  name: "دجاج كامل طازج - 1.5 كيلو",
                  price: "5.70",
                  img: "https://cdn.salla.sa/alpwW/p4PWkDMkUUU4bAZLAY04Zr7LJJIu1fg0V14J9TIg.png",
                })
              }
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                الشروط والأحكام
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                سياسة الخصوصية
              </a>
            </div>
            <p className="text-sm text-gray-600">© 2024 الشركة ألمواشي للحوم</p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <img src="/social_instagram.cf3c4b8c.svg" alt="Instagram" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Cart Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-green-600 text-white">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm text-green-600">
              {cartItems.length}
            </span>
            <span className="ml-2 font-bold">{total.toFixed(2)} د.ب</span>
          </div>
          <button
            onClick={() => props.handleNextPage()}
            className="flex items-center rounded-md bg-white px-4 py-2 text-green-600"
          >
            <span className="ml-2 font-medium">اذهب الى السلة</span>
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

// Component for category cards
function CategoryCard({ image, title }: { image: string; title: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-2 h-16 w-16 overflow-hidden rounded-full">
        <img src={image || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
      </div>
      <span className="text-sm">{title}</span>
    </div>
  )
}

// Component for filter badges
function FilterBadge({ icon, text, active = false }: { icon?: string; text: string; active?: boolean }) {
  return (
    <div
      className={`flex items-center rounded-full px-3 py-1 text-sm ${active ? "bg-green-600 text-white" : "bg-gray-100"}`}
    >
      {icon && <img src={icon || "/placeholder.svg"} alt="" className="mr-1 h-4 w-4" />}
      <span>{text}</span>
    </div>
  )
}

// Component for vertical product cards
function ProductCard({
  id,
  image,
  name,
  price,
  description,
  onAddToCart,
}: {
  id: string
  image: string
  name: string
  price: string
  description?: string
  onAddToCart: () => void
}) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="relative h-40">
        <img src={image || "/placeholder.svg"} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="p-3">
        <div className="mb-2">
          <p className="font-bold text-green-600">{price} د.ب</p>
          <h3 className="text-sm">{name}</h3>
          {description && <p className="mt-1 text-xs text-blue-600">{description}</p>}
        </div>
        <button
          onClick={onAddToCart}
          className="w-full rounded-md bg-gray-100 py-2 text-sm font-medium hover:bg-gray-200"
        >
          إضافة
        </button>
      </div>
    </div>
  )
}

// Component for horizontal product cards
function HorizontalProductCard({
  id,
  image,
  name,
  description,
  price,
  onAddToCart,
}: {
  id: string
  image: string
  name: string
  description: string
  price: string
  onAddToCart: () => void
}) {
  return (
    <div className="flex overflow-hidden rounded-lg bg-white shadow">
      <div className="relative h-24 w-24 flex-shrink-0">
        <img src={image || "/placeholder.svg"} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 items-center justify-between p-3">
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="text-right">
          <p className="mb-2 font-bold">{price} د.ب</p>
          <button
            onClick={onAddToCart}
            className="rounded-md bg-gray-100 px-4 py-1 text-sm font-medium hover:bg-gray-200"
          >
            إضافة
          </button>
        </div>
      </div>
    </div>
  )
}
