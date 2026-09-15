import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  BookOpen, 
  FileText, 
  Search, 
  CheckCircle2, 
  BookMarked,
  ExternalLink,
  Globe2
} from 'lucide-react';

export const GEOGRAPHY_BOOKS_DATA = [];

export const GeographyBooksSection = () => {
  const { setViewingPdf } = useApp();
  const [selectedBook, setSelectedBook] = useState('human'); // 'human' | 'india'
  const [searchQuery, setSearchQuery] = useState('');

  const humanChapters = GEOGRAPHY_BOOKS_DATA.filter(ch => ch.book === 'human');
  const indiaChapters = GEOGRAPHY_BOOKS_DATA.filter(ch => ch.book === 'india');

  // Filter items by book option and search query
  const filteredChapters = GEOGRAPHY_BOOKS_DATA.filter(item => {
    if (item.book !== selectedBook) return false;
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
      title: `कक्षा 12 भूगोल — ${item.title}`,
      className: 'Class 12 Arts',
      subject: 'Geography',
      category: item.category,
      fileSize: '2.4 MB',
      pages: 10,
      author: item.author || 'NCERT',
      description: item.desc,
      fileContentUrl: item.fileContentUrl || '#'
    });
  };

  return (
    <section id="class12-geography-books-section" style={{ marginTop: '1rem', marginBottom: '2rem', minWidth: 0, width: '100%', maxWidth: '100%' }}>
      
      {/* Section Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
          <span className="badge badge-primary" style={{ background: '#059669', color: '#fff' }}>
            Class 12 Geography (भूगोल)
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>NCERT भूगोल पाठ्यपुस्तकें</span>
        </div>
        <h2 style={{
          fontSize: '1.65rem',
          fontWeight: 800,
          color: 'var(--text-main)',
          letterSpacing: '-0.02em',
          fontFamily: "'Outfit', sans-serif"
        }}>
          कक्षा 12 भूगोल पाठ्यपुस्तकें: मानव भूगोल & भारत: लोग और अर्थव्यवस्था
        </h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem', maxWidth: '720px' }}>
          नीचे दिए गए दो विकल्पों में से अपनी पाठ्यपुस्तक का चयन कर अध्ययन सामग्री देखें।
        </p>
      </div>

      {/* 2 BOOK SELECTION CARDS (PROMINENT OPTIONS WITH COVER LOGOS) */}
      <div className="book-selection-grid">
        {/* OPTION 1: HUMAN GEOGRAPHY (मानव भूगोल के मूल सिद्धांत) */}
        <div
          onClick={() => setSelectedBook('human')}
          style={{
            background: selectedBook === 'human' 
              ? 'linear-gradient(135deg, rgba(5, 150, 105, 0.15), rgba(16, 185, 129, 0.05))' 
              : 'var(--bg-card)',
            border: selectedBook === 'human' 
              ? '2px solid #059669' 
              : '1px solid var(--border-color)',
            boxShadow: selectedBook === 'human' 
              ? '0 8px 24px rgba(5, 150, 105, 0.2)' 
              : '0 4px 12px rgba(0,0,0,0.04)'
          }}
          className="book-card-item hover-lift"
        >
          {/* Cover Logo Image */}
          <div className="book-cover-wrapper">
            <img 
              src="/images/geo_human_cover.jpg" 
              alt="मानव भूगोल के मूल सिद्धांत पाठ्यपुस्तक कवर" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
              <span style={{ fontSize: '0.725rem', fontWeight: 700, color: '#059669', textTransform: 'uppercase' }}>
                विकल्प 1 • सिद्धांत पाठ्यपुस्तक
              </span>
              {selectedBook === 'human' && (
                <CheckCircle2 size={16} style={{ color: '#059669', marginLeft: 'auto', flexShrink: 0 }} />
              )}
            </div>
            <h3 
              className="book-card-title"
              style={{
                fontWeight: 800,
                color: 'var(--text-main)',
                fontFamily: "'Outfit', sans-serif"
              }}
            >
              मानव भूगोल के मूल सिद्धांत
            </h3>
            <p className="book-card-sub" style={{ color: 'var(--text-muted)' }}>
              कक्षा XII के लिए भूगोल की प्रथम पाठ्यपुस्तक (Fundamentals of Human Geography)
            </p>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span className="badge" style={{ background: 'rgba(5, 150, 105, 0.15)', color: '#059669', fontSize: '0.725rem' }}>
                {humanChapters.length} अध्याय
              </span>
            </div>
          </div>
        </div>

        {/* OPTION 2: INDIA PEOPLE & ECONOMY (भारत: लोग और अर्थव्यवस्था) */}
        <div
          onClick={() => setSelectedBook('india')}
          style={{
            background: selectedBook === 'india' 
              ? 'linear-gradient(135deg, rgba(2, 132, 199, 0.15), rgba(14, 165, 233, 0.05))' 
              : 'var(--bg-card)',
            border: selectedBook === 'india' 
              ? '2px solid #0284c7' 
              : '1px solid var(--border-color)',
            boxShadow: selectedBook === 'india' 
              ? '0 8px 24px rgba(2, 132, 199, 0.2)' 
              : '0 4px 12px rgba(0,0,0,0.04)'
          }}
          className="book-card-item hover-lift"
        >
          {/* Cover Logo Image */}
          <div className="book-cover-wrapper">
            <img 
              src="/images/geo_india_cover.jpg" 
              alt="भारत: लोग और अर्थव्यवस्था पाठ्यपुस्तक कवर" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
              <span style={{ fontSize: '0.725rem', fontWeight: 700, color: '#0284c7', textTransform: 'uppercase' }}>
                विकल्प 2 • भारतीय अर्थव्यवस्था पाठ्यपुस्तक
              </span>
              {selectedBook === 'india' && (
                <CheckCircle2 size={16} style={{ color: '#0284c7', marginLeft: 'auto', flexShrink: 0 }} />
              )}
            </div>
            <h3 
              className="book-card-title"
              style={{
                fontWeight: 800,
                color: 'var(--text-main)',
                fontFamily: "'Outfit', sans-serif"
              }}
            >
              भारत: लोग और अर्थव्यवस्था
            </h3>
            <p className="book-card-sub" style={{ color: 'var(--text-muted)' }}>
              कक्षा XII के लिए भूगोल की द्वितीय पाठ्यपुस्तक (India: People and Economy)
            </p>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span className="badge" style={{ background: 'rgba(2, 132, 199, 0.15)', color: '#0284c7', fontSize: '0.725rem' }}>
                {indiaChapters.length} अध्याय
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
            color: selectedBook === 'human' ? '#059669' : '#0284c7',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            whiteSpace: 'nowrap'
          }}>
            <BookMarked size={16} /> 
            {selectedBook === 'human'
              ? `मानव भूगोल के मूल सिद्धांत (${humanChapters.length} अध्याय)`
              : `भारत: लोग और अर्थव्यवस्था (${indiaChapters.length} अध्याय)`
            }
          </span>
        </div>

        {/* Right Search Bar */}
        <div className="search-wrapper" style={{ position: 'relative', minWidth: '220px' }}>
          <Search size={14} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="खोजें अध्याय या विषय..."
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
                    background: item.book === 'human' ? 'rgba(5, 150, 105, 0.15)' : 'rgba(2, 132, 199, 0.15)',
                    color: item.book === 'human' ? '#059669' : '#0284c7',
                    textTransform: 'uppercase'
                  }}>
                    {item.book === 'human' ? `मानव भूगोल CH ${item.chNum}` : `भारत अर्थव्यवस्था CH ${item.chNum}`}
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
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.5rem',
                paddingTop: '0.85rem',
                borderTop: '1px solid var(--border-color)'
              }}>
                <button
                  onClick={() => handlePreviewNotes(item)}
                  className="btn btn-primary btn-sm hover-lift"
                  style={{
                    fontSize: '0.785rem',
                    padding: '0.5rem 0.5rem',
                    borderRadius: '8px',
                    gap: '0.35rem',
                    background: item.book === 'human' ? '#059669' : '#0284c7',
                    borderColor: item.book === 'human' ? '#059669' : '#0284c7'
                  }}
                >
                  <FileText size={14} />
                  <span>नोट्स देखें</span>
                </button>

                <a
                  href={item.fileContentUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm hover-lift"
                  style={{
                    fontSize: '0.785rem',
                    padding: '0.5rem 0.5rem',
                    borderRadius: '8px',
                    gap: '0.35rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <ExternalLink size={14} />
                  <span>गूगल ड्राइव</span>
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', gridColumn: '1 / -1', color: 'var(--text-muted)' }}>
            वर्तमान में कोई अध्ययन सामग्री उपलब्ध नहीं है।
          </div>
        )}
      </div>
    </section>
  );
};
