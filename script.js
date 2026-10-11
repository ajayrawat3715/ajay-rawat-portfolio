/**
 * Ajay Rawat — Engineering Portfolio Interactive Engine
 * Handcrafted interactive features: Developer Terminal, Clipboard Toasts, Spotlight, Smooth Observers
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. SCROLL REVEAL OBSERVER
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // 2. CURSOR SPOTLIGHT TRACKER
  const spotlight = document.getElementById('cursorSpotlight');
  if (spotlight && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    window.addEventListener('pointermove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }, { passive: true });

    const animateSpotlight = () => {
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;
      spotlight.style.left = `${currentX}px`;
      spotlight.style.top = `${currentY}px`;
      requestAnimationFrame(animateSpotlight);
    };
    animateSpotlight();
  }

  // 3. TOAST NOTIFICATION SYSTEM
  const toastContainer = document.getElementById('toastContainer');
  const showToast = (message, isSuccess = true) => {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="toast-icon">${isSuccess ? '✓' : 'ℹ'}</span>
      <span class="toast-message">${message}</span>
    `;
    toastContainer.appendChild(toast);

    // Trigger enter animation
    requestAnimationFrame(() => {
      toast.classList.add('toast-visible');
    });

    // Auto-dismiss after 3.2s
    setTimeout(() => {
      toast.classList.remove('toast-visible');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 3200);
  };

  // 4. COPY TO CLIPBOARD BUTTONS
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(`Copied "${textToCopy}" to clipboard!`);
        
        // Micro-interaction on button
        const originalText = btn.innerHTML;
        btn.classList.add('copied');
        setTimeout(() => {
          btn.classList.remove('copied');
        }, 1500);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          showToast(`Copied "${textToCopy}" to clipboard!`);
        } catch (fallbackErr) {
          showToast('Failed to copy text', false);
        }
        document.body.removeChild(textarea);
      }
    });
  });

  // 5. INTERACTIVE DEVELOPER TERMINAL (REPL)
  const terminalBody = document.getElementById('terminalOutput');
  const terminalInput = document.getElementById('terminalInput');
  const quickCmdPills = document.querySelectorAll('.cmd-pill');

  const commandDatabase = {
    help: () => `
      <div class="t-stats-box">
        Available commands:
        <br>• <span class="t-key">skills</span>    : View categorized engineering competencies
        <br>• <span class="t-key">projects</span>  : Summary of featured engineering systems
        <br>• <span class="t-key">dsa</span>       : LeetCode & ICPC competition record
        <br>• <span class="t-key">stats</span>     : Quick metrics and rating numbers
        <br>• <span class="t-key">edu</span>       : Academic degree & university information
        <br>• <span class="t-key">certs</span>     : Verified certifications (HackerRank & IBM)
        <br>• <span class="t-key">contact</span>   : Direct communication coordinates
        <br>• <span class="t-key">whoami</span>    : Candidate summary & SDE profile
        <br>• <span class="t-key">clear</span>     : Clear terminal output history
      </div>
    `,
    skills: () => `
      <div>
        <span class="t-key">Languages:</span> C++, Java, Python, C, JavaScript, Rust<br>
        <span class="t-key">Backend:</span> Java, Spring Boot, REST APIs, Node.js<br>
        <span class="t-key">Databases:</span> PostgreSQL, MySQL, MongoDB, LocalStorage<br>
        <span class="t-key">Core CS:</span> DSA, OOP, Problem Solving, Complexity Analysis<br>
        <span class="t-key">Frontend:</span> React.js, TypeScript, Vite, Tailwind CSS<br>
        <span class="t-key">Tools:</span> Git, GitHub, IntelliJ IDEA, VS Code
      </div>
    `,
    projects: () => `
      <div>
        1. <span class="t-green">Paytm VyaparAI</span> (Paytm Biz Copilot) [React, TS, Vite, TanStack, Recharts, AI SDK]<br>
        &nbsp;&nbsp;&nbsp;↳ AI merchant copilot for sales analytics, udhaar tracking & cashflow trends.<br><br>
        2. <span class="t-green">Swaad Wallah</span> [HTML, CSS, JS, LocalStorage]<br>
        &nbsp;&nbsp;&nbsp;↳ Responsive food-ordering app with persistent cart & order tracking.<br><br>
        3. <span class="t-green">Personal Portfolio</span> [HTML5, CSS3, JS, Git, Vercel]<br>
        &nbsp;&nbsp;&nbsp;↳ High-performance zero-bloat portfolio showcasing technical systems.
      </div>
    `,
    dsa: () => `
      <div class="t-stats-box">
        [✓] <strong>LeetCode Solved:</strong> 387+ (218 Easy | 158 Medium | 11 Hard)<br>
        [✓] <strong>Contest Rating:</strong> 1440<br>
        [✓] <strong>Milestone:</strong> 100 Days Badge (2026)<br>
        [✓] <strong>Contests:</strong> ICPC Preliminary Contest contestant<br>
        [✓] <strong>Hackathon:</strong> RIFT '26 Unstop Freedom Festival (PW IOI)
      </div>
    `,
    stats: () => `
      <div>
        LeetCode: 387+ Solved | Rating: 1440 | CGPA: 8.0/10 | ICPC Prelims | Certs: 3
      </div>
    `,
    edu: () => `
      <div>
        <span class="t-key">Degree:</span> B.Tech, Computer Science & Engineering<br>
        <span class="t-key">Institution:</span> Physics Wallah Institute of Innovation (PW IOI)<br>
        <span class="t-key">Graduation:</span> Expected 2029<br>
        <span class="t-key">Academic Score:</span> First Year CGPA: 8.0 / 10.0
      </div>
    `,
    certs: () => `
      <div>
        • <strong>HackerRank:</strong> Software Engineer Intern Role Certification (Oct 2026)<br>
        • <strong>IBM / PW:</strong> Project Based Learning: FSD, Beginner (Jun 2026)<br>
        • <strong>IBM:</strong> HTML, CSS, and JavaScript Fundamentals (Intermediate)
      </div>
    `,
    contact: () => `
      <div>
        Email: <a href="mailto:coderajay86091@gmail.com" class="t-green">coderajay86091@gmail.com</a><br>
        Phone: <span class="t-str">+91 9302699936</span><br>
        GitHub: <a href="https://github.com/ajayrawat3715" target="_blank" class="t-key">github.com/ajayrawat3715</a>
      </div>
    `,
    whoami: () => `
      <div>
        <strong>Ajay Rawat</strong> — Software Development Engineer Intern Candidate.<br>
        Focus: Java • C++ • DSA • Backend Services • Scalable Web Systems.
      </div>
    `
  };

  const handleCommandExecution = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      // Keep only initial greeting
      terminalBody.innerHTML = `
        <div class="term-line prompt">
          <span class="term-user">ajay@pw-ioi</span>:<span class="term-path">~</span>$ <span class="term-cmd">clear</span>
        </div>
        <div class="term-line prompt active-prompt">
          <span class="term-user">ajay@pw-ioi</span>:<span class="term-path">~</span>$ 
          <input type="text" id="terminalInput" class="terminal-inline-input" placeholder="Type 'help' or click commands below..." autocomplete="off" spellcheck="false">
        </div>
      `;
      // Rebind input element
      const newInput = document.getElementById('terminalInput');
      if (newInput) {
        newInput.focus();
        newInput.addEventListener('keydown', handleInputKeyDown);
      }
      return;
    }

    // Append executed prompt line
    const promptLine = document.createElement('div');
    promptLine.className = 'term-line prompt';
    promptLine.innerHTML = `<span class="term-user">ajay@pw-ioi</span>:<span class="term-path">~</span>$ <span class="term-cmd">${escapeHtml(trimmed)}</span>`;

    const outputDiv = document.createElement('div');
    outputDiv.className = 'term-output';

    if (commandDatabase[trimmed]) {
      outputDiv.innerHTML = commandDatabase[trimmed]();
    } else {
      outputDiv.innerHTML = `command not found: <span class="t-str">${escapeHtml(trimmed)}</span>. Type <span class="t-key">'help'</span> for a list of valid commands.`;
    }

    // Insert before active prompt
    const activePrompt = terminalBody.querySelector('.active-prompt');
    if (activePrompt) {
      terminalBody.insertBefore(promptLine, activePrompt);
      terminalBody.insertBefore(outputDiv, activePrompt);
    } else {
      terminalBody.appendChild(promptLine);
      terminalBody.appendChild(outputDiv);
    }

    // Scroll to bottom
    terminalBody.scrollTop = terminalBody.scrollHeight;
  };

  const escapeHtml = (text) => {
    const div = document.createElement('div');
    div.innerText = text;
    return div.innerHTML;
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      const val = e.target.value;
      e.target.value = '';
      handleCommandExecution(val);
    }
  };

  if (terminalInput) {
    terminalInput.addEventListener('keydown', handleInputKeyDown);
  }

  // Quick Action Command Pills
  quickCmdPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const cmd = pill.getAttribute('data-cmd');
      if (cmd) {
        handleCommandExecution(cmd);
      }
    });
  });

  // Terminal Toggle Button / Shortcut (Press ` key)
  const terminalToggleBtn = document.getElementById('terminalToggleBtn');
  const focusTerminal = () => {
    const currentInput = document.getElementById('terminalInput');
    if (currentInput) {
      currentInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => currentInput.focus(), 300);
      showToast('Developer shell ready for input');
    }
  };

  if (terminalToggleBtn) {
    terminalToggleBtn.addEventListener('click', focusTerminal);
  }

  window.addEventListener('keydown', (e) => {
    // If not focused on an input element, toggle terminal with backtick
    if (e.key === '`' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      focusTerminal();
    }
  });

  // 6. MOBILE NAVIGATION TOGGLE
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('nav-open');
    });

    // Close when clicking nav items
    navMenu.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        navMenu.classList.remove('nav-open');
      });
    });
  }

  // 7. SMOOTH IN-PAGE ANCHOR OFFSET SCROLLING
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 76;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
