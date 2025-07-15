import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white p-6 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm">© 2023 PedalPower. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-3">
            <a href="#" className="hover:text-green-400 transition">
              Terms
            </a>
            <a href="#" className="hover:text-green-400 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-green-400 transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
