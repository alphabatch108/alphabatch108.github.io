import React, { useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';

export const AdBanner = ({ 
  slot = 'homepageBanner', 
  type = '728x90', // '728x90' | '300x600' | '300x250' | 'responsive'
  label = null,
  style = {} 
}) => {
  const { adsSettings } = useApp();
  const adRef = useRef(null);

  // Ensure ads are enabled by default unless explicitly turned off
  const isEnabled = adsSettings?.enabled !== false;
  const isSlotEnabled = !slot || adsSettings?.[slot] !== false;

  // Publisher ID from settings
  const rawPublisherId = adsSettings?.publisherId || '';

  const formattedPublisherId = React.useMemo(() => {
    if (!rawPublisherId) return '';
    const clean = rawPublisherId.trim();
    if (clean.startsWith('ca-pub-')) return clean;
    if (clean.startsWith('pub-')) return `ca-${clean}`;
    return `ca-pub-${clean}`;
  }, [rawPublisherId]);

  useEffect(() => {
    if (!isEnabled || !isSlotEnabled || !formattedPublisherId) return;
    
    // Inject Google AdSense script dynamically if publisher ID is configured and script is not yet added
    if (typeof window !== 'undefined') {
      const scriptId = 'google-adsense-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${formattedPublisherId}`;
        script.async = true;
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
      }
    }

    const timer = setTimeout(() => {
      try {
        if (typeof window !== 'undefined' && adRef.current) {
          // Verify element has not already been filled by Google AdSense
          if (!adRef.current.getAttribute('data-adsbygoogle-status')) {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          }
        }
      } catch (e) {
        console.warn('AdSense push notice:', e);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [slot, formattedPublisherId, isEnabled, isSlotEnabled]);

  if (!isEnabled || !isSlotEnabled) {
    return null;
  }

  const hasAdSenseId = Boolean(formattedPublisherId);

  // Compute exact Google AdSense official IAB dimensions & format attributes
  let bannerMaxWidth = '728px';
  let bannerHeight = '90px';
  let adFormat = 'horizontal';
  let bannerTitle = '728x90 Leaderboard Banner';

  if (type === '300x600') {
    bannerMaxWidth = '300px';
    bannerHeight = '600px';
    adFormat = 'vertical';
    bannerTitle = '300x600 Half-Page Skyscraper';
  } else if (type === '300x250') {
    bannerMaxWidth = '300px';
    bannerHeight = '250px';
    adFormat = 'rectangle';
    bannerTitle = '300x250 Medium Rectangle';
  } else if (type === 'responsive') {
    bannerMaxWidth = '100%';
    bannerHeight = '90px';
    adFormat = 'auto';
    bannerTitle = 'Responsive Auto-Ad Banner';
  }

  const customNotice = adsSettings?.customNotice || 'Sponsored Educational Announcement';
  const handleBannerClick = () => {
    const directAdUrl = adsSettings?.directLink || 'https://omg10.com/4/11805675';
    if (directAdUrl) {
      try {
        window.open(directAdUrl, '_blank');
      } catch (e) {}
    }
  };

  return (
    <aside 
      onClick={handleBannerClick}
      className="ad-banner-wrapper animate-fade-in-up hover-lift"
      style={{
        width: '100%',
        maxWidth: bannerMaxWidth,
        minHeight: bannerHeight,
        margin: '1.5rem auto',
        borderRadius: '14px',
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85), rgba(30, 41, 59, 0.75))',
        border: '1.5px solid rgba(56, 189, 248, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        transition: 'all 0.3s ease',
        padding: '0.85rem 1.25rem',
        cursor: 'pointer',
        ...style
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.45rem',
        color: '#94a3b8',
        fontSize: '0.85rem',
        fontWeight: 600,
        textAlign: 'center',
        userSelect: 'none'
      }}>
        <span style={{
          fontSize: '0.7rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#38bdf8',
          background: 'rgba(56, 189, 248, 0.15)',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          padding: '0.2rem 0.85rem',
          borderRadius: '9999px',
          fontWeight: 800,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem'
        }}>
          📢 {customNotice}
        </span>
        <span style={{ color: '#f8fafc', fontWeight: 700, fontSize: '0.925rem' }}>
          Sponsored Partner Announcement • Click to View Offer
        </span>
        <span style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 600 }}>
          Click here to explore special student resources & partner offers 🚀
        </span>
      </div>
    </aside>
  );
};

