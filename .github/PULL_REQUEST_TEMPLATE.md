## About You

**Your Name:**
Ryan Piotrowski
**Program & Year:**
MSE 2T9
**Time Spent:**
+5hr
---

## Your Submission

**What I Built:**
<!-- Brief description of the page you created -->
A gray background with A Frosh Week scheduele headline, as well as a dynamic table that displays
event titles with on hover descriptions and clickable links for events with links. Each event has its time displayed am/pm and is in its own color. I also added a uoft logo image to the top right and suttle outlines for the headline and image.

**Challenges I Faced:**
<!-- What was tricky? What took longer than expected? -->
Changing the color of text is suprisingly inconsistent, it worked best to create a class in cs then apply it in js. Changing the times to be consistent was tricky but I managed to do it by triming the a1/p1 first, then determining what the time was using the 24hr time. I comprimised on the links in the descriptions, ideally I would make each box clickable to expand the description if I had more time. However making the events clickable does make the webpage concise.

**What I'm Most Proud Of:**
<!-- Your highlight — a feature, a design choice, a problem you solved -->
The final product is very concise, it is not too overwhelming to look at and if you want more information on something you can hover over it or click its link.
---

## 🤖 AI Usage Declaration

Please check one:

- [Y] I used AI tools (ChatGPT, Claude, Copilot, etc.)
- [N] I did not use AI tools

*If you checked yes, please fill in the fields below. If no, feel free to skip.*

**Tools Used:**
<!-- e.g. ChatGPT 4o, GitHub Copilot, Claude Sonnet -->
ChatGPT 4
**How I Used Them:**
<!-- e.g. "Generated the initial CSS layout, helped debug a React state issue, explained how useEffect works" -->
Generated the initial dynamic table and CSS classes. Assisted with converting to 24hr time and changing the color of linkable events. Helped with image and text formatting.
**What I Reviewed / Changed After:**
<!-- e.g. "Rewrote the filter logic myself after the AI version didn't handle edge cases, adjusted all colours to match the brand" -->
I adjusted the 24hr -> 12hr code to work properly, initially it displayed times like 13am. I adjusted the sizes to fit nicely/dynamically on the page, and I modified how the colors/links looked on the page.
**Reflection:**
<!-- What did you learn from the parts you built yourself vs. the parts AI helped with? A few honest sentences is all we're looking for. -->
I learned that you cannot directly treat js code as HTML, as some references are not the same on my own. I also learned from ChatGPT that you can utilize transform: translateX(-50%) in CSS for text to centre it if you have the left and top set correctly. I learned from ChatGPT that a dynamic table utilizing json data can be made easier by incorporating CSS classes.
