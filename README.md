<h1>Next JS showcasing Client and Server side render</h1>

This repository shows the differences between client and server side rendering on web pages using the Next JS library.

The purpose of this repository is to practice and understand the differences, showing pros and cons of each rendering method.

Next JS has the ability to do client side render routing using its Link tags. Server side rendering is done through using anchor tags.
Both of which are labeled in their respective links.

To run this:

-clone the repository
-run <strong>npm install</strong>
-run <strong>npm start</strong>
-go to the directory provided in your terminal
-open your networking tag in your browser using its developer tools
-click on the links on the pages to see what server side and client side rendering produces

From this practice, it was found that:
for Server side rendering:
Pros:
- More potential for SEO
- Simple for loading less interactive sites

Cons:
- Flashing between the pages (white screen where nothing is displayed)
- Loading more content

for Client side rendering:
Pros:
- Less files to load
- Quicker on loading

Cons:
- Less potential for SEO
- Most likely requires more time to load all the JS before user sees anything
