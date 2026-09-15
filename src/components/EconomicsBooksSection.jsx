import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  BookOpen, 
  FileText, 
  Search, 
  CheckCircle2, 
  BookMarked,
  ExternalLink,
  TrendingUp
} from 'lucide-react';

export const ECONOMICS_BOOKS_DATA = [];

export const EconomicsBooksSection = () => {
  const { setViewingPdf } = useApp();
  const [activeBook, setActiveBook] = useState('all'); // 'all', 'micro', 'macro'
  const [searchQuery, setSearchQuery] = useState('');

  // Filter chapters by active book and search query
  const filteredChapters = ECONOMICS_BOOKS_DATA.filter(item => {
    const matchesBook = activeBook === 'all' || item.book === activeBook;
    if (!matchesBook) return false;

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

  const microCount = ECONOMICS_BOOKS_DATA.filter(ch => ch.book === 'micro').length;
  const macroCount = ECONOMICS_BOOKS_DATA.filter(ch => ch.book === 'macro').length;

  const handlePreviewNotes = (item) => {
    setViewingPdf({
      id: item.id,
      title: `Class 12 Economics — ${item.title}`,
      className: 'Class 12 Arts',
      subject: 'Economics',
      category: item.category || 'Economics',
      fileSize: '2.4 MB',
      pages: 10,
      author: item.author || 'CBSE NCERT',
      description: item.desc,
      fileContentUrl: item.fileContentUrl || '#'
    });
  };

  return (
    <section id="class12-economics-books-section" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
      
      {/* Section Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
          <span className="badge badge-primary" style={{ background: '#16a34a', color: '#fff' }}>
            Class 12 Economics
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>अर्थशास्त्र पाठ्यपुस्तकें</span>
        </div>
        <h2 style={{
          fontSize: '1.65rem',
          fontWeight: 800,
          color: 'var(--text-main)',
          letterSpacing: '-0.02em',
          fontFamily: "'Outfit', sans-serif"
        }}>
          Class 12 Economics (अर्थशास्त्र) Textbooks
        </h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem', maxWidth: '720px' }}>
          Select between Microeconomics (व्यष्टि अर्थशास्त्र) and Macroeconomics (समष्टि अर्थशास्त्र) textbooks.
        </p>
      </div>

      {/* 2 BOOK SELECTION CARDS (PROMINENT OPTIONS WITH COVER LOGOS) */}
      <div className="book-selection-grid">
        {/* BOOK 1: व्यष्टि अर्थशास्त्र (Microeconomics) */}
        <div
          onClick={() => setActiveBook(activeBook === 'micro' ? 'all' : 'micro')}
          style={{
            background: activeBook === 'micro'
              ? 'linear-gradient(135deg, rgba(22, 163, 74, 0.18), rgba(34, 197, 94, 0.08))'
              : 'var(--bg-card)',
            border: activeBook === 'micro'
              ? '2px solid #16a34a'
              : '1px solid var(--border-color)',
            boxShadow: activeBook === 'micro'
              ? '0 8px 24px rgba(22, 163, 74, 0.2)'
              : '0 4px 12px rgba(0,0,0,0.04)'
          }}
          className="book-card-item hover-lift"
        >
          {/* Cover Logo Image */}
          <div className="book-cover-wrapper">
            <img 
              src="/images/micro_eco_cover.jpg" 
              alt="व्यष्टि अर्थशास्त्र Cover Logo" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
              <span style={{ fontSize: '0.725rem', fontWeight: 700, color: '#16a34a', textTransform: 'uppercase' }}>
                Book 1 • व्यष्टि अर्थशास्त्र
              </span>
              {activeBook === 'micro' && (
                <CheckCircle2 size={16} style={{ color: '#16a34a', marginLeft: 'auto', flexShrink: 0 }} />
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
              व्यष्टि अर्थशास्त्र: एक परिचय
            </h3>
            <p className="book-card-sub" style={{ color: 'var(--text-muted)' }}>
              Microeconomics Textbook ({microCount} Chapters)
            </p>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span className="badge" style={{ background: 'rgba(22, 163, 74, 0.15)', color: '#16a34a', fontSize: '0.725rem' }}>
                {microCount} Chapters & Notes
              </span>
            </div>
          </div>
        </div>

        {/* BOOK 2: समष्टि अर्थशास्त्र (Macroeconomics) */}
        <div
          onClick={() => setActiveBook(activeBook === 'macro' ? 'all' : 'macro')}
          style={{
            background: activeBook === 'macro'
              ? 'linear-gradient(135deg, rgba(37, 99, 235, 0.18), rgba(59, 130, 246, 0.08))'
              : 'var(--bg-card)',
            border: activeBook === 'macro'
              ? '2px solid #2563eb'
              : '1px solid var(--border-color)',
            boxShadow: activeBook === 'macro'
              ? '0 8px 24px rgba(37, 99, 235, 0.2)'
              : '0 4px 12px rgba(0,0,0,0.04)'
          }}
          className="book-card-item hover-lift"
        >
          {/* Cover Logo Image */}
          <div className="book-cover-wrapper">
            <img 
              src="/images/macro_eco_cover.jpg" 
              alt="समष्टि अर्थशास्त्र Cover Logo" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
              <span style={{ fontSize: '0.725rem', fontWeight: 700, color: '#2563eb', textTransform: 'uppercase' }}>
                Book 2 • समष्टि अर्थशास्त्र
              </span>
              {activeBook === 'macro' && (
                <CheckCircle2 size={16} style={{ color: '#2563eb', marginLeft: 'auto', flexShrink: 0 }} />
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
              समष्टि अर्थशास्त्र: एक परिचय
            </h3>
            <p className="book-card-sub" style={{ color: 'var(--text-muted)' }}>
              Macroeconomics Textbook ({macroCount} Chapters)
            </p>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span className="badge" style={{ background: 'rgba(37, 99, 235, 0.15)', color: '#2563eb', fontSize: '0.725rem' }}>
                {macroCount} Chapters & Notes
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* FILTER & SEARCH BAR CONTROL BAR */}
      <div className="book-filter-bar">
        {/* Left Filter Buttons */}
        <div className="sub-filter-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveBook('all')}
            className={`btn btn-sm ${activeBook === 'all' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ borderRadius: '8px', fontSize: '0.8rem', whiteSpace: 'nowrap' }}
          >
            All Economics Books ({ECONOMICS_BOOKS_DATA.length})
          </button>
          <button
            onClick={() => setActiveBook('micro')}
            className={`btn btn-sm ${activeBook === 'micro' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ borderRadius: '8px', fontSize: '0.8rem', background: activeBook === 'micro' ? '#16a34a' : '', borderColor: activeBook === 'micro' ? '#16a34a' : '', whiteSpace: 'nowrap' }}
          >
            1. व्यष्टि अर्थशास्त्र ({microCount})
          </button>
          <button
            onClick={() => setActiveBook('macro')}
            className={`btn btn-sm ${activeBook === 'macro' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ borderRadius: '8px', fontSize: '0.8rem', background: activeBook === 'macro' ? '#2563eb' : '', borderColor: activeBook === 'macro' ? '#2563eb' : '', whiteSpace: 'nowrap' }}
          >
            2. समष्टि अर्थशास्त्र ({macroCount})
          </button>
        </div>

        {/* Right Search Bar */}
        <div className="search-wrapper" style={{ position: 'relative', minWidth: '220px' }}>
          <Search size={14} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search Economics chapters..."
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
                    background: item.book === 'micro' ? 'rgba(22, 163, 74, 0.15)' : 'rgba(37, 99, 235, 0.15)',
                    color: item.book === 'micro' ? '#16a34a' : '#2563eb',
                    textTransform: 'uppercase'
                  }}>
                    {item.book === 'micro' ? 'व्यष्टि अर्थशास्त्र' : 'समष्टि अर्थशास्त्र'} • CH {item.chNum}
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
                    background: item.book === 'micro' ? '#16a34a' : '#2563eb',
                    borderColor: item.book === 'micro' ? '#16a34a' : '#2563eb'
                  }}
                >
                  <FileText size={14} />
                  <span>View Notes</span>
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
                  <span>Google Drive</span>
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', gridColumn: '1 / -1', color: 'var(--text-muted)' }}>
            No Economics study materials currently available.
          </div>
        )}
      </div>
    </section>
  );
};
