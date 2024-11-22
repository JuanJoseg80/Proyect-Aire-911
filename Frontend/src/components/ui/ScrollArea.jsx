// src/components/ui/ScrollArea.jsx
'use client'

export default function ScrollArea({ children, className }) {
  return (
    <div className={`overflow-y-auto max-h-[calc(100vh-150px)] ${className}`}>
      {children}
    </div>
  )
}
