(function(){
  const navHTML = `
<nav class="nav-bar">
  <div class="nav-pills">
    <a href="/" data-page="index" class="nav-pill">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      Age Calculator
    </a>
    <a href="/loan-calculator.html" data-page="loan-calculator" class="nav-pill">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      Loan Calculator
    </a>
    <a href="/bmi-calculator.html" data-page="bmi-calculator" class="nav-pill">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h4l3 8 4-16 3 8h4"/></svg>
      BMI Calculator
    </a>
    <a href="/sleep-calculator.html" data-page="sleep-calculator" class="nav-pill">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      Sleep Calculator
    </a>
    <a href="/mortgage-calculator.html" data-page="mortgage-calculator" class="nav-pill">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      Mortgage
    </a>
    <a href="/paycheck-calculator.html" data-page="paycheck-calculator" class="nav-pill">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/><line x1="6" y1="15" x2="10" y2="15"/></svg>
      Paycheck Calculator
    </a>
    <a href="/retirement-calculator.html" data-page="retirement-calculator" class="nav-pill">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
      Retirement Calculator
    </a>
    <a href="/blog.html" data-page="blog" class="nav-pill">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
      Blog
    </a>
  </div>
</nav>`;

  document.write(navHTML);

  document.addEventListener('DOMContentLoaded', function(){
    let path = window.location.pathname.split('/').pop().replace('.html','') || 'index';
    const pills = document.querySelectorAll('.nav-pill');
    pills.forEach(function(pill){
      if(pill.getAttribute('data-page') === path){
        pill.classList.add('active');
      }
    });
  });
})();
