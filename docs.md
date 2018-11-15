# docs

> see [readme](https://github.com/harryparkdotio/mediq#readme)

## contents

#### types

-   [all](#all)
-   [print](#print)
-   [screen](#screen)
-   [speech](#speech)

#### operators

-   [and](#and)
-   [not](#not)
-   [only](#only)
-   [or](#or)

#### prefixes

-   [min-](#min-)
-   [max-](#max-)

#### features

-   [width](#width)
-   [height](#height)
-   [aspect-ratio](#aspect-ratio)
-   [orientation](#orientation)
-   [resolution](#resolution)
-   [scan](#scan)
-   [grid](#grid)
-   [update](#update)
-   [overflow-block](#overflow-block)
-   [overflow-inline](#overflow-inline)
-   [color](#color)
-   [color-gamut](#color-gamut)
-   [color-index](#color-index)
-   [display-mode](#display-mode)
-   [monochrome](#monochrome)
-   [inverted-colors](#inverted-colors)
-   [pointer](#pointer)
-   [any-pointer](#any-pointer)
-   [hover](#hover)
-   [any-hover](#any-hover)
-   [light-level](#light-level)
-   [prefers-reduced-motion](#prefers-reduced-motion)
-   [scripting](#scripting)

# reference

## notes

**using the generated query**

> `mediq()` returns a `Mediq` instance, **not** a string \
> but `.toString()`, `.valueOf()`, `.toJSON()`, and `.length` are available, \
> and are used to **_emulate_** a string.
>
> If in doubt,
>
> ```ts
> mediq().toString();
> ```

## styled-components

> _requires styled-components v3+, tested with v4_

_imports_

```ts
import mediq from 'mediq/styled';
import { mediq } from 'mediq/styled';
import { styledMediq } from 'mediq/styled';
import { styledMediq } from 'mediq';
```

```ts
import mediq from 'mediq/styled';

mediq().screen.and.min.width(300).px.css`
	color: #000;
`;
```

## types

### all

```ts
mediq().all; // @media all
```

```ts
mediq().all.and.resolution(600).dpi; // @media all and (resolution: 600dpi)
```

### print

```ts
mediq().print; // @media print
```

```ts
mediq().print.and.resolution(600).dpi; // @media print and (resolution: 600dpi)
```

### screen

```ts
mediq().screen; // @media screen
```

```ts
mediq().screen.and.max.width(600).px; // @media screen and (max-width: 600px)
```

### speech

```ts
mediq().speech; // @media speech
```

```ts
mediq().speech.and.max.width(600).px; // @media speech and (max-width: 600px)
```

## operators

### and

```ts
mediq().and; // @media and
```

```ts
mediq()
	.max.height(50)
	.vh.and.min.width(100).px; // @media (min-height: 50vh) and (min-width: 100px)
```

### not

```ts
mediq().not; // @media not
```

```ts
mediq().not.all.and.max.height(50).vh; // @media not all and (min-height: 50vh)
```

### only

```ts
mediq().only; // @media only
```

### or / `,`

```ts
mediq().or; // @media,
```

```ts
mediq()
	.max.height(50)
	.vh.or.min.width(100).px; // @media (min-height: 50vh), (min-width: 100px)
```

## prefixes

### min-

```ts
mediq().min; // @media (min-)
```

```ts
mediq().max.height(50).vh; // @media (min-height: 50vh)
```

### max-

```ts
mediq().max; // @media (max-)
```

```ts
mediq().max.width(30).em; // @media (max-width: 30em)
```

## features

### width

`width(size).unit`

```ts
mediq().width(300).px; // @media (width: 300px)
```

#### units

-   `em`
-   `rem`
-   `vh`
-   `vw`
-   `px`
-   `cm`
-   `mm`
-   `in`
-   `pc`
-   `pt`

### height

`height(size).unit`

```ts
mediq().height(20).rem; // @media (height: 20rem)
```

#### units

-   `em`
-   `rem`
-   `vh`
-   `vw`
-   `px`
-   `cm`
-   `mm`
-   `in`
-   `pc`
-   `pt`

### aspect-ratio

`aspectRatio(ratio)` \
`aspectRatio(numerator, denominator)`

```ts
mediq().aspectRatio('16/9'); // @media (aspect-ratio: 16/9)
```

```ts
mediq().aspectRatio(16, 9); // @media (aspect-ratio: 16/9)
```

### orientation

```ts
mediq().orientation.landscape; // @media (orientation: landscape)
```

```ts
mediq().orientation.portrait; // @media (orientation: portrait)
```

### resolution

`resolution(res).units`

```ts
mediq().resolution(600).dpi; // @media (resolution: 600dpi)
```

```ts
mediq().resolution(60).dpcm; // @media (resolution: 60dpcm)
```

```ts
mediq().resolution(60).dppx; // @media (resolution: 60dppx)
```

```ts
mediq().resolution(60).x; // @media (resolution: 60x)
```

### scan

```ts
mediq().scan.interlace; // @media (scan: interlace)
```

```ts
mediq().scan.progressive; // @media (scan: progressive)
```

### grid

`grid(0 | 1)`

```ts
mediq().grid(0); // @media (grid: 0)
```

```ts
mediq().grid(1); // @media (grid: 1)
```

### update

```ts
mediq().update.none; // @media (update: none)
```

```ts
mediq().update.slow; // @media (update: slow)
```

```ts
mediq().update.fast; // @media (update: fast)
```

### overflow-block

```ts
mediq().overflowBlock.none; // @media (overflow-block: none)
```

```ts
mediq().overflowBlock.scroll; // @media (overflow-block: scroll)
```

```ts
mediq().overflowBlock.optionalPaged; // @media (overflow-block: optional-paged)
```

```ts
mediq().overflowBlock.paged; // @media (overflow-block: paged)
```

### overflow-inline

```ts
mediq().overflowInline.none; // @media (overflow-inline: none)
```

```ts
mediq().overflowInline.scroll; // @media (overflow-inline: scroll)
```

### color

`color(bits)`

```ts
mediq().color(8); // @media (color: 8)
```

### color-gamut

```ts
mediq().colorGamut.srgb; // @media (color-gamut: srgb)
```

```ts
mediq().colorGamut.p3; // @media (color-gamut: p3)
```

```ts
mediq().colorGamut.rec2020; // @media (color-gamut: rec2020)
```

### color-index

`colorIndex(index)`

```ts
mediq().colorIndex(1); // @media (color-index: 1)
```

### display-mode

```ts
mediq().displayMode.fullscreen; // @media (display-mode: fullscreen)
```

```ts
mediq().displayMode.standalone; // @media (display-mode: standalone)
```

```ts
mediq().displayMode.minimalUi; // @media (display-mode: minimal-ui)
```

```ts
mediq().displayMode.browser; // @media (display-mode: browser)
```

### monochrome

`monochrome(0 | 1)`

```ts
mediq().monochrome(0); // @media (monochrome: 0)
```

```ts
mediq().monochrome(1); // @media (monochrome: 1)
```

### inverted-colors

```ts
mediq().invertedColors.none; // @media (inverted-colors: none)
```

```ts
mediq().invertedColors.inverted; // @media (inverted-colors: inverted)
```

### pointer

```ts
mediq().pointer.none; // @media (pointer: none)
```

```ts
mediq().pointer.coarse; // @media (pointer: coarse)
```

```ts
mediq().pointer.fine; // @media (pointer: fine)
```

### any-pointer

```ts
mediq().anyPointer.none; // @media (any-pointer: none)
```

```ts
mediq().anyPointer.coarse; // @media (any-pointer: coarse)
```

```ts
mediq().anyPointer.fine; // @media (any-pointer: fine)
```

### hover

```ts
mediq().hover.none; // @media (any-hover: none)
```

```ts
mediq().hover.hover; // @media (any-hover: hover)
```

### any-hover

```ts
mediq().anyHover.none; // @media (any-hover: none)
```

```ts
mediq().anyHover.hover; // @media (any-hover: hover)
```

### light-level

```ts
mediq().lightLevel.dim; // @media (light-level: dim)
```

```ts
mediq().lightLevel.normal; // @media (light-level: normal)
```

```ts
mediq().lightLevel.washed; // @media (light-level: washed)
```

### prefers-reduced-motion

```ts
mediq().prefersReducedMotion.noPreference; // @media (prefers-reduced-motion: no-preference)
```

```ts
mediq().prefersReducedMotion.reduced; // @media (prefers-reduced-motion: reduced)
```

### scripting

```ts
mediq().scripting.none; // @media (scripting: none)
```

```ts
mediq().scripting.initialOnly; // @media (scripting: initial-only)
```

```ts
mediq().scripting.enabled; // @media (scripting: enabled)
```
