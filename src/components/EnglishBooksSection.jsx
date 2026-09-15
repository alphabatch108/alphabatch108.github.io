import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  BookOpen, 
  FileText, 
  Search, 
  CheckCircle2, 
  BookMarked,
  ExternalLink,
  GraduationCap,
  Download,
  Eye
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ENGLISH_BOOKS_DATA = [
  {
    id: 'pdf-c12-eng-flamingo-ch1-summary',
    book: 'flamingo',
    type: 'prose',
    chNum: 1,
    title: 'Lesson 1: The Last Lesson (Chapter Summary & Key Points)',
    author: 'Alphonse Daudet',
    desc: 'Class 12 English Core — Flamingo Lesson - 1: The Last Lesson complete chapter summary, key takeaways, character sketches of M. Hamel & Franz, and most important points.',
    category: 'Summary & Key Points',
    fileContentUrl: 'https://drive.google.com/file/d/1a4y_zYUysVyIVICuXhmyquO6853kxpAp/view?usp=drive_link',
    driveUrl: 'https://drive.google.com/file/d/1a4y_zYUysVyIVICuXhmyquO6853kxpAp/view?usp=drive_link',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1a4y_zYUysVyIVICuXhmyquO6853kxpAp'
  }
];

export const EnglishBooksSection = () => {
  const { setViewingPdf, adsSettings } = useApp();
  const [selectedBook, setSelectedBook] = useState('flamingo'); // 'flamingo' | 'vistas'
  const [flamingoFilter, setFlamingoFilter] = useState('all'); // 'all' | 'prose' | 'poetry'
  const [searchQuery, setSearchQuery] = useState('');

  const flamingoChapters = ENGLISH_BOOKS_DATA.filter(ch => ch.book === 'flamingo');
  const flamingoProse = flamingoChapters.filter(ch => ch.type === 'prose');
  const flamingoPoetry = flamingoChapters.filter(ch => ch.type === 'poetry');
  const vistasChapters = ENGLISH_BOOKS_DATA.filter(ch => ch.book === 'vistas');

  // Filter items by book option, sub-type, and search query
  const filteredChapters = ENGLISH_BOOKS_DATA.filter(item => {
    if (item.book !== selectedBook) return false;
    if (selectedBook === 'flamingo' && flamingoFilter !== 'all' && item.type !== flamingoFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.author.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handlePreviewNotes = (item) => {
    setViewingPdf({
      id: item.id,
      title: `Class 12 English — ${item.title} (${item.author})`,
      className: 'Class 12 Arts',
      subject: 'English',
      category: item.category,
      fileSize: '3.0 MB',
      pages: 10,
      author: item.author,
      description: item.desc,
      fileContentUrl: item.fileContentUrl,
      downloadUrl: item.downloadUrl
    });
  };

  const handleDownloadNotes = (item, e) => {
    if (e) e.stopPropagation();
    try {
      confetti({ particleCount: 75, spread: 80, origin: { y: 0.7 } });
    } catch (err) {}

    // Monetag Direct Link Ad Integration
    const directAdUrl = adsSettings?.directLink || 'https://omg10.com/4/11805675';
    if (directAdUrl) {
      try {
        window.open(directAdUrl, '_blank');
      } catch (err) {}
    }

    const dlUrl = item.downloadUrl || item.fileContentUrl;
    if (dlUrl) {
      window.open(dlUrl, '_blank');
    }
  };

  return (
    <section id="class12-english-books-section" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
      
      {/* Section Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
          <span className="badge badge-primary" style={{ background: '#2563eb', color: '#fff' }}>
            Class 12 English Core
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>NCERT Textbooks & Chapters</span>
        </div>
        <h2 style={{
          fontSize: '1.65rem',
          fontWeight: 800,
          color: 'var(--text-main)',
          letterSpacing: '-0.02em',
          fontFamily: "'Outfit', sans-serif"
        }}>
          Class 12 English Textbooks: Flamingo & Vistas
        </h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem', maxWidth: '720px' }}>
          Select a textbook option below to view chapter notes, prose, poetry, and supplementary reader study materials.
        </p>
      </div>

      {/* 2 BOOK SELECTION CARDS (PROMINENT OPTIONS WITH COVER LOGOS) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.25rem',
        marginBottom: '1.75rem'
      }}>
        {/* OPTION 1: FLAMINGO BOOK CARD */}
        <div
          onClick={() => setSelectedBook('flamingo')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            padding: '1.25rem',
            borderRadius: '16px',
            background: selectedBook === 'flamingo' 
              ? 'linear-gradient(135deg, rgba(225, 29, 72, 0.15), rgba(244, 63, 94, 0.05))' 
              : 'var(--bg-card)',
            border: selectedBook === 'flamingo' 
              ? '2px solid #f43f5e' 
              : '1px solid var(--border-color)',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            boxShadow: selectedBook === 'flamingo' 
              ? '0 8px 24px rgba(244, 63, 94, 0.2)' 
              : '0 4px 12px rgba(0,0,0,0.04)',
            position: 'relative'
          }}
          className="hover-lift"
        >
          {/* Cover Logo Image */}
          <div style={{
            width: '88px',
            height: '124px',
            borderRadius: '8px',
            overflow: 'hidden',
            flexShrink: 0,
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <img 
              src="/images/flamingo_cover.png" 
              alt="Flamingo Textbook Logo" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
              <span style={{ fontSize: '0.725rem', fontWeight: 700, color: '#f43f5e', textTransform: 'uppercase' }}>
                Option 1 • Main Textbook
              </span>
              {selectedBook === 'flamingo' && (
                <CheckCircle2 size={16} style={{ color: '#f43f5e', marginLeft: 'auto' }} />
              )}
            </div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: 800,
              color: 'var(--text-main)',
              marginBottom: '0.25rem',
              fontFamily: "'Outfit', sans-serif"
            }}>
              Flamingo
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4, marginBottom: '0.65rem' }}>
              Textbook for Class XII ({flamingoProse.length} Prose & {flamingoPoetry.length} Poetry Chapters)
            </p>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span className="badge" style={{ background: 'rgba(244, 63, 94, 0.15)', color: '#f43f5e', fontSize: '0.725rem' }}>
                {flamingoProse.length} Prose
              </span>
              <span className="badge" style={{ background: 'rgba(244, 63, 94, 0.15)', color: '#f43f5e', fontSize: '0.725rem' }}>
                {flamingoPoetry.length} Poems
              </span>
            </div>
          </div>
        </div>

        {/* OPTION 2: VISTAS BOOK CARD */}
        <div
          onClick={() => setSelectedBook('vistas')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            padding: '1.25rem',
            borderRadius: '16px',
            background: selectedBook === 'vistas' 
              ? 'linear-gradient(135deg, rgba(13, 148, 136, 0.15), rgba(45, 212, 191, 0.05))' 
              : 'var(--bg-card)',
            border: selectedBook === 'vistas' 
              ? '2px solid #0d9488' 
              : '1px solid var(--border-color)',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            boxShadow: selectedBook === 'vistas' 
              ? '0 8px 24px rgba(13, 148, 136, 0.2)' 
              : '0 4px 12px rgba(0,0,0,0.04)',
            position: 'relative'
          }}
          className="hover-lift"
        >
          {/* Cover Logo Image */}
          <div style={{
            width: '88px',
            height: '124px',
            borderRadius: '8px',
            overflow: 'hidden',
            flexShrink: 0,
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <img 
              src="/images/vistas_cover.jpg" 
              alt="Vistas Supplementary Reader Logo" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
              <span style={{ fontSize: '0.725rem', fontWeight: 700, color: '#0d9488', textTransform: 'uppercase' }}>
                Option 2 • Supplementary
              </span>
              {selectedBook === 'vistas' && (
                <CheckCircle2 size={16} style={{ color: '#0d9488', marginLeft: 'auto' }} />
              )}
            </div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: 800,
              color: 'var(--text-main)',
              marginBottom: '0.25rem',
              fontFamily: "'Outfit', sans-serif"
            }}>
              Vistas
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4, marginBottom: '0.65rem' }}>
              Supplementary Reader in English for Class XII
            </p>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span className="badge" style={{ background: 'rgba(13, 148, 136, 0.15)', color: '#0d9488', fontSize: '0.725rem' }}>
                {vistasChapters.length} Reader Chapters
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* FILTER & SEARCH BAR CONTROL BAR */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '1.5rem',
        padding: '0.75rem 1rem',
        borderRadius: '12px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)'
      }}>
        {/* Left Sub-filters */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {selectedBook === 'flamingo' ? (
            <>
              <button
                onClick={() => setFlamingoFilter('all')}
                style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: flamingoFilter === 'all' ? 700 : 500,
                  background: flamingoFilter === 'all' ? '#f43f5e' : 'transparent',
                  color: flamingoFilter === 'all' ? '#fff' : 'var(--text-muted)',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                All Chapters ({flamingoChapters.length})
              </button>
              <button
                onClick={() => setFlamingoFilter('prose')}
                style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: flamingoFilter === 'prose' ? 700 : 500,
                  background: flamingoFilter === 'prose' ? '#f43f5e' : 'transparent',
                  color: flamingoFilter === 'prose' ? '#fff' : 'var(--text-muted)',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Prose ({flamingoProse.length})
              </button>
              <button
                onClick={() => setFlamingoFilter('poetry')}
                style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: flamingoFilter === 'poetry' ? 700 : 500,
                  background: flamingoFilter === 'poetry' ? '#f43f5e' : 'transparent',
                  color: flamingoFilter === 'poetry' ? '#fff' : 'var(--text-muted)',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Poetry ({flamingoPoetry.length})
              </button>
            </>
          ) : (
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0d9488', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <BookMarked size={16} /> Showing All Vistas Supplementary Chapters ({vistasChapters.length})
            </span>
          )}
        </div>

        {/* Right Search Bar */}
        <div style={{ position: 'relative', minWidth: '220px' }}>
          <Search size={14} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search chapter or author..."
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
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
        gap: '1.25rem'
      }}>
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
                    background: item.book === 'flamingo' 
                      ? (item.type === 'poetry' ? 'rgba(168, 85, 247, 0.15)' : 'rgba(244, 63, 94, 0.15)')
                      : 'rgba(13, 148, 136, 0.15)',
                    color: item.book === 'flamingo'
                      ? (item.type === 'poetry' ? '#a855f7' : '#f43f5e')
                      : '#0d9488',
                    textTransform: 'uppercase'
                  }}>
                    {item.book === 'flamingo' ? (item.type === 'poetry' ? `POETRY ${item.chNum}` : `PROSE ${item.chNum}`) : `VISTAS CH ${item.chNum}`}
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
                  By <strong style={{ color: 'var(--text-muted)' }}>{item.author}</strong>
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
                  className="btn btn-secondary btn-sm hover-lift"
                  style={{
                    fontSize: '0.785rem',
                    padding: '0.5rem 0.5rem',
                    borderRadius: '8px',
                    gap: '0.35rem'
                  }}
                >
                  <Eye size={14} />
                  <span>Preview</span>
                </button>

                <button
                  onClick={(e) => handleDownloadNotes(item, e)}
                  className="btn btn-primary btn-sm hover-lift btn-glow"
                  style={{
                    fontSize: '0.785rem',
                    padding: '0.5rem 0.5rem',
                    borderRadius: '8px',
                    gap: '0.35rem',
                    background: item.book === 'flamingo' ? '#f43f5e' : '#0d9488',
                    borderColor: item.book === 'flamingo' ? '#f43f5e' : '#0d9488'
                  }}
                >
                  <Download size={14} />
                  <span>Download PDF</span>
                </button>

                <a
                  href={item.fileContentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--accent-cyan)',
                    fontWeight: 600,
                    textDecoration: 'none',
                    gridColumn: '1 / -1',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.35rem',
                    marginTop: '0.25rem'
                  }}
                  className="hover-lift"
                >
                  <span>Open directly in Google Drive</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', gridColumn: '1 / -1', color: 'var(--text-muted)' }}>
            No chapters match your search query "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  );
};

