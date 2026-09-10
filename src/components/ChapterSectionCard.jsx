import React from 'react';
import { 
  FileText, 
  FileCode, 
  Download, 
  Eye, 
  ExternalLink, 
  Sparkles,
  BookOpenCheck
} from 'lucide-react';

export const ChapterSectionCard = ({ chapter, onPreviewPdf, onOpenSummary }) => {
  const {
    chapterNumber,
    chapterTitle,
    subject,
    className,
    pdf,
    summary
  } = chapter;

  return (
    <div 
      className="glass-card hover-lift"
      style={{
        borderRadius: '16px',
        padding: '1.5rem',
        marginBottom: '1.75rem',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
      }}
    >
      {/* Chapter Section Main Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem',
        paddingBottom: '1rem',
        marginBottom: '1.25rem',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: '1rem',
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
          }}>
            {chapterNumber || 'Ch'}
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
              <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>
                Chapter Section
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {subject} • {className}
              </span>
            </div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 800,
              color: 'var(--text-main)',
              margin: 0,
              fontFamily: "'Outfit', sans-serif"
            }}>
              Chapter {chapterNumber}: {chapterTitle}
            </h3>
          </div>
        </div>

        <span style={{
          fontSize: '0.75rem',
          fontWeight: 600,
          color: '#3b82f6',
          background: 'rgba(59, 130, 246, 0.12)',
          padding: '0.3rem 0.75rem',
          borderRadius: '999px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem'
        }}>
          <BookOpenCheck size={14} />
          2 Complete Resources
        </span>
      </div>

      {/* Two Different Sections Grid (1. Chapter PDF | 2. Chapter Summary HTML File) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
        gap: '1.25rem'
      }}>

        {/* SECTION 1: CHAPTER PDF */}
        <div style={{
          background: 'rgba(30, 41, 59, 0.4)',
          border: '1px solid var(--border-color)',
          borderRadius: '12px',
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'border-color 0.2s'
        }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.85rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#38bdf8', fontWeight: 700, fontSize: '0.875rem' }}>
                <FileText size={18} />
                <span>1. Chapter PDF Section</span>
              </div>
              <span style={{ fontSize: '0.7rem', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                PDF File
              </span>
            </div>

            <h4 style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--text-main)',
              lineHeight: 1.4,
              marginBottom: '0.5rem'
            }}>
              {pdf ? pdf.title : `Class ${className} ${subject} — Chapter ${chapterNumber} Notes PDF`}
            </h4>

            <p style={{
              fontSize: '0.825rem',
              color: 'var(--text-muted)',
              lineHeight: 1.5,
              marginBottom: '1rem'
            }}>
              {pdf ? pdf.description : `Official textbook notes, formulas, and board preparation PDF material for Chapter ${chapterNumber}.`}
            </p>

            <div style={{
              display: 'flex',
              gap: '0.75rem',
              fontSize: '0.75rem',
              color: 'var(--text-dim)',
              marginBottom: '1rem'
            }}>
              <span>📄 {pdf?.pages || 10} Pages</span>
              <span>💾 {pdf?.fileSize || '3.2 MB'}</span>
              <span>⭐ {pdf?.rating || '5.0'}</span>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            paddingTop: '0.85rem',
            borderTop: '1px solid var(--border-color)'
          }}>
            <button
              onClick={() => onPreviewPdf && onPreviewPdf(pdf || { title: `${chapterTitle} Notes PDF`, class: className, subject: subject })}
              className="btn btn-primary btn-sm"
              style={{ flex: 1, padding: '0.5rem 0.75rem', fontSize: '0.8rem', borderRadius: '8px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem' }}
            >
              <Eye size={14} />
              <span>Preview PDF</span>
            </button>

            <a
              href={pdf?.downloadUrl || pdf?.fileContentUrl || '#'}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ padding: '0.5rem 0.85rem', fontSize: '0.8rem', borderRadius: '8px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
            >
              <Download size={14} />
              <span>Download</span>
            </a>
          </div>
        </div>

        {/* SECTION 2: CHAPTER SUMMARY (HTML FILE) */}
        <div style={{
          background: 'rgba(16, 185, 129, 0.05)',
          border: '1px solid rgba(16, 185, 129, 0.25)',
          borderRadius: '12px',
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'border-color 0.2s'
        }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.85rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontWeight: 700, fontSize: '0.875rem' }}>
                <FileCode size={18} />
                <span>2. Chapter Summary (HTML File)</span>
              </div>
              <span style={{ fontSize: '0.7rem', background: 'rgba(16, 185, 129, 0.18)', color: '#10b981', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>
                HTML Document
              </span>
            </div>

            <h4 style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--text-main)',
              lineHeight: 1.4,
              marginBottom: '0.5rem'
            }}>
              {summary ? summary.title : `Chapter ${chapterNumber}: ${chapterTitle} — HTML Summary Document`}
            </h4>

            <p style={{
              fontSize: '0.825rem',
              color: 'var(--text-muted)',
              lineHeight: 1.5,
              marginBottom: '1rem'
            }}>
              {summary ? summary.description : `Interactive HTML summary document with key points, revision notes, and definitions for Chapter ${chapterNumber}.`}
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.75rem',
              color: '#10b981',
              marginBottom: '1rem',
              fontWeight: 600
            }}>
              <Sparkles size={14} />
              <span>Written in HTML format (.html file)</span>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            paddingTop: '0.85rem',
            borderTop: '1px solid rgba(16, 185, 129, 0.2)'
          }}>
            <button
              onClick={() => onOpenSummary && onOpenSummary({
                chapterNumber,
                chapterTitle,
                className,
                subject,
                title: summary?.title || `Chapter ${chapterNumber} HTML Summary`,
                htmlUrl: summary?.htmlUrl,
                htmlContent: summary?.htmlContent,
                description: summary?.description
              })}
              className="btn btn-emerald btn-sm"
              style={{
                flex: 1,
                padding: '0.5rem 0.75rem',
                fontSize: '0.8rem',
                borderRadius: '8px',
                background: '#10b981',
                color: '#ffffff',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.35rem',
                fontWeight: 700
              }}
            >
              <Eye size={14} />
              <span>Read HTML Summary</span>
            </button>

            {summary?.htmlUrl && (
              <a
                href={summary.htmlUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ padding: '0.5rem 0.85rem', fontSize: '0.8rem', borderRadius: '8px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
              >
                <ExternalLink size={14} />
                <span>Open .html</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
