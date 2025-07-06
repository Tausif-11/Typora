import * as Y from 'yjs'
import type { editor } from 'monaco-editor'

export class MonacoBinding {
  private yText: Y.Text
  private model: editor.ITextModel
  private editors: Set<editor.IStandaloneCodeEditor>
  private awareness: unknown
  private _onModelChange: { dispose: () => void } | null
  private _onYTextChange: (() => void) | null

  constructor(
    yText: Y.Text,
    model: editor.ITextModel,
    editors: Set<editor.IStandaloneCodeEditor>,
    awareness: unknown
  ) {
    this.yText = yText
    this.model = model
    this.editors = editors
    this.awareness = awareness

    // Initial sync
    this.model.setValue(this.yText.toString())

    // Listen for Monaco changes
    this._onModelChange = this.model.onDidChangeContent(() => {
      const value = this.model.getValue()
      if (value !== this.yText.toString()) {
        this.yText.delete(0, this.yText.length)
        this.yText.insert(0, value)
      }
    })

    // Listen for Yjs changes
    this._onYTextChange = () => {
      const value = this.yText.toString()
      if (value !== this.model.getValue()) {
        this.model.setValue(value)
      }
    }
    this.yText.observe(this._onYTextChange)
  }

  destroy() {
    if (this._onModelChange) this._onModelChange.dispose()
    if (this._onYTextChange) this.yText.unobserve(this._onYTextChange)
  }
}
