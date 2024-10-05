function info() {
    const m = new Map();
    m.set('name', 'ajs');
    m.set('version', '1.0.0');
    return m;
  }
  
  export default {
    info
  };

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ajs;
}

// Это нужно для браузера
if (typeof window !== 'undefined') {
  window.ajs = ajs;
}
