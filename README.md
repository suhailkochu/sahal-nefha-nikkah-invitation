# S&N Nikkah Invitation

Build a luxury, mobile-first interactive electronic wedding invitation web app for the Nikkah of Sahal and Nefha, based on the attached project brief and stationery reference image.

### Visual Style & Color Palette (from reference photo)
- Envelope: Muted sage / olive green with authentic paper texture and subtle 3D depth.
- Card & Pages: Warm ecru / antique ivory deckle-edge handmade paper texture.
- Accents & Wax Seal: Antique bronze / burnished gold with a 3D embossed wax seal stamped with "S & N".
- Typography Ink: Warm deep espresso / charcoal.
- Aesthetics: High luxury, bespoke stationery feel with subtle Arabic architectural arch cues and warm romance—never generic or AI-like.
- Font styling: Romantic, elegant Latin serif with subtle Arabic typographic flair and swashes for the couple's names, paired with authentic Arabic calligraphy for the Bismillah and clean, refined typography for logistics.

### 3-Stage Mobile Flow

1. Interactive Envelope Opening:
- Centered textured sage green envelope with blind-embossed vintage crest and "S & N" monogram.
- Fastened by an antique bronze wax seal stamped "S & N".
- Text on envelope: "AN INVITATION TO CHERISH", "A promise. A lifetime.", "S & N".
- Action prompt: "TOUCH THE SEAL TO BEGIN" / "Open invitation".
- Interaction: Tapping the seal animates the seal cracking/lifting, top flap folding open, and the invitation card sliding smoothly up and unfolding into Page 2.

2. Couple Announcement & Blessing:
- Arabic calligraphy at the top: بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
- Heading: "A DAY OF NIKKAH AND BARAKAH"
- Label: "THE NIKKAH OF"
- Couple Names: "Sahal & Nefha" (Sahal must always precede Nefha).
- Subtle family line: "AK Family and MP Family"
- Blessing: "With the blessings of Allah and the love of our families."
- Navigation cue: "Explore our day" / "SCROLL TO UNFOLD" leading seamlessly to ceremony logistics.

3. Ceremony Logistics, Family & Attendance:
- Header: "WITH LOVE, WE INVITE YOU" — "Our Nikkah"
- Details:
  - Date & Day: SATURDAY, 28 November 2026
  - Ceremony: Nikkah Ceremony at 4:30 PM (Display strictly as "4:30 PM", no time zone label, no ending time).
  - Venue: Rixos The Palm, Dubai
- Direct action buttons:
  - "Google Maps": link to https://www.google.com/maps/dir/?api=1&destination=Rixos+The+Palm+Dubai
  - "Add to calendar": prefilled Google Calendar link:
    https://calendar.google.com/calendar/render?action=TEMPLATE&text=Sahal+%26+Nefha+%E2%80%94+Nikkah&dates=20261128T163000%2F20261128T170000&ctz=Asia%2FDubai&location=Rixos+The+Palm%2C+Dubai&details=The+Nikkah+of+Mohammed+Sahal+M+P+and+Nefha+Al+Ameen.+Ceremony+begins+at+4%3A30+PM.+End+time+not+specified%3B+this+entry+reserves+30+minutes.
- Family Information:
  - "TOGETHER WITH OUR FAMILIES"
  - "AK Family and MP Family"
  - Groom's family:
    Mohammed Sahal M P
    Son of
    Sameer AK
    & Shahida M P
  - Bride's family:
    Nefha Al Ameen
    Daughter of
    Al Ameen
  - Accordion for "Family addresses & compliments":
    - Groom's family address: ‘Aqeelas’, Acharath Road, Thalassery
    - Bride's family address: Al Ameen’s Mansion, No. 38, Nad Al Sheba 4, Dubai
    - "With Best Compliments From"
    - "AK Family and MP Family"
    - "Brother in law: Zayed Akbar"
- Attendance confirmation (minimal toggle, no text fields or guest count inputs):
  - Heading: "Confirm your attendance"
  - Options: [ Joyful attending ] and [ Unable to attend ]
  - If "Joyful attending" selected: "A blessed day awaits, in shaa Allah."
  - If "Unable to attend" selected: "Please keep us in your duas."
- Closing: "Keep us in your duas." and return link "Sahal & Nefha" to navigate back to the couple card.

### Content & Ordering Rules
- Only the Nikkah ceremony (do not invent reception, dinner, or Walima).
- Sahal and initials "S & N" must always be first.
- Strict mobile view focus (optimized for phone viewport with responsive centering on desktop).

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/820e451a-39cb-4ade-ba6b-d892b1e1e67d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
