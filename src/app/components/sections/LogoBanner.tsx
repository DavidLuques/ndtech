export default function LogoBanner() {
  return (
    <section className="bg-[#eeeff1] py-12 border-y border-slate-200/50 flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 flex justify-center">
        <img
          src="/ndtech.webp"
          alt="NDTech Inspecciones"
          className="h-40 md:h-56 object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
}
