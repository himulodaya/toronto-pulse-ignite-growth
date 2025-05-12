import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface ContactModalProps {
  onClose: () => void
}

export const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const [countdown, setCountdown] = useState(3)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(timer)
          navigate('/') // Redirect to homepage
          onClose()
          return 0
        }
        return prevCountdown - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [navigate, onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md w-full">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Message Received!</h2>
        <p className="text-gray-700 mb-6">
          Thank you for your message. You will be redirected to the homepage in:
        </p>
        <div className="text-4xl font-bold text-primary mb-6">
          {countdown} seconds
        </div>
        <div className="animate-pulse text-sm text-gray-500">
          Please wait while we process your request...
        </div>
      </div>
    </div>
  )
}