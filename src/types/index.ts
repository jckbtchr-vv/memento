export interface Child {
  id: number
  name: string
  age: number
  avatar: string
  dateOfBirth: string
  createdAt: string
}

export interface Note {
  id: number
  childId: number
  title: string
  content: string
  preview: string
  releaseDate: string
  status: 'draft' | 'scheduled' | 'released'
  createdAt: string
  updatedAt: string
  tags?: string[]
  attachments?: Attachment[]
}

export interface Attachment {
  id: number
  noteId: number
  type: 'image' | 'video' | 'audio' | 'document'
  filename: string
  url: string
  size: number
}

export interface User {
  id: number
  email: string
  name: string
  createdAt: string
  children: Child[]
}

export interface MilestoneTemplate {
  id: number
  name: string
  description: string
  suggestedAge: number
  category: 'birthday' | 'school' | 'achievement' | 'holiday' | 'custom'
}
