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
<style scoped>
h1 {
  color: #f55;
}
</style>

# <!-- fit --> Preview Test Slide

yKicchan

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

<!-- _class: -->
<!-- header: header -->
<!-- footer: "" -->

## Marp

---

<div class="col">
<div>

## Left Contents

```ts
console.time("label");
doSomething();
console.timeEnd("label");
```

</div>
<div>

## Right Contents

1. start timer
2. do something
3. end timer

</div>
</div>

---

<!-- header: "" -->
<!-- footer: "" -->


<style scoped>
h2 {
  margin: 0;
}
</style>


## Table

| th | header item |
| --- | :--- |
| td | first item |
| td | second item |
| td | third item |

![bg w:512 right](./images/icon.png)
