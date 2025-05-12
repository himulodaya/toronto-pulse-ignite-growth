import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const BookingPage = () => {
  useEffect(() => {
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
  }, []);

  return (
    <section className="min-h-screen bg-[#0d0c1d] py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
          Book Your Free Demo
        </h1>
        <p className="text-lg text-neutral-300 mb-12">
          Pick a 45-minute slot that works for you and discover how Webrewery
          can transform your Toronto marketing.
        </p>

        <div className="border border-neutral/20 rounded-lg overflow-hidden shadow-lg bg-background">
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
  );
};

export default BookingPage;
