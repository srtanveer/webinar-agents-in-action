import React from 'react';
import Slide from './Slide';

// Example slide components
export const TitleSlide = () => (
  <Slide bgColor="bg-[#0a0a0a]">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-indigo-900/30"></div>
    <div className="relative z-10">
      <img 
        src="/Public/HackTheAI-Logo-v1-(Black-bg).png" 
        alt="Hack The AI Logo" 
        className="w-96 mx-auto mb-8"
      />
      <div className="text-2xl text-gray-400 mb-4 tracking-widest uppercase">
        / INTER-UNIVERSITY HACKATHON /
      </div>
      <h1 className="text-6xl font-bold text-white mb-6">
        Behind the Scenes
      </h1>
      <p className="text-xl text-gray-300 mb-8">
        How GUCC Organized Bangladesh's Biggest AI Hackathon
      </p>
      <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg max-w-2xl mx-auto border border-white/10">
        <p className="text-lg text-white mb-2">
          <b>Organized by:</b> Green University Computer Club (GUCC)
        </p>
        <p className="text-lg text-gray-300">
          <b>Presented by:</b> Md. Showaib Rahman Tanveer • Abdul Fattah • Nurul Huda
        </p>
      </div>
      <div className="mt-12 flex justify-center items-center gap-8">
        <img src="/Public/SmythOS-for Dark BG.png" alt="SmythOS" className="h-8 opacity-70" />
        <img src="/Public/LOGO of GUCC.png" alt="GUCC" className="h-12 opacity-70" />
        <img src="/Public/GUB.png" alt="Green University" className="h-12 opacity-70" />
      </div>
    </div>
  </Slide>
);

export const IntroductionSlide = () => (
  <Slide bgColor="bg-[#0a0a0a]">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-teal-900/20"></div>
    <div className="relative z-10">
      <h2 className="text-6xl font-bold text-white mb-6">🟩 Introduction</h2>
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-cyan-500/30 text-center">
          <div className="text-5xl font-bold text-cyan-400 mb-2">242</div>
          <p className="text-gray-300 text-lg">Teams Registered</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-blue-500/30 text-center">
          <div className="text-5xl font-bold text-blue-400 mb-2">$600+</div>
          <p className="text-gray-300 text-lg">Prize Pool</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-purple-500/30 text-center">
          <div className="text-5xl font-bold text-purple-400 mb-2">50</div>
          <p className="text-gray-300 text-lg">Finalists</p>
        </div>
      </div>
      <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
        HackTheAI was an exciting national-level hackathon organized to explore the 
        potential of <span className="font-bold text-cyan-400">Generative AI</span> among university students.
      </p>
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-white/10">
          <p className="text-gray-300 text-lg">
            Brought together innovators, problem solvers, and creative minds to build 
            meaningful AI-powered projects
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-white/10">
          <p className="text-gray-300 text-lg">
            <span className="font-bold text-white">In collaboration with:</span> SmythOS, GDG Sonargaon, and Intern University
          </p>
        </div>
      </div>
    </div>
  </Slide>
);

export const AboutSlide = () => (
  <Slide bgColor="bg-gradient-to-br from-pink-900 via-rose-900 to-red-900">
    <h2 className="text-6xl font-bold text-white mb-6">🚀 About the Hackathon</h2>
    <p className="text-xl text-rose-200 leading-relaxed mb-8">
      A global initiative to empower students to learn, build, and experiment 
      with Generative AI technologies
    </p>
    <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-left">
        <h3 className="text-2xl font-bold text-white mb-3">📚 Core Objectives</h3>
        <ul className="text-rose-200 space-y-2 text-lg">
          <li>• Apply AI in real-world problems</li>
          <li>• Provide mentorship & exposure</li>
          <li>• Create university collaboration</li>
        </ul>
      </div>
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-left">
        <h3 className="text-2xl font-bold text-white mb-3">🎯 Event Details</h3>
        <ul className="text-rose-200 space-y-2 text-lg">
          <li><b>Theme:</b> Generative AI for Impact</li>
          <li><b>Type:</b> Hybrid Event</li>
          <li><b>Duration:</b> Multi-day event</li>
        </ul>
      </div>
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-left col-span-2">
        <h3 className="text-2xl font-bold text-white mb-3">� Prize Pool: $600+</h3>
        <p className="text-rose-200 text-lg">
          🥇 1st Place: $300 • 🥈 2nd Place: $200 • 🥉 3rd Place: $100
        </p>
      </div>
    </div>
  </Slide>
);

