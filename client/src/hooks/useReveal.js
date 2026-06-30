import { useEffect, useRef } from 'react'

export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const els = el.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach(e => observer.observe(e))
    return () => observer.disconnect()
  }, [])

  return ref
}
