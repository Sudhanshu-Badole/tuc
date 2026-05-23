import { useEffect, useRef } from 'react'

export default function Background3D({ theme }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let W, H

    const isDark = theme === 'dark'
    const primaryColor = isDark ? '95, 167, 119' : '31, 92, 58'
    const gridColor = isDark ? 'rgba(58,67,61,0.35)' : 'rgba(180,200,185,0.4)'

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = document.body.scrollHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Particles
    const isMobile = window.innerWidth < 700
    const PARTICLE_COUNT = isMobile ? 30 : 72
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * document.body.scrollHeight,
      z: Math.random() * 1.5 + 0.3,   // depth
      r: Math.random() * 1.8 + 0.6,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.2,
    }))

    // Grid vanishing point
    const VP = { x: 0.5, y: 0.38 }   // as fraction of W/H

    function drawGrid() {
      const vpX = W * VP.x
      const vpY = H * VP.y
      const LINES = 18
      ctx.strokeStyle = gridColor
      ctx.lineWidth = 0.7

      // horizontal lines (perspective)
      for (let i = 0; i <= LINES; i++) {
        const t = i / LINES
        const y = vpY + (H - vpY) * Math.pow(t, 1.6)
        const spread = (y - vpY) / (H - vpY)
        const x0 = vpX - spread * W * 0.9
        const x1 = vpX + spread * W * 0.9
        ctx.globalAlpha = spread * 0.55
        ctx.beginPath()
        ctx.moveTo(x0, y)
        ctx.lineTo(x1, y)
        ctx.stroke()
      }

      // vertical lines converging to VP
      for (let i = 0; i <= LINES; i++) {
        const t = i / LINES
        const xBottom = W * t
        ctx.globalAlpha = 0.25
        ctx.beginPath()
        ctx.moveTo(vpX, vpY)
        ctx.lineTo(xBottom, H)
        ctx.stroke()
      }
      ctx.globalAlpha = 1
    }

    function drawParticles() {
      particles.forEach(p => {
        // move
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = W
        if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H
        if (p.y > H) p.y = 0

        const size = p.r * p.z
        ctx.globalAlpha = p.opacity * p.z * 0.7
        ctx.fillStyle = `rgba(${primaryColor}, 1)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
        ctx.fill()
      })

      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 140) {
            ctx.globalAlpha = (1 - dist / 140) * 0.18
            ctx.strokeStyle = `rgba(${primaryColor}, 1)`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      drawGrid()
      drawParticles()
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.55,
      }}
    />
  )
}
