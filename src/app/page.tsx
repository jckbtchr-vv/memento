import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Hero Section */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-memento-800 handwriting">
            Memento
          </h1>
          <p className="text-2xl text-memento-700 font-serif">
            A digital time capsule for families
          </p>
          <p className="text-lg text-memento-600 max-w-2xl mx-auto leading-relaxed">
            Create lasting memories, write heartfelt notes, and capture precious moments 
            that your children can discover as they grow up. Because some messages are 
            meant to be opened at just the right time.
          </p>
        </div>

        {/* Feature Preview */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-memento-200">
            <div className="text-3xl mb-3">📝</div>
            <h3 className="text-xl font-semibold text-memento-800 mb-2">Write Notes</h3>
            <p className="text-memento-600">
              Capture thoughts, advice, and love letters for your children's future
            </p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-memento-200">
            <div className="text-3xl mb-3">⏰</div>
            <h3 className="text-xl font-semibold text-memento-800 mb-2">Time Release</h3>
            <p className="text-memento-600">
              Schedule messages to be revealed at specific ages or milestones
            </p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-memento-200">
            <div className="text-3xl mb-3">👨‍👩‍👧‍👦</div>
            <h3 className="text-xl font-semibold text-memento-800 mb-2">Multi-Child</h3>
            <p className="text-memento-600">
              Create separate memory collections for each of your children
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="space-y-4 mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/dashboard" 
              className="bg-memento-600 hover:bg-memento-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
            >
              Start Creating Memories
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-memento-600 text-memento-700 hover:bg-memento-50 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More
            </Link>
          </div>
          
          <p className="text-sm text-memento-500 mt-4">
            Coming soon: Rich media support, family collaboration, and secure cloud storage
          </p>
        </div>
      </div>
    </main>
  )
}
