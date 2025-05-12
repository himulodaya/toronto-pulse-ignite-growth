import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactUsFormContent from "@/components/ContactUs"; // Import the content component

const ContactUs = () => {
  // Optional: You can add a specific useEffect here if this page needs unique side effects
  // For maintaining the dark theme consistently across pages, ensure your ThemeToggle
  // and Tailwind configuration handle this globally. The bg-darkbg on the main div
  // helps, but a global theme provider is more robust.

  return (
    <div className="min-h-screen flex flex-col bg-darkbg text-white">
      <Header />
      <main className="flex-grow"> {/* flex-grow ensures the main content takes available space */}
        <ContactUsFormContent /> {/* Include the contact form content */}
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs; // <--- Make sure this line is present and correct