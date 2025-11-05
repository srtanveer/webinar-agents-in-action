import React from 'react';
import Slide from './Slide';

// Title Slide with Logo
export const TitleSlide = () => (
  <Slide bgColor="bg-[#0a0a0a]">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-indigo-900/30"></div>
    <div className="relative z-10">
      <img 
        src="/HackTheAI-Logo-v1-Black-bg.png" 
        alt="Hack The AI Logo" 
        className="w-[500px] mx-auto mb-10"
      />
      <div className="text-3xl text-gray-400 mb-6 tracking-widest uppercase">
        / INTER-UNIVERSITY HACKATHON /
      </div>
      <h1 className="text-8xl font-bold text-white mb-8">
        Behind the Scenes
      </h1>
      <p className="text-3xl text-gray-300 mb-10">
        How GUCC Organized Bangladesh's Biggest AI Hackathon
      </p>
      <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg max-w-4xl mx-auto border border-white/10">
        <p className="text-2xl text-white mb-3">
          <b>Organized by:</b> Dept. of CSE, GUB & Green University Computer Club (GUCC)
        </p>
        <p className="text-2xl text-gray-300">
          <b>Presented by:</b> Md. Showaib Rahman Tanveer • Abdul Fattah • Nurul Huda
        </p>
      </div>
      <div className="mt-14 flex justify-center items-center gap-12">
        <img src="/SmythOS-for-Dark-BG.png" alt="SmythOS" className="h-10 opacity-100" />
        <img src="/LOGO-DEPT-OF-Computer-Science-and-Engineering.png" alt="Dept of CSE" className="h-16 opacity-100" />
        <img src="/LOGO-of-GUCC.png" alt="GUCC" className="h-16 opacity-100" />
        <img src="/VGS.png" alt="VGS" className="h-16 opacity-100" />
        <img src="/GUB.png" alt="Green University" className="h-16 opacity-100" />
      </div>
    </div>
  </Slide>
);

// Introduction Slide with Stats
export const IntroductionSlide = () => (
  <Slide bgColor="bg-[#0a0a0a]">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-teal-900/20"></div>
    <div className="relative z-10">
      <h2 className="text-7xl font-bold text-white mb-10">🟩 Introduction</h2>
      <div className="grid grid-cols-4 gap-8 mb-12">
        <div className="bg-white/5 backdrop-blur-sm p-10 rounded-lg border border-cyan-500/30 text-center">
          <div className="text-7xl font-bold text-cyan-400 mb-3">242</div>
          <p className="text-gray-300 text-2xl">Teams Registered</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-10 rounded-lg border border-green-500/30 text-center">
          <div className="text-7xl font-bold text-green-400 mb-3">~726</div>
          <p className="text-gray-300 text-2xl">Students Participated</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-10 rounded-lg border border-blue-500/30 text-center">
          <div className="text-7xl font-bold text-blue-400 mb-3">$600+</div>
          <p className="text-gray-300 text-2xl">Prize Pool</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-10 rounded-lg border border-purple-500/30 text-center">
          <div className="text-7xl font-bold text-purple-400 mb-3">50</div>
          <p className="text-gray-300 text-2xl">Finalists</p>
        </div>
      </div>
      <p className="text-2xl text-gray-300 leading-relaxed mb-10 max-w-5xl mx-auto">
        HackTheAI was an exciting national-level hackathon organized to explore the 
        potential of <span className="font-bold text-cyan-400">Generative AI</span> among university students.
      </p>
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="bg-white/5 backdrop-blur-sm p-7 rounded-lg border border-white/10">
          <p className="text-gray-300 text-2xl">
            <span className="font-bold text-white">242 teams (2-3 members each)</span> brought together almost 
            <span className="font-bold text-green-400"> 726 running students</span> — innovators, problem solvers, 
            and creative minds building meaningful AI-powered projects
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-7 rounded-lg border border-white/10">
          <p className="text-gray-300 text-2xl">
            <span className="font-bold text-white">In association with:</span> GUCC Virtual Gaming Society
          </p>
        </div>
      </div>
    </div>
  </Slide>
);