export const PlanningSlide = () => (
  <Slide bgColor="bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
    <h2 className="text-6xl font-bold text-white mb-6">🧩 Planning & Coordination</h2>
    <p className="text-xl text-emerald-200 leading-relaxed mb-6 italic">
      "Plan smart, communicate clearly, execute smoothly."
    </p>
    <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto">
      <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg">
        <h3 className="text-xl font-bold text-white mb-3">👥 Core Team</h3>
        <ul className="text-emerald-200 text-sm space-y-1">
          <li><b>Tanveer:</b> Coordination</li>
          <li><b>Abdul Fattah:</b> Technical</li>
          <li><b>Nurul Huda:</b> Logistics</li>
        </ul>
      </div>
      <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg">
        <h3 className="text-xl font-bold text-white mb-3">📋 Planning</h3>
        <ul className="text-emerald-200 text-sm space-y-1">
          <li>• Registration process</li>
          <li>• Timeline & deliverables</li>
          <li>• Volunteer assignments</li>
          <li>• Mentorship plan</li>
        </ul>
      </div>
      <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg">
        <h3 className="text-xl font-bold text-white mb-3">🛠️ Tools Used</h3>
        <ul className="text-emerald-200 text-sm space-y-1">
          <li>• Google Forms & Sheets</li>
          <li>• Google Drive</li>
          <li>• Messenger & WhatsApp</li>
          <li>• Canva & Notion</li>
        </ul>
      </div>
    </div>
  </Slide>
);

export const EventTimelineSlide = () => (
  <Slide bgColor="bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900">
    <h2 className="text-6xl font-bold text-white mb-6">📅 Event Calendar</h2>
    <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto text-left">
      <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg">
        <h3 className="text-xl font-bold text-white mb-2">14 Sep • 7-9 PM</h3>
        <p className="text-purple-200">🎯 Mock Preliminary - Practice round</p>
      </div>
      <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg">
        <h3 className="text-xl font-bold text-white mb-2">15 Sep • 6-10 PM</h3>
        <p className="text-purple-200">🔥 Final Preliminary - Main selection round</p>
      </div>
      <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg">
        <h3 className="text-xl font-bold text-white mb-2">16-17 September</h3>
        <p className="text-purple-200">💡 Idea Submission & Final Registration</p>
      </div>
      <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg">
        <h3 className="text-xl font-bold text-white mb-2">22-24 Sep (Online)</h3>
        <p className="text-purple-200">💻 Final Round - Project Development</p>
      </div>
      <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg col-span-2">
        <h3 className="text-xl font-bold text-white mb-2">25 September (Onsite)</h3>
        <p className="text-purple-200">🏢 Final Round at Green University - Project finalization & presentations</p>
      </div>
    </div>
  </Slide>
);

export const HackathonDaySlide = () => (
  <Slide bgColor="bg-gradient-to-br from-amber-900 via-orange-900 to-red-900">
    <h2 className="text-6xl font-bold text-white mb-6">💻 The Hackathon Day</h2>
    <p className="text-xl text-orange-200 mb-6">Intense, collaborative, and inspiring!</p>
    <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto text-left">
      <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg">
        <h3 className="text-2xl font-bold text-white mb-3">📝 Event Flow</h3>
        <ol className="text-orange-200 space-y-2">
          <li>1. Kickoff Session</li>
          <li>2. Team Work Time</li>
          <li>3. Mentor Check-ins</li>
          <li>4. Submission Phase</li>
          <li>5. Judging & Review</li>
          <li>6. Closing Ceremony</li>
        </ol>
      </div>
      <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg">
        <h3 className="text-2xl font-bold text-white mb-3">⚡ Atmosphere</h3>
        <ul className="text-orange-200 space-y-3">
          <li>🤝 Continuous collaboration</li>
          <li>⚡ Energetic participation</li>
          <li>💡 Creative problem-solving</li>
          <li>👨‍🏫 Expert mentor interaction</li>
        </ul>
      </div>
    </div>
  </Slide>
);

