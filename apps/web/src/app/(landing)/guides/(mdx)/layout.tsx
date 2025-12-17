export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="px-4 sm:px-6 lg:px-8 w-full py-24 sm:py-32 md:py-40 lg:py-48 flex justify-center items-center max-w-4xl mx-auto">
      <div className="prose prose-sm sm:prose-base lg:prose-lg prose-headings:mt-4 sm:prose-headings:mt-6 lg:prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-2xl sm:prose-h1:text-3xl md:prose-h1:text-4xl lg:prose-h1:text-5xl prose-h2:text-xl sm:prose-h2:text-2xl md:prose-h2:text-3xl lg:prose-h2:text-4xl prose-h3:text-lg sm:prose-h3:text-xl md:prose-h3:text-2xl lg:prose-h3:text-3xl prose-h4:text-base sm:prose-h4:text-lg md:prose-h4:text-xl lg:prose-h4:text-2xl prose-h5:text-sm sm:prose-h5:text-base md:prose-h5:text-lg lg:prose-h5:text-xl prose-h6:text-xs sm:prose-h6:text-sm md:prose-h6:text-base lg:prose-h6:text-lg dark:prose-headings:text-white w-full max-w-5xl mx-auto">
        {children}
      </div>
    </main>
  );
}
