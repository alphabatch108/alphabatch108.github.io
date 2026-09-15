import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  BookOpen, 
  FileText, 
  Search, 
  CheckCircle2, 
  BookMarked,
  ExternalLink,
  GraduationCap
} from 'lucide-react';

export const HINDI_BOOKS_DATA = [];

export const HindiBooksSection = () => {
  const { setViewingPdf } = useApp();
  const [selectedBook, setSelectedBook] = useState('aroh'); // 'aroh' | 'vitan'
  const [arohFilter, setArohFilter] = useState('all'); // 'all' | 'prose' | 'poetry'
  const [searchQuery, setSearchQuery] = useState('');

  const arohChapters = HINDI_BOOKS_DATA.filter(ch => ch.book === 'aroh');
  const arohProse = arohChapters.filter(ch => ch.type === 'prose');
  const arohPoetry = arohChapters.filter(ch => ch.type === 'poetry');
  const vitanChapters = HINDI_BOOKS_DATA.filter(ch => ch.book === 'vitan');

  // Filter items by book option, sub-type, and search query
  const filteredChapters = HINDI_BOOKS_DATA.filter(item => {
    if (item.book !== selectedBook) return false;
    if (selectedBook === 'aroh' && arohFilter !== 'all' && item.type !== arohFilter) return false;
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
      title: `कक्षा 12 हिंदी — ${item.title} (${item.author || ''})`,
      className: 'Class 12 Arts',
      subject: 'Hindi',
      category: item.category,
      fileSize: '2.4 MB',
      pages: 10,
      author: item.author,
      description: item.desc,
      fileContentUrl: item.fileContentUrl || '#'
    });
  };

  return (
    <section id="class12-hindi-books-section" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
      
      {/* Section Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
          <span className="badge badge-primary" style={{ background: '#ea580c', color: '#fff' }}>
            Class 12 Hindi Core
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>NCERT हिंदी पाठ्यपुस्तकें</span>
        </div>
        <h2 style={{
          fontSize: '1.65rem',
          fontWeight: 800,
          color: 'var(--text-main)',
          letterSpacing: '-0.02em',
          fontFamily: "'Outfit', sans-serif"
        }}>
          कक्षा 12 हिंदी पाठ्यपुस्तकें: आरोह एवं वितान
        </h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem', maxWidth: '720px' }}>
          नीचे दिए गए दो विकल्पों (1. आरोह, 2. वितान) में से किसी भी पुस्तक का चयन कर उसके अध्ययन सामग्री देखें।
        </p>
      </div>

      {/* 2 BOOK SELECTION CARDS (PROMINENT OPTIONS WITH COVER LOGOS) */}
      <div className="book-selection-grid">
        {/* OPTION 1: AROH (आरोह) BOOK CARD */}
        <div
          onClick={() => setSelectedBook('aroh')}
          style={{
            background: selectedBook === 'aroh' 
              ? 'linear-gradient(135deg, rgba(234, 88, 12, 0.15), rgba(249, 115, 22, 0.05))' 
              : 'var(--bg-card)',
            border: selectedBook === 'aroh' 
              ? '2px solid #ea580c' 
              : '1px solid var(--border-color)',
            boxShadow: selectedBook === 'aroh' 
              ? '0 8px 24px rgba(234, 88, 12, 0.2)' 
              : '0 4px 12px rgba(0,0,0,0.04)'
          }}
          className="book-card-item hover-lift"
        >
          {/* Cover Logo Image */}
          <div className="book-cover-wrapper">
            <img 
              src="/images/aroh_cover.jpg" 
              alt="आरोह पाठ्यपुस्तक कवर" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
              <span style={{ fontSize: '0.725rem', fontWeight: 700, color: '#ea580c', textTransform: 'uppercase' }}>
                विकल्प 1 • मुख्य पाठ्यपुस्तक
              </span>
              {selectedBook === 'aroh' && (
                <CheckCircle2 size={16} style={{ color: '#ea580c', marginLeft: 'auto', flexShrink: 0 }} />
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
              आरोह (Aroh)
            </h3>
            <p className="book-card-sub" style={{ color: 'var(--text-muted)' }}>
              कक्षा XII के लिए हिंदी की मुख्य पाठ्यपुस्तक ({arohProse.length} गद्य & {arohPoetry.length} काव्य खंड)
            </p>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span className="badge" style={{ background: 'rgba(234, 88, 12, 0.15)', color: '#ea580c', fontSize: '0.725rem' }}>
                {arohProse.length} गद्य खंड
              </span>
              <span className="badge" style={{ background: 'rgba(234, 88, 12, 0.15)', color: '#ea580c', fontSize: '0.725rem' }}>
                {arohPoetry.length} काव्य खंड
              </span>
            </div>
          </div>
        </div>

        {/* OPTION 2: VITAN (वितान) BOOK CARD */}
        <div
          onClick={() => setSelectedBook('vitan')}
          style={{
            background: selectedBook === 'vitan' 
              ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.05))' 
              : 'var(--bg-card)',
            border: selectedBook === 'vitan' 
              ? '2px solid #10b981' 
              : '1px solid var(--border-color)',
            boxShadow: selectedBook === 'vitan' 
              ? '0 8px 24px rgba(16, 185, 129, 0.2)' 
              : '0 4px 12px rgba(0,0,0,0.04)'
          }}
          className="book-card-item hover-lift"
        >
          {/* Cover Logo Image */}
          <div className="book-cover-wrapper">
            <img 
              src="/images/vitan_cover.jpg" 
              alt="वितान पाठ्यपुस्तक कवर" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
              <span style={{ fontSize: '0.725rem', fontWeight: 700, color: '#10b981', textTransform: 'uppercase' }}>
                विकल्प 2 • पूरक पाठ्यपुस्तक
              </span>
              {selectedBook === 'vitan' && (
                <CheckCircle2 size={16} style={{ color: '#10b981', marginLeft: 'auto', flexShrink: 0 }} />
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
              वितान (Vitan)
            </h3>
            <p className="book-card-sub" style={{ color: 'var(--text-muted)' }}>
              कक्षा XII के लिए हिंदी की पूरक पाठ्यपुस्तक (Supplementary Reader)
            </p>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span className="badge" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', fontSize: '0.725rem' }}>
                {vitanChapters.length} पूरक अध्याय
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* FILTER & SEARCH BAR CONTROL BAR */}
      <div className="book-filter-bar">
        {/* Left Sub-filters */}
        <div className="sub-filter-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {selectedBook === 'aroh' ? (
            <>
              <button
                onClick={() => setArohFilter('all')}
                style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: arohFilter === 'all' ? 700 : 500,
                  background: arohFilter === 'all' ? '#ea580c' : 'transparent',
                  color: arohFilter === 'all' ? '#fff' : 'var(--text-muted)',
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                सभी अध्याय ({arohChapters.length})
              </button>
              <button
                onClick={() => setArohFilter('prose')}
                style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: arohFilter === 'prose' ? 700 : 500,
                  background: arohFilter === 'prose' ? '#ea580c' : 'transparent',
                  color: arohFilter === 'prose' ? '#fff' : 'var(--text-muted)',
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                गद्य खंड ({arohProse.length})
              </button>
              <button
                onClick={() => setArohFilter('poetry')}
                style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: arohFilter === 'poetry' ? 700 : 500,
                  background: arohFilter === 'poetry' ? '#ea580c' : 'transparent',
                  color: arohFilter === 'poetry' ? '#fff' : 'var(--text-muted)',
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                काव्य खंड ({arohPoetry.length})
              </button>
            </>
          ) : (
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.4rem', whiteSpace: 'nowrap' }}>
              <BookMarked size={16} /> वितान पूरक पाठ्यपुस्तक अध्याय ({vitanChapters.length})
            </span>
          )}
        </div>

        {/* Right Search Bar */}
        <div className="search-wrapper" style={{ position: 'relative', minWidth: '220px' }}>
          <Search size={14} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="खोजें अध्याय या लेखक..."
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
                {/* Header Tags */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    padding: '0.2rem 0.65rem',
                    borderRadius: '9999px',
                    background: item.book === 'aroh' 
                      ? (item.type === 'poetry' ? 'rgba(168, 85, 247, 0.15)' : 'rgba(234, 88, 12, 0.15)')
                      : 'rgba(16, 185, 129, 0.15)',
                    color: item.book === 'aroh'
                      ? (item.type === 'poetry' ? '#a855f7' : '#ea580c')
                      : '#10b981',
                    textTransform: 'uppercase'
                  }}>
                    {item.book === 'aroh' ? (item.type === 'poetry' ? `काव्य ${item.chNum}` : `गद्य ${item.chNum}`) : `वितान CH ${item.chNum}`}
                  </span>

                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                    CBSE Class 12
                  </span>
                </div>

                {/* Chapter Title */}
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

                {/* Author */}
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '0.75rem' }}>
                  लेखक: <strong style={{ color: 'var(--text-muted)' }}>{item.author}</strong>
                </div>

                {/* Description */}
                <p style={{
                  fontSize: '0.825rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.5,
                  marginBottom: '1.25rem'
                }}>
                  {item.desc}
                </p>
              </div>

              {/* Action Buttons */}
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
                    background: item.book === 'aroh' ? '#ea580c' : '#10b981',
                    borderColor: item.book === 'aroh' ? '#ea580c' : '#10b981'
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