export const ChallengesSlide = () => (
  <Slide bgColor="bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900">
    <h2 className="text-6xl font-bold text-white mb-6">⚡ Challenges We Faced</h2>
    <p className="text-xl text-gray-300 mb-6 italic">
      "The key was not avoiding problems — it was solving them together."
    </p>
    <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
      <div className="bg-red-900/20 backdrop-blur-sm p-6 rounded-lg border-2 border-red-500/30">
        <h3 className="text-2xl font-bold text-red-300 mb-4">🚧 Key Challenges</h3>
        <ul className="text-gray-300 space-y-2">
          <li>• Time constraints & tight scheduling</li>
          <li>• Managing real-time communication</li>
          <li>• Technical glitches (submissions, network)</li>
          <li>• Last-minute participant queries</li>
        </ul>
      </div>
      <div className="bg-green-900/20 backdrop-blur-sm p-6 rounded-lg border-2 border-green-500/30">
        <h3 className="text-2xl font-bold text-green-300 mb-4">✅ How We Overcame</h3>
        <ul className="text-gray-300 space-y-2">
          <li>• Clear division of responsibilities</li>
          <li>• Quick internal messaging</li>
          <li>• Backup communication channels</li>
          <li>• Solution-focused mindset</li>
        </ul>
      </div>
    </div>
  </Slide>
);

export const HighlightsSlide = () => (
  <Slide bgColor="bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-900">
    <h2 className="text-6xl font-bold text-white mb-6">🌟 Highlights & Achievements</h2>
    <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto">
      <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg text-center">
        <div className="text-5xl mb-3">242</div>
        <h3 className="text-xl font-bold text-white mb-2">Teams Registered</h3>
        <p className="text-blue-200">Nationwide participation</p>
      </div>
      <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg text-center">
        <div className="text-5xl mb-3">50</div>
        <h3 className="text-xl font-bold text-white mb-2">Finalists</h3>
        <p className="text-blue-200">Advanced to final round</p>
      </div>
      <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg text-center">
        <div className="text-5xl mb-3">🎯</div>
        <h3 className="text-xl font-bold text-white mb-2">Multiple Universities</h3>
        <p className="text-blue-200">Across Bangladesh</p>
      </div>
    </div>
    <div className="mt-8 bg-white/10 backdrop-blur-sm p-6 rounded-lg max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-white mb-4">✨ Memorable Moments</h3>
      <div className="grid grid-cols-3 gap-4 text-blue-200">
        <p>🌙 Late-night project refinements</p>
        <p>🎨 Unique AI project concepts</p>
        <p>🤝 Seamless volunteer coordination</p>
      </div>
    </div>
  </Slide>
);

export const FinalSlide = () => (
  <Slide bgColor="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
    <h2 className="text-7xl font-bold text-white mb-6">🏁 Conclusion</h2>
    <p className="text-2xl text-purple-200 mb-8 italic leading-relaxed">
      "Teamwork, technology, and trust —<br />that's how HackTheAI Bangladesh happened."
    </p>
    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg max-w-3xl mx-auto mb-8">
      <p className="text-xl text-white leading-relaxed">
        More than an event — a <b>journey of learning, teamwork, and innovation</b>.
        Student-led clubs like GUCC can successfully manage national-scale events 
        and represent their institution proudly on a global platform.
      </p>
    </div>
    <div className="space-y-3 text-purple-200 text-lg">
      <p><b>💚 Thanks to:</b> SmythOS, GDG Sonargaon, Intern University, all participants & volunteers</p>
      <p><b>📧 Contact:</b> gucc@green.edu.bd</p>
    </div>
  </Slide>
);
