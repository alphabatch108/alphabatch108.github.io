import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  BookOpen, 
  FileText, 
  Search, 
  CheckCircle2, 
  BookMarked,
  ExternalLink,
  Monitor
} from 'lucide-react';

export const IT_BOOKS_DATA = [];

export const ITBooksSection = () => {
  const { setViewingPdf } = useApp();
  const [searchQuery, setSearchQuery] = useState('');

  const itChapters = IT_BOOKS_DATA;

  // Filter items by search query
  const filteredChapters = IT_BOOKS_DATA.filter(item => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        (item.title || '').toLowerCase().includes(q) ||
        (item.author || '').toLowerCase().includes(q) ||
        (item.desc || '').toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handlePreviewNotes = (item) => {
    setViewingPdf({
      id: item.id,
      title: `Class 12 IT — ${item.title}`,
      className: 'Class 12 Arts',
      subject: 'Information Technology (IT)',
      category: item.category || 'Information Technology',
      fileSize: '2.4 MB',
      pages: 10,
      author: item.author || 'CBSE NCERT',
      description: item.desc,
      fileContentUrl: item.fileContentUrl || '#'
    });
  };

  return (
    <section id="class12-it-books-section" style={{ marginTop: '1rem', marginBottom: '2rem', minWidth: 0, width: '100%', maxWidth: '100%' }}>
      
      {/* Section Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
          <span className="badge badge-primary" style={{ background: '#0891b2', color: '#fff' }}>
            Class 12 Information Technology (IT)
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>सूचना प्रौद्योगिकी पाठ्यपुस्तक</span>
        </div>
        <h2 style={{
          fontSize: '1.65rem',
          fontWeight: 800,
          color: 'var(--text-main)',
          letterSpacing: '-0.02em',
          fontFamily: "'Outfit', sans-serif"
        }}>
          Class 12 Information Technology (IT) Textbook
        </h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem', maxWidth: '720px' }}>
          Explore official Information Technology (सूचना प्रौद्योगिकी) textbook and study materials.
        </p>
      </div>

      {/* 1 BOOK SELECTION CARD (PROMINENT OPTION WITH COVER LOGO) */}
      <div className="book-selection-grid">
        {/* OPTION 1: INFORMATION TECHNOLOGY BOOK CARD */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(8, 145, 178, 0.15), rgba(6, 182, 212, 0.05))',
            border: '2px solid #0891b2',
            boxShadow: '0 8px 24px rgba(8, 145, 178, 0.2)'
          }}
          className="book-card-item hover-lift"
        >
          {/* Cover Logo Image */}
          <div className="book-cover-wrapper">
            <img 
              src="/images/it_cover.jpg" 
              alt="Information Technology Textbook Logo" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
              <span style={{ fontSize: '0.725rem', fontWeight: 700, color: '#0891b2', textTransform: 'uppercase' }}>
                Main Textbook • सूचना प्रौद्योगिकी
              </span>
              <CheckCircle2 size={16} style={{ color: '#0891b2', marginLeft: 'auto', flexShrink: 0 }} />
            </div>
            <h3 
              className="book-card-title"
              style={{
                fontWeight: 800,
                color: 'var(--text-main)',
                fontFamily: "'Outfit', sans-serif"
              }}
            >
              Information Technology
            </h3>
            <p className="book-card-sub" style={{ color: 'var(--text-muted)' }}>
              Class XII • A Step Towards A Digital India ({itChapters.length} Chapters)
            </p>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span className="badge" style={{ background: 'rgba(8, 145, 178, 0.15)', color: '#0891b2', fontSize: '0.725rem' }}>
                {itChapters.length} Chapters & Notes
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* FILTER & SEARCH BAR CONTROL BAR */}
      <div className="book-filter-bar">
        {/* Left Status Bar */}
        <div className="sub-filter-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            color: '#0891b2',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            whiteSpace: 'nowrap'
          }}>
            <BookMarked size={16} /> Information Technology ({itChapters.length} Chapters)
          </span>
        </div>

        {/* Right Search Bar */}
        <div className="search-wrapper" style={{ position: 'relative', minWidth: '220px' }}>
          <Search size={14} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search IT topics or chapters..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              padding: '0.4rem 0.75rem 0.4rem 2.2rem',
              borderRadius: '8px',
              fontSize: '0.8rem',
              background: 'var(--bg-main)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              width: '100%',
              outline: 'none'
            }}
          />
        </div>
      </div>

      {/* CHAPTERS GRID */}
      <div className="book-chapters-grid">
        {filteredChapters.length > 0 ? (
          filteredChapters.map((item) => (
            <div
              key={item.id}
              className="glass-card hover-lift"
              style={{
                padding: '1.35rem',
                borderRadius: '14px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    padding: '0.2rem 0.65rem',
                    borderRadius: '9999px',
                    background: 'rgba(8, 145, 178, 0.15)',
                    color: '#0891b2',
                    textTransform: 'uppercase'
                  }}>
                    IT CH {item.chNum}
                  </span>

                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                    CBSE Class 12
                  </span>
                </div>

                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  color: 'var(--text-main)',
                  lineHeight: 1.35,
                  marginBottom: '0.35rem',
                  fontFamily: "'Outfit', sans-serif"
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '0.825rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.5,
                  marginBottom: '1.25rem'
                }}>
                  {item.desc}
                </p>
              </div>

              <div style={{
                paddingTop: '0.85rem',
                borderTop: '1px solid var(--border-color)'
              }}>
                <a
                  href={item.fileContentUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm hover-lift"
                  style={{
                    width: '100%',
                    fontSize: '0.825rem',
                    padding: '0.55rem 0.75rem',
                    borderRadius: '8px',
                    gap: '0.4rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#0891b2',
                    borderColor: '#0891b2'
                  }}
                >
                  <Download size={15} />
                  <span>Download IT Notes</span>
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', gridColumn: '1 / -1', color: 'var(--text-muted)' }}>
            No IT study materials currently available.
          </div>
        )}
      </div>
    </section>
  );
};
