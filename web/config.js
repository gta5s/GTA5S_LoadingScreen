/**
 * ============================================================
 *  Loading Screen — Configuration
 *  Edit everything here. No changes needed in other files.
 * ============================================================
 */

const CONFIG = {

  /* ----------------------------------------------------------
   *  SERVER IDENTITY
   * ---------------------------------------------------------- */
  server: {
    name:     'GTA5S.NET',
    tagline:  'Thành Phố GTA5 Chiếm Đóng Số 1 Việt Nam!',
    subtitle: 'Open chính thức vào 20h - 01/03/2026.',
    logo:     'assets/logo.png',      // Set to '' to hide
  },

  /* ----------------------------------------------------------
   *  BACKGROUND VIDEO
   * ---------------------------------------------------------- */
  background: {
    video:          'assets/background.mp4',   // MP4 or WebM path
    fallbackColor:  '#080c14',                 // Shown if video fails
    overlayOpacity: 0.68,                      // 0 = transparent, 1 = black
  },

  /* ----------------------------------------------------------
   *  THEME COLORS
   *  All UI elements derive from these values automatically.
   * ---------------------------------------------------------- */
  theme: {
    primary:        '#32CD32',          // Gold accent — buttons, bar, glows
    accent:         '#32CD32',          // Lighter gold — gradients, highlights
    background:     '#080c14',          // Deep dark fallback
    textHighlight:  '#32CD32',          // Inline highlighted text color
    overlayTint:    'rgba(5,8,18,0.55)',// Extra darkening gradient layer
  },

  /* ----------------------------------------------------------
   *  MUSIC PLAYER
   * ---------------------------------------------------------- */
  music: {
    autoplay:      true,
    defaultVolume: 0.25,         // 0.0 – 1.0
    playlist: [
      {
        title:     'GTA5S Loading Music',
        artist:    'GTA5S.NET',
        src:       'assets/music/music1.mp3',
        avatar: 'assets/music/logo.png',            // Optional cover image path
      },
    ],
  },

  /* ----------------------------------------------------------
   *  STAFF PANEL
   * ---------------------------------------------------------- */
  staff: {
    enabled: true,
    title:   'ĐỘI NGŨ GTA5S.NET',
    members: [
      { name: 'GTA5S Teams',   role: 'Owner',       avatar: 'assets/avatars/logo.png'  },
    ],
  },

  /* ----------------------------------------------------------
   *  SOCIAL LINKS
   *  platform: 'discord' | 'youtube' | 'instagram' | 'twitter'
   * ---------------------------------------------------------- */
  social: {
    links: [
      { platform: 'discord',   label: 'Discord',   url: 'https://discord.gg/zqP2h4HsKt'         },
      { platform: 'website',   label: 'Website',   url: 'https://gta5s.net/'       },
      { platform: 'youtube',   label: 'YouTube',   url: 'https://www.youtube.com/@gta5snet'       },
    ],
  },

  /* ----------------------------------------------------------
   *  LOADING BAR
   * ---------------------------------------------------------- */
  loading: {
    text:         'Đang kết nối vào thành phố ...',
    completeText: 'Chào mừng đến Thành Phố GTA5S !',
    showPercent:  true,
  },

  /* ----------------------------------------------------------
   *  SECTION TOGGLES
   *  Set false to completely hide a section.
   * ---------------------------------------------------------- */
  sections: {
    showLogo:     true,
    showStaff:    true,
    showMusic:    true,
    showSocial:   true,
    showControls: true,   // Set false to hide the Show Controls button entirely
  },

  /* ----------------------------------------------------------
   *  SERVER KEYBINDS
   *  Displayed in the controls panel when the player clicks
   *  "Show Controls". Add, remove, or reorder freely.
   * ---------------------------------------------------------- */
  controls: [
    { key: '=',  label: 'Bật/Tắt HUB'   },
    { key: 'TAB',   label: 'Kho Đồ'    },
    { key: 'N',   label: 'Nói Chuyện'    },
    { key: 'M',   label: 'Phóng to MAP'    },
    { key: 'F',   label: 'Vào/Ra Phương Tiện'    },
    { key: 'B',   label: 'Dây An Toàn'    },
    { key: 'R',   label: 'Thay Đạn Vũ Khí'    },
    { key: 'Giữ Alt',   label: 'Tương Tác NPC'    },
    { key: '/xintele',   label: 'Xin Dịch Chuyển'    },
    { key: 'F1',   label: 'Điện Thoại'       },
    { key: 'F3',  label: 'Gọi Hỗ Trợ Ban Ngành'  },
    { key: 'F4',  label: 'Bảng Hành Động'  },
    { key: 'F5',   label: 'Cốp Xe'      },
    { key: 'F7',   label: 'Hoá Đơn'       },
  ],

};
