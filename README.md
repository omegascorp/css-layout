# Ghost layout

Responsive classes for flexbox layout, grid and spaces.

## Layout


```
.layout-h - sets horizontal layout
.layout-v - sets vertical layout
.layout-h-reverse - sets reverse order horizontal layout
.layout-v-reverse - sets reverse order vertical layout
```

## Hide

```
.hide - hides an element
```

## Flex (# - is number from 1 to 12)

```
.grow-# - sets flex grow to the element
.shrink-# - sets flex shrink to the element
.order-# - sets the order of element
.grid-# - creates grid column, grid 1 lenght will be 1/12 of the screen
.grow = .grow-1
.shrink = .shrink-1
```

## Alignment in cross axis

```
.start - flex start
.cetner - cetnter
.end - flex end
.stretch - stretch
```

## Alignment in main axis

```
.justify-start - flex-start
.justify-center - center
.justify-end - flex-end
.justify-around - space-around
.justify - space-between
```

## Alignment in both axis
 
```
.-center-center = .center and .justify-center
```

## Scrolling

```
.scroll - sets overflow to auto
.no-scroll - sets overflow to hidden
```

## Padding

Default set of space sizes:
80px, 72px, 64px, 56px, 48px, 40px, 32px, 24px, 16px, 8px, 4px, 2px

```
.padding-{size} - sets padding around element
.padding-h-{size} - sets horizontal padding
.padding-v-{size} - sets vertical padding
.padding-t-{size} - sets padding top
.padding-b-{size} - sets padding bottom
.padding-l-{size} - sets padding left
.padding-r-{size} - sets padding right
```

## Margins

```
.margin-{size} - sets margin around element
.margin-h-{size} - sets horizontal margin
.margin-v-{size} - sets vertical margin
.margin-t-{size} - sets margin top
.margin-b-{size} - sets margin bottom
.margin-l-{size} - sets margin left
.margin-r-{size} - sets margin right
```

## Spaces

```
.space-h-{size} - adds horizontal space between elements
.space-v-{size} - adds vertical space between elements
```

## Responsive modifiers

Each class can be used with display size modifier.
There is two types of modifiers lte (less then or equal) and gt (greater than).
And here is the list of screen sizes:

```
xxs = 480px;
xs = 768px;
s = 1024px;
m = 1280px;
l = 1440px;
xl = 1920px;
xxl = 2560px;
```

Example:

```
class="layout-v-xxs-lte layout-h-xxs-gt"  
```

This means for the screen size <= 480px layout will vertical, for screen size > 480px layout will be horizontal