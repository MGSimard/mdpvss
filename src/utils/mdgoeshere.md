# Markdown Feature Test Document

This document is designed to test various markdown features for rendering and highlighting.

## Headers

Let's test different header levels:

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

## Paragraphs

Here is a simple paragraph.

This is another paragraph, separated by a blank line.

## Emphasis

Let's test emphasis:

_This text is italic._
_This text is also italic._

**This text is bold.**
**This text is also bold.**

**_This text is bold and italic._**
**_This text is also bold and italic._**

## Lists

### Unordered Lists

- Item 1
- Item 2
  - Nested item 2a
  - Nested item 2b
- Item 3

* Another item

- Yet another item

### Ordered Lists

1. First item
2. Second item
   1. Nested ordered item 2a
   2. Nested ordered item 2b
3. Third item

## Links

Here is an [inline link](https://www.example.com).

Here is a [link with a title](https://www.example.com "Example Website").

Here is a reference-style link:
[Reference link][ref]

[ref]: https://www.example.com/reference "Reference Title"

## Images

Here is an inline image:
![Alt text](https://via.placeholder.com/150 "Placeholder Image")

Here is a reference-style image:
![Alt text for reference image][imgref]

[imgref]: https://via.placeholder.com/150/0000FF/FFFFFF "Blue Placeholder Image"

## Blockquotes

> This is a blockquote.
> It can span multiple lines.

> This is a blockquote with multiple paragraphs.
>
> This is the second paragraph.

> Blockquotes can contain other markdown elements:
>
> - Like lists
> - Or **bold** text

## Code

Here is some `inline code`.

### Code Blocks

#### Fenced Code Blocks

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("World");
```

```python
def greet(name):
    print(f"Hello, {name}!")

greet("World")
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Test HTML</title>
  </head>
  <body>
    <h1>This is a test</h1>
  </body>
</html>
```

#### Indented Code Blocks

    This is an indented code block.
    It is typically indented with four spaces or a tab.

    ```This looks like a fenced block but is indented```

## Horizontal Rules

---

---

---

## Tables

(Note: Tables are a CommonMark extension, not part of the original Markdown spec, but widely supported)

| Header 1     | Header 2     | Header 3     |
| ------------ | ------------ | ------------ |
| Row 1, Col 1 | Row 1, Col 2 | Row 1, Col 3 |
| Row 2, Col 1 | Row 2, Col 2 | Row 2, Col 3 |
| Row 3, Col 1 | Row 3, Col 2 | Row 3, Col 3 |

Alignment:

| Left Aligned | Center Aligned | Right Aligned |
| :----------- | :------------: | ------------: |
| Content      |    Content     |       Content |
| More Content |  More Content  |  More Content |

## Task Lists

(Note: Task lists are also a CommonMark extension)

- [x] Completed task
- [ ] Incomplete task
- [ ] Another incomplete task

## Escaping Characters

Let's test escaping markdown characters:

\* An asterisk
\_ An underscore
\` A backtick
\[ A square bracket
\] A square bracket
\( A parenthesis
\) A parenthesis
\# A hash symbol
\+ A plus symbol
\- A minus symbol
\. A dot
\! An exclamation mark

## HTML

You can include raw HTML:

<p>This is a raw HTML paragraph.</p>

<br>

```html
<p>This is a raw HTML paragraph within a code block.</p>
```

## Definition Lists

(Note: Definition lists are less common and not in the original Markdown spec or CommonMark, but supported by some renderers)

Term 1
: Definition 1
: Definition 2

Term 2
: Definition for Term 2

## Footnotes

(Note: Footnotes are another extension)

Here is some text with a footnote[^1]. And another one[^2].

[^1]: This is the first footnote.
[^2]: This is the second footnote.

## Strikethrough

(Note: Strikethrough is a CommonMark extension)

~~This text should be struck through.~~

## Keyboard Keys

(Note: This is often a renderer-specific feature)

Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.

## Highlight

(Note: This is a renderer-specific feature)

==This text should be highlighted.==

## Superscript and Subscript

(Note: These are often renderer-specific features)

Superscript: X^2^
Subscript: H~2~O

## Abbreviations

(Note: This is a renderer-specific feature)

_[HTML]: HyperText Markup Language
_[CSS]: Cascading Style Sheets

The HTML is for structure, and the CSS is for styling.

---

This concludes the markdown feature test document.
