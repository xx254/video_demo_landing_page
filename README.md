# AI Video Remake Showcase Landing Page

A React landing page showcasing 10 YouTube video comparisons between original viral videos and their AI-remade versions.

## Features

- ✨ Display 10 video cases with before/after comparison
- 🎬 Embedded YouTube video players
- 🎨 Modern UI design
- 📱 Responsive layout, mobile-friendly
- 🔧 Reusable component architecture
- 🎯 State management with React Context

## Tech Stack

- React 18
- React Context API
- CSS Modules (Component-level styles)
- YouTube Embed API

## Quick Start

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.js
│   ├── VideoGrid.js
│   ├── VideoCard.js
│   ├── YouTubePlayer.js
│   └── CategoryBadge.js
├── context/            # React Context
│   └── VideoContext.js
├── utils/              # Utility functions
│   ├── videoData.js
│   ├── youtubeHelper.js
│   └── categoryHelper.js
├── App.js
└── index.js
```

## Customize Video Data

All video data is stored in `src/data/videos.json`. You can edit this file to add your own YouTube or TikTok videos.

### Data Structure

```json
{
  "id": 1,
  "title": "Your Video Title",
  "description": "Video description",
  "beforeVideo": {
    "type": "youtube",
    "url": "https://www.youtube.com/watch?v=VIDEO_ID"
  },
  "afterVideo": {
    "type": "tiktok",
    "url": "https://www.tiktok.com/@user/video/1234567890"
  },
  "category": "Category"
}
```

### Supported Video Types

**YouTube:**
- Type: `"youtube"`
- URL formats:
  - `https://www.youtube.com/watch?v=VIDEO_ID`
  - `https://youtu.be/VIDEO_ID`
  - `https://www.youtube.com/embed/VIDEO_ID`

**TikTok:**
- Type: `"tiktok"`
- URL formats:
  - `https://www.tiktok.com/@username/video/VIDEO_ID`
  - `https://vm.tiktok.com/SHORT_CODE`

### Example

You can mix YouTube and TikTok videos in the same showcase:

```json
{
  "id": 1,
  "title": "Case 1: Dance Video",
  "description": "Original TikTok vs AI YouTube remake",
  "beforeVideo": {
    "type": "tiktok",
    "url": "https://www.tiktok.com/@user/video/1234567890"
  },
  "afterVideo": {
    "type": "youtube",
    "url": "https://www.youtube.com/watch?v=ABC123XYZ"
  },
  "category": "Dance"
}
```

## Notes

- Videos must allow embedding
- Short videos are recommended for better user experience
- You can use any combination of YouTube and TikTok videos

