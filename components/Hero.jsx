import Image from 'next/image';
import PropertySearchForm from './PropertySearchForm';

const Hero = () => {
  return (
    <div className="relative h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <Image
        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
        alt="Modern dental laboratory"
        fill
        priority
        className="object-cover z-0"
        quality={100}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-[1]"></div>

      {/* Content */}
      <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Digital Precision, Perfect Smiles
          </h1>
          <p className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Crafting tomorrow's dental solutions today with advanced CAD/CAM technology and 3D printing innovation
          </p>
          <div className="mt-10">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
