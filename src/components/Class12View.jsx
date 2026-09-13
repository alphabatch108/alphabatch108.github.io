import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { AdBanner } from './AdBanner';
import { ChapterSectionCard } from './ChapterSectionCard';
import { EnglishBooksSection } from './EnglishBooksSection';
import { HindiBooksSection } from './HindiBooksSection';
import { GeographyBooksSection } from './GeographyBooksSection';
import { 
  Languages, 
  BookOpen, 
  Globe2, 
  Landmark, 
  Monitor, 
  Code, 
  Brain, 
  Activity, 
  Calendar, 
  FileText, 
  HelpCircle,
  FileCheck2,
  Download,
  ExternalLink,
  ScrollText,
  TrendingUp,
  PlusCircle,
  FolderOpen
} from 'lucide-react';

export const Class12View = () => {
  const { 
    setActiveTab, 
    setSelectedClass, 
    setSelectedSubject, 
    pdfs, 
    setPdfViewerOpen, 
    setSelectedPdf, 
    setViewingPdf,
    chapters = [],
    setActiveSummary,
    setUploadModalOpen
  } = useApp();

  const [activeSubjectFilter, setActiveSubjectFilter] = useState('All');




  const itDbmsPdf = pdfs.find(p => p.id === 'pdf-c12-it-dbms-30q');

  // Filter Class 12 chapters
  const class12Chapters = (chapters || []).filter(ch => ch.class === 'class-12-arts' || ch.class === 'class-12' || ch.className?.includes('12'));

  const filteredChapters = activeSubjectFilter === 'All'
    ? class12Chapters
    : class12Chapters.filter(ch => {
        const sub = (ch.subject || '').toLowerCase();
        const filt = activeSubjectFilter.toLowerCase();
        return sub.includes(filt) || filt.includes(sub);
      });

  const handleSubjectClick = (subjName) => {
    if (subjName === 'English' || subjName === 'Hindi' || subjName === 'Geography') {
      setActiveSubjectFilter(subjName);
    } else {
      setActiveTab('notes', 'class-12-arts', subjName);
    }
  };

  const c12Subjects = [
    {
      id: 'his',
      name: 'History',
      desc: 'Themes in Indian History Parts I, II & III with timeline & maps.',
      icon: ScrollText
    },
    {
      id: 'pol',
      name: 'Political Science',
      desc: 'Contemporary World Politics and Politics in India.',
      icon: Landmark
    },
    {
      id: 'geo',
      name: 'Geography',
      desc: 'मानव भूगोल के मूल सिद्धांत एवं भारत: लोग और अर्थव्यवस्था।',
      icon: Globe2
    },
    {
      id: 'eco',
      name: 'Economics',
      desc: 'Introductory Macroeconomics and Indian Economic Development.',
      icon: TrendingUp
    },
    {
      id: 'hin',
      name: 'Hindi',
      desc: 'आरोह एवं वितान पाठ्यपुस्तकों की सम्पूर्ण अध्ययन सामग्री।',
      icon: Languages
    },
    {
      id: 'eng',
      name: 'English',
      desc: 'Flamingo and Vistas chapters, prose, poetry, and supplementary reader notes.',
      icon: BookOpen
    },
    {
      id: 'psy',
      name: 'Psychology',
      desc: 'Understanding human behavior, cognition, and emotions.',
      icon: Brain
    },
    {
      id: 'it',
      name: 'Information Technology (IT)',
      desc: 'Database management, web applications, and security.',
      icon: Monitor
    },
    {
      id: 'cs',
      name: 'Computer Science',
      desc: 'Python programming, networking, and SQL basics.',
      icon: Code
    },
    {
      id: 'pe',
      name: 'Physical Education',
      desc: 'Sports management, physiology, and training methods.',
      icon: Activity
    }
  ];

  return (
    <div style={{ maxWidth: '100%', margin: '0 auto' }}>
      
      {/* Breadcrumb */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        fontSize: '0.85rem',
        color: 'var(--text-muted)',
        marginBottom: '1rem'
      }}>
        <span 
          onClick={() => { setSelectedClass('all'); setActiveTab('home'); }} 
          style={{ cursor: 'pointer' }}
          className="hover-lift"
        >
          Home
        </span>
        <span>&gt;</span>
        <span style={{ color: '#2563eb', fontWeight: 600 }}>Class 12</span>
        {activeSubjectFilter !== 'All' && (
          <>
            <span>&gt;</span>
            <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{activeSubjectFilter}</span>
          </>
        )}
      </div>

      {/* Page Heading & Subtitle */}
      <h1 style={{
        fontSize: 'clamp(2rem, 4vw, 2.75rem)',
        fontWeight: 800,
        color: 'var(--text-main)',
        marginBottom: '0.5rem',
        fontFamily: "'Outfit', sans-serif"
      }}>
        Class 12 Subjects
      </h1>
      <p style={{
        fontSize: '0.925rem',
        color: 'var(--text-muted)',
        maxWidth: '750px',
        lineHeight: 1.6,
        marginBottom: '1.5rem'
      }}>
        Comprehensive study materials, notes, and resources for Class 12 Arts stream.
      </p>

      {/* Top Banner in Main Area */}
      <AdBanner slot="homepageBanner" type="728x90" label="Advertisement (728x90)" />

      {/* 2-Column Main Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 3fr) minmax(0, 1.1fr)',
        gap: '2rem',
        alignItems: 'start',
        marginTop: '1.5rem'
      }} className="class12-layout-grid">
        
        {/* Main Content Column (Left) */}
        <div>
          {/* Subject Filter Pills Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '0.5rem',
            marginBottom: '1.5rem'
          }}>
            <button
              onClick={() => setActiveSubjectFilter('All')}
              className={`btn btn-sm ${activeSubjectFilter === 'All' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ borderRadius: '9999px', padding: '0.35rem 0.9rem', fontSize: '0.8rem', whiteSpace: 'nowrap' }}
            >
              All Subjects
            </button>
            {c12Subjects.map(s => (
              <button
                key={s.id}
                onClick={() => handleSubjectClick(s.name)}
                className={`btn btn-sm ${activeSubjectFilter === s.name ? 'btn-primary' : 'btn-secondary'}`}
                style={{ borderRadius: '9999px', padding: '0.35rem 0.9rem', fontSize: '0.8rem', whiteSpace: 'nowrap' }}
              >
                {s.name}
              </button>
            ))}
          </div>

          {/* VIEW A: ALL SUBJECTS GRID (Shown when activeSubjectFilter === 'All') */}
          {activeSubjectFilter === 'All' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2rem'
            }}>
              {c12Subjects.map((subj) => {
                const IconComp = subj.icon;
                return (
                  <div
                    key={subj.id}
                    onClick={() => handleSubjectClick(subj.name)}
                    style={{
                      padding: '1.5rem 1.25rem',
                      borderRadius: '12px',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start'
                    }}
                    className="hover-lift"
                  >
                    {/* Square Blue Icon Container */}
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: '#2563eb',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.15rem'
                    }}>
                      <IconComp size={22} />
                    </div>

                    <h3 style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: 'var(--text-main)',
                      marginBottom: '0.4rem',
                      fontFamily: "'Outfit', sans-serif"
                    }}>
                      {subj.name}
                    </h3>

                    <p style={{
                      fontSize: '0.825rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.5,
                      margin: 0
                    }}>
                      {subj.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          )}

          {/* VIEW B: ENGLISH SUBJECT SECTION (Shown strictly inside English section) */}
          {(activeSubjectFilter === 'English' || activeSubjectFilter === 'eng') && (
            <div style={{ marginBottom: '2rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--border-color)'
              }}>
                <button
                  onClick={() => setActiveSubjectFilter('All')}
                  className="btn btn-secondary btn-sm hover-lift"
                  style={{ borderRadius: '8px', fontSize: '0.8rem' }}
                >
                  ← Back to All Subjects
                </button>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#2563eb' }}>
                  Class 12 Arts / English Section
                </span>
              </div>
              <EnglishBooksSection />
            </div>
          )}

          {/* VIEW C: HINDI SUBJECT SECTION (Shown strictly inside Hindi section) */}
          {(activeSubjectFilter === 'Hindi' || activeSubjectFilter === 'hin') && (
            <div style={{ marginBottom: '2rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--border-color)'
              }}>
                <button
                  onClick={() => setActiveSubjectFilter('All')}
                  className="btn btn-secondary btn-sm hover-lift"
                  style={{ borderRadius: '8px', fontSize: '0.8rem' }}
                >
                  ← Back to All Subjects
                </button>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ea580c' }}>
                  Class 12 Arts / Hindi Section
                </span>
              </div>
              <HindiBooksSection />
            </div>
          )}

          {/* VIEW D: GEOGRAPHY SUBJECT SECTION (Shown strictly inside Geography section) */}
          {(activeSubjectFilter === 'Geography' || activeSubjectFilter === 'geo') && (
            <div style={{ marginBottom: '2rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--border-color)'
              }}>
                <button
                  onClick={() => setActiveSubjectFilter('All')}
                  className="btn btn-secondary btn-sm hover-lift"
                  style={{ borderRadius: '8px', fontSize: '0.8rem' }}
                >
                  ← Back to All Subjects
                </button>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#059669' }}>
                  Class 12 Arts / Geography Section
                </span>
              </div>
              <GeographyBooksSection />
            </div>
          )}

          {/* Middle Banner (Responsive) */}
          <AdBanner slot="middleBanner" type="responsive" label="Advertisement (Responsive)" />


          {/* Featured Notes Section: Class 12 IT Database Management System (DBMS) 30 1 Mark Questions */}
          {itDbmsPdf && (
            <div style={{
              padding: '1.75rem 2rem',
              borderRadius: '16px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              marginTop: '1.5rem',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                <span className="badge badge-emerald">Featured Resource</span>
                <span className="badge badge-primary" style={{ background: '#0891b2', color: '#fff' }}>IT (Information Tech)</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Class 12 • DBMS Topic</span>
              </div>

              <h3 style={{
                fontSize: '1.35rem',
                fontWeight: 800,
                color: 'var(--text-main)',
                marginBottom: '0.5rem',
                fontFamily: "'Outfit', sans-serif"
              }}>
                Class 12 IT — Database Management System: 30 Most Important 1 Mark Questions
              </h3>

              <p style={{
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                marginBottom: '1.5rem'
              }}>
                Top 30 expected 1-mark objective questions, MCQs, fill-in-the-blanks, and key concepts for Class 12 IT Database Management System (DBMS) CBSE board exam preparation.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.85rem' }}>
                {/* Direct Download Button */}
                <a
                  href={itDbmsPdf.downloadUrl || itDbmsPdf.fileContentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary hover-lift"
                  style={{ padding: '0.65rem 1.4rem', borderRadius: '8px', fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#0891b2', borderColor: '#0891b2' }}
                >
                  <Download size={16} />
                  <span>Download PDF</span>
                </a>

                {/* View PDF Modal Button */}
                <button
                  onClick={() => setViewingPdf(itDbmsPdf)}
                  className="btn btn-secondary hover-lift"
                  style={{ padding: '0.65rem 1.4rem', borderRadius: '8px', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <FileText size={16} />
                  <span>Preview Notes</span>
                </button>

                {/* Open Google Drive Link Button */}
                <a
                  href={itDbmsPdf.fileContentUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#0891b2',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    marginLeft: '0.5rem'
                  }}
                  className="hover-lift"
                >
                  <span>Open in Google Drive</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          )}


        </div>

        {/* Sidebar Column (Right) */}
        <div>
          {/* Square Ad Banner matching Image 4 */}
          <AdBanner slot="sidebar" type="300x250" label="Advertisement (300x250)" />

          {/* Quick Links Card matching Image 4 */}
          <div style={{
            padding: '1.5rem',
            borderRadius: '12px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            marginTop: '1.5rem'
          }}>
            <h3 style={{
              fontSize: '1.15rem',
              fontWeight: 800,
              color: 'var(--text-main)',
              marginBottom: '1.25rem',
              paddingBottom: '0.75rem',
              borderBottom: '1px solid var(--border-color)',
              fontFamily: "'Outfit', sans-serif"
            }}>
              Quick Links
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              <button
                onClick={() => { setSelectedClass('class-12-arts'); setActiveTab('notes'); }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-main)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  textAlign: 'left',
                  padding: '0.2rem 0'
                }}
                className="hover-lift"
              >
                <Calendar size={16} style={{ color: 'var(--text-muted)' }} />
                <span>Exam Syllabus 2026</span>
              </button>

              <button
                onClick={() => { setSelectedClass('class-12-arts'); setActiveTab('notes'); }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-main)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  textAlign: 'left',
                  padding: '0.2rem 0'
                }}
                className="hover-lift"
              >
                <FileText size={16} style={{ color: 'var(--text-muted)' }} />
                <span>Previous Year Papers</span>
              </button>

              <button
                onClick={() => setActiveTab('support')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-main)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  textAlign: 'left',
                  padding: '0.2rem 0'
                }}
                className="hover-lift"
              >
                <HelpCircle size={16} style={{ color: 'var(--text-muted)' }} />
                <span>Mock Tests</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Banner */}
      <AdBanner slot="footer" type="728x90" label="Advertisement Banner (728x90)" />

      <style>{`
        @media (max-width: 900px) {
          .class12-layout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
