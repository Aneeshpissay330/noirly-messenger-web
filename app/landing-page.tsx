import Button from "@/components/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black font-display flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20 gap-24">
        {/* Hero Section */}
        <section className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 flex flex-col gap-8">
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
              Effortless, private communication for your mobile.
            </h1>
            <h2 className="text-lg text-gray-500 font-normal">
              Experience a focused and streamlined way to connect with the
              people who matter most, right from your device.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button variant="primary" className="cursor-pointer">
                Get it on Google Play
              </Button>
              <Button
                variant="secondary"
                className="cursor-pointer"
                href="/login"
              >
                Sign In
              </Button>
            </div>
            <div className="flex items-center gap-2 mt-2 text-gray-400">
              <span className="material-symbols-outlined text-red-500 text-2xl">
                verified_user
              </span>
              <span className="text-base font-medium">
                Privacy-first communication
              </span>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="w-96 h-96 bg-white/60 border border-gray-200 rounded-2xl flex flex-col justify-end p-6 gap-4 shadow-glass backdrop-blur-md">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-black/10"></div>
                <div className="w-3/4 h-16 rounded-lg bg-black/10"></div>
              </div>
              <div className="flex items-start gap-3 justify-end">
                <div className="w-1/2 h-10 rounded-lg bg-white/80 border border-gray-200"></div>
                <div className="w-12 h-12 rounded-full bg-white/80 border border-gray-200"></div>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="w-full max-w-5xl flex flex-col gap-12">
          <h1 className="text-4xl font-semibold tracking-tight">
            Everything you need to connect
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl">
            Noirly Messenger is designed to be simple and intuitive, providing
            the essential features for seamless communication.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-glass">
              <span className="material-symbols-outlined text-black text-3xl">
                chat_bubble
              </span>
              <h2 className="text-lg font-bold">Personal & Group Chat</h2>
              <p className="text-sm text-gray-500">
                Chat one-on-one or with your entire team. Our clean interface
                keeps your conversations organized and easy to follow.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-glass">
              <span className="material-symbols-outlined text-black text-3xl">
                video_call
              </span>
              <h2 className="text-lg font-bold">High-Quality Calls</h2>
              <p className="text-sm text-gray-500">
                Crystal-clear audio and video calls that make you feel like
                you're in the same room, without the clutter.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-glass">
              <span className="material-symbols-outlined text-black text-3xl">
                lock
              </span>
              <h2 className="text-lg font-bold">End-to-End Encryption</h2>
              <p className="text-sm text-gray-500">
                Your privacy is our priority. All messages and calls are secured
                with end-to-end encryption by default.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-glass">
              <span className="material-symbols-outlined text-black text-3xl">
                attach_file
              </span>
              <h2 className="text-lg font-bold">File Sharing</h2>
              <p className="text-sm text-gray-500">
                Securely send and receive files, photos, and videos with ease,
                integrated directly into your conversations.
              </p>
            </div>
          </div>
        </section>
        {/* Why Noirly Section */}
        <section className="w-full max-w-5xl flex flex-col gap-12">
          <h1 className="text-4xl font-semibold tracking-tight">Why Noirly?</h1>
          <p className="text-lg text-gray-500 max-w-2xl">
            We built a messenger that respects your focus and your privacy. It's
            not just about what Noirly does, but how it makes you feel.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-xl font-bold">Focus on What Matters</h3>
                <p className="text-sm text-gray-500">
                  Our minimalist design eliminates distractions, helping you
                  concentrate on clear, meaningful conversations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Your Conversations, Your Privacy
                </h3>
                <p className="text-sm text-gray-500">
                  We believe your data is yours. With end-to-end encryption, we
                  can't read your messages, and neither can anyone else.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Syncs Across Devices</h3>
                <p className="text-sm text-gray-500">
                  Start a chat on your desktop and continue it on your phone.
                  Your conversations are always perfectly in sync.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative w-80 h-80 bg-white/60 border border-gray-200 rounded-2xl flex flex-col justify-center items-center p-6 shadow-glass backdrop-blur-md">
                <div className="absolute w-16 h-16 rounded-full bg-red-500/10 top-8 left-8"></div>
                <div className="absolute w-12 h-12 rounded-full bg-red-500/10 bottom-12 right-12"></div>
                <div className="absolute w-8 h-8 rounded-full bg-red-500/10 bottom-24 left-16"></div>
                <div className="w-24 h-24 rounded-full border-2 border-black flex items-center justify-center bg-white/80">
                  <span className="material-symbols-outlined text-black text-5xl">
                    shield
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Call to Action Section */}
        <section className="w-full max-w-3xl flex flex-col items-center gap-8 text-center">
          <h1 className="text-4xl font-semibold tracking-tight">
            Ready to simplify your conversations?
          </h1>
          <p className="text-lg text-gray-500">
            Download Noirly Messenger today and experience a calmer, more
            focused way to communicate.
          </p>
          <Button variant="primary" className="cursor-pointer">
            Get it on Google Play
          </Button>
          <div className="flex items-center gap-2 text-gray-400 justify-center">
            <span className="material-symbols-outlined text-red-500 text-2xl">
              verified_user
            </span>
            <span className="text-base font-medium">
              Privacy-first communication
            </span>
          </div>
        </section>
      </main>
      {/* No footer here; handled by layout */}
    </div>
  );
}
