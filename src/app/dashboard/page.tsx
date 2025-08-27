'use client'

import { useState } from 'react'
import Link from 'next/link'

// Mock data for development
const mockChildren = [
  { id: 1, name: 'Emma', age: 8, avatar: '👧' },
  { id: 2, name: 'Liam', age: 5, avatar: '👦' },
]

const mockNotes = [
  {
    id: 1,
    childId: 1,
    title: 'Your first day of school',
    preview: 'I remember how nervous you were...',
    releaseDate: '2030-09-01',
    status: 'scheduled'
  },
  {
    id: 2,
    childId: 2,
    title: 'Why we chose your name',
    preview: 'Liam means "strong-willed warrior"...',
    releaseDate: '2035-12-25',
    status: 'scheduled'
  },
]

export default function DashboardPage() {
  const [selectedChild, setSelectedChild] = useState<number | null>(null)

  const filteredNotes = selectedChild 
    ? mockNotes.filter(note => note.childId === selectedChild)
    : mockNotes

  return (
    <div className="min-h-screen bg-gradient-to-br from-memento-50 to-memento-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <Link href="/" className="text-memento-600 hover:text-memento-700 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-memento-800 handwriting mb-2">
            Your Memory Dashboard
          </h1>
          <p className="text-memento-600">
            Create and manage memories for your children
          </p>
        </header>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar - Children */}
          <div className="lg:col-span-1">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-memento-200">
              <h2 className="text-xl font-semibold text-memento-800 mb-4">Your Children</h2>
              
              <div className="space-y-3">
                <button
                  onClick={() => setSelectedChild(null)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedChild === null 
                      ? 'bg-memento-200 text-memento-800' 
                      : 'hover:bg-memento-100 text-memento-600'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">👨‍👩‍👧‍👦</span>
                    <span className="font-medium">All Children</span>
                  </div>
                </button>
                
                {mockChildren.map((child) => (
                  <button
                    key={child.id}
                    onClick={() => setSelectedChild(child.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedChild === child.id 
                        ? 'bg-memento-200 text-memento-800' 
                        : 'hover:bg-memento-100 text-memento-600'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{child.avatar}</span>
                      <div>
                        <div className="font-medium">{child.name}</div>
                        <div className="text-sm opacity-75">Age {child.age}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              
              <button className="w-full mt-4 p-3 border-2 border-dashed border-memento-300 rounded-lg text-memento-600 hover:border-memento-400 hover:text-memento-700 transition-colors">
                + Add Child
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Action Bar */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-memento-800">
                {selectedChild 
                  ? `Notes for ${mockChildren.find(c => c.id === selectedChild)?.name}`
                  : 'All Notes'
                }
              </h2>
              <Link
                href="/dashboard/new-note"
                className="bg-memento-600 hover:bg-memento-700 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-lg"
              >
                + New Note
              </Link>
            </div>

            {/* Notes Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {filteredNotes.map((note) => {
                const child = mockChildren.find(c => c.id === note.childId)
                return (
                  <div key={note.id} className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-memento-200 hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{child?.avatar}</span>
                        <span className="text-sm text-memento-600">{child?.name}</span>
                      </div>
                      <span className="text-xs bg-memento-200 text-memento-700 px-2 py-1 rounded-full">
                        {note.status}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-memento-800 mb-2">
                      {note.title}
                    </h3>
                    
                    <p className="text-memento-600 text-sm mb-3 line-clamp-2">
                      {note.preview}
                    </p>
                    
                    <div className="flex justify-between items-center text-sm text-memento-500">
                      <span>Release: {new Date(note.releaseDate).toLocaleDateString()}</span>
                      <button className="text-memento-600 hover:text-memento-700">
                        Edit →
                      </button>
                    </div>
                  </div>
                )
              })}
              
              {filteredNotes.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <div className="text-6xl mb-4">📝</div>
                  <h3 className="text-xl font-semibold text-memento-700 mb-2">
                    No notes yet
                  </h3>
                  <p className="text-memento-600 mb-4">
                    Start creating beautiful memories for your children
                  </p>
                  <Link
                    href="/dashboard/new-note"
                    className="bg-memento-600 hover:bg-memento-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    Create Your First Note
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
