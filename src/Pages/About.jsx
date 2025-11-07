import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import gal1 from "../assets/gal1.svg";
import gal2 from "../assets/gal2.svg";
import gal3 from "../assets/gal3.svg";
import gal4 from "../assets/gal4.svg";
import gal5 from "../assets/gal5.svg";

export default function About() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-900">About This App</h2>
      
      {/* Description */}
      <div className="space-y-6 text-gray-700 text-lg">
        <p>
  This Marks Calculator is designed to help students quickly calculate total and average marks, 
  saving time and reducing errors. It provides a seamless experience across all devices with a clean, responsive layout.
</p>
<p>
  <strong>Purpose:</strong> The app aims to simplify academic assessments by allowing students and teachers 
  to enter marks and instantly view totals and averages, reducing the need for manual calculations and improving accuracy.
</p>
<p>
  <strong>Key Features:</strong>
  <ul className="list-disc ml-6 mt-2">
    <li>Real-time calculation of total and average marks</li>
    <li>Input validation to prevent errors</li>
    <li>Minimalistic and intuitive interface</li>
    <li>Responsive design suitable for desktop, tablet, and mobile devices</li>
    <li>Lightweight and fast performance</li>
  </ul>
</p>
<p>
  <strong>Technologies Used:</strong> Built with React for dynamic user interaction and Tailwind CSS for modern, responsive styling. 
  These choices allow for maintainable, scalable, and visually appealing design.
</p>
<p>
  <strong>Future Improvements:</strong>
  <ul className="list-disc ml-6 mt-2">
    <li>Add a grading system to automatically categorize marks</li>
    <li>Export results as PDF for record-keeping</li>
    <li>Store previous results in local storage for quick reference</li>
    <li>Implement optional dark/light mode for better user experience</li>
  </ul>
</p>
<p>
  Overall, this Marks Calculator is a practical, user-friendly tool designed to enhance academic productivity 
  while showcasing the power of modern web technologies.
</p>

      </div>

      {/* Gallery Slider */}
      <div className="mt-12">
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          {[gal1, gal2, gal3, gal4, gal5].map((img, idx) => (
            <div key={idx} className="flex justify-center">
              <img src={img} alt={`Gallery ${idx + 1}`} className="w-3/4 md:w-1/2 max-w-xs" />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