// About Slide
export const AboutSlide = () => (
  <Slide bgColor="bg-[#0a0a0a]">
    <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 via-pink-900/10 to-red-900/20"></div>
    <div className="relative z-10">
      <h2 className="text-7xl font-bold text-white mb-10">🚀 About the Hackathon</h2>
      <p className="text-2xl text-gray-300 leading-relaxed mb-10">
        A global initiative to empower students to learn, build, and experiment 
        with Generative AI technologies
      </p>
      <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg text-left border border-white/10">
          <h3 className="text-3xl font-bold text-white mb-4">📚 Core Objectives</h3>
          <ul className="text-gray-300 space-y-3 text-2xl">
            <li>• Apply AI in real-world problems</li>
            <li>• Provide mentorship & exposure</li>
            <li>• Create university collaboration</li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg text-left border border-white/10">
          <h3 className="text-3xl font-bold text-white mb-4">🎯 Event Details</h3>
          <ul className="text-gray-300 space-y-3 text-2xl">
            <li><b className="text-white">Theme:</b> Generative AI for Impact</li>
            <li><b className="text-white">Type:</b> Hybrid Event</li>
            <li><b className="text-white">Duration:</b> Multi-day event</li>
          </ul>
        </div>
        <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 backdrop-blur-sm p-8 rounded-lg text-left col-span-2 border border-yellow-500/30">
          <h3 className="text-3xl font-bold text-white mb-5">💰 Prize Pool: $600+</h3>
          <div className="flex justify-around text-center">
            <div>
              <div className="text-5xl mb-2">🥇</div>
              <p className="text-yellow-400 font-bold text-3xl">$300</p>
              <p className="text-gray-300 text-xl">1st Place</p>
            </div>
            <div>
              <div className="text-5xl mb-2">🥈</div>
              <p className="text-gray-400 font-bold text-3xl">$200</p>
              <p className="text-gray-300 text-xl">2nd Place</p>
            </div>
            <div>
              <div className="text-5xl mb-2">🥉</div>
              <p className="text-orange-400 font-bold text-3xl">$100</p>
              <p className="text-gray-300 text-xl">3rd Place</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm p-8 rounded-lg text-center col-span-2 border border-blue-500/30">
          <h3 className="text-3xl font-bold text-white mb-4">💼 Career Opportunity</h3>
          <p className="text-gray-300 text-2xl">
            <span className="font-bold text-blue-400">Top Participants</span> got the opportunity to work at 
            <span className="font-bold text-white"> SmythOS</span> as <span className="font-bold text-purple-400">Software Engineers</span>
          </p>
        </div>
      </div>
    </div>
  </Slide>
);

