/* ============================================================
   EDIT EVERYTHING HERE — no other files need changing.
   Drop photos into the /images folder, then list their
   filenames in the `gallery` array below.
   ============================================================ */

window.SITE_CONFIG = {
  // ---- HERO ----------------------------------------------------
  name: "This Is Her Era.",          // the big headline
  milestone: "Celebrating 30 Years of Glamour & Adventure",  // subheadline
  date: "June 30, 2026",             // small line below
  eyebrow: "",                       // (no script line above the title)
  headline: "",                      // (unused)

  // ---- PULL QUOTES (elegant text sections) ---------------------
  // Add or remove as many as you like.
  quotes: [
    {
      text: "Thirty years of grace, grit, and a heart that never learned how to give anything less than everything.",
      attribution: "",
    },
    {
      text: "She has a way of turning ordinary days into the ones you never want to forget.",
      attribution: "",
    },
    {
      text: "This is her era — confident, golden, and only just getting started.",
      attribution: "With all our love",
    },
  ],

  // ---- PHOTO GALLERY ------------------------------------------
  // The photo LIST is generated automatically from your /images
  // folder by sync-photos.sh (see photos.js). You don't edit it here.
  //
  // To add OPTIONAL captions, add an entry below keyed by any part of
  // the filename — e.g. "IMG_7853": "That smile". Photos with no entry
  // simply show no caption (clean look).
  captions: {
    // "IMG_7853": "That smile",
  },

  // ---- VIDEO ---------------------------------------------------
  // Choose ONE mode:
  //   "youtube" -> set youtubeId to the unlisted video ID
  //   "mp4"     -> set mp4Src to a file path (e.g. "video/montage.mp4")
  //   "none"    -> hide the video section entirely
  video: {
    mode: "youtube",                 // "youtube" | "mp4" | "none"
    youtubeId: "inZiMx4uMec",        // the part after watch?v=  (youtu.be/inZiMx4uMec)
    mp4Src: "video/montage.mp4",     // drop your file in /video as montage.mp4
    poster: "",                      // optional poster image for mp4
    heading: "A Few Words for You",
    subheading: "From the people who love you most.",
  },

  // ---- CLOSING -------------------------------------------------
  closing: {
    // A heartfelt tribute paragraph shown above the final birthday line.
    tribute:
      "Every mile she's traveled was for the people she loves. Every sacrifice, every sleepless night, every loan paid off — it was never about her, it was always about us. Today, we celebrate the woman who gave everything and asked for nothing. Here's to the year the people she loves get to give some of it back.",
    message: "Happy Birthday, Sriya",
    signature: "— With all our love",
  },
};
