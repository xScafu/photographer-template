export default function ContactSection() {
  return (
    <>
      <section className="py-24 px-4 md:px-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Contact</h2>
        <form className="max-w-2xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
          ></textarea>
          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}
