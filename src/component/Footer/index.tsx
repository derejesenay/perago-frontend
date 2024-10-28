// components/Footer.js

const Footer = () => {
  return (
    <footer className="bg-cyan-600 text-white py-4">
      <div className="container mx-auto flex justify-between">
        {/* Footer Links */}
        <div className="footer-links">
          {/* <img src="/logo.png" alt="Logo" width="100" /> */}
          <div className="bg-cyan-600">
            <a href="../#" className="mr-4">
              About Us
            </a>
          </div>
          <div className="bg-cyan-600">
            <a href="http://peragosystems.com/demo" className="mr-4">
              Request Demo
            </a>
          </div>
          <a href="./" className="mr-4">
            &copy; 2024 Dereje Senay All Rights Reserved!
          </a>
        </div>

        <div className="footer-company-info">
          {" "}
          <ul>
            <li className="mb-1">Eamil: Info@peragosystems.com</li>
            <li className="mb-1">Phone: +251(114)701998 /+251-911-231622</li>
            <li className="mb-1">
              Address: Addis Ababa, Ethiopia 22, Noeh Building 4th Floor
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
