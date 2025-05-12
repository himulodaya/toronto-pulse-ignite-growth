import { Phone, Mail, MapPin } from "lucide-react"; // Assuming you use lucide-react for icons
import { Card, CardContent } from "@/components/ui/card"; // Example using a Card component
import { Input } from "@/components/ui/input"; // Assuming you have an Input component
import { Textarea } from "@/components/ui/textarea"; // Assuming you have a Textarea component
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import { Label } from "@/components/ui/label"; // Assuming you have a Label component

const ContactUsFormContent = () => {
  return (
    <div className="container mx-auto px-6 py-16 md:py-24"> {/* Added padding for the content area */}
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
              <span>437.9714507.</span> {/* Replace with your actual phone number */}
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <span>cheers@webrewery.io</span> {/* Replace with your actual email */}
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-primary mt-1" />
              <span>
                500 Wilson Ave {/* Replace with your actual address */}
                <br />
                North York, ON M3h 0C5 {/* Replace with your actual city and postal code */}
              </span>
            </div>
          </div>

          {/* Contact Form Section */}
          <Card className="bg-darkbg border border-primary/20">
            <CardContent className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Name</Label>
                  <Input id="first-name" placeholder="First" />
                </div>
                <div className="space-y-2 md:mt-0 mt-2"> {/* Added mt-2 for mobile spacing */}
                   <Label htmlFor="last-name" className="invisible md:visible">Last Name</Label> {/* Label for accessibility, visually hidden on mobile */}
                  <Input id="last-name" placeholder="Last" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@webrewery.io" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input id="phone" type="tel" placeholder="999-999-9999" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Type your message..." className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Submit
              </Button>
            </CardContent>
          </Card>
        </div>
    </div>
  );
};

export default ContactUsFormContent;