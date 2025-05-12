import React, { useState } from 'react'
import { Phone, Mail, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { ContactModal } from "@/components/ui/contact-modal"

const ContactUsForm: React.FC = () => {
  const [showThankYou, setShowThankYou] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Create FormData object
    const formData = new FormData(e.target as HTMLFormElement)
    
    // Submit to Web3Forms
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        // Show thank you modal
        setShowThankYou(true)
      } else {
        // Handle error
        alert("There was an error submitting your form. Please try again.")
      }
    })
    .catch(error => {
      console.error('Error:', error)
      alert("There was an error submitting your form. Please try again.")
    })
  }

  return (
    <div className="relative">
      {showThankYou && <ContactModal onClose={() => setShowThankYou(false)} />}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-6 text-white">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <div className="text-neutral-300 space-y-6">
            <p className="text-lg">
              Feel free to use the form or drop us an email. Old-fashioned phone calls work too.
            </p>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <span>437.971.4507</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <span>cheers@webrewery.io</span>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-primary mt-1" />
              <span>
                500 Wilson Ave
                <br />
                North York, ON M3h 0C5
              </span>
            </div>
          </div>

          {/* Contact Form Section */}
          <Card className="bg-darkbg border border-primary/20">
            <CardContent className="p-8 space-y-6">
              <form onSubmit={handleSubmit}>
                <input 
                  type="hidden" 
                  name="access_key" 
                  value="cfbcc87d-f847-48d3-a14c-637e779fdf5e" 
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input 
                      id="first-name" 
                      name="first_name"
                      placeholder="First" 
                      required 
                    />
                  </div>
                  <div className="space-y-2 md:mt-0 mt-2">
                     <Label htmlFor="last-name">Last Name</Label>
                    <Input 
                      id="last-name" 
                      name="last_name"
                      placeholder="Last" 
                      required 
                    />
                  </div>
                </div>
                <div className="space-y-2 mt-4">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="john@webrewery.io" 
                    required 
                  />
                </div>
                <div className="space-y-2 mt-4">
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    type="tel" 
                    placeholder="999-999-9999" 
                  />
                </div>
                <div className="space-y-2 mt-4">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Type your message..." 
                    className="min-h-[150px]" 
                    required 
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ContactUsForm