'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, MessageCircle, Play, Trophy } from 'lucide-react'
import ChatInterface from "@/components/ui/ChatInterface" // Asegúrate de importar el ChatInterface

export default function Dashboard() {
  const [progress, setProgress] = useState(0)
  const [quote, setQuote] = useState("")
  const [isChatOpen, setIsChatOpen] = useState(false) // Estado para manejar si el chat está abierto o no

  // Función para abrir el chat
  const handleOpenChat = () => {
    setIsChatOpen(true)
  }

  // Función para cerrar el chat
  const handleCloseChat = () => {
    setIsChatOpen(false)
  }

  useEffect(() => {
    // Simulating progress loading
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Fetch a random quote (replace with actual API call)
    setQuote("The only way to do great work is to love what you do. - Steve Jobs")
  }, [])

  const dailyActivities = [
    "Complete a 10-minute meditation session",
    "Write down three things you're grateful for",
    "Do a quick 5-minute stretching routine"
  ]

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-6">Welcome back, User!</h1>

      {/* Si el chat está abierto, renderiza el ChatInterface */}
      {isChatOpen ? (
        <ChatInterface onClose={handleCloseChat} />
      ) : (
        <>
          <Card>
            <CardHeader>
              <CardTitle>Your Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={progress} className="w-full" />
              <p className="text-center mt-2">{progress}% towards your weekly goal</p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Daily Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {dailyActivities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Motivational Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="italic">&ldquo;{quote}&rdquo;</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              <Play className="mr-2 h-4 w-4" /> Start Daily Session
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={handleOpenChat}>
              <MessageCircle className="mr-2 h-4 w-4" /> Open Chat
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <Brain className="mr-2 h-4 w-4" /> Mental Training
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="mr-2 h-5 w-5" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">New</span>
                  Completed 7-day meditation streak
                </li>
                <li className="flex items-center">
                  Finished 30-day gratitude challenge
                </li>
                <li className="flex items-center">
                  Reached 100 mindfulness minutes
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}
