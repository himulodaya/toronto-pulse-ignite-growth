
const Footer = () => {
  return (
    <footer className="bg-darkbg py-8 border-t border-neutral/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-bold gradient-text">Toronto Pulse</p>
            <p className="text-sm text-neutral-400 mt-1">Marketing that works for Toronto businesses</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm">
            <a href="#" className="text-neutral-300 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-neutral-300 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-neutral-300 hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-neutral/10 text-center">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} Toronto Pulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
