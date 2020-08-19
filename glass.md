# Frosted Glass

This is a styleguide for what I call "Frosted Glass," a way of looking at web design that focuses on the metaphor of glass and light. I've used this style in some of my web projects.

## Inspiration

There are many different sources of inspiration one can use when determining a metaphor for web design. Google's Material Design, for instance, uses the metaphor of "material," a solid, opaque, sheetlike, stretchable substance that is similar to paper. It has height, casts shadows, does not pass through other sheets of "material," and so on. The natural world is full of inspirations for design.

I like the metaphor of glass because it works so well as an interface to the real world. If you were base a design scheme on the properties of leather or cloth, for example, the metaphor breaks down very quickly. You may be able to render a beautiful cloth-based UI in your design environment, but the user isn't going to view it in isolation. They are going to view it in a window, or in a browser, or on a tablet, or on a screen. And that's where glass shines -- glass is a material that "extends well" into the real world (at least that's how I think about it). Glass looks fitting when you view it on your monitor or your phone screen. It doesn't require a suspension of disbelief.

## Principles of Frosted Glass

- Layers should be translucent where possible, around 80% or 85% opacity.

- Corners should be squared but slightly rounded, with a radius of around 3px. Buttons too.

- Panes of glass should not stretch or deform. Translation is ok.

- Elements placed on the corners of glass panes should not touch the edge, but have an even spacing from both edges. I like the idea of a rivet in the corner of a glass pane.

- Glass panes should NOT(!) have a darkening gradient to simulate real light, even though glass panes have that effect in real life. (The bottom of a pane of glass in real life looks "bluer" than the top.) Think of these panes as "magical glass" instead of real-life glass. Since the user is viewing your panes of glass in an OS environment, which does not have a defined light direction, adding a shadow gradient adds a layer of disbelief, which we want to avoid. The user should be able to view your UI as a seamless part of their world.

- Images and text on a pane of glass have no width, depth, or transparency. Think of it like a screen printing onto a surface.

- Elements on glass panes behind other glass panes should be blurred. A filter property of 8px should be good.

- Opacity of double sheets of glass is complicated. You can set the "behind" pane to 40% opacity and the "in front" pane to 70% to replicate the approximate transparency of a single pane, while bringing focus to the front panel.

- Fonts should be selected carefully. Select fonts that you might see in real life in an elegant or modern setting. Buenard is good for human-facing text (elegant), Abel is good for UI text (modern). Calligraphic fonts like The Great Wall can be great for hero text.

- Hover brighten effects can be achieved with filter: brightness(1.07);

- Lights and darks should be pure #000 and #fff. In dark mode, the light text can be #dedede to reduce harshness, and to allow room for brightening on hover.

- To change SVGs from black to #dedede --> filter: invert(98%) sepia(1%) saturate(2689%) hue-rotate(146deg) brightness(118%) contrast(74%);