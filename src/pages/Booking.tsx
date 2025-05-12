import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BookingPage = () => {
  useEffect(() => {
    // Set dark mode for this page when it mounts
    document.documentElement.classList.add("dark");
    document.body.style.backgroundColor = "#121212";

    (async function () {
      const cal = await getCalApi({
        namespace: "45min",
        embedLibUrl: "https://cal.com/embed/embed.js",
      });

      cal("ui", {
        layout: "month_view",
        hideEventTypeDetails: false,
      });
    })();

    // Clean up the dark mode class and background when the page unmounts
    return () => {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    // Main container with flex column layout and dark theme background
    <div className="min-h-screen flex flex-col bg-darkbg text-white">
      <Header /> {/* Include the Header */}

      {/* Main content area: flex-1 makes it grow to fill space, overflow-y-auto adds vertical scrolling */}
      <main className="flex-1 overflow-y-auto">
        {/* Section for layout with significantly reduced vertical padding (py-8) */}
        {/* px-4 is kept for standard horizontal padding, adjust if needed */}
        <section className="py-8 px-4"> {/* Changed py-16 to py-8 */}
          <div className="max-w-5xl mx-auto text-center">
            {/*<h1 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
              Book Your Free Demo
            </h1>}

            {/* Removed the paragraph text */}

            <div className="border border-neutral/20 rounded-lg overflow-hidden shadow-lg bg-background">
              {/* Cal.com embed */}
              <Cal
                namespace="45min"
                calLink="webrewery/45min"
                style={{ width: "100%", height: "700px", overflow: "scroll" }}
                config={{ layout: "month_view" }}
                calOrigin="https://cal.com"
                embedJsUrl="https://cal.com/embed/embed.js"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer /> {/* Include the Footer */}
    </div>
  );
};

export default BookingPage; 