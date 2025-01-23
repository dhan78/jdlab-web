"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Bell, Download, HelpCircle, Printer, Search, Settings, Upload } from "lucide-react"
import { useSession } from "next-auth/react"

export default function NewCase() {
  const router = useRouter()
  const { data: session } = useSession()
  const [orderDetails, setOrderDetails] = useState({
    patientName: "James Parr",
    doctor: "Dr. Paula Devins",
    deliveryAddress: "275 Broad St.",
    orderId: "119-376-197",
    material: "Zirconia Monolithic",
    shades: {
      base: "A2",
      gingival: "A4",
      incisal: "N/A",
    },
    preferences: {
      crownUnderPartial: "No",
      occlusalContact: "Light",
      proximalContact: "Medium",
      occlusalStaining: "Light",
      anatomicalDesign: "Follow adjacent anatomy",
      occlusalClearance: "If < 0.5mm, reduce opposing; else, call Dr",
    },
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <button onClick={() => router.back()} className="flex items-center text-green-600 hover:text-green-700">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back
              </button>
              <nav className="flex space-x-4">
                <button className="px-3 py-2">Orders</button>
                <button className="px-3 py-2">Academy</button>
                <button className="px-3 py-2">Supplies</button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="search"
                  placeholder="Search for orders"
                  className="border rounded w-full py-2 px-3 pl-10 text-gray-700 focus:outline-none focus:shadow-outline"
                />
              </div>
              <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline'>
                <Bell className="w-5 h-5" />
              </button>
              <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline'>
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="col-span-2">
            {/* Patient Info */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h1 className="text-2xl font-semibold mb-4">{orderDetails.patientName}</h1>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Doctor</p>
                  <p>{orderDetails.doctor}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Delivery address</p>
                  <p>{orderDetails.deliveryAddress}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Order ID</p>
                  <p>{orderDetails.orderId}</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Live Tracking</h2>
              <div className="relative">
                <div className="h-2 bg-gray-200 rounded">
                  <div className="h-full w-1/4 bg-green-500 rounded" />
                </div>
                <div className="flex justify-between mt-4">
                  <div className="text-sm">
                    <p className="font-medium">Placed</p>
                    <p className="text-gray-500">9:26 AM</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Design Preview</p>
                    <p className="text-gray-500">May 25</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Shipment</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Delivery</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Details */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Crown 4</h2>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium mb-2">GENERAL INFO</h3>
                  <div className="space-y-2">
                    <div className="grid grid-cols-2">
                      <p className="text-gray-500">Material</p>
                      <p>{orderDetails.material}</p>
                    </div>
                    <div className="grid grid-cols-2">
                      <p className="text-gray-500">Base Shade</p>
                      <p>{orderDetails.shades.base}</p>
                    </div>
                    <div className="grid grid-cols-2">
                      <p className="text-gray-500">Gingival</p>
                      <p>{orderDetails.shades.gingival}</p>
                    </div>
                    <div className="grid grid-cols-2">
                      <p className="text-gray-500">Incisal</p>
                      <p>{orderDetails.shades.incisal}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">ORDER PREFERENCES</h3>
                  <div className="space-y-2">
                    {Object.entries(orderDetails.preferences).map(([key, value]) => (
                      <div key={key} className="grid grid-cols-2">
                        <p className="text-gray-500">{key.replace(/([A-Z])/g, " $1").trim()}</p>
                        <p>{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Quick order actions</h2>
              <p className="text-sm text-gray-500 mb-4">Make changes to your order instantly</p>
              <div className="space-y-3">
                <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center'>
                  <Upload className="w-4 h-4 mr-2" />
                  Modify RX & instructions
                </button>
                <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center'>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload file or image
                </button>
                <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center'>
                  <Upload className="w-4 h-4 mr-2" />
                  Attach existing scans
                </button>
                <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center'>
                  <Download className="w-4 h-4 mr-2" />
                  Download scans
                </button>
                <button className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center'>
                  Cancel order
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Still need help?</h2>
              <div className="space-y-3">
                <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center'>
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Explore help center
                </button>
                <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center'>
                  Chat with us live
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

