====================================================
MYPEPTS — LOGO + BRAND REBRAND
====================================================

This updates the site from "Ours Peptides" to
"MyPepts" — new logo, new brand name everywhere,
new support email (support@mypepts.com).

WHAT'S INCLUDED:

  images/logo-white.png       → assets/images/ folder REPLACE
  images/logo-ours-dark.png   → images/ folder REPLACE
  images/site-icon.png        → images/ folder REPLACE
  _data/site.json             → _data/ folder REPLACE
  admin/index.html            → admin/ folder REPLACE
  index.html                  → ROOT REPLACE
  shop.html                   → ROOT REPLACE
  quality.html                → ROOT REPLACE
  contact.html                → ROOT REPLACE

  9 files total.


HOW TO COPY (THE EASY WAY)
--------------------------
Inside this zip is a folder called "mypepts-rebrand"
that mirrors your repo structure. To install:

1. Open the "mypepts-rebrand" folder.
2. Select EVERYTHING inside (Ctrl+A): the 3 sub-folders
   (images, _data, admin) and the 4 HTML files.
   Do NOT include READ_ME_FIRST.txt.
3. Copy (Ctrl+C).
4. Open your local repo folder.
5. Paste (Ctrl+V) right at the root.
6. Windows will ask if you want to merge/replace —
   say YES / REPLACE ALL.

Each file lands in the right spot automatically
because the folder names match.


COMMIT AND PUSH
---------------
In GitHub Desktop you'll see 9 modified files.
Summary: "Rebrand to MyPepts"
Commit to main → Push origin.

Wait ~60 seconds for Netlify, refresh mypepts.com
in an incognito window. New logo + new name should
be live.


NOTE ABOUT THE SUPPORT EMAIL
----------------------------
I updated the email to support@mypepts.com to match
the new domain. If you haven't set up that email
inbox yet, you'll want to either:
  - Create it (most domain hosts let you set up
    email for free or cheap), OR
  - Edit _data/site.json and change "email" to
    whichever real email you want orders + support
    questions to go to.
