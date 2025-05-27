<!-- comment, punctuation.definition.comment, string.comment, constant, entity.name.constant, variable.other.constant, variable.other.enummember, variable.language, entity, entity.name, variable.parameter.function, keyword, storage, storage.type, storage.modifier.package, storage.modifier.import, storage.type.java, string, punctuation.definition.string, string punctuation.section.embedded source, support, variable, variable.other, invalid.broken, invalid.deprecated, invalid.illegal, invalid.unimplemented, message.error, string variable, source.regexp, string.regexp, string.regexp.character-class, string.regexp constant.character.escape, string.regexp source.ruby.embedded, string.regexp string.regexp.arbitrary-repitition, support.constant, support.variable, meta.module-reference -->

<!-- JavaScript (js) -->

```js
// comment, punctuation.definition.comment, string.comment
// This is a comment

// constant, entity.name.constant, variable.other.constant, variable.other.enummember, variable.language
const PI = 3.14;

// entity, entity.name
class MyClass {}

// variable.parameter.function
function greet(name) {
  return name;
}

// keyword
if (true) {
}

// storage, storage.type
let x;

// storage.modifier.package, storage.modifier.import, storage.type.java
import something from "module";
import * as mod from "mod";

// string, punctuation.definition.string, string punctuation.section.embedded source
("This is a string");

// support
console.log("support");

// variable
let variable = 1;

// variable.other
let otherVariable = 2;

// invalid.broken
// @ts-expect-error
broken();

// invalid.deprecated
// @deprecated
function oldFunc() {}

// invalid.illegal
// This is not valid JS, but for scope preview:
// #illegal

// invalid.unimplemented
throw new Error("Unimplemented");

// message.error
throw new Error("error");

// string variable
let str = variable;

// source.regexp, string.regexp
/foo/ /
  // string.regexp.character-class, string.regexp constant.character.escape, string.regexp source.ruby.embedded, string.regexp string.regexp.arbitrary-repitition
  [a - z] /
  // string.regexp constant.character.escape
  /\n/;

// support.constant
const MAX = 100;

// support.variable
let supportVar = 1;

let message = "Hello, World!";
function greet(name) {
  return `Hello, ${name}!`;
}
if (message) {
  console.log(message);
}
```

<!-- TypeScript (ts) -->

```ts
// TypeScript Example
interface User {
  id: number;
  name: string;
}
const user: User = { id: 1, name: "Alice" };
function getUser(id: number): User | undefined {
  return id === user.id ? user : undefined;
}
```

<!-- Python (python) -->

```python
# Comment
def greet(name):
    """Docstring"""
    greeting = f"Hello, {name}!"
    print(greeting)
    return greeting
if __name__ == "__main__":
    greet("World")
```

<!-- JSON (json) -->

```json
{
  "propertyName": "value",
  "number": 123,
  "array": [1, 2, 3],
  "boolean": true
}
```

<!-- Bash (bash, sh) -->

```bash
# Bash Example
echo "Hello, World!"
NAME="Alice"
if [ "$NAME" = "Alice" ]; then
  echo "Hi, $NAME!"
fi
```

<!-- HTML (html) -->

```html
<!-- HTML Example -->
<!DOCTYPE html>
<html>
  <head>
    <title>Test</title>
  </head>
  <body>
    <h1>Hello, <span>World!</span></h1>
  </body>
</html>
```

<!-- CSS (css) -->

```css
/* CSS Example */
body {
  background: #222;
  color: #eee;
  font-family: "JetBrains Mono", monospace;
}
h1 {
  color: cyan;
  font-weight: bold;
}
```

<!-- Diff (diff) -->

```diff
- deleted        // markup.deleted, meta.diff.header.from-file, punctuation.definition.deleted
+ inserted       // markup.inserted, meta.diff.header.to-file, punctuation.definition.inserted
! changed        // markup.changed, punctuation.definition.changed
@@ range @@      // meta.diff.range
--- header       // meta.diff.header
```

<!-- meta.property-name -->

```json
// meta.property-name
{ "propertyName": "value" }
```

<!-- carriage-return -->

```
^M
```

<!-- punctuation.definition.list.begin.markdown -->

- List item

<!-- markup.heading, markup.heading entity.name -->

# Heading

<!-- markup.quote -->

> Quote

<!-- markup.italic -->

_italic_

<!-- markup.bold -->

**bold**

<!-- markup.underline -->

<u>underline</u>

<!-- markup.strikethrough -->

~~strikethrough~~

<!-- markup.inline.raw -->

`inline code`

<!-- markup.ignored, markup.untracked -->

- [ ] task (unchecked)
- [x] task (checked)

<!-- markup.deleted, meta.diff.header.from-file, punctuation.definition.deleted, markup.inserted, meta.diff.header.to-file, punctuation.definition.inserted, markup.changed, punctuation.definition.changed, meta.diff.range, meta.diff.header -->

```diff
- deleted        // markup.deleted, meta.diff.header.from-file, punctuation.definition.deleted
+ inserted       // markup.inserted, meta.diff.header.to-file, punctuation.definition.inserted
! changed        // markup.changed, punctuation.definition.changed
@@ range @@      // meta.diff.range
--- header       // meta.diff.header
```

## <!-- meta.separator -->

<!-- meta.output -->

```
output
```

<!-- constant.other.reference.link, string.other.link -->

[OpenAI](https://openai.com)

<!-- markup.fenced_code.block.markdown, markup.raw.block.markdown -->

```
code block
```

<!-- punctuation.definition.fenced.markdown -->

```
fenced code block
```

<!-- entity.name.tag -->

```html
<div>
  <span>Entity Name Tag</span>
  <custom-element>Custom Tag</custom-element>
  <MyComponent />
</div>
```

<!-- storage.modifier.package, storage.modifier.import, storage.type.java -->

```java
package com.example; // storage.modifier.package
import java.util.List; // storage.modifier.import

public class Test {
    private int number; // storage.type.java for 'int'
    private String text; // storage.type.java for 'String'
}
```
