const streams = [
  "01001001 01000001\n:: boot / agent-grid\n[01] inspect(source)\n[02] bind(context)\n[03] prove(output)\n{ status: verified }\n10110100 00101101",
  "<workspace mode=\"parallel\">\n  task::research\n  task::build\n  task::review\n</workspace>\n0110 1101 0011",
  "fn migrate(unit) {\n  trace(source);\n  apply(rulebook);\n  compare(golden);\n  return evidence;\n}\n# bounded / auditable",
  "AIM://control-plane\nsource -> knowledge\nknowledge -> design\ndesign -> target\ntarget <=> golden\nverdict: deterministic",
  "[agent.01] READY\n[agent.02] RUNNING\n[agent.03] VERIFY\nroute::human_gate\nclaim::exclusive\nwrite::target_only",
  "00110110 11100010\n~/evoflux/workspace\n$ plan --inspectable\n$ run --parallel\n$ review --evidence\nPASS  PASS  PASS",
];

export function AsciiSpaceBackground() {
  return (
    <div className="ascii-space-background" aria-hidden="true">
      {streams.map((stream, index) => <code key={index}>{stream}</code>)}
    </div>
  );
}
