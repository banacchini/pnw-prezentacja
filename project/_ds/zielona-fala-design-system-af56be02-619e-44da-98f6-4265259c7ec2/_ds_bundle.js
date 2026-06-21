/* @ds-bundle: {"format":3,"namespace":"ZielonaFalaDesignSystem_af56be","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"DiagramNode","sourcePath":"components/core/DiagramNode.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"GreenWave","sourcePath":"components/core/GreenWave.jsx"},{"name":"MetricBlock","sourcePath":"components/core/MetricBlock.jsx"},{"name":"PhaseChip","sourcePath":"components/core/PhaseChip.jsx"},{"name":"PhaseRibbon","sourcePath":"components/core/PhaseChip.jsx"},{"name":"ProgressBar","sourcePath":"components/core/ProgressBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"c368290c4a1e","components/core/Button.jsx":"79e2d84a5b4c","components/core/DiagramNode.jsx":"93117d83cdb1","components/core/Eyebrow.jsx":"7f2f6f5a19e0","components/core/GreenWave.jsx":"ab43f93f2799","components/core/MetricBlock.jsx":"9bc7a77055be","components/core/PhaseChip.jsx":"1a80b6081fbf","components/core/ProgressBar.jsx":"929cd68b2aed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ZielonaFalaDesignSystem_af56be = window.ZielonaFalaDesignSystem_af56be || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small mono label chip. Neutral by default; "brand" tint and
 * "truth" (ground-truth data) variants. No reserved signal colors.
 */
function Badge({
  variant = 'neutral',
  children,
  style,
  ...rest
}) {
  const variants = {
    neutral: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: '1px solid var(--divider)'
    },
    brand: {
      background: 'var(--brand-fill)',
      color: 'var(--brand)',
      border: '1px solid transparent'
    },
    truth: {
      background: 'transparent',
      color: 'var(--data-truth)',
      border: '1px solid var(--data-truth)'
    },
    solid: {
      background: 'var(--brand)',
      color: '#fff',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: '13px',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — restrained, engineering-flavored. Solid (brand) or outline.
 * Small radius, no shadow, mono-free (sans label). Subtle hover/press.
 */
function Button({
  variant = 'solid',
  size = 'md',
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: '15px',
      padding: '8px 16px'
    },
    md: {
      fontSize: '17px',
      padding: '11px 22px'
    },
    lg: {
      fontSize: '20px',
      padding: '14px 28px'
    }
  };
  const base = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    lineHeight: 1,
    borderRadius: 'var(--radius-md)',
    cursor: 'pointer',
    transition: 'background 120ms ease, border-color 120ms ease, opacity 120ms ease',
    border: '1.5px solid transparent',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    ...sizes[size]
  };
  const variants = {
    solid: {
      background: 'var(--brand)',
      color: '#fff',
      borderColor: 'var(--brand)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--brand)',
      borderColor: 'var(--brand)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.opacity = '0.88';
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = '1';
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'translateY(1px)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/DiagramNode.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DiagramNode — a flat diagram node (circle). 2px stroke.
 *   default → panel fill, neutral-3 outline
 *   key     → brand-fill, brand outline (the one element being discussed)
 * Optional mono label below.
 */
function DiagramNode({
  kind = 'default',
  label,
  size = 44,
  style,
  ...rest
}) {
  const isKey = kind === 'key';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: size / 2 - 2,
    fill: isKey ? 'var(--brand-fill)' : 'var(--surface-card)',
    stroke: isKey ? 'var(--brand)' : 'var(--zf-neutral-3)',
    strokeWidth: "2"
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      letterSpacing: '0.02em',
      color: isKey ? 'var(--brand)' : 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, label));
}
Object.assign(__ds_scope, { DiagramNode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/DiagramNode.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — mono uppercase kicker shown top-left of a slide.
 * Format convention: "NN · PHASE" (e.g. "03 · DIAGNOZA").
 */
function Eyebrow({
  index,
  label,
  children,
  style,
  ...rest
}) {
  const text = children ?? (index != null ? `${index} · ${label ?? ''}`.trim() : label);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      ...style
    }
  }, rest), text);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/GreenWave.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GreenWave — the deck's signature time–distance ("zielona fala") motif.
 *  vertical axis  = consecutive intersections (ladder rungs, neutral)
 *  horizontal axis = time
 *  diagonal band   = a vehicle's unstopped passage, in BRAND color
 * Flat, 2px strokes, no gradients/shadows. Reserved signal colors are
 * intentionally NOT used here — only the one brand band is colored.
 */
