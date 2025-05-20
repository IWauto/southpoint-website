export default function BusinessWebsite() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Southpoint Autobody & Glass Logo" className="h-10" />
          <h1 className="text-2xl font-bold">Southpoint Autobody & Glass</h1>
        </div>
      </header>

      {/* Home Section */}
      <section className="p-8 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Southpoint Autobody & Glass</h2>
        <p className="text-lg">We provide expert autobody and glass repair services with precision and care.</p>
        <div className="mt-3 flex justify-center">
          <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold border border-blue-200 inline-block">
            MPI Certified
          </span>
        </div>
      </section>

      {/* Services Section */}
      <section className="p-8 bg-white">
        <h2 className="text-2xl font-semibold mb-6 text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-medium mb-2">Autobody Repair</h3>
            <p>From minor dents to major collision repairs, we restore your vehicle's body to like-new condition.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-medium mb-2">Glass Replacement</h3>
            <p>Professional windshield and window replacement using high-quality OEM or equivalent glass.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-medium mb-2">Insurance Claims Assistance</h3>
            <p>We work with your insurance provider to ensure a smooth, hassle-free repair process.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-medium mb-2">Hail Damage Claims</h3>
            <p>We specialize in repairing hail damage and can assist you with your claim from start to finish.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-medium mb-2">Body Integrity</h3>
            <p>Ensuring the structural integrity and safety of your vehicle’s body after repairs.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-8 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
        <div className="max-w-md mx-auto space-y-4">
          <p><strong>Phone:</strong> (431) 234 3110</p>
          <p><strong>Email:</strong> iwautocollision@outlook.com</p>
          <p><strong>Address:</strong> 289 PTH, 52 Mitchell, MB</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center p-4 mt-8 border-t">
        <p>&copy; {new Date().getFullYear()} Southpoint Autobody & Glass. All rights reserved.</p>
      </footer>
    </div>
  );
}