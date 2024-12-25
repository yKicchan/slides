---
marp: true
theme: theme
class: invert
paginate: true
image: https://ykicchan.github.io/slides/preview/index.png
title: Preview test slide
description: Preview test of slides created with Marp.
keywords: Marp
---

# <!-- fit --> Preview Test Slide{.red}

@yKicchan

<!-- _paginate: false -->

---

<!-- _class: -->

## Markdown

---

# Header 1
## Header 2
### Header 3
#### Header 4

---

## List item

- Unordered List
- Unordered List
- Unordered List

1. Oredered List
2. Oredered List
3. Oredered List

---

## Nested List

- Parent List
  - Children
  - Children
- Parent List
  - Children
  - Children

---

## Table

| header | header | header | header |
| --- | --- | --- | --- |
| body | body | body | body |
| body | body | body | body |
| body | body | body | body |

---

## Quote

> Block quote
> Block quote

---

## Link

https://example.com

[link](https://example.com)

---

## Font

**bold**
*italic*
~~mistaken~~
`inline code`

---

## Code Block

```ts
const example = "string";
type Props = { key: string; value: number; };
const prop: Props = { key: "k", value: 123 };

function doSomething() {
  console.log(example);
}
```

---

## Image

![w:64](./images/icon.png)
![w:128](./images/icon.png)
![w:256](./images/icon.png)

---

## Table & Image

| th | header item |
| --- | :--- |
| td | first item |
| td | second item |
| td | third item |

![bg w:512 right](./images/icon.png)

---

<!-- _class: -->
<!-- header: header -->
<!-- footer: footer -->

## Custom

---

:::h

## Left Contents

```js{data-file="test.js"}
console.time("label");
doSomething();
console.timeEnd("label");
```

:::
:::h

## Right Contents

1. start timer
2. do something
3. end timer

:::

---

<!-- header: "" -->
<!-- footer: "" -->

## Secondary text

this is note content.{.gray .text-sm}

:::_ {.gray .text-sm}

this is note content.
this is note content.
this is note content.

:::

---

## Alert

::::h {.text-sm}

:::_ {.note}
This is note text
This is note text
:::

:::_ {.important}
This is important text
This is important text
:::

::::
::::h {.text-sm}

This is tip text{.tip}

This is warning text{.warning}

This is caution text{.caution}

::::
