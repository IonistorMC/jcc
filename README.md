# Minecraft's JSON Chat Component 

```ts
import { jcc } from '@ionistor/jcc'

jcc.green.bold.text('Hello World!').toString() // §l§aHello World!

jcc.toJSON() // {"text":"Hello World!","color":"green","bold":true}
jcc.toHTML() // <span style="color:green;font-weight:bold">Hello World!</span>
jcc.toANSI() // "\u001b[32m\u001b[1mHello World!\u001b[0m"

jcc.reset // reset global JSONChatComponent instance

import { JSONChatComponent } from '@ionistor/jcc'

const jsonChatComponent = new JSONChatComponent() // Local instance
```

## Parse
```ts
import { JSONChatComponent } from '@ionistor/jcc'

const jcc = JSONChatComponent.parse('{"text":"Hello World!","color":"green","bold":true}')

jcc.getColor() // green
jcc.getText() // Hello World
jcc.isBold // true
jcc.hasExtra() // false
```