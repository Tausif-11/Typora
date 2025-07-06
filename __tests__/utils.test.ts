import {
  cn,
  generateSessionId,
  formatDate,
  getLanguageFromFilename,
} from '@/lib/utils'

describe('Utils', () => {
  describe('cn', () => {
    it('should merge class names correctly', () => {
      expect(cn('class1', 'class2')).toBe('class1 class2')
      expect(cn('class1', undefined, 'class2')).toBe('class1 class2')
      expect(cn('class1', false && 'class2', 'class3')).toBe('class1 class3')
    })
  })

  describe('generateSessionId', () => {
    it('should generate a session ID', () => {
      const sessionId = generateSessionId()
      expect(sessionId).toBeDefined()
      expect(typeof sessionId).toBe('string')
      expect(sessionId.length).toBeGreaterThan(0)
    })

    it('should generate unique session IDs', () => {
      const sessionId1 = generateSessionId()
      const sessionId2 = generateSessionId()
      expect(sessionId1).not.toBe(sessionId2)
    })
  })

  describe('formatDate', () => {
    it('should format date correctly', () => {
      const date = new Date('2024-01-15T10:30:00Z')
      const formatted = formatDate(date)
      expect(formatted).toMatch(/Jan 15, 2024/)
    })
  })

  describe('getLanguageFromFilename', () => {
    it('should detect JavaScript files', () => {
      expect(getLanguageFromFilename('script.js')).toBe('javascript')
      expect(getLanguageFromFilename('app.jsx')).toBe('javascript')
    })

    it('should detect TypeScript files', () => {
      expect(getLanguageFromFilename('app.ts')).toBe('typescript')
      expect(getLanguageFromFilename('component.tsx')).toBe('typescript')
    })

    it('should detect HTML files', () => {
      expect(getLanguageFromFilename('index.html')).toBe('html')
    })

    it('should detect CSS files', () => {
      expect(getLanguageFromFilename('styles.css')).toBe('css')
      expect(getLanguageFromFilename('app.scss')).toBe('scss')
    })

    it('should return plaintext for unknown extensions', () => {
      expect(getLanguageFromFilename('readme.txt')).toBe('plaintext')
      expect(getLanguageFromFilename('file.unknown')).toBe('plaintext')
    })
  })
})
