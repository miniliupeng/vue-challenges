import type { App, Directive } from 'vue'
import { vFocus } from './vFocus'
import { vDebounceClick } from './vDebounceClick'
import { vActiveStyle } from './vActiveStyle'
import { vOhModel } from './vModel'

const directivesList: { [key: string]: Directive } = {
  focus: vFocus,
  'debounce-click': vDebounceClick,
  'active-style': vActiveStyle,
  'oh-model': vOhModel
}

const directives = {
  install: function (app: App<Element>) {
    Object.keys(directivesList).forEach((key) => {
      app.directive(key, directivesList[key])
    })
  }
}

export default directives
