import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ContactModalProps {
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  // Initialize countdown for 5 seconds
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up the timer to decrease the countdown every second
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          // If countdown is 1 or less, clear the timer, navigate, and close the modal
          clearInterval(timer);
          navigate('/'); // Redirect to homepage
          onClose();
          return 0;
        }
        // Decrease the countdown by 1
        return prevCountdown - 1;
      });
    }, 1000); // Timer interval is 1000ms (1 second)

    // Clean up the timer when the component unmounts or the effect dependencies change
    return () => clearInterval(timer);
    // Effect dependencies: navigate and onClose ensure the effect runs if they change
  }, [navigate, onClose]); // Added dependencies

  // Set another effect to automatically close the modal after 5 seconds if not already closed by countdown
  useEffect(() => {
    const autoCloseTimer = setTimeout(() => {
      if (countdown > 0) { // Only close if the countdown hasn't finished
        onClose();
        navigate('/'); // Ensure navigation happens even if modal closes differently
      }
    }, 5000); // Modal stays open for 5 seconds

    // Clean up the auto-close timer
    return () => clearTimeout(autoCloseTimer);
  }, [countdown, navigate, onClose]);


  return (
    // Fixed overlay to cover the screen
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"> {/* Adjusted opacity and added backdrop-blur */}
      {/* Modal content container */}
      <div className="bg-darkbg p-8 rounded-lg shadow-xl text-center max-w-md w-full border border-primary/20"> {/* Used bg-darkbg, border-primary/20 */}
        <h2 className="text-2xl font-bold text-primary mb-4">Success!</h2> {/* Used text-primary */}
        <p className="text-neutral-300 mb-6"> {/* Used text-neutral-300 */}
          Your submission was successful. You will be redirected to the homepage in:
        </p>
        {/* Countdown display */}
        <div className="text-4xl font-bold text-primary mb-6"> {/* Used text-primary */}
          {countdown} seconds
        </div>
        {/* Optional waiting message */}
        <div className="animate-pulse text-sm text-neutral-500"> {/* Used text-neutral-500 */}
          Processing...
        </div>
      </div>
    </div>
  );
};