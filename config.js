/* ============================================================
   EDIT EVERYTHING HERE — no other files need changing.
   Drop photos into the /images folder, then list their
   filenames in the `gallery` array below.
   ============================================================ */

window.SITE_CONFIG = {
  // ---- HERO ----------------------------------------------------
  name: "Sriya",
  milestone: "Thirty Years",
  headline: "A celebration of a beautiful life, and the woman who lights up every room.",
  // Small text above the name (kicker / eyebrow)
  eyebrow: "Happy 30th Birthday",

  // ---- PULL QUOTES (elegant text sections) ---------------------
  // Add or remove as many as you like.
  quotes: [
    {
      text: "Thirty looks effortless on you — the way grace always does.",
      attribution: "With all our love",
    },
    {
      text: "Here's to the laughter we've shared, the memories we've made, and all the chapters still to come.",
      attribution: "",
    },
    {
      text: "You don't just turn a year older — you turn a little more into the wonderful person you were always meant to be.",
      attribution: "",
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
    heading: "A Little Montage",
    subheading: "Press play and turn the volume up.",
  },

  // ---- CLOSING -------------------------------------------------
  closing: {
    message: "Happy Birthday, Sriya",
    signature: "— Made with love",
  },
};