// Planning Slide
export const PlanningSlide = () => (
  <Slide bgColor="bg-[#0a0a0a]">
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-green-900/10 to-teal-900/20"></div>
    <div className="relative z-10">
      <h2 className="text-7xl font-bold text-white mb-10">🧩 Planning & Coordination</h2>
      <p className="text-2xl text-gray-300 leading-relaxed mb-10 italic">
        "Plan smart, communicate clearly, execute smoothly."
      </p>
      {/* <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto mb-10">
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
          <h3 className="text-2xl font-bold text-emerald-400 mb-3">� Registration & Tech Management</h3>
          <p className="text-gray-300 text-lg">Participant onboarding and platform operations</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
          <h3 className="text-2xl font-bold text-emerald-400 mb-3">💰 Budget, Finance & Food</h3>
          <p className="text-gray-300 text-lg">Financial planning and meal arrangements</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
          <h3 className="text-2xl font-bold text-emerald-400 mb-3">🚗 Transportation & Logistics</h3>
          <p className="text-gray-300 text-lg">Travel coordination and resource management</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
          <h3 className="text-2xl font-bold text-emerald-400 mb-3">� Media & Branding</h3>
          <p className="text-gray-300 text-lg">Promotion, marketing, and brand presence</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
          <h3 className="text-2xl font-bold text-emerald-400 mb-3">⚖️ Judging & Evaluation</h3>
          <p className="text-gray-300 text-lg">Assessment criteria and scoring process</p>
        </div>
      </div> */}
      <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Stage 1: Core Team Formation */}
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-emerald-500/30">
          <h3 className="text-3xl font-bold text-emerald-400 mb-6">Stage 1: Core Team</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-emerald-500/10 p-4 rounded-lg">
              <h4 className="text-lg font-bold text-emerald-300 mb-2">📝 Registration & Tech</h4>
              <p className="text-gray-400 text-sm">Platform operations</p>
            </div>
            <div className="bg-emerald-500/10 p-4 rounded-lg">
              <h4 className="text-lg font-bold text-emerald-300 mb-2">💰 Budget & Food</h4>
              <p className="text-gray-400 text-sm">Financial planning</p>
            </div>
            <div className="bg-emerald-500/10 p-4 rounded-lg">
              <h4 className="text-lg font-bold text-emerald-300 mb-2">🚗 Transport</h4>
              <p className="text-gray-400 text-sm">Travel coordination</p>
            </div>
            <div className="bg-emerald-500/10 p-4 rounded-lg">
              <h4 className="text-lg font-bold text-emerald-300 mb-2">📢 Media</h4>
              <p className="text-gray-400 text-sm">Promotion & branding</p>
            </div>
            <div className="bg-emerald-500/10 p-4 rounded-lg">
              <h4 className="text-lg font-bold text-emerald-300 mb-2">⚖️ Judging</h4>
              <p className="text-gray-400 text-sm">Evaluation process</p>
            </div>
            <div className="bg-emerald-500/10 p-4 rounded-lg">
              <h4 className="text-lg font-bold text-emerald-300 mb-2">🏆 Awards</h4>
              <p className="text-gray-400 text-sm">Prize ceremony</p>
            </div>
          </div>
          <div className="bg-emerald-500/10 p-4 rounded-lg mt-4">
            <h4 className="text-lg font-bold text-emerald-300 mb-2">👥 Volunteer & Docs</h4>
            <p className="text-gray-400 text-sm">Discipline & reporting</p>
          </div>
        </div>

        {/* Stage 2: Planning Sessions */}
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-blue-500/30">
          <h3 className="text-3xl font-bold text-blue-400 mb-6">Stage 2: Planning</h3>
          <p className="text-gray-300 text-lg mb-5">Online & offline discussions to finalize:</p>
          <ul className="text-gray-300 space-y-3 text-xl">
            <li>• Registration process</li>
            <li>• Timeline & deliverables</li>
            <li>• Volunteer assignments</li>
            <li>• Mentorship plan</li>
            <li>• Final submission & judging</li>
          </ul>
        </div>

        {/* Stage 3: Tool Setup */}
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-purple-500/30">
          <h3 className="text-3xl font-bold text-purple-400 mb-6">Stage 3: Tools</h3>
          <p className="text-gray-300 text-lg mb-5">Multiple tools for seamless workflow:</p>
          <ul className="text-gray-300 space-y-3 text-lg">
            <li><b className="text-purple-300">Google Forms & Sheets</b><br />
            <span className="text-gray-400 text-base">Registration & tracking</span></li>
            <li><b className="text-purple-300">Google Drive</b><br />
            <span className="text-gray-400 text-base">File sharing & storage</span></li>
            <li><b className="text-purple-300">Messenger & WhatsApp</b><br />
            <span className="text-gray-400 text-base">Internal communication</span></li>
            <li><b className="text-purple-300">Canva</b><br />
            <span className="text-gray-400 text-base">Design & marketing</span></li>
            <li><b className="text-purple-300">Gmail & Classroom</b><br />
            <span className="text-gray-400 text-base">Updates & announcements</span></li>
          </ul>
        </div>
      </div>
    </div>
  </Slide>
);

