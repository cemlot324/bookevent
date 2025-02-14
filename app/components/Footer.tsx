'use client'

import { useEffect, useState } from 'react'

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-600 text-sm">
            © 2024 Be Here Now. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 