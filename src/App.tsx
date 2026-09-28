/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { SCHOOL_INFO, INITIAL_DRIVE_FOLDERS, DriveFolderConfig } from './data/schoolData';
import { HeaderNav } from './components/HeaderNav';
import { SchoolHeroBanner } from './components/SchoolHeroBanner';
import { VisionMissionCards } from './components/VisionMissionCards';
import { DriveCenterSection } from './components/DriveCenterSection';
import { ContactSection } from './components/ContactSection';
import { DriveFolderModal } from './components/DriveFolderModal';
import { ManageDriveLinksModal } from './components/ManageDriveLinksModal';
import { QuickSearchModal } from './components/QuickSearchModal';
import { ProfileTab } from './components/ProfileTab';
import { DocumentsTab } from './components/DocumentsTab';

export default function App() {
  const [activeTab, setActiveTab] = useState<'beranda' | 'profil' | 'dokumen' | 'kontak'>('beranda');

  // Custom Google Drive URLs persisted in localStorage
  const [customUrls, setCustomUrls] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('sdn2_drive_urls');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Modal states
  const [selectedFolder, setSelectedFolder] = useState<DriveFolderConfig | null>(null);
  const [showManageLinks, setShowManageLinks] = useState(false);
  const [editingFolderId, setEditingFolderId] = useState<string | null>(null);
  const [showSearchModal, setShowSearchModal] = useState(false);

  // Sync to localStorage
  const handleSaveUrls = (newUrls: Record<string, string>) => {
    setCustomUrls(newUrls);
    try {
      localStorage.setItem('sdn2_drive_urls', JSON.stringify(newUrls));
    } catch (e) {
      console.error('Failed to save Drive URLs', e);
    }
  };

  const handleOpenFolder = (folder: DriveFolderConfig) => {
    setSelectedFolder(folder);
  };

  const handleOpenLinkSettings = (folderId?: string) => {
    setEditingFolderId(folderId || null);
    setShowManageLinks(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Top Bar Navigation */}
      <HeaderNav
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenLinkSettings={() => handleOpenLinkSettings()}
        onOpenSearch={() => setShowSearchModal(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* BERANDA TAB: The Exact Split Layout from the Screenshot */}
        {activeTab === 'beranda' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Split Grid for Large Screens: Left is School Overview, Right is Drive Center */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column (5 of 12 columns on large screen) */}
              <div className="lg:col-span-6 space-y-6">
                {/* 1. Hero Banner with Students & Teachers */}
                <SchoolHeroBanner schoolName={SCHOOL_INFO.name} />

                {/* 2. Profil Sekolah (Visi & Misi Cards) */}
                <VisionMissionCards />

                {/* 3. Kontak Informasi Bar */}
                <ContactSection />
              </div>

              {/* Right Column (7 of 12 columns on large screen) */}
              <div className="lg:col-span-6">
                <DriveCenterSection
                  folders={INITIAL_DRIVE_FOLDERS}
                  customUrls={customUrls}
                  onOpenFolder={handleOpenFolder}
                  onOpenLinkSettings={handleOpenLinkSettings}
                  onOpenSearch={() => setShowSearchModal(true)}
                />
              </div>
            </div>
          </div>
        )}

        {/* PROFIL TAB: Full In-depth Profile */}
        {activeTab === 'profil' && <ProfileTab />}

        {/* DOKUMEN TAB: Searchable Repository */}
        {activeTab === 'dokumen' && (
          <DocumentsTab
            folders={INITIAL_DRIVE_FOLDERS}
            customUrls={customUrls}
            onSelectFolder={handleOpenFolder}
          />
        )}

        {/* KONTAK TAB: Dedicated Contact Page */}
        {activeTab === 'kontak' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Pusat Informasi & Pelayanan Publik
              </h2>
              <p className="text-sm text-slate-600">
                Hubungi sekretariat {SCHOOL_INFO.name} pada jam operasional kerja.
              </p>
            </div>
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} {SCHOOL_INFO.name}. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>NPSN: {SCHOOL_INFO.npsn}</span>
            <span>·</span>
            <span>Akreditasi: {SCHOOL_INFO.akreditasi}</span>
            <span>·</span>
            <span>Kurikulum Merdeka</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {selectedFolder && (
        <DriveFolderModal
          folder={selectedFolder}
          customUrl={customUrls[selectedFolder.id]}
          onClose={() => setSelectedFolder(null)}
          onEditUrl={(id) => {
            setSelectedFolder(null);
            handleOpenLinkSettings(id);
          }}
        />
      )}

      {showManageLinks && (
        <ManageDriveLinksModal
          folders={INITIAL_DRIVE_FOLDERS}
          customUrls={customUrls}
          selectedFolderId={editingFolderId}
          onSaveUrls={handleSaveUrls}
          onClose={() => setShowManageLinks(false)}
        />
      )}

      {showSearchModal && (
        <QuickSearchModal
          folders={INITIAL_DRIVE_FOLDERS}
          customUrls={customUrls}
          onClose={() => setShowSearchModal(false)}
          onSelectFolder={handleOpenFolder}
        />
      )}
    </div>
  );
}