// Training Sessions Slide with Images
export const TrainingSlide = () => (
  <Slide bgColor="bg-[#0a0a0a]">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-violet-900/10 to-purple-900/20"></div>
    <div className="relative z-10">
      <h2 className="text-7xl font-bold text-white mb-10">📚 Training & Workshop Sessions</h2>
      <p className="text-2xl text-gray-300 mb-12">Comprehensive training to prepare participants</p>
      <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10">
          <img 
            src="/Workshop-on-Hackathon-101.webp" 
            alt="Hackathon 101 Workshop" 
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-2">Hackathon 101</h3>
            <p className="text-gray-300 text-lg">11th Sep • 9:00 PM</p>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10">
          <img 
            src="/Training-Session-Day-1.webp" 
            alt="SmythOS Training Day 1" 
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-2">SmythOS Training</h3>
            <p className="text-gray-300 text-lg">12th Sep • 9:00 PM</p>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10">
          <img 
            src="/Training-Session-with-GUCC-Day-2.webp" 
            alt="GUCC Training Day 2" 
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-2">GUCC Training</h3>
            <p className="text-gray-300 text-lg">13th Sep • 9:00 PM</p>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10">
          <img 
            src="/Training-with-SmythOS-day-3.png" 
            alt="SmythOS Training Day 3" 
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-2">SmythOS Day 3</h3>
            <p className="text-gray-300 text-lg">20th Sep • 9:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  </Slide>
);

// Event Timeline
export const EventTimelineSlide = () => (
  <Slide bgColor="bg-[#0a0a0a]">
    <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/10 to-fuchsia-900/20"></div>
    <div className="relative z-10">
      <h2 className="text-7xl font-bold text-white mb-10">📅 Event Calendar</h2>
      <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto text-left">
        <div className="bg-white/5 backdrop-blur-sm p-7 rounded-lg border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-3">14 Sep • 7-9 PM</h3>
          <p className="text-gray-300 text-xl">🎯 Mock Preliminary - Practice round</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-7 rounded-lg border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-3">15 Sep • 6-10 PM</h3>
          <p className="text-gray-300 text-xl">🔥 Final Preliminary - Main selection round</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-7 rounded-lg border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-3">16-17 September</h3>
          <p className="text-gray-300 text-xl">💡 Idea Submission & Final Registration</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-7 rounded-lg border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-3">22-24 Sep (Online)</h3>
          <p className="text-gray-300 text-xl">💻 Final Round - Project Development</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-7 rounded-lg col-span-2 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-3">25 September (Onsite)</h3>
          <p className="text-gray-300 text-xl">🏢 Final Round at Green University - Project finalization & presentations</p>
        </div>
      </div>
    </div>
  </Slide>
);

// Hackathon Day
export const HackathonDaySlide = () => (
  <Slide bgColor="bg-[#0a0a0a]">
    <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-amber-900/10 to-yellow-900/20"></div>
    <div className="relative z-10">
      <h2 className="text-7xl font-bold text-white mb-10">💻 The Hackathon Day</h2>
      <p className="text-2xl text-gray-300 mb-10">Intense, collaborative, and inspiring!</p>
      <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto text-left">
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
          <h3 className="text-3xl font-bold text-white mb-5">📝 Event Flow</h3>
          <ol className="text-gray-300 space-y-3 text-2xl">
            <li>1. Kickoff Session</li>
            <li>2. Team Work Time</li>
            <li>3. Mentor Check-ins</li>
            <li>4. Submission Phase</li>
            <li>5. Judging & Review</li>
            <li>6. Closing Ceremony</li>
          </ol>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
          <h3 className="text-3xl font-bold text-white mb-5">⚡ Atmosphere</h3>
          <ul className="text-gray-300 space-y-4 text-2xl">
            <li>🤝 Continuous collaboration</li>
            <li>⚡ Energetic participation</li>
            <li>💡 Creative problem-solving</li>
            <li>👨‍🏫 Expert mentor interaction</li>
          </ul>
        </div>
      </div>
    </div>
  </Slide>
);

