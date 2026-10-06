import {
  ArrowRight, Award, BookOpen, CheckCircle2, Clock3, GraduationCap,
  Instagram, MapPin, Menu, Phone, Play, Quote, ShieldCheck, Sparkles,
  Star, Target, Trophy, Users, X
} from "lucide-react";
import "./page.css";

const subjects = [
  ["Mathematics", "Classes 6–12", "Build strong concepts, confidence and exam speed.", "∑"],
  ["Science", "Classes 6–10", "Learn with experiments, visuals and crystal-clear basics.", "⚗"],
  ["Physics", "Classes 11–12", "Problem-solving focused preparation for boards & entrance exams.", "ϟ"],
  ["Chemistry", "Classes 11–12", "Concepts, reactions and numerical practice made simple.", "◈"],
];

const results = [
  ["95%", "Students improved their school performance"],
  ["500+", "Students guided since 2018"],
  ["4.9/5", "Average parent & student rating"],
  ["12+", "Expert faculty & mentors"],
];

const testimonials = [
  ["Ananya's Parent", "The faculty actually understands where a student is struggling. Ananya's confidence changed within a few months.", "Parent of Class 10 student"],
  ["Rishabh", "The weekly tests and personal doubt sessions helped me stop fearing Maths. My marks went from 61 to 89.", "Class 10 student"],
  ["Megha's Parent", "Professional, disciplined and genuinely caring. The communication with parents is excellent.", "Parent of Class 12 student"],
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top"><span className="brandMark">A</span><span>Aarohan <b>Academy</b><small>Dehradun • Since 2018</small></span></a>
        <nav>
          <a href="#programs">Programs</a><a href="#results">Results</a><a href="#why-us">Why Us</a><a href="#reviews">Reviews</a>
        </nav>
        <a className="navCta" href="#contact">Book a Free Counselling <ArrowRight size={16}/></a>
      </header>

      <section className="hero" id="top">
        <div className="heroGlow"/>
        <div className="heroCopy">
          <div className="eyebrow"><span><Sparkles size={15}/> DEHRADUN'S STUDENT-FIRST ACADEMY</span></div>
          <h1>Better concepts.<br/><em>Better marks.</em><br/>Better future.</h1>
          <p className="lead">Premium tuition for Classes 6–12, built around personal attention, strong fundamentals and measurable progress.</p>
          <div className="heroActions">
            <a className="primaryBtn" href="#contact">Book a Free Counselling <ArrowRight size={18}/></a>
            <a className="videoBtn" href="#why-us"><span><Play size={15} fill="currentColor"/></span> See how we teach</a>
          </div>
          <div className="trust"><div className="avatars"><i>R</i><i>S</i><i>A</i><i>M</i></div><div><strong>500+ students</strong><span>trust us with their learning</span></div><div className="stars"><Star size={15} fill="currentColor"/> 4.9</div></div>
        </div>
        <div className="heroVisual">
          <div className="photoCard">
            <div className="photoOverlay"/>
            <div className="teacherTag"><span className="teacherAvatar">DR</span><div><b>Dr. Rohan Mehta</b><small>Academic Director</small></div><CheckCircle2 size={18}/></div>
          </div>
          <div className="floating resultFloat"><Trophy size={19}/><div><b>+28 marks</b><span>average improvement</span></div></div>
          <div className="floating ratingFloat"><Star size={18} fill="currentColor"/><b>4.9/5</b><span>parent rating</span></div>
        </div>
      </section>

      <section className="metrics" id="results">{results.map(([a,b]) => <div key={a}><strong>{a}</strong><span>{b}</span></div>)}</section>

      <section className="section programs" id="programs">
        <div className="sectionHead"><div><p className="kicker">WHAT WE TEACH</p><h2>Learning that feels <em>personal.</em></h2></div><p>Focused batches, expert faculty and a simple goal: help every student understand more and stress less.</p></div>
        <div className="subjectGrid">{subjects.map(([a,b,c,d]) => <article className="subject" key={a}><div className="subjectIcon">{d}</div><span>{b}</span><h3>{a}</h3><p>{c}</p><a href="#contact">Explore program <ArrowRight size={16}/></a></article>)}</div>
      </section>

      <section className="splitSection" id="why-us">
        <div className="classroomVisual">
          <div className="chalk"><span>Learn → Practice → Improve</span><b>Confidence<br/>comes from<br/>clarity.</b></div>
          <div className="miniCard"><Clock3 size={17}/><b>Flexible batches</b><span>Morning • Evening</span></div>
        </div>
        <div className="splitCopy"><p className="kicker">WHY PARENTS CHOOSE US</p><h2>Not just tuition.<br/><em>A learning system.</em></h2>
          <p>We combine small-batch teaching with regular assessments, doubt support and parent updates so progress never stays a mystery.</p>
          <ul><li><span><Users size={19}/></span><div><b>Small, focused batches</b><p>More attention. More questions answered.</p></div></li>
          <li><span><Target size={19}/></span><div><b>Weekly progress tracking</b><p>Know exactly where your child stands.</p></div></li>
          <li><span><ShieldCheck size={19}/></span><div><b>Safe & disciplined environment</b><p>A positive place to learn and grow.</p></div></li></ul>
          <a className="textBtn" href="#contact">Talk to an academic counsellor <ArrowRight size={17}/></a>
        </div>
      </section>

      <section className="section reviews" id="reviews">
        <div className="centerHead"><p className="kicker">REAL PEOPLE. REAL PROGRESS.</p><h2>Parents notice the <em>difference.</em></h2><div className="reviewScore"><span className="bigStars">★★★★★</span><b>4.9</b><span>from 180+ reviews</span></div></div>
        <div className="testimonialGrid">{testimonials.map(([name,text,role]) => <article key={name}><Quote size={25}/><p>“{text}”</p><div><div className="reviewAvatar">{name[0]}</div><span><b>{name}</b><small>{role}</small></span></div></article>)}</div>
      </section>

      <section className="cta" id="contact">
        <div><p className="kicker">READY TO GET STARTED?</p><h2>Give your child a<br/><em>stronger start.</em></h2><p>Book a free 15-minute counselling call. We’ll understand your goals and recommend the right program.</p></div>
        <div className="contactCard"><div className="contactTop"><span>FREE COUNSELLING</span><b>15 min</b></div><h3>Let’s talk about your child.</h3><label>Parent / Student name<input placeholder="Your name"/></label><label>Phone number<input placeholder="+91 98XXXXXXXX"/></label><label>Class<select defaultValue=""><option value="" disabled>Select class</option><option>6–8</option><option>9–10</option><option>11–12</option></select></label><button>Request a callback <ArrowRight size={17}/></button><small>We’ll call you during your preferred time. No spam.</small></div>
      </section>

      <footer><div className="brand"><span className="brandMark">A</span><span>Aarohan <b>Academy</b><small>Dehradun • Since 2018</small></span></div><div className="footerContact"><span><MapPin size={16}/> Rajpur Road, Dehradun</span><span><Phone size={16}/> +91 98XX XXX XXX</span><span><Instagram size={16}/> @aarohanacademy</span></div><p>© 2026 Aarohan Academy. Demo website.</p></footer>
    </main>
  );
}