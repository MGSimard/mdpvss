<!-- markup.heading -->

# Heading 1

<!-- markup.heading -->

## Heading 2

<!-- markup.heading -->

### Heading 3

<!-- markup.heading -->

#### Heading 4

<!-- markup.heading -->

##### Heading 5

<!-- markup.heading -->

###### Heading 6

<!-- meta.separator -->

---

<!-- markup.quote -->

> This is a blockquote.
>
> <!-- markup.quote (nested) -->
>
> > Nested blockquote.

<!-- markup.bold -->

**Bold text**

<!-- markup.italic -->

_Italic text_

<!-- markup.bold + markup.italic -->

**_Bold and italic text_**

<!-- markup.strikethrough -->

~~Strikethrough text~~

<!-- markup.underline -->

<u>Underlined text</u>

<!-- meta.separator -->

---

<!-- list items (no direct scope, but punctuation.definition.list.begin.markdown for bullets) -->

- Unordered list item 1
  - Nested unordered item
    - Deeply nested unordered item
- Unordered list item 2

<!-- list items (no direct scope, but punctuation.definition.list.begin.markdown for numbers) -->

1. Ordered list item 1
2. Ordered list item 2
   1. Nested ordered item
   2. Another nested item

<!-- meta.separator -->

---

<!-- GFM task list: punctuation.definition.list.begin.markdown for the dash, markup.ignored for the checkbox -->

- [ ] Task list item (unchecked)
- [x] Task list item (checked)

<!-- meta.separator -->

---

<!-- constant.other.reference.link, string.other.link -->

[Link to OpenAI](https://openai.com)

<!-- image: no direct scope, but often treated as a link -->

![Sample Image](https://placekitten.com/200/100)

<!-- meta.separator -->

---

<!-- markup.inline.raw -->

Inline code: `const foo = "bar";`

<!-- meta.separator -->

---

<!-- source.js, comment, string, variable, etc. -->

```js
// JavaScript code block
function greet(name) {
  // This is a comment
  const greeting = `Hello, ${name}!`;
  return greeting;
}
greet("World");
```

<!-- source.python, comment, string, variable, etc. -->

```python
# Python code block
def greet(name):
    """This is a docstring"""
    return "Hello, {name}!"
greet("World")
```

<!-- source.json, constant, string, number, etc. -->

```json
{
  "key": "value",
  "number": 123,
  "array": [1, 2, 3]
}
```

<!-- diff: markup.deleted, markup.inserted, markup.changed, comment -->

```diff
- This line was removed
+ This line was added
! This line was changed
# This is a comment
```

<!-- source.shell, comment, string, etc. -->

```bash
# Bash code block
echo "Hello, World!"
```

<!-- meta.separator -->

---

<!-- table: no direct scope, but markup.inline.raw for code, markup.bold, markup.italic -->

| Table    | Header   | Example |
| -------- | -------- | ------- |
| Cell     | Cell     | Cell    |
| **Bold** | _Italic_ | `Code`  |

<!-- meta.separator -->

---

<!-- comment -->
<!-- HTML comment -->

<!-- meta.separator -->

---

<!-- constant.other.reference.link, string.other.link -->

**Reference-style links:**

[OpenAI][1]

[1]: https://openai.com

<!-- meta.separator -->

---

<!-- markup.inline.raw -->

**Emphasis inside code:**

`*not italic*` and `**not bold**`

<!-- meta.separator -->

---

<!-- markup.inline.raw -->

**Escaped characters:** \* \_ \` \[ \] \( \) \# \+ \- \. \!

<!-- meta.separator -->

---

<!-- meta.separator -->

**Horizontal rule:**

---