function GreenWave({
  intersections = 5,
  width = 520,
  height = 300,
  showLabels = true,
  bandColor = 'var(--brand)',
  style,
  ...rest
}) {
  const padL = showLabels ? 56 : 24;
  const padR = 24;
  const padT = 20;
  const padB = 28;
  const innerW = width - padL - padR;
  const innerH = height - padT - padB;
  const rungGap = innerH / (intersections - 1);

  // diagonal band: constant speed line crossing all rungs, with width
  const bandHalf = 13;
  const x0 = padL + innerW * 0.12;
  const x1 = padL + innerW * 0.78;
  const topY = padT;
  const botY = padT + innerH;
  const rungs = Array.from({
    length: intersections
  }, (_, i) => i);
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: `0 0 ${width} ${height}`,
    width: width,
    height: height,
    style: {
      display: 'block',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("line", {
    x1: padL,
    y1: padT - 4,
    x2: padL,
    y2: botY + 6,
    stroke: "var(--zf-neutral-3)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: padL,
    y1: botY,
    x2: padL + innerW,
    y2: botY,
    stroke: "var(--zf-neutral-3)",
    strokeWidth: "2"
  }), rungs.map(i => {
    const y = padT + i * rungGap;
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("line", {
      x1: padL,
      y1: y,
      x2: padL + innerW,
      y2: y,
      stroke: "var(--zf-neutral-1)",
      strokeWidth: "2",
      strokeDasharray: "2 6"
    }), showLabels && /*#__PURE__*/React.createElement("text", {
      x: padL - 12,
      y: y + 4,
      textAnchor: "end",
      fontFamily: "var(--font-mono)",
      fontSize: "12",
      fill: "var(--text-muted)",
      letterSpacing: "0.02em"
    }, `S${i + 1}`));
  }), /*#__PURE__*/React.createElement("polygon", {
    points: `${x0 - bandHalf},${topY} ${x0 + bandHalf},${topY} ${x1 + bandHalf},${botY} ${x1 - bandHalf},${botY}`,
    fill: bandColor,
    opacity: "0.16"
  }), /*#__PURE__*/React.createElement("line", {
    x1: x0,
    y1: topY,
    x2: x1,
    y2: botY,
    stroke: bandColor,
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }), rungs.map(i => {
    const t = i / (intersections - 1);
    const x = x0 + (x1 - x0) * t;
    const y = topY + (botY - topY) * t;
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: x,
      cy: y,
      r: "4.5",
      fill: "var(--surface-card)",
      stroke: bandColor,
      strokeWidth: "2.5"
    });
  }), showLabels && /*#__PURE__*/React.createElement("text", {
    x: padL + innerW,
    y: botY + 20,
    textAnchor: "end",
    fontFamily: "var(--font-mono)",
    fontSize: "11",
    fill: "var(--text-muted)",
    letterSpacing: "0.06em"
  }, "CZAS \u2192"));
}
Object.assign(__ds_scope, { GreenWave });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GreenWave.jsx", error: String((e && e.message) || e) }); }

// components/core/MetricBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MetricBlock — a single big figure with mono label. One focus point.
 * Big number is mono, brand-colored. Optional delta + caption.
 */
function MetricBlock({
  value,
  unit,
  label,
  caption,
  align = 'left',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      textAlign: align,
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '10px',
      justifyContent: align === 'center' ? 'center' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 'var(--fs-metric)',
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color: 'var(--brand)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: '32px',
      color: 'var(--text-muted)'
    }
  }, unit)), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      lineHeight: 1.4,
      color: 'var(--text-primary)',
      maxWidth: '20ch',
      marginLeft: align === 'center' ? 'auto' : 0,
      marginRight: align === 'center' ? 'auto' : 0
    }
  }, caption));
}
Object.assign(__ds_scope, { MetricBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/MetricBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/PhaseChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PHASES = {
  red: {
    bg: 'var(--zf-signal-red)',
    label: 'STÓJ'
  },
  yellow: {
    bg: 'var(--zf-signal-yellow)',
    label: 'UWAGA'
  },
  green: {
    bg: 'var(--zf-signal-green)',
    label: 'JEDŹ'
  }
};

/**
 * PhaseChip — the ONLY sanctioned use of reserved signal colors.
 * Renders a literal signal-phase token: a colored disc + mono duration.
 * Use exclusively inside literal traffic-phase diagrams, never decoratively.
 */
function PhaseChip({
  phase = 'green',
  seconds,
  showLabel = false,
  style,
  ...rest
}) {
  const p = PHASES[phase] ?? PHASES.green;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      background: p.bg,
      flex: 'none',
      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.12)'
    }
  }), seconds != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: '15px',
      color: 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, seconds, "s"), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: '12px',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, p.label));
}

/**
 * PhaseRibbon — a horizontal sequence of phases (a signal program),
 * widths proportional to duration. The literal home of red/yellow/green.
 */
function PhaseRibbon({
  phases = [],
  height = 18,
  style,
  ...rest
}) {
  const total = phases.reduce((s, p) => s + (p.seconds ?? 1), 0) || 1;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      width: '100%',
      height,
      borderRadius: '3px',
      overflow: 'hidden',
      border: '1px solid var(--divider)',
      ...style
    }
  }, rest), phases.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    title: `${p.phase} ${p.seconds}s`,
    style: {
      flex: p.seconds ?? 1,
      background: `var(--zf-signal-${p.phase})`
    }
  })));
}
Object.assign(__ds_scope, { PhaseChip, PhaseRibbon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PhaseChip.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProgressBar — signature 10-segment deck progress indicator.
 * Pinned to the bottom of every slide.
 *   done    → neutral mid (--zf-neutral-2)
 *   active  → brand accent
 *   future  → idle neutral (--zf-neutral-1)
 */
function ProgressBar({
  current = 1,
  total = 10,
  style,
  ...rest
}) {
  const segments = Array.from({
    length: total
  }, (_, i) => i + 1);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: '6px',
      width: '100%',
      alignItems: 'center',
      ...style
    }
  }, rest), segments.map(n => {
    const state = n < current ? 'done' : n === current ? 'active' : 'future';
    const bg = state === 'active' ? 'var(--brand)' : state === 'done' ? 'var(--zf-neutral-2)' : 'var(--zf-neutral-1)';
    return /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        flex: 1,
        height: 'var(--progress-h)',
        borderRadius: 'var(--radius-pill)',
        background: bg
      }
    });
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressBar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.DiagramNode = __ds_scope.DiagramNode;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.GreenWave = __ds_scope.GreenWave;

__ds_ns.MetricBlock = __ds_scope.MetricBlock;

__ds_ns.PhaseChip = __ds_scope.PhaseChip;

__ds_ns.PhaseRibbon = __ds_scope.PhaseRibbon;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

})();
