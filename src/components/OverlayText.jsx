import React from 'react';

export default function OverlayText() {
  return (
    <div className="fixed inset-0 z-20 pointer-events-none flex items-start justify-center py-16 px-6">
      <div className="max-w-lg w-full text-center text-gold-400 font-cinzel leading-relaxed space-y-6 backdrop-blur-sm bg-black bg-opacity-40 p-6 rounded-md fade-in-up float-slow">
        {/* Urdu Bismillah at top */}
        <div className="text-2xl md:text-3xl font-serif mb-2 pulse-slow shimmer" dir="rtl">
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </div>

        <p>In the name of Allah</p>

        <p>The Most Beneficent, The Most Merciful</p>

        <p>With the blessings of :</p>

        <p>Late Mrs. &amp; Mr. Mohammed Khader Shareef Sahab</p>

        <p>Late Mrs. &amp; Mr. Mohammed Afzal Chouri Sahab</p>

        <p className="text-lg md:text-xl font-vibes">Mrs. &amp; Mr. Mohammel Riral Qtintof</p>

        <p>Solicits your precious presence on the auspicious occasion of the</p>

        <p className="text-2xl md:text-3xl font-bold">VALIMA CEREMONY</p>

        <p>of their elder son</p>

        <p className="text-xl md:text-2xl font-vibes">Mohammed Saqlain Shareef</p>

        <p>with MBA, Workday as DC in KSA</p>

        <p className="daughter-highlight">Daughter of</p>

        <p>Aalimah, &amp; Pharmacy</p>

        <p>Mrs. &amp; Mr. Mohammed Majid Khan</p>

        <p>Merchant Navy</p>

        <p>IN SHA ALLAH</p>

        <p>On Wednesday <span className="font-bold">03rd</span> JUNE 2026</p>

        <p>(16th Zilhajja 1447 Hjr-l)</p>

        <p>Dinner 9:00 PM</p>

        <p>At : WHITE PALACE,</p>

        <p>Near Moghal Engineering College, Opp. Maheshwari Oil Mill, Bandlaguda, Hyd.</p>

        <p>With best compliments from : Near &amp; Dear</p>
      </div>
    </div>
  );
}
