export default function AboutSection() {
  return (
    <>
      <section className="py-24 px-4 md:px-16 flex flex-col md:flex-row items-center gap-12">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
          alt="Photographer portrait"
          className="w-48 h-48 object-cover rounded-full shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-lg max-w-xl">
            I'm name, a landscape and nature photographer with a deep passion
            for capturing the beauty of the natural world. I believe in telling
            stories through light, texture, and emotion.
          </p>
        </div>
      </section>
    </>
  );
}
