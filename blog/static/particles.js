// ============================================
// Raisetsu41's Notes — 粒子动画背景
// 轻量级 Canvas 实现，灵感来自 catmuse.me
// ============================================

(function () {
  const canvas = document.createElement("canvas");
  canvas.id = "particles-canvas";
  document.body.prepend(canvas);

  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  const MAX = 50; // 粒子数量

  // 根据主题切换粒子颜色
  function getColor() {
    const isDark = document.documentElement.getAttribute("saved-theme") === "dark";
    return isDark
      ? { r: 180, g: 200, b: 220, alpha: 0.5 }
      : { r: 120, g: 140, b: 170, alpha: 0.4 };
  }

  let color = getColor();

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2.5 + 0.8;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.5 + 0.2;
      this.pulseSpeed = Math.random() * 0.02 + 0.005;
      this.pulseOffset = Math.random() * Math.PI * 2;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.opacity += Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) * 0.003;
      this.opacity = Math.max(0.1, Math.min(0.7, this.opacity));

      if (this.x < -10) this.x = width + 10;
      if (this.x > width + 10) this.x = -10;
      if (this.y < -10) this.y = height + 10;
      if (this.y > height + 10) this.y = -10;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${this.opacity * color.alpha})`;
      ctx.fill();
    }
  }

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < MAX; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // 画粒子之间的连线（近的才连）
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const lineOpacity = (1 - dist / 120) * 0.15 * color.alpha;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${lineOpacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }

  // 监听主题切换
  document.addEventListener("themechange", () => {
    color = getColor();
  });

  // 初始化
  resize();
  initParticles();
  animate();

  // 窗口大小变化时重建
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      resize();
      initParticles();
    }, 200);
  });
})();
