module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5D2P8TL",
  
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        // selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-theme-amaranth",
      options: {
        assetDir: "./static/",
        iconList: [
          {
            src: "/logos/x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "/logos/x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "/logos/x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/logos/x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "/logos/x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/logos/x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/logos/x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/logos/icon.png",
            sizes: "1024x1024",
            type: "image/png",
          },
        ],
        website: {
          fbAppId: "1825356251115265",
          twitterName: "chanzohuru",
          url: "https://chanzohuru.or.tz",
          googleAnalyticsId: "G-W78CPMM2TY",
          copyright: "© Copyright 2022 | ChanzoHuru",
          logoUrl: "/logos/icon.png",
        },
        user: {
          id: "chanzohuru",
          firstName: "Chanzo",
          lastName: "Huru",
          twitterName: "chanzohuru",
          linkedIn: "chanzohuru",
          instagramName: "chanzohuru",
          tiktokName: "chanzohuru",
          github: "chanzohuru",
          email: "karibu@chanzohuru.or.tz",
          location: "Arusha Tanzania",
          about: "A community club that is poised to spread and  foster collaboration and advancement of technology in our local communities",
          avatar: "https://user-images.githubusercontent.com/6592749/153856031-e013d857-b92f-458b-b37a-85ed2b009f21.png",
        },

        organization: {
          name: "ChanzoHuru",
          description: "A community club that is poised to spread and  foster collaboration and advancement of technology in our local communities",
          logoUrl: "/logos/icon.png",
          url: "https://chanzohuru.or.tz",
        },
      },
    },
  ],
};
