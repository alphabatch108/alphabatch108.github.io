import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  BookOpen, 
  FileText, 
  Search, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Feather, 
  BookMarked,
  ArrowRight,
  GraduationCap
} from 'lucide-react';

export const ENGLISH_BOOKS_DATA = [
  // FLAMINGO PROSE
  {
    id: 'flam-p1',
    book: 'flamingo',
    type: 'prose',
    chNum: 1,
    title: 'The Last Lesson',
    author: 'Alphonse Daudet',
    category: 'Flamingo • Prose',
    desc: 'Theme of linguistic chauvinism, patriotic feelings, and M. Hamel’s final emotional French class in Alsace & Lorraine.',
    htmlContent: `
      <div style="padding: 1.5rem; font-family: 'Outfit', sans-serif; color: #f8fafc; line-height: 1.7;">
        <div style="background: rgba(225, 29, 72, 0.15); padding: 0.5rem 1rem; border-radius: 8px; color: #f43f5e; font-weight: 700; font-size: 0.85rem; display: inline-block; margin-bottom: 1rem;">
          FLAMINGO PROSE • CHAPTER 1
        </div>
        <h2 style="color: #fda4af; font-size: 1.6rem; margin-bottom: 0.5rem;">The Last Lesson</h2>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 1.25rem;">By <strong>Alphonse Daudet</strong></p>

        <h3 style="color: #f43f5e; font-size: 1.15rem; margin-top: 1.25rem;">Core Theme & Key Points</h3>
        <ul style="padding-left: 1.25rem;">
          <li><strong>Historical Context:</strong> Set during the Franco-Prussian War (1870-1871) when Alsace and Lorraine were occupied by Prussian forces.</li>
          <li><strong>Language Injunction:</strong> An order from Berlin arrived forbidding French instruction in schools of Alsace/Lorraine; only German was to be taught.</li>
          <li><strong>Franz’s Realization:</strong> Franz, who used to dread M. Hamel’s ruler and grammar tests, suddenly realizes how precious his mother tongue French is.</li>
          <li><strong>M. Hamel’s Dignity:</strong> Dressed in his finest green coat and frilled shirt, M. Hamel calls French "the most beautiful, clearest, and most logical language in the world."</li>
          <li><strong>Emotional Finale:</strong> Unable to speak due to overwhelming emotion as church bells strike 12, M. Hamel writes <em>"Vive La France!"</em> (Long Live France!) on the blackboard.</li>
        </ul>
      </div>
    `
  },
  {
    id: 'flam-p2',
    book: 'flamingo',
    type: 'prose',
    chNum: 2,
    title: 'Lost Spring',
    author: 'Anees Jung',
    category: 'Flamingo • Prose',
    desc: 'Stories of stolen childhood — Saheb-e-Alam (ragpicker in Seemapuri) and Mukesh (bangle maker in Firozabad).',
    htmlContent: `
      <div style="padding: 1.5rem; font-family: 'Outfit', sans-serif; color: #f8fafc; line-height: 1.7;">
        <div style="background: rgba(225, 29, 72, 0.15); padding: 0.5rem 1rem; border-radius: 8px; color: #f43f5e; font-weight: 700; font-size: 0.85rem; display: inline-block; margin-bottom: 1rem;">
          FLAMINGO PROSE • CHAPTER 2
        </div>
        <h2 style="color: #fda4af; font-size: 1.6rem; margin-bottom: 0.5rem;">Lost Spring: Stories of Stolen Childhood</h2>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 1.25rem;">By <strong>Anees Jung</strong></p>

        <h3 style="color: #f43f5e; font-size: 1.15rem;">Part I: Saheb-e-Alam (Seemapuri, Delhi)</h3>
        <p>Saheb, a refugee from Bangladesh, roams Delhi streets looking for gold in garbage dumps. Garbage is daily bread for adults, but wrapped in wonder for children.</p>

        <h3 style="color: #f43f5e; font-size: 1.15rem; margin-top: 1rem;">Part II: Mukesh (Firozabad)</h3>
        <p>Mukesh belongs to a family of bangle makers in Firozabad. Despite working in dingy glass furnaces that cause blindness, Mukesh dares to dream of becoming a motor mechanic.</p>
      </div>
    `
  },
  {
    id: 'flam-p3',
    book: 'flamingo',
    type: 'prose',
    chNum: 3,
    title: 'Deep Water',
    author: 'William Douglas',
    category: 'Flamingo • Prose',
    desc: 'Overcoming terrifying hydrophobia from a YMCA pool incident through sheer willpower and a professional instructor.',
    htmlContent: `
      <div style="padding: 1.5rem; font-family: 'Outfit', sans-serif; color: #f8fafc; line-height: 1.7;">
        <div style="background: rgba(225, 29, 72, 0.15); padding: 0.5rem 1rem; border-radius: 8px; color: #f43f5e; font-weight: 700; font-size: 0.85rem; display: inline-block; margin-bottom: 1rem;">
          FLAMINGO PROSE • CHAPTER 3
        </div>
        <h2 style="color: #fda4af; font-size: 1.6rem; margin-bottom: 0.5rem;">Deep Water</h2>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 1.25rem;">By <strong>William Douglas</strong></p>
        <p><strong>Roosevelt’s Quote:</strong> <em>"All we have to fear is fear itself."</em></p>
        <p>William Douglas recounts his childhood terror of water starting from California beach (age 3-4) and YMCA pool (age 10-11) where a bully threw him into deep water. By hiring a dedicated swimming instructor and swimming across Lake Wentworth, he conquered his terror.</p>
      </div>
    `
  },
  {
    id: 'flam-p4',
    book: 'flamingo',
    type: 'prose',
    chNum: 4,
    title: 'The Rattrap',
    author: 'Selma Lagerlöf',
    category: 'Flamingo • Prose',
    desc: 'Essential human goodness in a cynical peddler awakened by Edla Willmansson’s selfless kindness and hospitality.',
    htmlContent: `
      <div style="padding: 1.5rem; font-family: 'Outfit', sans-serif; color: #f8fafc; line-height: 1.7;">
        <div style="background: rgba(225, 29, 72, 0.15); padding: 0.5rem 1rem; border-radius: 8px; color: #f43f5e; font-weight: 700; font-size: 0.85rem; display: inline-block; margin-bottom: 1rem;">
          FLAMINGO PROSE • CHAPTER 4
        </div>
        <h2 style="color: #fda4af; font-size: 1.6rem; margin-bottom: 0.5rem;">The Rattrap</h2>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 1.25rem;">By <strong>Selma Lagerlöf</strong></p>
        <p>A poor vagabond selling wire rattraps believes the entire world is a big rattrap offering riches, food, and shelter as bait. After stealing 30 kronor from a generous crofter, he gets lost in Ramsjö forest. Edla Willmansson’s true Christmas kindness reforms him, and he returns the stolen money signed as 'Captain von Stahle'.</p>
      </div>
    `
  },
  {
    id: 'flam-p5',
    book: 'flamingo',
    type: 'prose',
    chNum: 5,
    title: 'Indigo',
    author: 'Louis Fischer',
    category: 'Flamingo • Prose',
    desc: 'Rajkumar Shukla’s tenacity bringing Gandhi to Champaran (1916) to fight British landlord sharecropping injustice.',
    htmlContent: `
      <div style="padding: 1.5rem; font-family: 'Outfit', sans-serif; color: #f8fafc; line-height: 1.7;">
        <div style="background: rgba(225, 29, 72, 0.15); padding: 0.5rem 1rem; border-radius: 8px; color: #f43f5e; font-weight: 700; font-size: 0.85rem; display: inline-block; margin-bottom: 1rem;">
          FLAMINGO PROSE • CHAPTER 5
        </div>
        <h2 style="color: #fda4af; font-size: 1.6rem; margin-bottom: 0.5rem;">Indigo</h2>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 1.25rem;">By <strong>Louis Fischer</strong></p>
        <p>The Champaran movement (1916–17) was a turning point in Mahatma Gandhi’s life. Rajkumar Shukla, an illiterate sharecropper, brought Gandhi to Bihar. Gandhi organized peasants, refused court summons, secured a 25% refund from British planters, and taught Indians self-reliance.</p>
      </div>
    `
  },
  {
    id: 'flam-p6',
    book: 'flamingo',
    type: 'prose',
    chNum: 6,
    title: 'Poets and Pancakes',
    author: 'Asokamitran',
    category: 'Flamingo • Prose',
    desc: 'Life at Gemini Studios in Madras, makeup department (Pancake brand), Kothamangalam Subbu, and Stephen Spender’s visit.',
    htmlContent: `
      <div style="padding: 1.5rem; font-family: 'Outfit', sans-serif; color: #f8fafc; line-height: 1.7;">
        <div style="background: rgba(225, 29, 72, 0.15); padding: 0.5rem 1rem; border-radius: 8px; color: #f43f5e; font-weight: 700; font-size: 0.85rem; display: inline-block; margin-bottom: 1rem;">
          FLAMINGO PROSE • CHAPTER 6
        </div>
        <h2 style="color: #fda4af; font-size: 1.6rem; margin-bottom: 0.5rem;">Poets and Pancakes</h2>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 1.25rem;">By <strong>Asokamitran</strong></p>
        <p>A humorous account of Gemini Studios in Madras. Details the Pancake makeup brand, office boy’s frustrations, Kothamangalam Subbu (No. 2 at Gemini), Frank Buchman’s Moral Re-Armament Army, and English poet Stephen Spender’s speech.</p>
      </div>
    `
  },
  {
    id: 'flam-p7',
    book: 'flamingo',
    type: 'prose',
    chNum: 7,
    title: 'The Interview',
    author: 'Christopher Silvester',
    category: 'Flamingo • Prose',
    desc: 'Different perspectives on interviews and Umberto Eco’s secret to writing bestsellers in his empty spaces (interstices).',
    htmlContent: `
      <div style="padding: 1.5rem; font-family: 'Outfit', sans-serif; color: #f8fafc; line-height: 1.7;">
        <div style="background: rgba(225, 29, 72, 0.15); padding: 0.5rem 1rem; border-radius: 8px; color: #f43f5e; font-weight: 700; font-size: 0.85rem; display: inline-block; margin-bottom: 1rem;">
          FLAMINGO PROSE • CHAPTER 7
        </div>
        <h2 style="color: #fda4af; font-size: 1.6rem; margin-bottom: 0.5rem;">The Interview</h2>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 1.25rem;">By <strong>Christopher Silvester</strong></p>
        <p>Explores interviews as a medium of communication. Features an interview with celebrated Italian academician Umberto Eco, who shares how he utilizes empty spaces (interstices) in time to write academic papers and his global bestselling novel <em>The Name of the Rose</em>.</p>
      </div>
    `
  },
  {
    id: 'flam-p8',
    book: 'flamingo',
    type: 'prose',
    chNum: 8,
    title: 'Going Places',
    author: 'A. R. Barton',
    category: 'Flamingo • Prose',
    desc: 'Teenage daydreaming and hero-worship — Sophie’s imaginary romance with football star Danny Casey vs Jansie’s reality.',
    htmlContent: `
      <div style="padding: 1.5rem; font-family: 'Outfit', sans-serif; color: #f8fafc; line-height: 1.7;">
        <div style="background: rgba(225, 29, 72, 0.15); padding: 0.5rem 1rem; border-radius: 8px; color: #f43f5e; font-weight: 700; font-size: 0.85rem; display: inline-block; margin-bottom: 1rem;">
          FLAMINGO PROSE • CHAPTER 8
        </div>
        <h2 style="color: #fda4af; font-size: 1.6rem; margin-bottom: 0.5rem;">Going Places</h2>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 1.25rem;">By <strong>A. R. Barton</strong></p>
        <p>Focuses on adolescent fantasy vs reality. Sophie, a working-class teenager, dreams of owning boutiques or being an actress, and invents a story about meeting Irish football sensation Danny Casey. Her practical friend Jansie tries to ground her in reality.</p>
      </div>
    `
  },

  // FLAMINGO POETRY
  {
    id: 'flam-po1',
    book: 'flamingo',
    type: 'poetry',
    chNum: 1,
    title: 'My Mother at Sixty-six',
    author: 'Kamala Das',
    category: 'Flamingo • Poetry',
    desc: 'Poignant poem on aging, mortality, mother’s pale face like a late winter’s moon, and hiding pain behind a smile.',
    htmlContent: `
      <div style="padding: 1.5rem; font-family: 'Outfit', sans-serif; color: #f8fafc; line-height: 1.7;">
        <div style="background: rgba(225, 29, 72, 0.15); padding: 0.5rem 1rem; border-radius: 8px; color: #f43f5e; font-weight: 700; font-size: 0.85rem; display: inline-block; margin-bottom: 1rem;">
          FLAMINGO POETRY • POEM 1
        </div>
        <h2 style="color: #fda4af; font-size: 1.6rem; margin-bottom: 0.5rem;">My Mother at Sixty-six</h2>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 1.25rem;">By <strong>Kamala Das</strong></p>
        <p>The poet captures the fragile vulnerability of her aging mother sitting beside her in a car on the way to Cochin airport. To distract herself from the fear of loss, she looks outside at sprinting young trees and merry children. She bids farewell saying, <em>"See you soon, Amma"</em> with a mask of smiles.</p>
      </div>
    `
  },
  {
    id: 'flam-po2',
    book: 'flamingo',
    type: 'poetry',
    chNum: 2,
    title: 'Keeping Quiet',
    author: 'Pablo Neruda',
    category: 'Flamingo • Poetry',
    desc: 'Call for quiet introspection, counting to twelve, and halting destructive human activities for universal harmony.',
    htmlContent: `
      <div style="padding: 1.5rem; font-family: 'Outfit', sans-serif; color: #f8fafc; line-height: 1.7;">
        <div style="background: rgba(225, 29, 72, 0.15); padding: 0.5rem 1rem; border-radius: 8px; color: #f43f5e; font-weight: 700; font-size: 0.85rem; display: inline-block; margin-bottom: 1rem;">
          FLAMINGO POETRY • POEM 2
        </div>
        <h2 style="color: #fda4af; font-size: 1.6rem; margin-bottom: 0.5rem;">Keeping Quiet</h2>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 1.25rem;">By <strong>Pablo Neruda</strong></p>
        <p>Neruda advocates a brief pause of quietude — counting to twelve and staying still without engines, weapons, or environmental destruction. Stillness is not total inactivity (death), but an opportunity to understand ourselves and build brotherhood.</p>
      </div>
    `
  },
  {
    id: 'flam-po3',
    book: 'flamingo',
    type: 'poetry',
    chNum: 3,
    title: 'A Thing of Beauty',
    author: 'John Keats',
    category: 'Flamingo • Poetry',
    desc: 'Extract from Endymion — A thing of beauty is a joy forever, providing an endless fountain of immortal drink.',
    htmlContent: `
      <div style="padding: 1.5rem; font-family: 'Outfit', sans-serif; color: #f8fafc; line-height: 1.7;">
        <div style="background: rgba(225, 29, 72, 0.15); padding: 0.5rem 1rem; border-radius: 8px; color: #f43f5e; font-weight: 700; font-size: 0.85rem; display: inline-block; margin-bottom: 1rem;">
          FLAMINGO POETRY • POEM 3
        </div>
        <h2 style="color: #fda4af; font-size: 1.6rem; margin-bottom: 0.5rem;">A Thing of Beauty</h2>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 1.25rem;">By <strong>John Keats</strong></p>
        <p>Keats highlights that beautiful objects (sun, moon, old/young trees, daffodils, clear rills, grand tales of mighty dead) bestow eternal joy. They remove the pall of despondency and sadness from human lives like an endless fountain of heavenly nectar.</p>
      </div>
    `
  },
  {
    id: 'flam-po4',
    book: 'flamingo',
    type: 'poetry',
    chNum: 4,
    title: 'A Roadside Stand',
    author: 'Robert Frost',
    category: 'Flamingo • Poetry',
    desc: 'Critique of social inequality — rural roadside stall owners waiting for city traffic to buy berries and flowers.',
    htmlContent: `
      <div style="padding: 1.5rem; font-family: 'Outfit', sans-serif; color: #f8fafc; line-height: 1.7;">
        <div style="background: rgba(225, 29, 72, 0.15); padding: 0.5rem 1rem; border-radius: 8px; color: #f43f5e; font-weight: 700; font-size: 0.85rem; display: inline-block; margin-bottom: 1rem;">
          FLAMINGO POETRY • POEM 4
        </div>
        <h2 style="color: #fda4af; font-size: 1.6rem; margin-bottom: 0.5rem;">A Roadside Stand</h2>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 1.25rem;">By <strong>Robert Frost</strong></p>
        <p>Frost depicts the yearning of poor country folk running a roadside stand. They don't beg for bread, but for a share of city cash. He criticizes 'greedy good-doers' and politicians who promise development but lull villagers into dependence.</p>
      </div>
    `
  },
  {
    id: 'flam-po5',
    book: 'flamingo',
    type: 'poetry',
    chNum: 5,
    title: 'Aunt Jennifer’s Tigers',
    author: 'Adrienne Rich',
    category: 'Flamingo • Poetry',
    desc: 'Feminist poem contrasting Aunt Jennifer’s oppressed marriage with her bright, fearless embroidered tigers.',
    htmlContent: `
      <div style="padding: 1.5rem; font-family: 'Outfit', sans-serif; color: #f8fafc; line-height: 1.7;">
        <div style="background: rgba(225, 29, 72, 0.15); padding: 0.5rem 1rem; border-radius: 8px; color: #f43f5e; font-weight: 700; font-size: 0.85rem; display: inline-block; margin-bottom: 1rem;">
          FLAMINGO POETRY • POEM 5
        </div>
        <h2 style="color: #fda4af; font-size: 1.6rem; margin-bottom: 0.5rem;">Aunt Jennifer’s Tigers</h2>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 1.25rem;">By <strong>Adrienne Rich</strong></p>
        <p>Aunt Jennifer embroiders bright topaz tigers prancing across a screen. While her own fingers tremble under the heavy weight of Uncle's wedding band (symbol of patriarchal oppression), her art will forever remain proud, chivalric, and unafraid.</p>
      </div>
    `
  },

  // VISTAS SUPPLEMENTARY
  {
    id: 'vis-1',
    book: 'vistas',
    type: 'vistas',
    chNum: 1,
    title: 'The Third Level',
    author: 'Jack Finney',
    category: 'Vistas • Supplementary',
    desc: 'Psychological story of Charley finding the 3rd level at Grand Central Station leading to 1894 Galesburg, Illinois.',
    htmlContent: `
      <div style="padding: 1.5rem; font-family: 'Outfit', sans-serif; color: #f8fafc; line-height: 1.7;">
        <div style="background: rgba(13, 148, 136, 0.15); padding: 0.5rem 1rem; border-radius: 8px; color: #2dd4bf; font-weight: 700; font-size: 0.85rem; display: inline-block; margin-bottom: 1rem;">
          VISTAS SUPPLEMENTARY • CHAPTER 1
        </div>
        <h2 style="color: #5eead4; font-size: 1.6rem; margin-bottom: 0.5rem;">The Third Level</h2>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 1.25rem;">By <strong>Jack Finney</strong></p>
        <p>Charley, a 31-year-old New Yorker, discovers a non-existent 3rd level at Grand Central Station featuring 1890s brass spittoons, gas lamps, and old currency. His psychiatrist friend Sam calls it a 'waking-dream wish fulfillment' to escape modern anxiety, but later Sam himself disappears and sends a letter from Galesburg, Illinois in 1894.</p>
      </div>
    `
  },
  {
    id: 'vis-2',
    book: 'vistas',
    type: 'vistas',
    chNum: 2,
    title: 'The Tiger King',
    author: 'Kalki',
    category: 'Vistas • Supplementary',
    desc: 'Satire on political power — Maharaja of Pratibandapuram hunting 99 tigers to evade a death prophecy.',
    htmlContent: `
      <div style="padding: 1.5rem; font-family: 'Outfit', sans-serif; color: #f8fafc; line-height: 1.7;">
        <div style="background: rgba(13, 148, 136, 0.15); padding: 0.5rem 1rem; border-radius: 8px; color: #2dd4bf; font-weight: 700; font-size: 0.85rem; display: inline-block; margin-bottom: 1rem;">
          VISTAS SUPPLEMENTARY • CHAPTER 2
        </div>
        <h2 style="color: #5eead4; font-size: 1.6rem; margin-bottom: 0.5rem;">The Tiger King</h2>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 1.25rem;">By <strong>Kalki</strong></p>
        <p>A satire on the arrogance of autocrats. Astrologers predict the King will be killed by a tiger. The Maharaja vows to slay 100 tigers, banning tiger hunting for everyone else. He kills 99, but ironically dies from an infection caused by a tiny wooden tiger toy gifted to his son.</p>
      </div>
    `
  },
  {
    id: 'vis-3',
    book: 'vistas',
    type: 'vistas',
    chNum: 3,
    title: 'Journey to the End of the Earth',
    author: 'Tishani Doshi',
    category: 'Vistas • Supplementary',
    desc: 'Expedition to Antarctica with Geoff Green’s "Students on Ice" program — understanding global climate history.',
    htmlContent: `
      <div style="padding: 1.5rem; font-family: 'Outfit', sans-serif; color: #f8fafc; line-height: 1.7;">
        <div style="background: rgba(13, 148, 136, 0.15); padding: 0.5rem 1rem; border-radius: 8px; color: #2dd4bf; font-weight: 700; font-size: 0.85rem; display: inline-block; margin-bottom: 1rem;">
          VISTAS SUPPLEMENTARY • CHAPTER 3
        </div>
        <h2 style="color: #5eead4; font-size: 1.6rem; margin-bottom: 0.5rem;">Journey to the End of the Earth</h2>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 1.25rem;">By <strong>Tishani Doshi</strong></p>
        <p>Recounts the journey to Antarctica on Russian ship <em>Akademik Shokalskiy</em> with Geoff Green’s 'Students on Ice' program. Shows Antarctica holding half a million-year-old carbon records, highlighting how microscopic phytoplankton depletion threatens global ocean food chains.</p>
      </div>
    `
  },
  {
    id: 'vis-4',
    book: 'vistas',
    type: 'vistas',
    chNum: 4,
    title: 'The Enemy',
    author: 'Pearl S. Buck',
    category: 'Vistas • Supplementary',
    desc: 'Dr. Sadao Hoki’s conflict between national loyalty during WWII and medical duty when saving an American POW.',
    htmlContent: `
      <div style="padding: 1.5rem; font-family: 'Outfit', sans-serif; color: #f8fafc; line-height: 1.7;">
        <div style="background: rgba(13, 148, 136, 0.15); padding: 0.5rem 1rem; border-radius: 8px; color: #2dd4bf; font-weight: 700; font-size: 0.85rem; display: inline-block; margin-bottom: 1rem;">
          VISTAS SUPPLEMENTARY • CHAPTER 4
        </div>
        <h2 style="color: #5eead4; font-size: 1.6rem; margin-bottom: 0.5rem;">The Enemy</h2>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 1.25rem;">By <strong>Pearl S. Buck</strong></p>
        <p>Set in Japan during WWII. Dr. Sadao Hoki and his wife Hana find an injured American Navy sailor washed ashore near their house. Despite servant resistance and treason risks, Dr. Sadao operates on the enemy soldier, hides him, and later arranges his safe escape to a Korean fishing boat.</p>
      </div>
    `
  },
  {
    id: 'vis-5',
    book: 'vistas',
    type: 'vistas',
    chNum: 5,
    title: 'On the Face of It',
    author: 'Susan Hill',
    category: 'Vistas • Supplementary',
    desc: 'Emotional play between Derry (14-yr-old with acid-burnt face) and Mr. Lamb (elderly man with tin leg in his apple garden).',
    htmlContent: `
      <div style="padding: 1.5rem; font-family: 'Outfit', sans-serif; color: #f8fafc; line-height: 1.7;">
        <div style="background: rgba(13, 148, 136, 0.15); padding: 0.5rem 1rem; border-radius: 8px; color: #2dd4bf; font-weight: 700; font-size: 0.85rem; display: inline-block; margin-bottom: 1rem;">
          VISTAS SUPPLEMENTARY • CHAPTER 5
        </div>
        <h2 style="color: #5eead4; font-size: 1.6rem; margin-bottom: 0.5rem;">On the Face of It</h2>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 1.25rem;">By <strong>Susan Hill</strong></p>
        <p>A touching play about disability and loneliness. Derry, a bitter 14-year-old with a burnt face, sneaks into Mr. Lamb’s garden. Mr. Lamb, who lost a leg in bomb blast ('Lamey-Lamb'), teaches Derry to embrace life beyond physical appearance. Derry returns to help pick apples, only to find Mr. Lamb fallen from his ladder.</p>
      </div>
    `
  },
  {
    id: 'vis-6',
    book: 'vistas',
    type: 'vistas',
    chNum: 6,
    title: 'Memories of Childhood',
    author: 'Zitkala-Sa & Bama',
    category: 'Vistas • Supplementary',
    desc: 'Two autobiographical episodes — "The Cutting of My Long Hair" (Native American) & "We Too Are Human Beings" (Dalit India).',
    htmlContent: `
      <div style="padding: 1.5rem; font-family: 'Outfit', sans-serif; color: #f8fafc; line-height: 1.7;">
        <div style="background: rgba(13, 148, 136, 0.15); padding: 0.5rem 1rem; border-radius: 8px; color: #2dd4bf; font-weight: 700; font-size: 0.85rem; display: inline-block; margin-bottom: 1rem;">
          VISTAS SUPPLEMENTARY • CHAPTER 6
        </div>
        <h2 style="color: #5eead4; font-size: 1.6rem; margin-bottom: 0.5rem;">Memories of Childhood</h2>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 1.25rem;">By <strong>Zitkala-Sa & Bama</strong></p>
        <p>Two accounts of social marginalization: 1) Zitkala-Sa describes her trauma at Carlisle Indian School where her long hair (symbol of warrior honor in her tribe) was forcibly shorn. 2) Bama recounts seeing a Dalit landlord carrying food by a string for upper caste elders, and how studying hard empowered her to fight caste discrimination.</p>
      </div>
    `
  }
];

