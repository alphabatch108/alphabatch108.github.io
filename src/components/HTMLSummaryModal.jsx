import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Printer, FileCode, Sparkles } from 'lucide-react';

export const HTMLSummaryModal = ({ isOpen, onClose, summaryData }) => {
  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!summaryData || !isOpen) return;

    if (summaryData.htmlContent) {
      setHtmlContent(summaryData.htmlContent);
    } else if (summaryData.htmlUrl) {
      setLoading(true);
      fetch(summaryData.htmlUrl)
        .then(res => res.text())
        .then(data => {
          setHtmlContent(data);
          setLoading(false);
        })
        .catch(err => {
          console.error('Failed to load HTML summary file:', err);
          setHtmlContent(`<div style="padding: 2rem; color: #f87171; text-align: center;">Failed to load HTML summary file from ${summaryData.htmlUrl}</div>`);
          setLoading(false);
        });
    }
  }, [summaryData, isOpen]);

  if (!isOpen || !summaryData) return null;

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(htmlContent || `<h1>${summaryData.title}</h1><div>${summaryData.description}</div>`);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  const handleOpenInNewTab = () => {
    if (summaryData.htmlUrl) {
      window.open(summaryData.htmlUrl, '_blank');
    } else {
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    }
  };

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 1100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
    >
      <div 
        className="modal-content glass-panel" 
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '920px',
          maxHeight: '92vh',
          background: 'var(--bg-card, #0f172a)',
          border: '1px solid var(--border-color, #334155)',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
        }}
      >
        {/* Modal Header */}
        <div style={{
          padding: '1.15rem 1.5rem',
          borderBottom: '1px solid var(--border-color, #334155)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(15, 23, 42, 0.8)',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'rgba(37, 99, 235, 0.15)',
              color: '#3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <FileCode size={20} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>
                  {summaryData.className || 'Class Notes'}
                </span>
                <span className="badge badge-primary" style={{ fontSize: '0.7rem' }}>
                  {summaryData.subject || 'Subject'}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Chapter Summary HTML File
                </span>
              </div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                margin: 0,
                lineHeight: 1.3
              }}>
                {summaryData.chapterTitle ? `Chapter ${summaryData.chapterNumber || ''}: ${summaryData.chapterTitle}` : summaryData.title}
              </h3>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={handlePrint}
              title="Print HTML Summary"
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem' }}
            >
              <Printer size={14} />
              <span className="hide-mobile">Print</span>
            </button>

            <button
              onClick={handleOpenInNewTab}
              title="Open HTML File in New Tab"
              className="btn btn-primary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem' }}
            >
              <ExternalLink size={14} />
              <span>Open HTML File</span>
            </button>

            <button
              onClick={onClose}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: 'none',
                borderRadius: '50%',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                padding: '0.45rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '0.5rem'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Content / Iframe Viewer */}
        <div style={{ flex: 1, padding: '1.25rem', overflowY: 'auto', background: '#090d16' }}>
          {loading ? (
            <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              Loading HTML Summary Document...
            </div>
          ) : summaryData.htmlUrl ? (
            <iframe
              src={summaryData.htmlUrl}
              title={summaryData.title}
              style={{
                width: '100%',
                height: '650px',
                border: 'none',
                borderRadius: '10px',
                background: '#0f172a'
              }}
            />
          ) : (
            <div 
              style={{
                background: '#0f172a',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid #334155',
                color: '#f8fafc',
                lineHeight: 1.7
              }}
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          )}
        </div>

        {/* Modal Footer */}
        <div style={{
          padding: '0.85rem 1.5rem',
          borderTop: '1px solid var(--border-color, #334155)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          background: 'rgba(15, 23, 42, 0.6)'
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <Sparkles size={14} style={{ color: '#eab308' }} />
            Official HTML Chapter Summary Document
          </span>
          <span>Press ESC or click Outside to Close</span>
        </div>
      </div>
    </div>
  );
};