// Challenges Slide
export const ChallengesSlide = () => (
  <Slide bgColor="bg-[#0a0a0a]">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-slate-900/20 to-zinc-900/40"></div>
    <div className="relative z-10">
      <h2 className="text-7xl font-bold text-white mb-10">⚡ Challenges We Faced</h2>
      <p className="text-2xl text-gray-300 mb-10 italic">
        "The key was not avoiding problems — it was solving them together."
      </p>
      <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto text-left">
        <div className="bg-red-900/10 backdrop-blur-sm p-8 rounded-lg border-2 border-red-500/30">
          <h3 className="text-3xl font-bold text-red-400 mb-5">🚧 Key Challenges</h3>
          <ul className="text-gray-300 space-y-3 text-xl">
            <li>• Time constraints & tight scheduling</li>
            <li>• Managing real-time communication</li>
            <li>• Technical glitches (submissions, network)</li>
            <li>• Last-minute participant queries</li>
          </ul>
        </div>
        <div className="bg-green-900/10 backdrop-blur-sm p-8 rounded-lg border-2 border-green-500/30">
          <h3 className="text-3xl font-bold text-green-400 mb-5">✅ How We Overcame</h3>
          <ul className="text-gray-300 space-y-3 text-xl">
            <li>• Clear division of responsibilities</li>
            <li>• Quick internal messaging</li>
            <li>• Backup communication channels</li>
            <li>• Solution-focused mindset</li>
          </ul>
        </div>
      </div>
    </div>
  </Slide>
);

// Highlights Slide
export const HighlightsSlide = () => (
  <Slide bgColor="bg-[#0a0a0a]">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-purple-900/20"></div>
    <div className="relative z-10">
      <h2 className="text-7xl font-bold text-white mb-10">🌟 Highlights & Achievements</h2>
      <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm p-8 rounded-lg text-center border border-cyan-500/30">
          <div className="text-8xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">242</div>
          <h3 className="text-2xl font-bold text-white mb-3">Teams Registered</h3>
          <p className="text-gray-300 text-xl">Nationwide participation</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm p-8 rounded-lg text-center border border-purple-500/30">
          <div className="text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">50</div>
          <h3 className="text-2xl font-bold text-white mb-3">Finalists</h3>
          <p className="text-gray-300 text-xl">Advanced to final round</p>
        </div>
        <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm p-8 rounded-lg text-center border border-emerald-500/30">
          <div className="text-7xl mb-4">🎯</div>
          <h3 className="text-2xl font-bold text-white mb-3">Multiple Universities</h3>
          <p className="text-gray-300 text-xl">Across Bangladesh</p>
        </div>
      </div>
      <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg max-w-5xl mx-auto border border-white/10">
        <h3 className="text-3xl font-bold text-white mb-6">✨ Memorable Moments</h3>
        <div className="grid grid-cols-3 gap-6 text-gray-300 text-xl">
          <p>🌙 Late-night project refinements</p>
          <p>🎨 Unique AI project concepts</p>
          <p>🤝 Seamless volunteer coordination</p>
        </div>
      </div>
    </div>
  </Slide>
);

// Organizers Slide with Logos
export const OrganizersSlide = () => (
  <Slide bgColor="bg-[#0a0a0a]">
    <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-emerald-900/10 to-teal-900/20"></div>
    <div className="relative z-10">
      <h2 className="text-7xl font-bold text-white mb-12">🏢 Organizers & Partners</h2>
      <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm p-10 rounded-lg border border-white/10 flex flex-col items-center">
          <img src="/GUB.png" alt="Green University" className="h-28 mb-5" />
          <h3 className="text-3xl font-bold text-white mb-3">Green University of Bangladesh</h3>
          <p className="text-gray-300 text-center text-xl">HOST INSTITUTION</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-10 rounded-lg border border-white/10 flex flex-col items-center">
          <img src="/LOGO-of-GUCC.png" alt="GUCC" className="h-28 mb-5" />
          <h3 className="text-3xl font-bold text-white mb-3">GUCC</h3>
          <p className="text-gray-300 text-center text-xl">ORGANIZER</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-10 rounded-lg border border-white/10 flex flex-col items-center">
          <img src="/LOGO-DEPT-OF-Computer-Science-and-Engineering.png" alt="CSE Dept" className="h-28 mb-5" />
          <h3 className="text-3xl font-bold text-white mb-3">Dept. of CSE</h3>
          <p className="text-gray-300 text-center text-xl">ORGANIZER</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-10 rounded-lg border border-white/10 flex flex-col items-center">
          <img src="/SmythOS-for-Dark-BG.png" alt="SmythOS" className="h-20 mb-5" />
          <h3 className="text-3xl font-bold text-white mb-3">SmythOS</h3>
          <p className="text-gray-300 text-center text-xl">Sponsor</p>
        </div>
      </div>
    </div>
  </Slide>
);