export const EnglishBooksSection = () => {
  const { setActiveSummary, setViewingPdf } = useApp();
  const [selectedBook, setSelectedBook] = useState('flamingo'); // 'flamingo' | 'vistas'
  const [flamingoFilter, setFlamingoFilter] = useState('all'); // 'all' | 'prose' | 'poetry'
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleOpenSummary = (item) => {
    setActiveSummary({
      title: `Class 12 English — ${item.title}`,
      chapterTitle: item.title,
      chapterNumber: item.chNum,
      subject: `Class 12 English (${item.book === 'flamingo' ? 'Flamingo' : 'Vistas'})`,
      description: item.desc,
      htmlContent: item.htmlContent
    });
  };

  const handlePreviewNotes = (item) => {
    setViewingPdf({
      id: item.id,
      title: `Class 12 English — ${item.title} (${item.author})`,
      className: 'Class 12 Arts',
      subject: 'English',
      category: item.category,
      fileSize: '2.4 MB',
      pages: 10,
      author: item.author,
      description: item.desc,
      fileContentUrl: 'https://drive.google.com/file/d/1a4y_zYUysVyIVICuXhmyquO6853kxpAp/view?usp=drive_link'
    });
  };

  return (
    <section id="class12-english-books-section" style={{ marginTop: '2.5rem', marginBottom: '3rem' }}>
      
      {/* Section Header */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
          <span className="badge badge-primary" style={{ background: '#2563eb', color: '#fff' }}>
            Class 12 English Core
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>NCERT Textbooks & Chapters</span>
        </div>
        <h2 style={{
          fontSize: '1.75rem',
          fontWeight: 800,
          color: 'var(--text-main)',
          letterSpacing: '-0.02em',
          fontFamily: "'Outfit', sans-serif"
        }}>
          Class 12 English Books: Flamingo & Vistas
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.25rem', maxWidth: '720px' }}>
          Select a book below to explore chapter summaries, prose, poetry, and supplementary reader notes for board preparation.
        </p>
      </div>

      {/* 2 BOOK SELECTION CARDS (PROMINENT OPTIONS WITH COVER LOGOS) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem'
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
            transition: 'all 0.25 ease',
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
                Option 1 • Core Textbook
              </span>
              {selectedBook === 'flamingo' && (
                <CheckCircle2 size={15} style={{ color: '#f43f5e', marginLeft: 'auto' }} />
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
              Textbook for Class XII (8 Prose & 5 Poetry Chapters)
            </p>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span className="badge" style={{ background: 'rgba(244, 63, 94, 0.15)', color: '#f43f5e', fontSize: '0.725rem' }}>
                8 Prose
              </span>
              <span className="badge" style={{ background: 'rgba(244, 63, 94, 0.15)', color: '#f43f5e', fontSize: '0.725rem' }}>
                5 Poems
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
            transition: 'all 0.25 ease',
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
                <CheckCircle2 size={15} style={{ color: '#0d9488', marginLeft: 'auto' }} />
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
                6 Reader Chapters
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
                All Chapters (13)
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
                Prose (8)
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
                Poetry (5)
              </button>
            </>
          ) : (
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0d9488', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <BookMarked size={16} /> Showing All Vistas Supplementary Chapters (6)
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
                  onClick={() => handleOpenSummary(item)}
                  className="btn btn-primary btn-sm hover-lift"
                  style={{
                    fontSize: '0.785rem',
                    padding: '0.5rem 0.5rem',
                    borderRadius: '8px',
                    gap: '0.35rem',
                    background: item.book === 'flamingo' ? '#f43f5e' : '#0d9488',
                    borderColor: item.book === 'flamingo' ? '#f43f5e' : '#0d9488'
                  }}
                >
                  <BookOpen size={14} />
                  <span>Read Summary</span>
                </button>

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
                  <FileText size={14} />
                  <span>View Notes</span>
                </button>
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
