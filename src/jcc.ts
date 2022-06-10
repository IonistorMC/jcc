import chalk from 'chalk'

export class JSONChatComponent {
  #text?: string
  #bold?: boolean
  #italic?: boolean
  #underlined?: boolean
  #strikethrough?: boolean
  #obfuscated?: boolean
  #color?: string
  #insertion?: string
  #clickEvent?: {
    open_url?: string
    run_command?: string
    suggest_command?: string
    change_page?: number
    copy_to_clipboard?: string
  }
  #hoverEvent?: {
    show_text?: string
    show_item?: string
    show_entity?: string
  }
  #font?: 'minecraft:uniform' | 'minecraft:alt' | 'minecraft:default'
  #extra?: JSONChatComponent[]

  get black(): this {
    this.#color = 'black'
    return this
  }

  get darkBlue(): this {
    this.#color = 'dark_blue'
    return this
  }

  get darkGreen(): this {
    this.#color = 'dark_green'
    return this
  }

  get darkAqua(): this {
    this.#color = 'dark_aqua'
    return this
  }

  get darkRed(): this {
    this.#color = 'dark_red'
    return this
  }

  get darkPurple(): this {
    this.#color = 'dark_purple'
    return this
  }

  get gold(): this {
    this.#color = 'gold'
    return this
  }

  get gray(): this {
    this.#color = 'gray'
    return this
  }

  get darkGray(): this {
    this.#color = 'dark_gray'
    return this
  }

  get blue(): this {
    this.#color = 'blue'
    return this
  }

  get green(): this {
    this.#color = 'green'
    return this
  }

  get aqua(): this {
    this.#color = 'aqua'
    return this
  }

  get red(): this {
    this.#color = 'red'
    return this
  }

  get purple(): this {
    this.#color = 'purple'
    return this
  }

  get yellow(): this {
    this.#color = 'yellow'
    return this
  }

  get white(): this {
    this.#color = 'white'
    return this
  }

  get obfuscated(): this {
    this.#obfuscated = true
    return this
  }

  get bold(): this {
    this.#bold = true
    return this
  }

  get italic(): this {
    this.#italic = true
    return this
  }

  get underlined(): this {
    this.#underlined = true
    return this
  }

  get strikethrough(): this {
    this.#strikethrough = true
    return this
  }

  text(text: string): this {
    this.#text = text
    return this
  }

  color(hex: string): this {
    this.#color = hex
    return this
  }

  insertion(text: string): this {
    this.#insertion = text
    return this
  }

  openUrl(url: string): this {
    this.#clickEvent = { open_url: url }
    return this
  }

  runCommand(command: string): this {
    this.#clickEvent = { run_command: command }
    return this
  }

  suggestCommand(command: string): this {
    this.#clickEvent = { suggest_command: command }
    return this
  }

  changePage(page: number): this {
    this.#clickEvent = { change_page: page }
    return this
  }

  copyToClipboard(text: string): this {
    this.#clickEvent = { copy_to_clipboard: text }
    return this
  }

  showText(text: string): this {
    this.#hoverEvent = { show_text: text }
    return this
  }

  showItem(item: string): this {
    this.#hoverEvent = { show_item: item }
    return this
  }

  showEntity(entity: string): this {
    this.#hoverEvent = { show_entity: entity }
    return this
  }

  font(font: 'minecraft:uniform' | 'minecraft:alt' | 'minecraft:default'): this {
    this.#font = font
    return this
  }

  append(...components: JSONChatComponent[]): this {
    this.#extra = this.#extra || []
    this.#extra.push(...components)
    return this
  }

  toJSON(): string {
    const json = {
      text: this.#text,
      bold: this.#bold,
      italic: this.#italic,
      underlined: this.#underlined,
      strikethrough: this.#strikethrough,
      obfuscated: this.#obfuscated,
      color: this.#color,
      insertion: this.#insertion,
      clickEvent: this.#clickEvent,
      hoverEvent: this.#hoverEvent,
      font: this.#font,
      extra: this.#extra,
    }
    return JSON.stringify(json)
  }

  static parse(json: string): JSONChatComponent {
    const jsonChatComponent = JSON.parse(json)
    const component = new JSONChatComponent()
    component.#text = jsonChatComponent.text
    component.#bold = jsonChatComponent.bold
    component.#italic = jsonChatComponent.italic
    component.#underlined = jsonChatComponent.underlined
    component.#strikethrough = jsonChatComponent.strikethrough
    component.#obfuscated = jsonChatComponent.obfuscated
    component.#color = jsonChatComponent.color
    component.#insertion = jsonChatComponent.insertion
    component.#clickEvent = jsonChatComponent.clickEvent
    component.#hoverEvent = jsonChatComponent.hoverEvent
    component.#font = jsonChatComponent.font
    component.#extra = jsonChatComponent.extra
    return component
  }

  toString(char = '§'): string {
    const modifiers = []
    if (this.#bold) modifiers.push('l')
    if (this.#italic) modifiers.push('o')
    if (this.#underlined) modifiers.push('n')
    if (this.#strikethrough) modifiers.push('m')
    if (this.#obfuscated) modifiers.push('k')
    if (this.#color === 'black') modifiers.push('0')
    else if (this.#color === 'dark_blue') modifiers.push('1')
    else if (this.#color === 'dark_green') modifiers.push('2')
    else if (this.#color === 'dark_aqua') modifiers.push('3')
    else if (this.#color === 'dark_red') modifiers.push('4')
    else if (this.#color === 'dark_purple') modifiers.push('5')
    else if (this.#color === 'gold') modifiers.push('6')
    else if (this.#color === 'gray') modifiers.push('7')
    else if (this.#color === 'dark_gray') modifiers.push('8')
    else if (this.#color === 'blue') modifiers.push('9')
    else if (this.#color === 'green') modifiers.push('a')
    else if (this.#color === 'aqua') modifiers.push('b')
    else if (this.#color === 'red') modifiers.push('c')
    else if (this.#color === 'purple') modifiers.push('d')
    else if (this.#color === 'yellow') modifiers.push('e')
    else if (this.#color === 'white') modifiers.push('f')
    else if (this.#color) modifiers.push(`${char}x${char}` + this.#color.slice(1).toLowerCase().split('').join(char))
    return `${modifiers.map(v => char + v).join('')}${this.#text ?? ''}${this.#extra ? this.#extra.map(c => c.toString(char)) : ''}`
  }

  toANSI(): string {
    let chalkmod = chalk.reset
    if (this.#bold) chalkmod = chalkmod.bold
    if (this.#italic) chalkmod = chalkmod.italic
    if (this.#underlined) chalkmod = chalkmod.underline
    if (this.#strikethrough) chalkmod = chalkmod.strikethrough
    if (this.#obfuscated) chalkmod = chalkmod.dim
    if (this.#color === 'black') chalkmod = chalkmod.black
    else if (this.#color === 'dark_blue') chalkmod = chalkmod.blue
    else if (this.#color === 'dark_green') chalkmod = chalkmod.green
    else if (this.#color === 'dark_aqua') chalkmod = chalkmod.cyan
    else if (this.#color === 'dark_red') chalkmod = chalkmod.red
    else if (this.#color === 'dark_purple') chalkmod = chalkmod.magenta
    else if (this.#color === 'gold') chalkmod = chalkmod.yellow
    else if (this.#color === 'gray') chalkmod = chalkmod.gray
    else if (this.#color === 'dark_gray') chalkmod = chalkmod.grey
    else if (this.#color === 'blue') chalkmod = chalkmod.blueBright
    else if (this.#color === 'green') chalkmod = chalkmod.greenBright
    else if (this.#color === 'aqua') chalkmod = chalkmod.cyanBright
    else if (this.#color === 'red') chalkmod = chalkmod.redBright
    else if (this.#color === 'purple') chalkmod = chalkmod.magentaBright
    else if (this.#color === 'yellow') chalkmod = chalkmod.yellowBright
    else if (this.#color === 'white') chalkmod = chalkmod.white
    else if (this.#color) chalkmod = chalkmod.hex(this.#color)
    return `${chalkmod(this.#text ?? '')}${this.#extra ? this.#extra.map(c => c.toANSI()) : ''}`
  }

  toHTML(): string {
    let htmlmod = '<span style="'
    if (this.#bold) htmlmod += 'font-weight="bold";'
    if (this.#italic) htmlmod += 'font-style="italic";'
    if (this.#underlined) htmlmod += 'text-decoration="underline";'
    if (this.#strikethrough) htmlmod += 'text-decoration="line-through";'
    if (this.#obfuscated) htmlmod += 'filter: blur(10px);'
    if (this.#color === 'black') htmlmod += 'color: #000;'
    else if (this.#color === 'dark_blue') htmlmod += 'color: #0000AA;'
    else if (this.#color === 'dark_green') htmlmod += 'color: #00AA00;'
    else if (this.#color === 'dark_aqua') htmlmod += 'color: #00AAAA;'
    else if (this.#color === 'dark_red') htmlmod += 'color: #AA0000;'
    else if (this.#color === 'dark_purple') htmlmod += 'color: #AA00AA;'
    else if (this.#color === 'gold') htmlmod += 'color: #FFAA00;'
    else if (this.#color === 'gray') htmlmod += 'color: #AAAAAA;'
    else if (this.#color === 'dark_gray') htmlmod += 'color: #555555;'
    else if (this.#color === 'blue') htmlmod += 'color: #5555FF;'
    else if (this.#color === 'green') htmlmod += 'color: #55FF55;'
    else if (this.#color === 'aqua') htmlmod += 'color: #55FFFF;'
    else if (this.#color === 'red') htmlmod += 'color: #FF5555;'
    else if (this.#color === 'purple') htmlmod += 'color: #FF55FF;'
    else if (this.#color === 'yellow') htmlmod += 'color: #FFFF55;'
    else if (this.#color === 'white') htmlmod += 'color: #FFFFFF;'
    else if (this.#color) htmlmod += `color: ${this.#color};`
    htmlmod += '">'
    return `${htmlmod}${this.#text ?? ''}</span>${this.#extra ? this.#extra.map(c => c.toHTML()) : ''}`
  }

  get reset(): this {
    this.#color = 'white'
    this.#bold = false
    this.#italic = false
    this.#underlined = false
    this.#strikethrough = false
    this.#obfuscated = false
    this.#clickEvent = undefined
    this.#hoverEvent = undefined
    this.#extra = undefined
    this.#insertion = undefined
    return this
  }
}

export const jcc = new JSONChatComponent()