// University Visit Gallery
export const UniversityVisitSlide = () => (
  <Slide bgColor="bg-[#0a0a0a]">
    <div className="absolute inset-0 bg-gradient-to-br from-sky-900/20 via-blue-900/10 to-cyan-900/20"></div>
    <div className="relative z-10">
      <h2 className="text-7xl font-bold text-white mb-10">📸 University Visit Gallery</h2>
      <p className="text-2xl text-gray-300 mb-12">Capturing moments from our university visits and hackathon preparation</p>
      <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto">
        {[2, 3, 6, 8, 10, 11, 15, 19].map((num) => (
          <div key={num} className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:scale-105 transition-transform">
            <img 
              src={`/${num}.webp`}
              alt={`University Visit ${num}`}
              className="w-full h-40 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  </Slide>
);

// Event Moments Slide with Image Carousel
export const EventMomentsSlide = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  
  const eventMoments = [
    { file: "Breakfast.webp", title: "Breakfast" },
    { file: "hackathon-Venue.webp", title: "Hackathon Venue" },
    { file: "Hackathon-Moment.webp", title: "Hackathon Moment" },
    { file: "Judges-Panel.jpg", title: "Judges Panel" },
    { file: "judging-Moment.webp", title: "Judging Moment" },
    { file: "Final-Presentation.webp", title: "Final Presentation" },
    { file: "Champion.jpg", title: "Champion" },
    { file: "1st-Runner-Up.jpg", title: "1st Runner Up" },
    { file: "2nd-Runner-Up.jpg", title: "2nd Runner Up" },
    { file: "Judges-receive-Appreciation.webp", title: "Judges Receive Appreciation" },
    { file: "HackTheAI-Event-All-Together-Group-Photo.webp", title: "HackTheAI Event All Together Group Photo" }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % eventMoments.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + eventMoments.length) % eventMoments.length);
  };

  return (
    <Slide bgColor="bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 via-orange-900/10 to-amber-900/20"></div>
      <div className="relative z-10">
        <h2 className="text-7xl font-bold text-white mb-10">📷 Event Moments</h2>
        <p className="text-2xl text-gray-300 mb-8">Capturing the spirit of HackTheAI Bangladesh</p>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10">
            <img 
              src={`/${eventMoments[currentImageIndex].file}`}
              alt={eventMoments[currentImageIndex].title}
              className="w-full h-[500px] object-cover"
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-lg font-bold">
              {currentImageIndex + 1} / {eventMoments.length}
            </div>
          </div>

          {/* Description */}
          <div className="mt-6 bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-3xl font-bold text-white text-center">
              {eventMoments[currentImageIndex].title}
            </h3>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {eventMoments.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentImageIndex 
                    ? 'bg-orange-400 w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
};

// Final Slide
export const FinalSlide = () => (
  <Slide bgColor="bg-[#0a0a0a]">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-rose-900/30"></div>
    <div className="relative z-10">
      <h2 className="text-8xl font-bold text-white mb-10">🏁 Conclusion</h2>
      <p className="text-3xl text-gray-300 mb-12 italic leading-relaxed">
        "Teamwork, technology, and trust —<br />that's how HackTheAI Bangladesh happened."
      </p>
      <div className="bg-white/5 backdrop-blur-sm p-10 rounded-lg max-w-5xl mx-auto mb-12 border border-white/10">
        <p className="text-2xl text-white leading-relaxed">
          More than an event — a <b>journey of learning, teamwork, and innovation</b>.
          Student-led clubs like Green University Computer Club can successfully manage national-scale events
          and represent their institution proudly on a global platform.
        </p>
      </div>
      <div className="space-y-4 text-gray-300 text-2xl">
        <p><b className="text-white">💚 Thanks to:</b> SmythOS, all participants & volunteers</p>
        <p><b className="text-white">📧 Contact:</b> gucc@green.edu.bd</p>
        {/* <p><b className="text-white">📅 Date:</b> November 2025</p> */}
      </div>
    </div>

  </Slide>
);
